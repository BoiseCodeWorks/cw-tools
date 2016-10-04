<template lang="jade">
div.navbar-component
  nav(itemscope='' itemtype='http://schema.org/Organization')
    div
      a.brand.brand-lg(href='/')
        img.nav-logo(v-bind:src="logos.solidWhite")
    div
      a Login
</template>


<script>
import {logos, links} from '../assets'

export default{
  data() {
    return {
      links,
      logos
    }
  },
}
</script>

<style lang="sass">
@import '../variables'

.navbar-component
  width: 100%
  margin-bottom: 55px
  padding: 10px 25px
  background: $primary-color
  color: white
  nav
    display: flex
    justify-content: space-between
    align-items: center
  a
    color: white
    text-decoration: none
    cursor: pointer
.nav-logo
  width: 50px

</style>
