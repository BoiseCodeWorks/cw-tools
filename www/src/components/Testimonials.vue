<template lang="jade">
  .col-md-12.testimonials-component
    .cw-heading.text-center
      h2.title Hear what our students have to say
      .cw-heading-spacer
    .row
      .col-md-6
        .testimonials
          article.testimonial
            .testimonial-image
              .bubble-image
                img.attachment-small.wp-post-image(width='264', height='264', src='http://themextemplates.com/demo/academy/wp-content/uploads/2013/02/avatar_27.jpg', alt='avatar_27')
                .substrate
                  img(src='http://themextemplates.com/demo/academy/wp-content/themes/academy/images/bgs/testimonial_bg.png', alt='')
            .testimonial-text
              p Pellentesque pulvinar sodales quam a placerat. Vivamus quis vitae consectetur ligula. Ut bibendum eleifend quam eget fermentum. Nulla facilisi. Augue aliquam augue vel odio faucibus luctus!
              h6.author.nomargin Jessica White - Hired by Klowd
          article.testimonial
            .testimonial-image
              .bubble-image
                img.attachment-small.wp-post-image(width='270', height='270', src='http://themextemplates.com/demo/academy/wp-content/uploads/2013/02/avatar_11.jpg', alt='avatar_11')
                .substrate
                  img(src='http://themextemplates.com/demo/academy/wp-content/themes/academy/images/bgs/testimonial_bg.png', alt='')
            .testimonial-text
              p Donec convallis, mauris quis tempor pulvinar, lorem neque rhoncus nisl, at hendrerit quam leo volutpat est. Quisque fringilla, nulla vitae vehicula fermentum, nibh dolor tristique, scelerisque.
              h6.author.nomargin Mary Springs - Hired by MBSI
      .col-md-6
        .testimonials
          article.testimonial
            .testimonial-image
              .bubble-image
                img.attachment-small.wp-post-image(width='265', height='265', src='http://themextemplates.com/demo/academy/wp-content/uploads/2013/02/avatar_12.jpg', alt='avatar_12')
                .substrate
                  img(src='http://themextemplates.com/demo/academy/wp-content/themes/academy/images/bgs/testimonial_bg.png', alt='')
            .testimonial-text
              p Maecenas sed metus sem, ac varius ante. Nullam non mi tempor nisl varius consectetur vel in ipsum. Vestibulum sem diam, vehicula sit amet luctus adipiscing, viverra in sem. Proin molestie.
              h6.author.nomargin John Dawson - Hired by Paylocity
          article.testimonial
            .testimonial-image
              .bubble-image
                img.attachment-small.wp-post-image(width='270', height='270', src='http://themextemplates.com/demo/academy/wp-content/uploads/2013/02/avatar_11.jpg', alt='avatar_11')
                .substrate
                  img(src='http://themextemplates.com/demo/academy/wp-content/themes/academy/images/bgs/testimonial_bg.png', alt='')
            .testimonial-text
              p Donec convallis, mauris quis tempor pulvinar, lorem neque rhoncus nisl, at hendrerit quam leo volutpat est. Quisque fringilla, nulla vitae vehicula fermentum, nibh dolor tristique, scelerisque.
              h6.author.nomargin Mary Springs - Hired by Scentsy
</template>

<style lang="sass">

.cw-heading
  margin-bottom: 30px

.testimonial
  display: flex
  margin-bottom: 1.5em;
  width: 100%;
  h3
    font-size: 28px
  .testimonial-image
    width: 87px;


.testimonial-text
  margin-bottom: 0.5em;
  font-style: italic;
  margin-left: 10px
  p
    font-size: 1.1em


.bubble-image
    position: relative;
    overflow: hidden;
    width: 87px;
    height: 88px;
    img
      display: block
      width: 100%
      height: auto


.substrate
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  width: 100%;
</style>

<script>
  export default{
    data(){
      return {

      }
    }
  }
</script>


