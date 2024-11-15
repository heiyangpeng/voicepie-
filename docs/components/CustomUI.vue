```vue
<template>
  <!-- 按钮组件 -->
  <div v-if="type === 'button'" class="btn-wrapper">
    <a :href="url" class="vp-btn" :class="[size]">
      <span class="vp-btn-icon">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M512.256 149.312c23.552 0 42.688 19.136 42.688 42.688v277.312h24.832c7.488 0 16.64 0 24.192 0.96h0.192c5.376 0.64 29.952 3.776 41.6 27.84 11.776 24.192-1.088 45.504-3.84 50.176l-0.128 0.192c-3.968 6.464-9.664 13.76-14.4 19.776l-1.024 1.28c-12.544 16-28.8 36.736-45.056 53.376-8.128 8.32-17.408 16.96-27.264 23.68-8.704 6.08-23.68 14.72-42.048 14.72-18.368 0-33.28-8.64-42.048-14.72a187.648 187.648 0 0 1-27.264-23.68c-16.192-16.64-32.512-37.312-45.12-53.376l-0.96-1.28a212.736 212.736 0 0 1-14.4-19.84l-0.064-0.128c-2.816-4.672-15.68-25.984-3.968-50.176 11.712-24.128 36.288-27.136 41.664-27.84h0.192a206.72 206.72 0 0 1 24.128-0.96h25.408V192c0-23.552 19.136-42.688 42.688-42.688z"
            fill="currentColor"
          ></path>
          <path
            d="M213.312 704A42.688 42.688 0 0 0 128 704c0 27.392 1.344 52.288 6.08 73.856 4.864 22.016 13.76 43.072 30.72 60.032 16.96 16.96 38.016 25.856 60.032 30.72 21.504 4.672 46.464 6.08 73.856 6.08h426.624c27.392 0 52.352-1.408 73.856-6.144 22.016-4.8 43.136-13.696 60.032-30.656 16.96-16.96 25.856-38.08 30.72-60.032 4.736-21.568 6.08-46.464 6.08-73.856a42.688 42.688 0 0 0-85.312 0c0 25.6-1.408 43.136-4.16 55.552-2.56 11.904-5.824 16.192-7.68 17.984-1.792 1.856-6.08 5.12-17.984 7.68-12.416 2.752-29.952 4.096-55.552 4.096H298.688c-25.6 0-43.136-1.344-55.552-4.096-11.904-2.56-16.192-5.824-17.984-7.68-1.856-1.792-5.12-6.08-7.68-17.984-2.752-12.416-4.16-30.016-4.16-55.552z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      <span class="vp-btn-text"><slot></slot></span>
    </a>
  </div>

  <!-- Tabs组件 -->
  <div v-else-if="type === 'tabs'" class="vp-tabs">
    <div class="vp-tabs-header" role="tablist">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="vp-tab-item"
        :class="{ active: activeTab === index }"
        role="tab"
        :aria-selected="activeTab === index"
        :tabindex="activeTab === index ? 0 : -1"
        @click="switchTab(index)"
      >
        <span class="tab-label">{{ tab.label }}</span>
        <div
          class="tab-highlight"
          :class="{ active: activeTab === index }"
        ></div>
      </div>
    </div>
    <div class="vp-tabs-content" role="tabpanel">
      <slot v-if="activeTab === 0" name="tab-1"></slot>
      <slot v-if="activeTab === 1" name="tab-2"></slot>
      <slot v-if="activeTab === 2" name="tab-3"></slot>
      <slot v-if="activeTab === 3" name="tab-4"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomUI',
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ['button', 'tabs'].includes(value)
    },
    url: {
      type: String,
      default: '#'
    },
    tabLabels: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: 'default',
      validator: (value) => ['small', 'default', 'large'].includes(value)
    }
  },
  data() {
    return {
      activeTab: 0,
      tabs: []
    }
  },
  created() {
    if (this.type === 'tabs') {
      this.tabs = this.tabLabels.map((label, index) => ({
        label,
        index
      }))
    }
  },
  methods: {
    switchTab(index) {
      this.activeTab = index
    }
  }
}
</script>

<style scoped>
/* 按钮容器样式 */
.btn-wrapper {
  display: inline-block;
  margin: 8px;
  vertical-align: top;
}

/* 按钮基础样式 */
.vp-btn {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: transparent;
  border: 2px solid #4e6ef2;
  border-radius: 4px;
  color: #4e6ef2;
  text-decoration: none;
  font-size: 14px;
  max-width: fit-content;
  transition: all 0.2s ease;
  font-weight: 500;
}

.vp-btn:hover {
  background: rgba(78, 110, 242, 0.1);
  text-decoration: none;
}

.vp-btn:active {
  background: rgba(78, 110, 242, 0.2);
}

.vp-btn-icon {
  display: inline-flex;
  align-items: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: #4e6ef2;
}

.vp-btn-icon svg {
  width: 100%;
  height: 100%;
}

/* 按钮尺寸 */
.vp-btn.small {
  padding: 4px 12px;
  font-size: 12px;
}

.vp-btn.small .vp-btn-icon {
  width: 14px;
  height: 14px;
  margin-right: 6px;
}

.vp-btn.large {
  padding: 12px 20px;
  font-size: 16px;
}

.vp-btn.large .vp-btn-icon {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

/* Tabs样式 */
.vp-tabs {
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 8px;
  margin: 16px 0;
  background: var(--vp-c-bg-soft);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.vp-tabs-header {
  display: flex;
  border-bottom: 1px solid var(--vp-c-divider-light);
  background: var(--vp-c-bg-soft);
  border-radius: 8px 8px 0 0;
  padding: 4px;
  gap: 4px;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.vp-tabs-header::-webkit-scrollbar {
  display: none;
}

.vp-tab-item {
  position: relative;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  border-radius: 6px;
  transition: all 0.3s ease;
  user-select: none;
  white-space: nowrap;
  flex: 0 0 auto;
}

.vp-tab-item:hover {
  color: var(--vp-c-brand);
  background: var(--vp-c-bg);
}

.vp-tab-item.active {
  color: var(--vp-c-brand);
  background: var(--vp-c-bg);
}

.tab-highlight {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--vp-c-brand);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.tab-highlight.active {
  transform: scaleX(1);
}

.vp-tabs-content {
  padding: 16px;
  background: var(--vp-c-bg);
  border-radius: 0 0 8px 8px;
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .vp-btn {
    border-color: #7693f5;
    color: #7693f5;
  }

  .vp-btn:hover {
    background: rgba(118, 147, 245, 0.1);
  }

  .vp-btn:active {
    background: rgba(118, 147, 245, 0.2);
  }

  .vp-btn-icon {
    color: #7693f5;
  }
}

/* 移动端适配 */
@media (max-width: 640px) {
  .btn-wrapper {
    width: calc(50% - 16px);
  }

  .vp-btn {
    width: 100%;
    justify-content: center;
  }

  .vp-tab-item {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
}
</style>
```
