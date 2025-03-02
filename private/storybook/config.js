import 'babel-polyfill'
import { configure, addDecorator } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'
import StoryRouter from 'storybook-vue-router'
import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import Directives from '@/directives'
import './style.scss'
import store from '@/store';

Vue.use(Vuex)
Vue.use(VueI18n)
Vue.use(Directives)
Vue.mixin({
	data: () => ({
		publicPath: '/'
	})
})

setOptions({
  hierarchyRootSeparator: / - /,
  name: 'Vue Atomic Design',
  url: '#'
})

// Require all the .stories.js files from all components
const req = require.context('@/components', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach((filePath) => {
    const componentName = filePath.replace(/^.+\/([^/]+)\/index.stories.js/, '$1')
    const component = req(filePath)
    Vue.component(componentName, component)
    return component
  })
}

addDecorator(StoryRouter())

configure(loadStories, module)
