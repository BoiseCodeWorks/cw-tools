<template lang="jade">
.col-md-12.questions-component
  .row
    .col-md-8.col-sm-12
      .cw-heading
        h3 Questions?
        h2 Let's talk.
      p Whether you're thinking about starting a new career, interested in learning more about our programs for individuals or businesses, or just want to chat, we're here and we'd love to connect with you. Shoot us an email or your phone number and we'll get back to you soon, or you can chat with us right away using the chat icon below.
    .col-md-4.col-sm-5.col-xs-12
      .cw-card
        h4.title We'll call you
        p Enter your phone number below and we'll give you a ring in the next few days.
        form
          .form-group
            input.form-control.input-lg(name="name" placeholder="Your Name")
          .form-group
            input.form-control.input-lg(name="phone" placeholder="Your Phone")
          .form-group
            button.btn.btn-lg.btn-block.btn-primary Gimme a ring
</template>

<script>
  export default{
    data(){
      return {

      }
    }
  }
</script>

<style lang="sass">
.questions-component
  padding: 15px;
  .cw-card
    background-color: #e5e5e5
    padding: 10px
    // border-radius: 8px
    .title
      font-size: 16px
      font-weight: bold
    .form-group
      margin-bottom: 8px
</style>
