<!-- .vitepress/theme/components/DocCard.vue -->
<template>
  <div class="butterfly-flink-list">
    <a
      v-for="card in cards"
      :key="card.id"
      :href="card.path"
      class="flink-list-item"
      :style="{
        '--avatar-size': avatarSize || '32px',
        '--title-size': titleSize || '0.9em',
        '--desc-size': descSize || '0.75em'
      }"
    >
      <img
        v-if="card.avatar"
        :src="card.avatar"
        class="flink-item-icon"
        :alt="card.title"
      />
      <div class="flink-item-info">
        <div class="flink-item-name">{{ card.title }}</div>
        <div class="flink-item-desc" :title="card.description">
          {{ card.description }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      default: () => []
    },
    avatarSize: {
      type: String,
      default: '32px'
    },
    titleSize: {
      type: String,
      default: '0.9em'
    },
    descSize: {
      type: String,
      default: '0.75em'
    }
  }
}
</script>

<style>
.butterfly-flink-list {
  overflow: auto;
  padding: 8px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* 增加卡片间距 */
}

.flink-list-item {
  position: relative;
  overflow: hidden;
  line-height: 1.3;
  transform: translateZ(0);
  height: 70px; /* 增加卡片高度 */
  padding: 10px 16px; /* 调整内边距 */
  width: calc(50% - 8px); /* 一排两个卡片 */
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  transition: all 0.45s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.flink-list-item:hover {
  border-color: var(--vp-c-brand) !important;
  background-color: var(--vp-c-brand) !important;
  box-shadow: 0 0 20px var(--vp-c-brand-light);
}

.flink-list-item:hover .flink-item-icon {
  width: 0;
  height: 0;
  margin-left: -10px;
  transition: all 0.45s ease-in-out;
}

.flink-list-item:hover .flink-item-name,
.flink-list-item:hover .flink-item-desc {
  color: var(--vp-c-bg);
  transition: color 0.45s ease-in-out;
}

.flink-item-icon {
  float: left;
  overflow: hidden;
  margin: 4px;
  width: var(--avatar-size);
  height: var(--avatar-size);
  background: var(--vp-c-bg);
  border-radius: 50%;
  transition: all 0.45s ease-in-out;
  flex-shrink: 0;
}

.flink-item-icon img {
  width: 100%;
  height: 100%;
  transition:
    filter 375ms ease-in 0.2s,
    transform 0.45s;
  object-fit: cover;
}

.flink-item-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 12px;
  text-align: left;
  min-width: 0;
  height: 100%;
  flex: 1;
}

.flink-item-name {
  padding: 0 0 4px;
  font-weight: 500;
  font-size: var(--title-size);
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.45s ease-in-out;
  line-height: 1.4;
  max-width: 100%;
}

.flink-item-desc {
  padding: 0;
  font-size: var(--desc-size);
  opacity: 0.7;
  color: var(--vp-c-text-2);
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.45s ease-in-out;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 显示三行文字 */
  -webkit-box-orient: vertical;
  max-width: 100%;
  white-space: normal;
  word-break: break-all;
}

/* 移动端适配 */
@media screen and (max-width: 640px) {
  .flink-list-item {
    width: 100%; /* 小屏幕一排一个 */
  }
}

:root.dark .flink-list-item {
  background-color: var(--vp-c-bg-soft);
}

:root.dark .flink-list-item:hover {
  background-color: var(--vp-c-brand) !important;
}
</style>
