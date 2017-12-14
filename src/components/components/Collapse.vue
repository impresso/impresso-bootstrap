<template lang="html">
  <div class="dark">
    <hr>
    <div class="collapsible">
      <b-btn v-b-toggle.collapse1 class="collapseTitle">Collapsible 1</b-btn>
      <b-collapse visible id="collapse1">
        <b-card>
          This is the content. It is within a <code>&lt;b-card&gt;</code> tag.
          This is the content. It is within a <code>&lt;b-card&gt;</code> tag.
          This is the content. It is within a <code>&lt;b-card&gt;</code> tag.
          This is the content. It is within a <code>&lt;b-card&gt;</code> tag.
          <br>
          <br>
          I should start open!
        </b-card>
      </b-collapse>
    </div>

    <div class="collapsible">
      <b-btn v-b-toggle.collapse2 class="collapseTitle">Collapse2 Title</b-btn>
      <b-collapse id="collapse2">
        <b-card>
          This is the content. It is within a <code>&lt;b-card&gt;</code> tag.
          I should start closed!
        </b-card>
      </b-collapse>
    </div>

    <div class="collapsible">
      <b-btn v-b-toggle.collapse3 class="collapseTitle">Collapse3 Title</b-btn>
      <b-collapse id="collapse3">
        <b-card>
          This is the content. It is within a <code>&lt;b-card&gt;</code> tag.
          I should start closed!
        </b-card>
      </b-collapse>
    </div>

    <div class="collapsible">
      <b-btn v-b-toggle.collapse4 class="collapseTitle">Collapse4 Title</b-btn>
      <b-collapse id="collapse4">
        <b-card>
          This is the content. It is within a <code>&lt;b-card&gt;</code> tag.
          I should start closed!
        </b-card>
      </b-collapse>
    </div>

    <i class="material-icons">face</i>

  </div>




</template>

<script>
export default {};
</script>

<style lang="scss">

</style>
