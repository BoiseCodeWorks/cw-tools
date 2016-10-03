<template>
  <div id="app">
    <navbar></navbar>
    <section class="container">
      <div class="row">
        <testimonials></testimonials>
      </div>
    </section>
    <section class="container-fluid">
      <div class="row">
        <employer-list></employer-list>
      </div>
    </section>
    <section class="container">
      <questions class="row"></questions>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import EmployerList from './components/EmployerList'
import Questions from './components/Questions'
import Testimonials from './components/Testimonials'

export default {
  components: {
    Navbar,
    EmployerList,
    Questions,
    Testimonials
  }
}
</script>

<style lang="sass">
  body
    font-family: Raleway
    font-size: 15px
    background-color: lighten(#eceef1, 30%)
    margin: 0
    padding-top: 55px
    color: #34495e

  a
    color: #34495e
    text-decoration: none
</style>
