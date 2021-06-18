# Vue Upper
A directive for Vuejs to transform the text to upper over an input, even transforming when binding a variable. You can see a demo [here](https://codesandbox.io/s/smoosh-cache-66m8k)

### Install  

NPM:  
```bash
npm install --save vue-upper
```

### Usage instructions  

Install the directive globally on your *main.js*

```javascript
import VueUpper from 'vue-upper';

Vue.use(VueUpper);
```

### How to use it

```html
  <input v-upper type="text" v-model="yourVariable">
```

### License
MIT

