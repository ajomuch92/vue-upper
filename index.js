import VueUpper from './src/vue-upper';

export default {
  install(vue) {
    vue.directive('upper', VueUpper);
  }
};

export const VueUpper =  VueUpper;