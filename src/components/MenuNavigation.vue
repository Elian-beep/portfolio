<script setup lang="ts">
import { ref } from 'vue';
import img_avatar from '@/assets/images/avatar.svg';
import { useApplicationStore } from '@/stores/application.store';
import Footer from '@/components/Footer.vue';

const applicationStore = useApplicationStore();

const data = ref({
	drawer: true,
	isDesktop: window.innerWidth >= 640,
	rail:  false,
	isDark: applicationStore.getIsDark,
});

const toggleDarkMode = () => {
	data.value.isDark = !data.value.isDark;
	applicationStore.setIsDark(data.value.isDark);
}
</script>

<template>
	<v-card>
		<v-layout>
			<v-navigation-drawer v-model="data.drawer" :rail="data.rail" permanent @click="data.rail = false">

				<v-list>
					<v-list-item :prepend-avatar="img_avatar" subtitle="Dev web" title="Elian Batista">
						<template v-if="!data.isDesktop" v-slot:append>
							<v-btn icon="mdi-chevron-left" variant="plain" @click.stop="data.rail = !data.rail"></v-btn>
						</template>
					</v-list-item>
				</v-list>

				<v-divider></v-divider>

				<v-list density="compact" nav>
					<v-list-item @click.stop="data.rail = data.isDesktop ? false : true" to="/"
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

				<template v-slot:append>
					<div class="bottom_nav">
						<div v-if="data.rail">
							<v-btn variant="plain" class="btn_theme" icon @click="toggleDarkMode" @click.stop="data.rail = data.rail = data.isDesktop ? false : true">
								<v-icon color="primary" v-if="data.isDark">mdi-weather-night</v-icon>
								<v-icon color="primary_blue" v-else>mdi-white-balance-sunny</v-icon>
							</v-btn>
						</div>

						<v-switch v-if="!data.rail" @change="toggleDarkMode" :ripple="false" hide-details class="hide-toggle">
							<template #prepend>
								<v-icon color="primary" v-if="data.isDark">mdi-weather-night</v-icon>
							</template>
							<template #append>
								<v-icon color="primary_blue" v-if="!data.isDark">mdi-white-balance-sunny</v-icon>
							</template>
						</v-switch>
					</div>
				</template>

			</v-navigation-drawer>
			<v-main class="custom_main bg-background">
				<slot></slot>
				<Footer />
			</v-main>
		</v-layout>
	</v-card>
</template>

<style scoped>
.custom_main {
	height: calc(100vh - 64px);
	overflow-y: auto;
}

.bottom_nav {
	padding: 8px;
	margin: 0 auto 0 0;
	max-width: 86px;
}

.hide-toggle .v-input__control {
  display: none !important;
}

.btn_theme{
	max-width: 56px;
	max-height: 56px;
}

@media screen and (min-width: 940px){
	.custom_main {
	height: calc(100vh - 94px);
}

}
</style>