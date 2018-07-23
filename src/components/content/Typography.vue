<template lang="html">
  <div class="documentation">
    <h1>Typography</h1>
    <p class="">We are using two font families throughout the interface:</p>
    <ul>
      <li>The Base font is a Sans Serif : <em>Source Sans Pro</em>. It can be explicitely applied with the <code>.sans</code> class.</li>
      <li>The alternate font <em class="serif">Playfair Display</em> is used mainly for headings. Use class <code>.serif</code> on any element to apply this font family.</li>
    </ul>
    <h2>
      Headings
    </h2>
    <div class="flexbox --border">
      <div class="flexbox-column"><h1>First level header</h1>
        <p><code>&lt;h1&gt;</code> or <code>.h1</code></p>
      </div>
      <div class="flexbox-column"><h2>Second level header</h2>
        <p><code>&lt;h2&gt;</code> or <code>.h2</code></p>
      </div>
      <div class="flexbox-column"><h3>Third level header</h3>
        <p><code>&lt;h3&gt;</code> or <code>.h3</code></p>
      </div>
      <div class="flexbox-column"><h4>Fourth level header</h4>
        <p><code>&lt;h4&gt;</code> or <code>.h4</code></p>
      </div>
      <div class="flexbox-column"><h5>Fifth level header</h5>
        <p><code>&lt;h5&gt;</code> or <code>.h5</code></p>
      </div>
      <div class="flexbox-column"><h6>Sixth level header</h6>
        <p><code>&lt;h6&gt;</code> or <code>.h6</code></p>
      </div>
    </div>
    <br>
    <h2>
      Body text
    </h2>
    <p>Basic text, no styles applied, it can be <strong>bold if it is more important</strong> (<code>&lt;strong&gt;</code>) or <em>italic to emphasize</em> (<code>&lt;em&gt;</code>) whereas <code>.highlight</code> is reserved for <span class="highlight">highlighting words</span> within search results.</p>
    <br>
    <h2>
      Interface text
    </h2>
    <div class="small-caps">
      Small caps (<code>.small-caps</code>) are used a lot throughout the interface. This class is always applied to <code>&lt;label&gt;</code> elements. It is also used for components with the <code>.sm</code> class.
    </div>
    <hr>
    <div class="heading-top">
      <code>.heading-top</code> class is used above headers and for module titles.
    </div>
    <h5>h5 is used for friendly search result titles.
      Found 153 pages <u>matching exactly “Indoeuropean”</u>
      <u>next to “people”</u> published in La Gazette de Lausanne
      <u>between <b>19 May 1810</b> and <b>01 Jan 1835</b></u> or between 20 March 1861 and 30 March March 1861 </h5>
    <div class="">

    </div>
    <br>
    <h2>
      Utility classes
    </h2>
    <div class="flexbox">
      <div class="flexbox-column"><p class="txt-clr-primary">Primary color</p>
        <p><code>.txt-clr-primary</code></p>
      </div>
      <div class="flexbox-column"><p class="txt-clr-secondary">Secondary color</p>
        <p><code>.txt-clr-secondary</code></p>
      </div>
      <div class="flexbox-column"><p class="txt-clr-tertiary">Tertiary color</p>
        <p><code>.txt-clr-tertiary</code></p>
      </div>
      <div class="flexbox-column"><p class="txt-clr-bg-primary">Primary background color</p>
        <p><code>.txt-clr-bg-primary</code></p>
      </div>
      <div class="flexbox-column"><p class="txt-clr-bg-secondary">Secondary background color</p>
        <p><code>.txt-clr-bg-secondary</code></p>
      </div>
      <div class="flexbox-column"><p class="txt-clr-accent">Accent color</p>
        <p><code>.txt-clr-accent</code></p>
      </div>
    </div>
    <div class="flexbox bg-clr-accent">
      <div class="flexbox-column"><p class="txt-clr-primary">Primary color</p>
        <p><code>.txt-clr-primary</code></p>
      </div>
      <div class="flexbox-column"><p class="txt-clr-secondary">Secondary color</p>
        <p><code>.txt-clr-secondary</code></p>
      </div>
      <div class="flexbox-column"><p class="txt-clr-tertiary">Tertiary color</p>
        <p><code>.txt-clr-tertiary</code></p>
      </div>
      <div class="flexbox-column"><p class="txt-clr-bg-primary">Primary background color</p>
        <p><code>.txt-clr-bg-primary</code></p>
      </div>
      <div class="flexbox-column"><p class="txt-clr-bg-secondary">Secondary background color</p>
        <p><code>.txt-clr-bg-secondary</code></p>
      </div>
      <div class="flexbox-column"><p class="txt-clr-accent-secondary">Accent color</p>
        <p><code>.txt-clr-accent</code></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
</style>
