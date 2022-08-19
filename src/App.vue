<template>
  <img src="./assets/logo.png" />
  <hello-world
      user-msg="Hello"
      user-name="张三" />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
