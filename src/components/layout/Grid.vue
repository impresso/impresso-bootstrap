<template lang="html">
  <div class="layout">
  <h1>Layout Grid</h1>
  <h5>Class <code>.results-header</code></h5>

    <div class="results-header">
      <div class="column">
        First <code>.column</code>
      </div>
      <div class="column">
        Second <code>.column</code>
      </div>
      <div class="column">
        Third <code>.column</code>
      </div>
      <div class="column">
        Last <code>.column</code> is stretched and right aligned.
      </div>
    </div>

    <br>

    <label for="">Example with elements</label>

    <div class="results-header">

      <div class="column">
        <label for="radios0" class="label">Group Results by</label>
        <b-form-radio-group size="sm" buttons id="radios0" name="sad">
          <b-form-radio value="list">Issue</b-form-radio>
          <b-form-radio value="page">Page</b-form-radio>
          <b-form-radio value="art">Article</b-form-radio>
        </b-form-radio-group>
      </div>

      <div class="column">
        <label for="ddown1" class="label">Order By</label>
        <b-form-group>
          <b-dropdown id="ddown1" text="Relevance" size="sm">
            <b-dropdown-item>fsdad</b-dropdown-item>
            <b-dropdown-item>dfasdf</b-dropdown-item>
            <b-dropdown-divider>sdfdfsdf fdsf</b-dropdown-divider>
            <b-dropdown-item>dsf adfdfdf</b-dropdown-item>
          </b-dropdown>
        </b-form-group>
      </div>

      <div class="column">
        <label for="radios2" class="label">Display as</label>
        <b-form-radio-group size="sm" buttons id="radios2" name="radioSubComponent">
          <b-form-radio value="list">As List</b-form-radio>
          <b-form-radio value="tiles">As Tiles</b-form-radio>
        </b-form-radio-group>
      </div>

    </div>

  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
</style>
