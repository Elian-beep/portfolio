import { defineStore } from 'pinia'

export const useApplicationStore = defineStore('application', {
    state: () => ({
        isDark: false as boolean,
    }),

    getters: {
        getIsDark: (state) => state.isDark,
    },

    actions: {
        setIsDark(isDark: boolean) {
            this.isDark = isDark;
        },
    }
})
