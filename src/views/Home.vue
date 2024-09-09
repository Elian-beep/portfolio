<script setup lang="ts">
import Container from '@/components/Container.vue';

</script>

<template>
  <div class="container">
    <v-card class="content">
      <div>
        <v-img src="https://raw.githubusercontent.com/Elian-beep/assets_icons/main/profile.jpg" cover></v-img>
        <v-card-title class="social_links">
          <a href="mailto:elian.19batista@gmail.com">
            <v-chip link color="pink" label prepend-icon="mdi-email">E-mail</v-chip>
          </a>
          <a href="https://www.linkedin.com/in/elian-batista/">
            <v-chip link color="secondary_blue" label prepend-icon="mdi-linkedin">Linkedin</v-chip>
          </a>
          <a href="https://github.com/Elian-beep">
            <v-chip link color="secondary" label prepend-icon="mdi-github">Github</v-chip>
          </a>
        </v-card-title>
      </div>
      <div>
        <v-card-title>
          Elian Oliveira Batista
        </v-card-title>

        <v-card-subtitle>
          Desenvolvedor Web
        </v-card-subtitle>


        <v-card-text>
          Sou desenvolvedor de software web com 2 anos de experiência, formado em Ciência da Computação e com estudos e
          práticas voltados à utilização de TypeScript e Java. Tenho foco em construir soluções eficientes e escaláveis
          para web, com habilidades tanto no front-end quanto no back-end, e estou sempre buscando aprofundar meus
          conhecimentos nas melhores práticas e nas novas tecnologias do mercado.
        </v-card-text>
      </div>

    </v-card>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
}

.content {
  padding: 16px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column
}

.social_links {
  display: flex;
  justify-content: center;
  gap: 12px;
}

@media screen and (min-width: 940px) {
  .content {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    width: 600px;
  }
}
</style>
