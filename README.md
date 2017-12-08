# impresso-bootstrap

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Theming

You can do custom bootstrap theming by editing the files in src/styles. As an
example there is the custom impresso-bootstrap-variables.scss which contains
overwrites for the default values in node_modules/scss/_variables.scss

For styles that are specific for the vue app you can just put them in the
.VUE template components under <style scoped lang="scss">. These will then not
be compiled with the custom bootstrap theme
