import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createVuetify } from "vuetify";
import { pt } from 'vuetify/locale';

const theme_light = {
    dark: false,
    colors: {
        background: '#F5F5F5',
        primary: '#333333',
        secondary: '#666666',
        links: '#007BFF',
        neutro: '#CCCCCC',
        alert: '#DC3545'

    }
}
const theme_dark = {
    dark: true,
    colors: {
        background: '#121212',
        primary: '#FFFFFF',
        secondary: '#B0B0B0',
        links: '#90CAF9',
        neutro: '#333333',
        alert: '#CF6679'

    }
}

export default createVuetify({
    components,
    directives,
    locale: {
        locale: 'pt',
        messages: { pt: pt },
    },
    theme: {
        defaultTheme: 'theme_light',
        themes: {
            theme_light
        }
    }
});