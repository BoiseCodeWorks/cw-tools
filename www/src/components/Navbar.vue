<template lang="jade">
div.navbar-component
  nav.top.fixed(itemscope='', itemtype='http://schema.org/Organization')
  span.logo(itemprop='name')
    a.brand.brand-lg(href='/')
      span.codeworks CodeWorks
      span.city Boise
    h1.red Hey you guys
    h3.blue should be blue
  ul
    li.dropdown
      a.dropdown-toggle(href='javascript:void(0)', data-toggle='dropdown') Courses
      ul.dropdown-menu.inversed-dropdown
        li(v-for="course in courses")
          a(itemprop='url' href='course.url') course.name
    li
      a(itemprop='url', href='/Employers') Employers
    li
      a(itemprop='url', href='/Faqs') FAQ
    li
      a(itemprop='url', href='/Team') Team
    li
      a(itemprop='url', href='/Tuition') Tuition
    li
      a(itemprop='url', href='http://portal.boisecodeworks.com', target='_blank') Login
    li
      a.btn-action(itemprop='url', href='/apply') Apply Now
    li.mobile_menu_btn
      a.btn-action-inverse(itemprop='url', href='#', role='menuitem')
        i.fa.fa-bars
      a.btn-action(itemprop='url', href='/apply') Apply Now
  .action-overflow
    a.btn-action(itemprop='url', href='/apply') Apply Now
</template>


<script>
export default{
  data() {
    return {

    }
  },
}
</script>

<style lang="sass">
@import '../variables'

.navbar-component
  width: 100%
.blue
  color: $theme-color

</style>
