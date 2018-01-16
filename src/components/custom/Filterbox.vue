<template lang="html">
  <div class="filterbox">
    <div class="box-header">
      <h4>fancy filter</h4>
      <div class="remove" />
      <div class="contextmenu">
        <b-dropdown variant="link" right no-caret size="lg">
          <b-dropdown-header>Options</b-dropdown-header>
          <b-form-checkbox-group stacked v-model="selected" name="flavour2" :options="options">
          </b-form-checkbox-group>
          <b-dropdown-header>Settings</b-dropdown-header>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <div class="dropdown-divider"></div>
          <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="box-body">
      This is the content of the filterbox.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' },
      ],
    };
  },
};
</script>

<style lang="css">
</style>
