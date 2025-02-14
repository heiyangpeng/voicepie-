---
layout: home

title: 爱说派
titleTemplate:

hero:
  # name: '<img src="/voicepie.svg" alt="爱说派" class="hero-logo" style="height: 60px; width: auto; vertical-align: middle; transform: translateX(-65px);" />'

  text: 简化沟通，连接世界
  tagline: 智能翻译，跨越时空，无缝连接每一次对话
  actions:
    - theme: brand
      text: 快速上手
      link: /readme/collection
    - theme: alt
      text: 下载安装
      link: /guide/install
    # - theme: alt
    #   text: 下载
    #   link: /install
  image:
    src: /vitepress-logo-large.webp
    alt: VitePress
features:
  - icon: 📝
    title: AI会议总结
    details: 内置 AI 自动提炼对话要点,生成简明扼要的通话会议纪要
  - icon: 🌍
    title: 多语种无缝切换
    details: 覆盖全球90多种语言,出门在外随时切换,让沟通零障碍
  - icon: 🗣️
    title: 领先的语音识别引擎
    details: 搭载业界顶尖语音识别和机器翻译技术,翻译流畅准确
  - icon: 📞
    title: 单人使用,双向互译
    details: 无需对方下载APP,你说我听,他讲你懂
  - icon: 🔐
    title: 隐私安全
    details: 端到端的隐私加密技术,所有数据不离开设备，完全本地运行
  - icon: 📱
    title: 全平台无缝使用
    details: 支持iOS、安卓、Windows、macOS
  - icon: ⚡️
    title: 超低延迟实时翻译
    details: 适用于实体通话场景,流畅交流零等待
  - icon: 🎤
    title: 变声功能
    details: 实时变声技术,商务谈判更得心应手
---

<script setup>
import NotificationModal from '../components/NotificationModal.vue'
</script>

<NotificationModal
  title="✨定制您的专属翻译声音"
  image="/public/weixin.png">

  <p>✅实现<span style="font-size: 20px; font-weight: bold; color:rgb(255, 95, 51);">更自然、更接近人声</span>的翻译效果！</p>
  <p>✅让沟通<span style="font-size: 20px; font-weight: bold; color:rgb(255, 95, 51);">更具个性和亲和力</span>!</p>
  <p>✅复刻声音相似度达<span style="font-size: 20px; font-weight: bold; color:rgb(255, 95, 51);">85%以上</span>！</p>
  <p>❗如需专属声音定制服务，请联系客服咨询购置</p>
</NotificationModal>
