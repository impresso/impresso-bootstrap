<template lang="html">
  <div class="documentation">
    <h1>Typography</h1>
    <p class="">We are using two font families throughout the interface:</p>
    <ul>
      <li>The Base font is a Sans Serif : <em>Source Sans Pro</em>. It can be explicitely applied with the <code>.sans</code> class.</li>
      <li>The alternate font <em class="serif">Playfair Display</em> is used mainly for headings. Use class <code>.serif</code> on any element to apply this font family.</li>
    </ul>
    <h2>
      Utility classes
    </h2>
    <p>Basic text, no styles applied, it can be <strong>bold if it is more important</strong> (<code>&lt;strong&gt;</code>) or <em>italic to emphasize</em> (<code>&lt;em&gt;</code>) whereas <code>.highlight</code> is reserved for <span class="highlight">highlighting words</span> within search results.</p>
    <div class="small-caps">
      Small-caps <code>.small-caps</code> are used a lot throughout the interface. This class is always applied to <code>&lt;label&gt;</code> elements. It is also used for components with the <code>.sm</code> class.
    </div>
    <hr>
    <div class="heading-top">
      Heading-top class is used above headers and for module titles.
    </div>
    <h5>h5 is used for friendly search result titles.
      Found 153 pages <u>matching exactly “Indoeuropean”</u>
      <u>next to “people”</u> published in La Gazette de Lausanne
      <u>between <b>19 May 1810</b> and <b>01 Jan 1835</b></u> or between 20 March 1861 and 30 March March 1861 </h5>
    <div class="">

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
</style>
