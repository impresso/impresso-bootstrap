<template lang="html">
  <b-container>

    <section>
    <h6>Input fields</h6>
      <vue-slider
        v-bind:min="1750"
        v-bind:max="2000"
        v-bind:value="[1800,1900]"></vue-slider>
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
    </section>

    <section>
    <h6>Dropdowns and selects</h6>

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
                <b-dropdown id="ddown2" text="Dropdown Button">
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
              <b-form-select
                class="mb-2 mr-sm-2 mb-sm-0"
                :value="null"
                :options="{ '1': 'One', '2': 'Two', '3': 'Three' }">
                <option slot="first" :value="null">Choose...</option>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Dropdown with link">
              <b-dropdown
                variant="link"
                text="Dropdown">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here...</b-dropdown-item>
              </b-dropdown>
            </b-form-group>
          </b-col>
        </b-row>
      </section>

      <section>
      <h6>Card and form fields</h6>

      <b-card
        b-variant="light"
        style="width:100%"
        header="Card header"
        header-tag="header"
        footer="Card Footer"
        footer-tag="footer">
        <b-form-group
          horizontal
          label="Group Label"
          label-class="font-weight-bold">
          <b-form-group
            horizontal
            label="Street:"
            label-class="text-sm-right"
            label-for="nestedStreet">
              <b-form-input id="nestedStreet" />
          </b-form-group>
          <b-form-group
            horizontal
            label="Number:"
            label-class="text-sm-right"
            label-for="numb">
            <b-form-input id="numb" type="number" />
          </b-form-group>
        </b-form-group>
        <b-form-group
          horizontal
          label="Other Label"
          label-class="font-weight-bold">
          <b-form-group
            horizontal
            label="Date:"
            label-class="text-sm-right"
            label-for="date">
            <b-form-input id="date" type="date"></b-form-input>
          </b-form-group>
          <b-form-group
            horizontal
            label="Disabled:"
            label-class="text-sm-right"
            label-for="disabled">
            <b-form-input disabled id="disabled"></b-form-input>
          </b-form-group>
          <b-form-group
            horizontal
            label="Range slider:"
            label-class="text-sm-right"
            label-for="rangeS">
            <b-form-input type="range" id="rangeS" />
          </b-form-group>
          <b-form-group
            horizontal
            label="Vue slider:"
            label-class="text-sm-right"
            label-for="vSlider">
            <vue-slider v-model="sliderValue" id="vSlider"></vue-slider>
          </b-form-group>
        </b-form-group>
        <b-form-group>
          <b-input-group left="@">
            <b-input placeholder="Username" />
          </b-input-group>
        </b-form-group>
        <b-form-group>
          <b-input-group right="right">
            <b-input placeholder="Password" />
          </b-input-group>
        </b-form-group>
        <b-form-group
          horizontal
          label="Radio buttons"
          label-class="font-weight-bold">
          <b-form-radio-group class="pt-2" :options="['Air', 'Courier', 'Mail']" />
        </b-form-group>
        <b-form-group
          horizontal
          label="Checkboxes"
          label-class="font-weight-bold">
          <b-form-checkbox-group class="pt-2">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        </b-card>
      </section>

      <section>
      <h6>Buttons</h6>

      <b-row v-for="variant in ['primary','secondary','success','outline-success','warning','danger','link']" v-bind:key="variant">
          <b-col v-for="size in ['sm','','lg']" style="margin:.2em 0" v-bind:key="size">
            <b-button :size="size" :variant="variant">
              {{variant}} {{size}}
            </b-button>
          </b-col>
      </b-row>
    </section>

    <section>
      <h6>Button Group - outline</h6>

      <b-button-group>
        <b-button variant="outline-primary">Outline</b-button>
        <b-button variant="outline-info">Info</b-button>
        <b-button variant="outline-warning">Warning</b-button>
        <b-button disabled variant="outline-primary">Disabled</b-button>
        <b-button variant="outline-danger">Danger</b-button>
      </b-button-group>
    </section>

    <section>
      <h6>Button Group - primary</h6>

      <b-button-group>
        <b-button variant="primary">Button 1</b-button>
        <b-button variant="primary">Button 2</b-button>
        <b-button variant="primary">Button 3</b-button>
        <b-button disabled variant="primary">Button Disabled</b-button>
        <b-button variant="primary">Button 5</b-button>
      </b-button-group>
    </section>

    <section>
      <h6>Pagination</h6>

      <b-pagination size="md" :total-rows="40" :per-page="10" />
    </section>

    <section>
      <h6>Breadcrumbs</h6>

      <b-breadcrumb :items="items"/>
    </section>

    <section>
      <h6>Progress bars</h6>

      <b-progress :max="max" class="mb-3">
        <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
        <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
        <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
      </b-progress>
      <b-progress show-progress :max="max" class="mb-3"></b-progress-bar>
        <b-progress-bar variant="primary" :value="43"></b-progress-bar>
        <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
        <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
      </b-progress>
      <b-progress show-value striped :max="max" class="mb-3"></b-progress-bar>
        <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
        <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
        <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
      </b-progress>
      <b-progress :max="max" class="mb-3">
        <b-progress-bar variant="primary" :value="values[0]" show-progress></b-progress-bar>
        <b-progress-bar variant="success" :value="values[1]" animated show-progress></b-progress-bar>
        <b-progress-bar variant="info" :value="values[2]" striped show-progress></b-progress-bar>
      </b-progress>
    </section>

    <section>
      <h6>Badges</h6>

      <b-badge variant="primary">Primary</b-badge>
      <b-badge variant="secondary">Secondary</b-badge>
      <b-badge variant="success">Success</b-badge>
      <b-badge variant="danger">Danger</b-badge>
      <b-badge variant="warning">Warning</b-badge>
      <b-badge variant="info">Info</b-badge>
      <b-badge variant="light">Light</b-badge>
      <b-badge variant="dark">Dark</b-badge>
    </section>

    <section>
      <h6>Tables</h6>

      <b-table striped hover :items="tableItems"></b-table>
    </section>

  </b-container>
</template>

<script>
import VueSlider from 'vue-slider-component';

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      sliderValue: [2, 7],
      max: 100,
      values: [15, 30, 20],
      items: [{
        text: 'Admin',
        href: '#',
      },
      {
        text: 'Manage',
        href: '#',
      },
      {
        text: 'Library',
        active: true,
      },
      ],
      tableItems: [{
        isActive: true,
        age: 40,
        first_name: 'Dickerson',
        last_name: 'Macdonald',
      },
      {
        isActive: false,
        age: 21,
        first_name: 'Larsen',
        last_name: 'Shaw',
      },
      {
        isActive: false,
        age: 89,
        first_name: 'Geneva',
        last_name: 'Wilson',
      },
      {
        isActive: true,
        age: 38,
        first_name: 'Jami',
        last_name: 'Carney',
      },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  section {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 30px;
  }

  section:first-child {
    border-top: 1px solid #ccc;
    padding-top: 10px;
  }

  h6 {
    text-align: right;
    padding: 0.5em 0;
  }
</style>
