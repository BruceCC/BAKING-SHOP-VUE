<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import News from "@/components/Home/News.vue"
import Newsletter from "@/components/Home/Newsletter.vue"
import Product from "@/components/Home/Product.vue"
import Shop from "@/components/Home/Shop.vue"
import Slogan from "@/components/Home/Slogan.vue"
</script>

<template>
  <DefaultLayout>
    <News />
    <Slogan />
    <Shop />
    <Product />
    <Newsletter />
  </DefaultLayout>
</template>
