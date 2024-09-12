<script lang="ts" setup>
import Container from '@/components/Container.vue';
import { jobs } from '@/mocks/Jobs';

</script>

<template>
  <Container title="Trajetória Profissional">

    <v-timeline class="custom_timeline" align="start" side="end">
      <v-timeline-item size="small" dot-color="neutro" v-for="job in jobs" :key="job.id" large fill-dot>
        <template v-slot:icon>
          <v-avatar :image="job.image"></v-avatar>
        </template>

        <v-card :subtitle="job.period" :title="job.name">
          <v-card-subtitle>{{ job.role }}</v-card-subtitle>
          <v-card-text>{{ job.desc }}</v-card-text>
        </v-card>

      </v-timeline-item>
    </v-timeline>

  </Container>

</template>

<style scoped>
.custom_timeline {
  width: 322px;
  max-width: 322px;
}

@media screen and (min-width: 940px) {
  .custom_timeline {
    width: 100%;
    max-width: 100%;
  }
}
</style>
