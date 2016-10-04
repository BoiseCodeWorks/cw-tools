<template lang="jade">
a(v-bind:href="tool.url" target="_blank")
  .post
    .content
      .post-highlight
        h1.app-name {{tool.name}}
    .post-content
      .post-body
        h1.app-name {{tool.name}}
        p.bold-caps Description:
        p.thin {{tool.description}}
        p.bold-caps collaborators:
        p.thin
          span.collaborator(v-for="person in tool.collaborators") {{person.name}}
    img(v-bind:src='tool.preview')
</template>

<script>
import {logos, images} from '../assets'

export default{
  props: ['tool'],
  mounted() {
    this.tool.preview = this.tool.preview || images.getRandomBg();
  },
  data() {
    return{
      logos
    }
  }

}
</script>

<style lang="sass">
.container
  margin-top: 10%

.post
  position: relative
  width: 500px
  height: 300px
  background: #fff
  margin: 0 auto
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
  transition: all 400ms ease
  .post-highlight
    opacity: 0
  .post-content
    opacity: 1
    transition: all 400ms ease
  &:hover
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)
  img
    width: 100%
    height: 50%
    object-fit: cover
    transition: all 400ms ease
  &:hover
    .post-content
      opacity: 0
    .post-highlight
      opacity: 1
    img
      height: 100%
      transition: all 400ms ease
    .avatar
      transition: all 400ms ease
    p
      color: #fff
      transition: all 400ms ease
    button
      color: #fff
      margin-top: -0px
      background: rgba(0, 0, 0, 0.6)
      transition: all 400ms ease
    .hover-content
      opacity: 1
      transition: all 400ms ease

.content
  position: absolute
  display: -ms-flexbox
  display: flex
  justify-content: center
  width: 100%
  height: 100%
  align-items: center
  text-align: center

.post-content
  position: absolute
  display: flex
  bottom: 25px
  left: 13px

.app-name
  color: white
  text-shadow: 3px 1px 0px rgba(150, 150, 150, 1)

p
  position: relative
  font-weight: 300
  font-size: 20px
  margin-top: 1px

button
  background: #67a037
  font-size: 10px
  color: #fff
  font-weight: 900
  padding: 10px 15px
  cursor: pointer
  text-transform: uppercase
  letter-spacing: 1px
  border-radius: 3px
  border: 0
  transition: all 400ms ease

.bold-caps
  text-transform: uppercase
  font-size: 12px
  font-weight: 700

.thin
  font-size: 16px

.hover-content
  opacity: 0
  transition: all 400ms ease

.collaborator
  margin-right: 8px
  display: inline-block


</style>
