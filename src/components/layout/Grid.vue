<template lang="html">
  <div class="layout">
  <h1>Layout Grid</h1>
  <br>
  <h5>Class <code>.flexbox</code></h5>

  <div class="flexbox">
    <div class="flexbox-column">
      <code>.flexbox-column</code>
    </div>
    <div class="flexbox-column">
      <code>.flexbox-column</code>
    </div>
    <div class="flexbox-column">
      <code>.flexbox-column</code>
    </div>
    <div class="flexbox-column">
      The last <code>.flexbox-column</code> is stretched and right aligned.
    </div>
  </div>

  <hr>
  <br>
  <h5>Class <code>.flexbox --border</code></h5>

  <div class="flexbox --border">
    <div class="flexbox-column">
      <code>.flexbox-column</code>
    </div>
    <div class="flexbox-column">
      <code>.flexbox-column</code>
    </div>
    <div class="flexbox-column">
      <code>.flexbox-column</code>
    </div>
    <div class="flexbox-column">
      The last <code>.flexbox-column</code> is stretched and right aligned.
    </div>
  </div>

  <br>
  <hr>

  <label for="">Examples with elements</label>

  <br>
  <br>

  <div class="heading-top px-3">
    Search Summary
  </div>
  <div class="flexbox">
    <div class="flexbox-column">
      <h5>Found 153 pages <u>matching exactly “Indoeuropean”</u>
        <u>next to “people”</u> published in La Gazette de Lausanne
        <u>between <b>19 May 1810</b> and <b>01 Jan 1835</b></u> or between 20 March 1861 and 30 March March 1861.</h5>
    </div>
    <div class="flexbox-column ml-5">
      <button class="btn-sm btn-secondary mb-1">Save Search</button>
      <button class="btn-sm btn-secondary">Compare ...</button>
    </div>
  </div>

  <br>

  <div class="flexbox --border">

    <div class="flexbox-column">
      <label for="radios0" class="label">Group Results by</label>
      <b-form-radio-group size="sm" buttons id="radios0" name="sad">
        <b-form-radio value="list">Issue</b-form-radio>
        <b-form-radio value="page">Page</b-form-radio>
        <b-form-radio value="art">Article</b-form-radio>
      </b-form-radio-group>
    </div>

    <div class="flexbox-column">
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

    <div class="flexbox-column">
      <label for="radios2" class="label">Display as</label>
      <b-form-radio-group size="sm" buttons id="radios2" name="radioSubComponent">
        <b-form-radio value="list">As List</b-form-radio>
        <b-form-radio value="tiles">As Tiles</b-form-radio>
      </b-form-radio-group>
    </div>

  </div>

  <br>

  <br>
  <h5>Class <code>.l-submarine</code></h5>

  <div class="l-submarine bg-clr-accent">

    <a class="l-submarine-column text-right" href="">
      <div class="small-caps">
        Previous Result
      </div>
      <div>La Gazette de Lausanne - Lundi 16 Mai 2018</div>
    </a>

    <div class="g-ball" style="">
      <div></div>
    </div>

    <a class="l-submarine-column" href="">
      <div class="small-caps">
        Next Result
      </div>
      <div>La Gazette de Lausanne - Lundi 16 Mai 2018</div>
    </a>

    <div>
      <button type="button" name="button" class="btn btn-secondary btn-sm">Return to Result List</button>
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
