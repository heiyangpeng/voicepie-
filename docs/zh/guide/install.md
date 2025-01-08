# 应用下载

::: warning 仅TransBuds C2 有线通话翻译耳机支持iOS应用，其余设备暂不支持iOS

:::

<!-- 显示下载 -->
<script setup>
import DownloadPage from '/components/Downloadpage.vue'
</script>

<!-- 只显示下载卡片部分 -->

<DownloadPage
  lang="zh"
  :showTitle="false"
  :showTips="false"
  :showUpdateTime="false"
  :onlyCards="true"
/>
