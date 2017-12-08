<template>
<div id="app">
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a href="/">
      <img id="logo" src="./assets/impresso-logo/impresso-logo-h-RGB.png" height="45px" class="d-inline-block align-top" alt="">
      </a>
      <span class="navbar-brand">impresso-bootstrap</span>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <h4>Layout</h4>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/layout/grid">Grid</router-link>
            <router-link class="nav-link" to="/layout/media-object">Media object</router-link>
          </li>
        </ul>
        <h4>Content</h4>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/content/typography">Typography</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/content/code">Code</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/content/images">Images</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/content/tables">Tables</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/content/figures">Figures</router-link>
          </li>
        </ul>
        <h4>Components</h4>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/components/alerts">Alerts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/badge">Badge</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/breadcrumb">Breadcrumb</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/buttons">Buttons</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/button_group">Button group</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/card">Card</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/carousel">Carousel</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/collapse">Collapse</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/dropdowns">Dropdowns</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/forms">Forms</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/input_group">Input group</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/jumbotron">Jumbotron</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/list_group">List group</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/modal">Modal</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/navs">Navs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/navbar">Navbar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/pagination">Pagination</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/popovers">Popovers</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/progress">Progress</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/scrollspy">Scrollspy</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/components/tooltips">Tooltips</router-link>
          </li>
        </ul>

      </div>
      <div class="col">
        <router-view/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" >
#app {
    .nav,
    .navbar {
        margin-bottom: 30px;
    }

    #logo {
        margin: -3px 0;
    }
}
</style>

<style src="./styles/impresso-bootstrap.scss" lang="scss"></style>
