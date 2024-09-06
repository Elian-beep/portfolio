import type { App } from 'vue'
import vuetify from './vuetify'

export function registerPlugins(app: App<Element>) {
  app.use(vuetify)
}
