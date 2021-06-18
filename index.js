import VueUpperDirective from './src/vue-upper';

export default {
  install(vue) {
    vue.directive('upper', VueUpperDirective);
  }
};