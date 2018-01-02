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
        <b-form-group label="Input with values">
          <b-dropdown id="ddown1" text="Dropdown Button">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
          </b-form-group>
          <b-form-group label="Outline input">
            <b-dropdown id="ddown2" text="Dropdown Button" variant="outline-success">
              <b-dropdown-header>Dropdown header</b-dropdown-header>
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-header>Another header</b-dropdown-header>
              <b-dropdown-item>First Action</b-dropdown-item>
          </b-dropdown>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Split Dropdown">

        <b-dropdown id="ddown-split" split text="Split Dropdown">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
</b-dropdown>
</b-form-group>

<b-form-group label="Select box">
<b-form-select class="mb-2 mr-sm-2 mb-sm-0"
               :value="null"
               :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
               id="CustomSelectPref">
  <option slot="first" :value="null">Choose...</option>
</b-form-select>
</b-form-group>

        <b-form-group label="Dropdown with link">
          <b-dropdown id="dropdownlink" variant="link" text="Dropdown">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
          </b-dropdown>
        </b-form-group>


      </b-col>
    </b-row>
    <b-row>
<b-card b-variant="light" style="width:100%">
    <b-form-group horizontal
                  label="Group Label"
                  label-class="font-weight-bold">

      <b-form-group horizontal
                    label="Street:"
                    label-class="text-sm-right"
                    label-for="nestedStreet">
        <b-form-input id="nestedStreet"></b-form-input>
      </b-form-group>

      <b-form-group horizontal
                    label="City:"
                    label-class="text-sm-right"
                    label-for="nestedCity">
        <b-form-input id="nestedCity"></b-form-input>
      </b-form-group>

    </b-form-group>

      <b-form-group horizontal
                    label="Other Label"
                    label-class="font-weight-bold">

<b-form-group horizontal
                                   label="Date:"
                                   label-class="text-sm-right"
                                   label-for="date">
                                           <b-form-input id="date" type="date"></b-form-input>
</b-form-group>

      <b-form-group horizontal
                    label="Disabled:"
                    label-class="text-sm-right"
                    label-for="disabled">
        <b-form-input disabled id="disabled"></b-form-input>
      </b-form-group>

      <b-form-group horizontal
                     label="Range slider:"
                     label-class="text-sm-right"
                     label-for="rangeS">
            <b-form-input type="range" id="rangeS" />
        </b-form-group>

    </b-form-group>



      <b-form-group>
          <b-input-group left="@">
            <b-input id="inlineFormInputGroupUsername2" placeholder="Username" />
          </b-input-group>
        </b-form-group>

  <b-form-group>
      <b-input-group right="right">
              <b-input id="inlineFormInputGroupUsername2" placeholder="Password" />
            </b-input-group>
          </b-form-group>

      <b-form-group horizontal
                    label="Radio buttons"
                    label-class="font-weight-bold">
        <b-form-radio-group class="pt-2" :options="['Air', 'Courier', 'Mail']" />
    </b-form-group>

    <b-form-group horizontal
    label="Checkboxes"
    label-class="font-weight-bold">
    <b-form-checkbox-group class="pt-2">
      <b-form-checkbox value="me">Check me out</b-form-checkbox>
      <b-form-checkbox value="that">Check that out</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

</b-card>
</b-row>

&nbsp;
<h2>Buttons</h2>

<b-row>
    <template v-for="variant in ['primary','secondary','success','outline-success','warning','danger','link']">
        <div class="col-md-4 pb-2" v-for="size in ['sm','','lg']" :key="`${variant}_${size}`">
            <b-button :size="size" :variant="variant">
                {{variant}} {{size}}
            </b-button>
        </div>
    </template>

</b-row>

<b-row class="mt-3">
<h6>Button Group - outline</h6>
</b-row>
<b-row>
      <b-button-group>
        <b-button variant="outline-primary">Outline</b-button>
        <b-button variant="outline-info">Info</b-button>
        <b-button variant="outline-warning">Warning</b-button>
        <b-button disabled variant="outline-primary">Disabled</b-button>
        <b-button variant="outline-danger">Danger</b-button>
      </b-button-group>
</b-row>

      <b-row class="mt-3">
      <h6>Button Group - primary</h6>
      </b-row>
      <b-row>
        <b-button-group>
          <b-button variant="primary">Button 1</b-button>
          <b-button variant="primary">Button 2</b-button>
          <b-button variant="primary">Button 3</b-button>
          <b-button disabled variant="primary">Button Disabled</b-button>
          <b-button variant="primary">Button 5</b-button>
        </b-button-group>
</b-row>


<b-row class="mt-3">
  <h6>Pagination</h6>
</b-row>

  <b-row>
  <b-pagination size="md" :total-rows="40" v-model="currentPage" :per-page="10">
  </b-pagination>
</b-row>

<b-row class="mt-3">
  <h6>Breadcrumb</h6>
</b-row>

<template>
  <b-breadcrumb :items="items"/>
</template>


  </b-container>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        text: 'Admin',
        href: '#'
      }, {
        text: 'Manage',
        href: '#'
      }, {
        text: 'Library',
        active: true
      }]
    }
  }
}
</script>

<style scoped lang="css">
</style>
