<template lang="jade">
.col-md-12.countdown-component
  .col-md-6
    .cw-heading.alt
      h2.text-center.title Change your career
      .cw-heading-spacer
      p.text-center.description It's limited seating! Hurry up
      .counter-container
        .counter-box
          .count {{days}}
          .title Days
        .colon :
        .counter-box
          .count {{hours}}
          .title Hours
        .colon :
        .counter-box.minutes
          .count {{minutes}}
          .title Minutes
        .colon :
        .counter-box.seconds
          .count {{seconds}}
          .title Seconds
  .col-md-6.text-center.callout-container
    .callout
      h2 Get in Touch
      form
        .form-group
          input.form-control(placeholder="Whats your name..." type="text" required)
        .form-group
          input.form-control(placeholder="Whats your email..." type="email" required)
        .form-group
          input.form-control(placeholder="Whats your phone..." type="tel" required)
        .form-group
          button.btn.btn-success.btn-block(type="submit") Do It

</template>


<script>
const start = new Date(2017, 0, 9)
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
  }},
  mounted() {
    const getTime = () => {
   		let vm = this
      let timer = setInterval(() => {
        let t = Date.parse(start) - Date.parse(new Date());
      	vm.days = Math.floor( t/(1000*60*60*24) );
        vm.hours = Math.floor( (t/(1000*60*60)) % 24 );
        vm.minutes = Math.floor( (t/1000/60) % 60 );
        vm.seconds = Math.floor( (t/1000) % 60 );
      }, 1000)
   }
   getTime()
  }
}
</script>

<style lang="sass">
@import '../variables'

.countdown-component
  background: $primary-color
  color: $lightclouds
  .counter-container
    display: flex
    flex-direction: row
    text-align: center
    .counter-box
      position: relative
      display: inline-block
      float: left
      width: 88px
      height: 104px
      text-align: center
      border-top: 3px solid #676d70
      border-bottom: 3px solid #495154
      border-radius: 5px
      background: #676d70
      font-size: 60px
    .colon
      display: inline-block
      margin-top: -30px
      font-size: 5em
      margin: 8px
      float: left
    .title
      position: relative
      font-size: .3em

  .callout-container
    padding: 2em
    .callout
      padding: 51px 67px 3px;
      position: relative;
      background-color: #fff;
      text-align: center;
      border-radius: 4px;
      h2
        color: $primary-color

</style>
