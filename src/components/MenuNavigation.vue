<script setup lang="ts">
import { ref } from 'vue';
import image_avatar from '@/assets/images/avatar.svg';


const data = ref({
	drawer: true,
	rail: false,
	isDesktop: window.innerWidth >= 640,
});
</script>

<template>
	<v-card>
		<v-layout>
			<v-navigation-drawer v-model="data.drawer" :rail="data.rail" permanent @click="data.rail = false">

				<v-list>
					<v-list-item
						:prepend-avatar="image_avatar"
						subtitle="Dev web" title="Elian Batista">
						<template v-if="!data.isDesktop" v-slot:append>
							<v-btn icon="mdi-chevron-left" variant="plain" @click.stop="data.rail = !data.rail"></v-btn>
						</template>
					</v-list-item>
				</v-list>

				<v-divider></v-divider>

				<v-list density="compact" nav>
					<v-list-item @click.stop="data.rail = data.isDesktop ? false : true" to="/" active-color="green"
						:ripple="false" active-class="bg-primary_blue" prepend-icon="mdi-account-hard-hat"
						title="Perfil" value="profile">
					</v-list-item>

					<v-list-item @click.stop="data.rail = data.rail = data.isDesktop ? false : true" to="/projects"
						active-class="bg-primary_blue" prepend-icon="mdi-application-brackets" title="Projetos"
						value="home">
					</v-list-item>
					<v-list-item @click.stop="data.rail = data.rail = data.isDesktop ? false : true" to="/jobs"
						active-class="bg-primary_blue" prepend-icon="mdi-briefcase-account" title="Carreira"
						value="jobs"></v-list-item>
				</v-list>

			</v-navigation-drawer>
			<v-main class="custom_main bg-background">
				<slot></slot>
			</v-main>
		</v-layout>
	</v-card>
</template>

<style scoped>
.custom_main {
	height: 100vh;
	overflow-y: auto;
}
</style>