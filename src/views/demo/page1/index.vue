<template>
  <d2-container :filename="filename">
    <template slot="header">Page 1 header</template>
    <el-button>测试</el-button>
  </d2-container>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      filename: __filename
    }
  }
}
</script>
