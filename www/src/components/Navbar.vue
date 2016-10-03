<template lang="jade">
div.navbar-component
  nav.top.fixed(itemscope='', itemtype='http://schema.org/Organization')
  span.logo(itemprop='name')
    a.brand.brand-lg(href='/')
      span.codeworks CodeWorks
      span.city Boise
  ul
    li.dropdown
      a.dropdown-toggle(href='javascript:void(0)' data-toggle='dropdown') Courses
      ul.dropdown-menu.inversed-dropdown
        li(v-for="course in courses")
          a(itemprop='url' v-bind:href='course.url') {{course.name}}
    li(v-for="link in links")
      a(itemprop='url' v-bind:href='link.url') {{link.name}}
</template>


<script>
import {courses, links} from '../assets'
export default{
  data() {
    return {
      courses,
      links
    }
  },
}
</script>

<style lang="sass">
@import '../variables'

.navbar-component
  width: 100%
.blue
  color: $primary-color

</style>
