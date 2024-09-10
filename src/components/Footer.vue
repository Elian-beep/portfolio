<script setup lang="ts">
import { ref } from 'vue';

const sociais = ref([
    { link: 'https://www.linkedin.com/in/elian-batista/', icon: 'mdi-linkedin' },
    { link: 'https://elianlinktree.vercel.app/', icon: 'mdi-link-variant' },
    { link: 'https://github.com/Elian-beep', icon: 'mdi-github' },
    { link: 'https://www.instagram.com/e_lianb/', icon: 'mdi-instagram' },
]);
</script>

<template>
    <v-footer class="custom_footer d-flex flex-column" app>
        <div class="bg-teal d-flex w-100 align-center px-4">
            <strong class="title">Conecte-se comigo pelas redes sociais!</strong>

            <v-spacer></v-spacer>

            <div class="links">
                <v-btn v-for="social in sociais" :key="social.icon" :href="social.link" :icon="social.icon"
                    class="mx-4" variant="plain"></v-btn>
            </div>
        </div>
    </v-footer>
</template>

<style scoped>
.custom_footer{
    align-items: center;
    justify-content: center;
}

.title{
    display: none;
}

.links {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

@media screen and (min-width: 940px){
    .title{
        display: block;
        margin-top: 12px;
    }
}
</style>