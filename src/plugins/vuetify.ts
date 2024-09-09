import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from "vuetify";
import { pt } from 'vuetify/locale';
import { VListItem } from 'vuetify/components';

const t_light = {
    dark: false,
    colors: {
        background: '#F5F5F5',
        primary: '#333333',
        primary_blue: '#007BFF',
        secondary: '#666666',
        secondary_blue: '#0056b3',
        links: '#007BFF',
        neutro: '#CCCCCC',
        alert: '#DC3545',
        pink: '#db4a39',

    }
}
const t_dark = {
    dark: true,
    colors: {
        background: '#121212',
        primary: '#FFFFFF',
        primary_blue: '#007BFF',
        secondary: '#B0B0B0',
        secondary_blue: '#0056b3',
        links: '#90CAF9',
        neutro: '#333333',
        alert: '#CF6679',
        pink: '#db4a39',

    }
}

export default createVuetify({
    components,
    directives,
    locale: {
        locale: 'pt',
        messages: { pt: pt },
    },
    aliases: {
    },
    defaults: {
        VBtn: {
            baseColor: 'primary_blue'
        },
    },
    theme: {
        defaultTheme: 't_light',
        themes: {
            t_light,
            t_dark
        }
    }
});