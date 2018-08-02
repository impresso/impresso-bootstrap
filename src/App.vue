<template>
<div id="app">
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a href="/">
      <img id="logo" src="./assets/impresso-logo/impresso-logo-h-RGB@2x.png" height="45px" class="d-inline-block align-top" alt="">
      </a>
      <span class="navbar-brand">
        <a href="https://github.com/impresso/impresso-bootstrap" class="fa-github">
          <svg height="14" fill="white" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
        </a>
        <a href="http://impresso-project.ch/">
          <div class="icon dripicons-link"></div>
        </a>
        bootpresso
      </span>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <h4>Layout</h4>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/overview">Overview</router-link>
            <router-link class="nav-link" to="/layout/grid">Grid</router-link>
          </li>
        </ul>
        <h4>Content</h4>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/content/typography">Typography</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/content/icons">Icons</router-link>
          </li>
        </ul>
        <h4>Custom Components</h4>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{name: 'Forms'}">Forms</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{name: 'Tabs'}">Tabs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{name: 'FilterBox'}">Filterbox</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{name: 'RangeSlider'}">Range Slider</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{name: 'ZoomSlider'}">ZoomSlider</router-link>
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
      <div class="col documentation">
        <router-view/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import 'vue-awesome/icons/github';
// import 'vue-awesome/icons/link';

// import Icon from 'vue-awesome/components/Icon';

export default {
//   name: 'app',
//   components: {
//     Icon,
//   },
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
        mix-blend-mode: multiply;
    }

    .navbar-brand{
      $darkicon: rgba(0,0,0,.8);

      a{
        border: 2px solid $darkicon;
        transition: all 300ms;
        margin-right: 7px;
        width: 30px;
        height: 30px;
        display: inline-block;
        background: $darkicon;
        border-radius: 20px;
        text-align: center;
        line-height: 1;
        padding-top: 2px;
        color:white;
        &:hover{
          background: none;
          color: $darkicon;
          text-decoration: none
        }
        svg{
          margin-top: 20%;
          width: 100%;
        }
        &.fa-github{
          svg{
            transform: scale(1.5);
          }
        }
      }
    }
}
</style>

<style src="./styles/bootpresso.sass" lang="sass"></style>
