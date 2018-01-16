<template>
<div id="app">
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a href="/">
      <img id="logo" src="./assets/impresso-logo/impresso-logo-h-RGB@2x.png" height="45px" class="d-inline-block align-top" alt="">
      </a>
      <span class="navbar-brand">
        <a href="https://github.com/impresso/impresso-bootstrap" class="fa-github">
          <icon name="github"></icon>
        </a>
        <a href="http://impresso-project.ch/">
          <icon name="link"></icon>
        </a>
        impresso-bootstrap
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
        <h4>Custom Components</h4>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{name: 'FilterBox'}">Filterbox</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{name: 'CustomSlider'}">Slider</router-link>
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
import 'vue-awesome/icons/github';
import 'vue-awesome/icons/link';

import Icon from 'vue-awesome/components/Icon';

export default {
  name: 'app',
  components: {
    Icon,
  },
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
        line-height: 0;
        color:white;
        &:hover{
          background: none;
          color: $darkicon;
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

<style src="./styles/impresso-bootstrap.scss" lang="scss"></style>
