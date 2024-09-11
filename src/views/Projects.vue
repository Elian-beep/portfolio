<script lang="ts" setup>
import { ref, watch } from 'vue';
import { projects } from '@/mocks/projects';

const projects_list = ref(projects);

const icons_stacks = [
  { title: 'Typescript', value: 'mdi-language-typescript', color: 'blue_ts' },
  { title: 'Vue.js', value: 'mdi-vuejs', color: 'green' },
  { title: 'React.js', value: 'mdi-react', color: 'blue_react' },
  { title: 'Node.js', value: 'mdi-nodejs', color: 'green_node' },
  { title: 'Java', value: 'mdi-language-java', color: 'pink' },
  { title: 'C#', value: 'mdi-language-csharp', color: '' },
  { title: '.NET', value: 'mdi-dot-net', color: '' },
]

const getIconStack = (title: string) => {
  return icons_stacks.find(s => s.title === title);
}

</script>

<template>
  <div class="container">
    <v-card-title class="title">Principais Projetos</v-card-title>

    <div class="content">

      <v-card v-for="project in projects_list" :key="project.id" class="mx-auto custom_card">
        <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

        <v-card-title>{{ project.title }}</v-card-title>

        <div class="stacks">
          <div v-for="(stack, index) in project.stacks" :key="index">
            <v-chip :color="getIconStack(stack)?.color" :prepend-icon="getIconStack(stack)?.value">{{ stack !== 'C#' ? stack : '' }}</v-chip>
          </div v-for="(stack, index) in project.stacks" :key="index">
        </div>

        <v-card-actions>
          <v-btn :href="project.repo" text="Repositório"></v-btn>

          <v-spacer></v-spacer>

          <v-btn color="secondary_blue" :icon="project.isShow ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="project.isShow = !project.isShow"></v-btn>

        </v-card-actions>

        <v-expand-transition>
          <div v-show="project.isShow">
            <v-divider></v-divider>
            <v-card-text class="custom_card_text">
              <p>{{ project.description }}</p>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>

    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 12px;
}

.title {
  margin: 0 auto;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
}

.custom_card{
  min-width: 322px;
  max-width: 322px;
}

.stacks {
  display: flex;
  flex-direction: row;
  gap: 4px;
  flex-wrap: wrap;
  padding: 0 12px;
}

.stacks div {
  padding: 0;
}

.custom_card_text {
  width: 300px;
}

.custom_card_text p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

@media screen and (min-width: 940px){
  .title{
    text-align: center;
  }

  .content {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    width: 656px;
  }

  .custom_card{
    width: 322px;
    max-width: 322px;
  }
}

@media screen and (min-width: 1285px){
  .content{
    width: 990px;
    max-width: 990px;
  }
}
</style>
