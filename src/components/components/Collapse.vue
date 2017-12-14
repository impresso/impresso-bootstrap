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
.dark { background-color: rgb(124,124,124); }
.padding { padding:0.2em; }

.collapseTitle {
  width:100%;
  display: block;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0.75em 0.6em 0.6em 0.8em;
  margin-top: 0.2em;
  border: none;
  background-color: rgb(244,244,244);
  color: rgba(0,0,0,0.65);

  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: left;
  font-size: 0.8rem;

  transition-delay: all .4s;
  transition: all .4s;
}
.collapseTitle::after {
  content: "\e316";
  font-family: 'Material Icons';
  font-size: 1.2rem;
  position: relative;
  top: -.1em;
  opacity: 0.8;
  float: right;
  transition: all 0.2s;
}
.collapseTitle.collapsed {
  border-radius: 0.2rem;
  opacity: 0.7;
}
.collapseTitle.collapsed:after {
  transform: rotate(180deg);
}

.collapseTitle:active, .collapseTitle:focus, .collapseTitle:hover {
  outline: 0;
  opacity: 1;
}
.card {
  background-color: rgb(244,244,244);
  border: none;
  border-radius: 0 0 0.2em 0.2em;
  margin-bottom: 0.2em;
}
.card-body {
  font-family: Lato;
  color: rgba(0,0,0,0.8);
  font-size: 0.9rem;
  margin: 0.75em;
  padding: 0;
}

.collapsible {
  margin: 0 0.2em;
}

</style>
