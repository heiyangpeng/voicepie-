```vue
<script setup>
// 定义组件属性
const props = defineProps({
  // 语言设置：'zh' 为中文，'en' 为英文
  lang: {
    type: String,
    default: 'en'
  },
  // 控制是否显示页面标题
  showTitle: {
    type: Boolean,
    default: true
  },
  // 控制是否显示下载提示区域
  showTips: {
    type: Boolean,
    default: true
  },
  // 控制是否显示更新时间
  showUpdateTime: {
    type: Boolean,
    default: true
  },
  // 控制是否只显示下载卡片部分
  onlyCards: {
    type: Boolean,
    default: false
  }
})

// 多语言配置对象
const content = {
  zh: {
    title: '下载',
    downloadText: '下载',
    tips: {
      title: '下载提示',
      content:
        '该软件仍处于测试阶段。它使用本地处理来保护隐私，准确率达到 90%。请确保您所使用的手机或电脑符合下载要求，才有很好的体验！'
    },
    lastUpdate: '最后更新于: '
  },
  en: {
    title: 'Download',
    downloadText: 'Download',
    tips: {
      title: 'Download Tips',
      content:
        'The software is still in beta. It uses local processing to protect privacy and achieves 90% accuracy. Please make sure your device meets the requirements for the best experience!'
    },
    lastUpdate: 'Last updated: '
  }
}

// 下载选项配置
const downloads = [
  {
    title: 'Windows',
    systems: props.lang === 'zh' ? '仅支持Windows 10, 11' : 'Windows 10, 11',
    icon: 'windows',
    version: 'v178',
    links: {
      global: 'https://kikago.tech/bridge/download', // 国际链接
      china: 'https://kikago.tech/bridge/download' // 中国链接
    }
  },
  {
    title: 'macOS',
    systems: props.lang === 'zh' ? '仅支持M芯片' : 'Apple Silicon only',
    icon: 'apple',
    version: 'v1.5.25',
    links: {
      global:
        'https://apps.apple.com/us/app/%E7%88%B1%E8%AF%B4%E6%B4%BE%E7%BF%BB%E8%AF%91/id6621238085?l=zh-Hans-CN&mt=12',
      china:
        'https://apps.apple.com/us/app/%E7%88%B1%E8%AF%B4%E6%B4%BE%E7%BF%BB%E8%AF%91/id6621238085?l=zh-Hans-CN&mt=12'
    }
  },
  {
    title: 'iOS',
    systems: props.lang === 'zh' ? '支持机型=<15' : 'iPhone 15 or earlier',
    icon: 'apple',
    version: 'v1.3.8',
    links: {
      global:
        'https://apps.apple.com/us/app/%E7%88%B1%E8%AF%B4%E6%B4%BE/id6475754060?l=zh-Hans-CN',
      china:
        'https://apps.apple.com/us/app/%E7%88%B1%E8%AF%B4%E6%B4%BE/id6475754060?l=zh-Hans-CN'
    }
  },
  {
    title: 'Android',
    systems: props.lang === 'zh' ? '推荐Android 12+' : 'Android 12+',
    icon: 'android',
    version: 'v198',
    links: {
      global: 'https://kikago.tech/bridge/download',
      china: 'https://kikago.tech/bridge/download'
    }
  }
]

// 获取当前时间的函数
const getCurrentTime = () => {
  const now = new Date()
  return `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`
}

// 根据语言选择对应的下载链接
const getDownloadLink = (links) => {
  return props.lang === 'zh' ? links.china : links.global
}
</script>

<template>
  <div class="download-container">
    <!-- 标题区域 -->
    <h1 v-if="showTitle && !onlyCards" class="page-title">
      {{ content[props.lang].title }}
    </h1>

    <!-- 下载卡片网格区域 -->
    <div class="download-grid">
      <div v-for="item in downloads" :key="item.title" class="download-card">
        <h2 class="card-title">{{ item.title }}</h2>
        <p class="card-subtitle">{{ item.systems }}</p>
        <a :href="getDownloadLink(item.links)" class="download-button">
          <span class="icon">
            <span v-if="item.icon === 'windows'" class="platform-icon">
              <svg viewBox="0 0 88 88">
                <path
                  d="m0,12.402,35.687-4.8602,0.0156,34.423-35.67,0.20313zm35.67,33.529,0.0277,34.453-35.67-4.9041-0.002-29.78zm4.3261-39.025,47.318-6.906,0,41.527-47.318,0.37565zm47.329,39.349-0.0111,41.34-47.318-6.6784-0.0663-34.739z"
                />
              </svg>
            </span>
            <span v-else-if="item.icon === 'apple'" class="platform-icon">
              <svg viewBox="0 60 384 512">
                <path
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                />
              </svg>
            </span>
            <span v-else class="platform-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.45a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.5a11.6667 11.6667 0 00-9.6194 0l-2.0223-3.5a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.45a10.4168 10.4168 0 00-5.2148 8.8456h21.3744a10.4168 10.4168 0 00-5.2148-8.8456z"
                />
              </svg>
            </span>
          </span>
          <span class="button-text">{{
            content[props.lang].downloadText
          }}</span>
          <span class="version-text">({{ item.version }})</span>
        </a>
      </div>
    </div>

    <!-- 提示区域 -->
    <div v-if="showTips && !onlyCards" class="tips-container">
      <h3 class="tips-title">{{ content[props.lang].tips.title }}</h3>
      <p class="tips-content">{{ content[props.lang].tips.content }}</p>
    </div>

    <!-- 更新时间区域 -->
    <div v-if="showUpdateTime && !onlyCards" class="update-time-container">
      {{ content[props.lang].lastUpdate }}{{ getCurrentTime() }}
    </div>
  </div>
</template>

<style scoped>
/* 容器样式 */
.download-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 12px;
}

/* 页面标题样式 */
.page-title {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin: 2rem 0 3rem;
  color: var(--vp-c-text-1);
}

/* 下载卡片网格布局 */
.download-grid {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
}

/* 下载卡片样式 */
.download-card {
  width: 160px;
  text-align: center;
}

/* 卡片标题样式 */
.card-title {
  font-size: 1.125rem;
  font-weight: 700; /* 加粗显示 */
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

/* 卡片副标题样式 */
.card-subtitle {
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  margin-bottom: 1rem;
  min-height: 2em;
}

/* 下载按钮样式 */
.download-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.75rem;
  transition: all 0.2s ease;
  border: 1px solid var(--vp-c-divider);
  width: 100%;
  white-space: nowrap;
}

/* 下载按钮悬停效果 */
.download-button:hover {
  background-color: var(--vp-c-neutral);
  color: var(--vp-c-bg);
}

/* 图标样式 */
.icon {
  display: flex;
  align-items: center;
}

.platform-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}

/* 提示容器样式 */
.tips-container {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

/* 提示标题样式 */
.tips-title {
  font-size: 0.875rem;
  font-weight: 700; /* 加粗显示 */
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
}

/* 提示内容样式 */
.tips-content {
  font-size: 0.75rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* 更新时间容器样式 */
.update-time-container {
  text-align: center;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin: 2rem 0;
}

/* 深色模式适配 */
:root.dark .download-button {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

:root.dark .download-button:hover {
  background-color: var(--vp-c-neutral);
  color: var(--vp-c-bg);
  border-color: var(--vp-c-neutral);
}

/* 响应式布局 */
@media (max-width: 768px) {
  .download-grid {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .download-card {
    width: calc(50% - 1rem);
  }
}

@media (max-width: 480px) {
  .download-card {
    width: 100%;
  }
}
</style>
```
