<template>
  <main>
    <b-card no-block>
      <b-tabs>
        <b-tab title="Tab 1">
          Tab 1 Contents
        </b-tab>
        <b-tab title="Tab 2">
          Tab 2 Contents <b-button size="md">Boop</b-button>
        </b-tab>
        <b-tab title="Tab 3 (disabled)" disabled>
          Tab 3 Contents
        </b-tab>
      </b-tabs>
    </b-card>
    <br>

    <div>

      <div class="tabs-right">
        <b-button size="sm">Press me</b-button>
        <b-button size="sm">No me</b-button>
      </div>

      <b-tabs>
        <b-tab title="context /<br> list of topics" class="px-3">

          <div class="heading-wrapper">
            <div class="heading-top">Search</div>
            <div class="float-right">
              <b-button size="sm">Refine ...</b-button>
            </div>
          </div>

          <b-form-group description="Try dates and locations" label="Empty form input">
            <b-form-input placeholder="Search for ..."></b-form-input>
            <div class="suggestions">
              <b-media left-align vertical-align="center">
                <b-img slot="aside" blank blank-color="orange" width="40" alt="placeholder" />
                <b class="mt-0 mb-1">Search Result Title</b>
                <br>
                <i>Context ... Cras sit amet nibh libero, in gravida nulla ...</i>
                <div class="float-right">
                  <b-button size="sm">+</b-button>
                  <b-button size="sm">R</b-button>
                </div>
              </b-media>
              <b-media left-align vertical-align="center">
                <b-img slot="aside" blank blank-color="orange" width="40" alt="placeholder" />
                <b class="mt-0 mb-1">Search Result Title</b>
                <br>
                <i>Context ... Cras sit amet nibh libero, in gravida nulla ...</i>
                <div class="float-right">
                  <b-button size="sm">+</b-button>
                  <b-button size="sm">R</b-button>
                </div>
              </b-media>
              <b-media left-align vertical-align="center">
                <b-img slot="aside" blank blank-color="orange" width="40" alt="placeholder" />
                <b class="mt-0 mb-1">Search Result Title</b>
                <br>
                <i>Context ... Cras sit amet nibh libero, in gravida nulla ...</i>
                <div class="float-right">
                  <b-button size="sm">+</b-button>
                  <b-button size="sm">R</b-button>
                </div>
              </b-media>
            </div>

          </b-form-group>

          <div class="heading-wrapper">
            <div class="heading-top">published in (date range)</div>
            <div class="float-right">
              <b-button size="sm">Reset</b-button>
              <b-button size="sm">Refine ...</b-button>
            </div>
          </div>

        </b-tab>
        <b-tab title="headlines <br>of the day" class="px-3">
          Tab 2 Contents <b-button size="md">Boop</b-button>
        </b-tab>
        <b-tab title="table of <br>contents" class="px-3">
          Tab 3 Contents
        </b-tab>
      </b-tabs>


    </div>


  </main>

</template>

<script>
export default {
}
</script>

<style lang="sass">
</style>
