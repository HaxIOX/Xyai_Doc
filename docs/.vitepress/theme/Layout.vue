<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'
import { marked } from 'marked'
// 把 docs/notice.md 当成原始文本引入
import noticeMd from '../../notice.md?raw'
const { Layout } = DefaultTheme
const { frontmatter } = useData()

// 只在 layout: home 的页面弹窗
const isHome = computed(() => frontmatter.value.layout === 'home')

// localStorage 里存的是“看过的公告版本 hash”
const NOTICE_HASH_KEY = 'vp-notice-last-hash'

//const showPopup = ref(false)
const currentNoticeHash = ref<string | null>(null)

// 简单算一个字符串 hash（同步，够用）
function hashString(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0
  }
  return String(hash)
}


const showPopup = ref(false)
const POPUP_KEY = 'vp-notice-popup-closed-v1'

// 把 notice.md 解析成 HTML
const noticeHtml = computed(() => {
  if (!noticeMd) return ''
  return marked.parse(noticeMd)
})

onMounted(() => {
  if (!isHome.value) return

  const md = noticeMd as string
  const hash = hashString(md)
  currentNoticeHash.value = hash

  const seenHash = localStorage.getItem(NOTICE_HASH_KEY)

  // 如果用户还没看过这一版公告（hash 不一样），就弹一次
  if (seenHash !== hash) {
    showPopup.value = true
  }
})

function closePopup() {
  showPopup.value = false
  // 关闭时，把当前公告版本记录到 localStorage
  if (currentNoticeHash.value) {
    localStorage.setItem(NOTICE_HASH_KEY, currentNoticeHash.value)
  }
}

//onMounted(() => {
//  if (!isHome.value) return

//  const closed = localStorage.getItem(POPUP_KEY)
//  if (closed) return

//  showPopup.value = true
//})

//function closePopup() {
//  showPopup.value = false
 // localStorage.setItem(POPUP_KEY, '1')
//}*/

function openPopup() {
  showPopup.value = true
}
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <button class="vp-event-btn" @click="openPopup">
        📢 最新公告
      </button>
    </template>

    <template #layout-bottom>
      <transition name="vp-fade">
        <div
          v-if="isHome && showPopup && noticeHtml"
          class="vp-popup-mask"
          @click.self="closePopup"
        >
         <div class="vp-popup-card">

  <!-- 公告内容 -->
  <div class="vp-popup-body" v-html="noticeHtml"></div>

  <div class="vp-popup-actions">
  <a
    class="vp-popup-btn vp-popup-action"
    href="https://new.xychatai.com/pastel/#/carlist"
    target="_blank"
  >
    立即参与
  </a>

  <button
    class="vp-popup-btn vp-popup-close"
    @click="closePopup"
  >
    朕知道了
  </button>

  </div>
</div>
  </div>
      </transition>
    </template>
  </Layout>
</template>
