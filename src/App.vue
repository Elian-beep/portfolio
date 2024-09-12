<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuNavigation from '@/components/MenuNavigation.vue';
import { useApplicationStore } from './stores/application.store';
import Footer from '@/components/Footer.vue';

const applicationStore = useApplicationStore();
const localIsDark = localStorage.getItem('isDark');
applicationStore.setIsDark(Boolean(localIsDark));
</script>

<template>
  <v-app :theme="applicationStore.getIsDark ? 't_dark' : 't_light'">
    <MenuNavigation>
      <RouterView />
    </MenuNavigation>
    
  </v-app>
</template>