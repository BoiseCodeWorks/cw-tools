<template lang="jade">
  .col-md-12.employer-list-component
    .employer-logos
      .cw-heading
        h2.text-center.title Employers
        .cw-heading-spacer
        p.text-center.description We work with amazing companies around the world, connecting them with our graduates,
          | training their developers and partnering with them to impact the communities around each of our campuses.

        .employer-logo.col-sm-4(v-for="employer in employers")
          img(v-bind:src="employer.logo")
      .col-md-12.text-center
        .actions
          button.btn.btn-lg.btn-primary Learn more about our hiring partners

</template>

<style lang="sass">
.employer-list-component
  background-color: #747d84
  background-image: url('https://www.theironyard.com/content/dam/theironyard/home/employers-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white
  .cw-heading
    .title
      color: white
    .cw-heading-spacer
      background-color: white
  .employer-logos
    max-width: 900px
    margin-left: auto
    margin-right: auto
    .employer-logo
      text-align: center
      img
        width: 50%
        max-width: 230px
  .actions
    margin-top: 20px
    margin-bottom: 20px
</style>


<script>
import { employers } from '../assets'

  export default{
    data() {
      return {
        employers
      }
    }
  }
</script>




