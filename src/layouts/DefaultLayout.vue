<script setup>
import HeaderArea from '@/components/Header/HeaderArea.vue'
import FooterView from '@/components/Footer/Footer.vue'
</script>

<template>
  <HeaderArea />
  <main>
    <slot></slot>
  </main>
  <FooterView />
</template>
