<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuNavigation from '@/components/MenuNavigation.vue';
</script>

<template>
  <v-app theme="theme_light">
    <MenuNavigation>
      <RouterView />
    </MenuNavigation>
  </v-app>
</template>