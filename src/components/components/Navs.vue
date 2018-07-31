<template>
  <main>
    <b-card no-block>
      <b-tabs>
        <b-tab title="Tab 1">
          <b-card no-block>
            <pre>
&lt;b-tabs>
  &lt;b-tab title="Tab 1">
    Tab 1 contents
  &lt;/b-tab>
  &lt;b-tab title="Tab 3 (disabled)" disabled>
    Tab 3 contents
  &lt;/b-tab>
&lt;/b-tabs>
            </pre>
          </b-card>
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

          <pre>
<code>&lt;div class="tabs-right"></code>
  &lt;b-button size="sm">Press me</b-button>
  &lt;b-button size="sm">No me</b-button>
<code>&lt;/div></code>
&lt;b-tabs>
  &lt;b-tab title="Context /&lt;br>List of topics">
    Tab 1 contents
  &lt;/b-tab>
  &lt;b-tab title="Tab 2 Title">
    Tab 2 contents
  &lt;/b-tab>
&lt;/b-tabs>
          </pre>

          <div class="heading-wrapper">
            <div class="heading-top">Search</div>
            <div class="float-right">
              <b-button size="sm">Refine ...</b-button>
            </div>
          </div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">@example.com</span>
  </div>
</div>

<label for="basic-url">Your vanity URL</label>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
  </div>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button">Button</button>
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
  <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
</div>

          <b-form-group description="Try dates and locations" label="Empty form input">
            <b-form-input placeholder="Search for ..."></b-form-input>
            <div class="suggestions">
              <b-media left-align vertical-align="center" class="suggestion">
                <b-img slot="aside" blank blank-color="orange" width="40" alt="placeholder" />
                <b class="mt-0 mb-1">Search Result Title</b>
                <br>
                <i>Context ... Cras sit amet nibh libero, in gravida nulla ...</i>
                <div class="float-right">
                  <strong>67867867</strong>
                  <b-button size="sm">+</b-button>
                  <b-button size="sm">R</b-button>
                </div>
              </b-media>
              <b-media left-align vertical-align="center" class="suggestion">
                <b-img slot="aside" blank blank-color="orange" width="40" alt="placeholder" />
                <b class="mt-0 mb-1">Search Result Title</b>
                <br>
                <i>Context ... Cras sit amet nibh libero, in gravida nulla ...</i>
                <div class="float-right">
                  <b-button size="sm">+</b-button>
                  <b-button size="sm">R</b-button>
                </div>
              </b-media>
              <b-media left-align vertical-align="center" class="suggestion">
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
};
</script>

<style lang="sass">
</style>
