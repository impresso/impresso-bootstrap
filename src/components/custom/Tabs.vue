<template>
  <main>
    <b-card no-block>
      <b-tabs>
        <b-tab title="Tab 1">
          <b-card no-block>
            <pre>
&lt;b-card>
  &lt;b-tabs>
    &lt;b-tab title="Tab 1">
      &lt;b-card>
        Tab 1 contents
      &lt;/b-card>
    &lt;/b-tab>
    &lt;b-tab title="Tab 3 (disabled)" disabled>
      Tab 3 contents
    &lt;/b-tab>
  &lt;/b-tabs>
&lt;/b-card>
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
