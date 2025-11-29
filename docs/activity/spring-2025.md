---
layout: home
hero:
  name: Xyai
  text: AI聚合站
  tagline: 一个想让大家都可以用上AI工具的小站
  actions:
    - theme: brand
      text: 🚀 快速上手
      link: /combo.md
    - theme: alt
      text: 套餐相关
      link: /combo.md
    - theme: alt
      text: Codex使用问题
      link: /guide/codexstart.md
    - theme: alt
      text: 常见问题
      link: /question/codexq.md
---

<!-- 活动入口按钮（固定在右上角，也可以放别的地方） -->
<div class="campaign-entry">
  <button class="campaign-btn" @click="showCampaign = true">
    🎉 限时活动
  </button>
</div>

<!-- 活动弹窗 -->
<Transition name="fade">
  <div
    v-if="showCampaign"
    class="campaign-mask"
    @click.self="showCampaign = false"
  >
    <div class="campaign-modal">
      <h2>🎉 新用户限时活动</h2>
      <p>现在开通任意套餐，额外赠送 <strong>7 天 Team 体验</strong>。</p>
      <ul>
        <li>🧰 一站式 AI 工具，开箱即用</li>
        <li>📘 中文教程，5 分钟上手</li>
        <li>💬 专属答疑支持</li>
      </ul>
      <div class="campaign-actions">
        <a href="/combo.md" class="campaign-primary">立即参与</a>
        <button class="campaign-close" @click="showCampaign = false">
          以后再说
        </button>
      </div>
    </div>
  </div>
</Transition>

<script setup>
import { ref } from 'vue'
const showCampaign = ref(false)
</script>