# Vue Upper
A directive for Vuejs to transform the text to upper over an input, even transforming when binding a variable

### Install  

NPM:  
```bash
npm install --save vue-upper
```

### Usage instructions  

Install the mixin globally

```javascript
import VueUpper from 'vue-upper';

Vue.use(VueUpper);
```

### How to use it

```html
  <input v-upper type="text" v-model="youVariable">
```

### License
MIT

