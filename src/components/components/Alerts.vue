<template lang="html">
  <div class="">
    <h1>Bootstrap Vue Directives</h1>
    <b-alert show>Default Alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>
    <b-alert variant="danger"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">
      Dismissible Alert!
    </b-alert>
    <b-alert :show="dismissCountDown"
             dismissible
             variant="warning"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
      <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
      <b-progress variant="warning"
                  :max="dismissSecs"
                  :value="dismissCountDown"
                  height="4px">
      </b-progress>
    </b-alert>

    <b-btn @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-btn>
    <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
    </b-btn>

    <hr>
    <h1>Bootstrap 4 Classes</h1>
    <div class="alert alert-primary" role="alert">
      This is a primary alert—check it out!
    </div>
    <div class="alert alert-secondary" role="alert">
      This is a secondary alert—check it out!
    </div>
    <div class="alert alert-success" role="alert">
      This is a success alert—check it out!
    </div>
    <div class="alert alert-danger" role="alert">
      This is a danger alert—check it out!
    </div>
    <div class="alert alert-warning" role="alert">
      This is a warning alert—check it out!
    </div>
    <div class="alert alert-info" role="alert">
      This is a info alert—check it out!
    </div>
    <div class="alert alert-light" role="alert">
      This is a light alert—check it out!
    </div>
    <div class="alert alert-dark" role="alert">
      This is a dark alert—check it out!dfsdf
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style lang="css">
</style>
