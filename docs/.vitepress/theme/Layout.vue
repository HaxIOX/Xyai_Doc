<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'
import { marked } from 'marked'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

const isHome = computed(() => frontmatter.value.layout === 'home')

const showPopup = ref(false)
const POPUP_KEY = 'vp-event-popup-closed-v1'

const popupHtml = computed(() => {
  const md = frontmatter.value.popup as string | undefined
  if (!md) return ''
  return marked.parse(md)
})

onMounted(() => {
  if (!isHome.value) return

  const closed = localStorage.getItem(POPUP_KEY)
  if (closed) return

  showPopup.value = true
})

function closePopup() {
  showPopup.value = false
  localStorage.setItem(POPUP_KEY, '1')
}

function openPopup() {
  showPopup.value = true
}
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <button class="vp-event-btn" @click="openPopup">
        🎉 最新活动
      </button>
    </template>

    <template #layout-bottom>
      <transition name="vp-fade">
        <div
          v-if="isHome && showPopup && popupHtml"
          class="vp-popup-mask"
          @click.self="closePopup"
        >
          <div class="vp-popup-card">
            <button class="vp-popup-close" @click="closePopup">✕</button>

            <div class="vp-popup-body" v-html="popupHtml"></div>

            <a
              class="vp-popup-action"
              href="https://new.xychatai.com/pastel/#/carlist"
              target="_blank"
            >
              立即参与
            </a>
          </div>
        </div>
      </transition>
    </template>
  </Layout>
</template>
