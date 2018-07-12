<template lang="html">
  <div class="">
    <h1>h1. This is a primary heading</h1>
    <h2>h2. This is a secondary heading</h2>
    <h3>h3. Bootstrap heading</h3>
    <h4>h4. Bootstrap heading</h4>
    <h5>h5. Bootstrap heading</h5>
    <h6>h6. Bootstrap heading</h6>
    <div class="">Basic text, no styles applied, it can be <strong>strong if it is more important</strong> or <em>italic to emphasize</em> but it should always be readable and friendly.</div>
    <div class="smallcaps">
      Smallcaps is used a lot throughout the interface.
    </div>
    <div class="">

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.smallcaps {
  // color: $secondary;
  font-variant: small-caps;
  letter-spacing: 0.02em;
  font-weight:400;
}
</style>
