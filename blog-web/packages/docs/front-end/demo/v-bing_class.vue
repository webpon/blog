<template>
  <ul class="box" v-bind:class="{ textColor: isColor, textSize: isSize }">
    <li>学习Vue</li>
    <li>学习Node</li>
    <li>学习React</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
       isColor:true,
       isSize:true
    }
  },
}
</script>

<style scoped>
.box {
  border: 1px dashed #f0f;
}
.textColor {
  color: #f00;
  background-color: #eef;
}
.textSize {
  font-size: 30px;
  font-weight: bold;
}
</style>
