<template lang="html">
  <div class="">

  <div class="filterbox">
    <div class="box-header">
      <div class="box-title"><h4>fancy filter</h4></div>
      <div class="remove" v-on:click="closeBox" />
      <div class="contextmenu">
        <b-dropdown variant="link" right no-caret size="lg">
          <div class="">
          <b-form-select
            :options="{ '1': 'Include', '0': 'Exclude' }"
            :value=1>
          </b-form-select>
          </div>
          <div class="dropdown-divider"></div>
          <b-dropdown-header>Options</b-dropdown-header>
          <b-form-checkbox-group
            stacked
            :options="['Oranges', 'Apples', 'Bananas']">
          </b-form-checkbox-group>
          <div class="dropdown-divider"></div>
          <b-form-radio-group stacked :options="['Air', 'Courier', 'Mail']" />
          <div class="dropdown-divider"></div>
          <b-dropdown-header>Settings</b-dropdown-header>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <div class="dropdown-divider"></div>
          <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="box-body m-2">
      This is the content of the filterbox.
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        :value="null"
        :options="{ '1': 'One', '2': 'Two', '3': 'Three' }">
        <option slot="first" :value="null">Choose...</option>
      </b-form-select>
    </div>
  </div>
  <div class="filterbox">
    <div class="box-header">
      <div class="box-title"><h4>fancy filter</h4></div>
      <div class="remove" v-on:click="closeBox" />
      <div class="contextmenu">
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="box-body m-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  methods: {
    closeBox: function removeMe() {
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="css">
</style>
