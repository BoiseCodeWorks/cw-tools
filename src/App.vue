<template>
  <div id="app">
    <navbar></navbar>
    <div class="main-content">
      <card v-for="tool in tools" :tool="tool"></card>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Card from './components/Card'
import { tools } from './assets'

export default {
  components: {
    Navbar,
    Card
  },
  data() {
    return {
      tools
    }
  }
}
</script>

<style lang="sass">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300)

body
  background: #eee
  font-family: 'Open Sans', Raleway, sans-serif
  font-size: 15px
  margin: 0
  color: #34495e

a
  color: #34495e
  text-decoration: none
.main-content
  display: flex
  align-items: center
  justify-content: space-around
  flex-wrap: wrap

</style>
