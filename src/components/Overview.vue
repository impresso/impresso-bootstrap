<template lang="html">
  <b-container>
    <b-row>
      <b-col>
          <b-form-group label="Input with value">
            <b-form-input value="Paul Schroeder"></b-form-input>
          </b-form-group>
          <b-form-group description="With placeholder and description" label="Empty form input">
            <b-form-input placeholder="Placeholder text"></b-form-input>
          </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Input type password">
          <b-form-input type="password" value="thijs is the bom!"></b-form-input>
        </b-form-group>
        <b-form-group label="Input type invalid state">
          <b-form-input v-bind:state="false" type="password" value="thijs is the bom!"></b-form-input>
        </b-form-group>
        <b-form-group label="Input type valid state">
          <b-form-input v-bind:state="true" type="password" value="thijs is the bom!"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Input with value">
          <b-dropdown id="ddown1" text="Dropdown Button">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
          </b-form-group>
          <b-form-group label="Input with value">
            <b-dropdown id="ddown1" text="Dropdown Button" variant="outline-success">
            <b-dropdown-item>First Action</b-dropdown-item>
          </b-dropdown>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Input type password">
          <b-form-input type="password" value="thijs is the bom!"></b-form-input>
        </b-form-group>
        <b-form-group label="Input type invalid state">
          <b-form-input v-bind:state="false" type="password" value="thijs is the bom!"></b-form-input>
        </b-form-group>
        <b-form-group label="Input type valid state">
          <b-form-input v-bind:state="true" type="password" value="thijs is the bom!"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped lang="css">
</style>
