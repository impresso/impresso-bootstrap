<template lang="html">
  <main>
    <b-form-group description="Try dates and locations" label="Form input with suggestions">
      <b-form-input placeholder="Search for ..."></b-form-input>
      <div class="suggestions">
        <b-media class="suggestion">
          <b-img slot="aside" blank blank-color="teal" width="40" alt="placeholder" />
          <b class="suggestion-title">Search Result Title</b>
          <span class="suggestion-results">
            <b class="txt-clr-accent-secondary">234</b>
            <br>1.676
            <br>
            <b-button size="sm" class="mt-2">+</b-button>
            <b-button size="sm" class="mt-2">R</b-button>
          </span>
          <br>
          <i class="suggestion-context">Context ... Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla Cras sit amet nibh libero, in gravida nulla ...</i>
          <span class="suggestion-results">
          </span>
        </b-media>
        <b-media left-align vertical-align="center" class="suggestion">
          <b-img slot="aside" blank blank-color="teal" width="40" alt="placeholder" />
          <b class="mt-0 mb-1">Search Result Title</b>
          <br>
          <i>Context ... Cras sit amet nibh libero, in gravida nulla ...</i>
          <div class="float-right">
            <b-button size="sm">+</b-button>
            <b-button size="sm">R</b-button>
          </div>
        </b-media>
        <b-media left-align vertical-align="center" class="suggestion">
          <b-img slot="aside" blank blank-color="teal" width="40" alt="placeholder" />
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

    <b-card>
      <pre>
        &lt;b-form-group description="Try dates and locations" label="Form input with suggestions"&gt;
          &lt;b-form-input placeholder="Search for ..."&gt;&lt;/b-form-input&gt;
          &lt;div class="suggestions"&gt;
          &lt;b-media class="suggestion"&gt;
            &lt;b-img slot="aside" blank blank-color="teal" width="40" alt="placeholder" /&gt;
            &lt;b class="suggestion-title"&gt;Search Result Title&lt;/b&gt;
            &lt;span class="suggestion-results"&gt;
              &lt;b class="txt-clr-accent-secondary"&gt;234&lt;/b&gt;
              &lt;br&gt;1.676
              &lt;br&gt;
              &lt;b-button size="sm" class="mt-2"&gt;+&lt;/b-button&gt;
              &lt;b-button size="sm" class="mt-2"&gt;R&lt;/b-button&gt;
            &lt;/span&gt;
            &lt;br&gt;
            &lt;i class="suggestion-context"&gt;Context ... in gravida nulla ...&lt;/i&gt;
            &lt;span class="suggestion-results"&gt;
            &lt;/span&gt;
          &lt;/b-media&gt;
          &lt;/div&gt;
        &lt;/b-form-group&gt;
      </pre>
    </b-card>
    <br>

    <div class="heading-wrapper">
      <div class="heading-top">Search</div>
      <div class="float-right">
        <b-button size="sm">Refine ...</b-button>
      </div>
    </div>

    <b-card>
      <pre>
        &lt;div class="heading-wrapper">
          &lt;div class="heading-top">Search&lt;/div>
          &lt;div class="float-right">
            &lt;b-button size="sm">Refine ...&lt;/b-button>
          &lt;/div>
        &lt;/div>
      </pre>
    </b-card>
    <br>


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


    <div class="heading-wrapper">
      <div class="heading-top">Checkboxes</div>
      <div class="float-right">
        <b-button size="sm">Reset</b-button>
        <b-button size="sm">Refine ...</b-button>
      </div>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
      <label class="form-check-label" for="defaultCheck1">
        Default checkbox
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
      <label class="form-check-label" for="defaultCheck2">
        Disabled checkbox
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
      <label class="form-check-label" for="inlineCheckbox1">1</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
      <label class="form-check-label" for="inlineCheckbox2">2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
      <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
      <label class="form-check-label" for="inlineRadio1">1</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
      <label class="form-check-label" for="inlineRadio2">2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
      <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
    </div>

  </main>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
