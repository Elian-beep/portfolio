<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuNavigation from '@/components/MenuNavigation.vue';
import { useApplicationStore } from './stores/application.store';

const applicationStore = useApplicationStore();
</script>

<template>
  <v-app :theme="applicationStore.getIsDark ? 't_dark' : 't_light'">
    <MenuNavigation>
      <RouterView />
    </MenuNavigation>
  </v-app>
</template>