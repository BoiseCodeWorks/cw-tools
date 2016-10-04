exports.logos = {
    main: 'https://bcw.blob.core.windows.net/public/img/www/assets/img/logos/cw-logo.png',
    full: 'https://bcw.blob.core.windows.net/public/img/www/assets/img/logos/cw-logo-square-black-outline.png',
    solidWhite: 'https://bcw.blob.core.windows.net/public/img/www/assets/img/logos/cw-logo-solid-white.png',
    solidBlack: 'https://bcw.blob.core.windows.net/public/img/www/assets/img/logos/cw-logo-solid-black.png',
    square: 'https://bcw.blob.core.windows.net/public/img/www/assets/img/logos/cw-logo-square.png'
  }

exports.tools = [{
  name: 'Queue',
  url: 'https://zmixon.github.io/deep-blue-blues-queues/index.html',
  collaborators: [{name:'Team Deep Blue'}],
  preview: 'https://www.smashingmagazine.com/wp-content/uploads/2016/08/microinteractions-notification-bell-1.gif',
  description: 'A simple way to prioritize student help'
},{
  name: 'Clueless',
  url: '',
  collaborators: [{name:'Team RoombaSharks'}],
  preview: '',
  description: 'A tool used to gather live feedback of student understanding'
}];


exports.images = {
  backgrounds: [
    'https://lh3.googleusercontent.com/-xOzqfpVNS24/VyrTMwc07yI/AAAAAAAAoBk/HarzBOmPshcZAJNZ2T_pB87llmsIQiLOw/w1920-h1080/mountainsdawn-new%25281080%2529.png',
    'http://www.fandroides.com/wp-content/uploads/2014/04/canyonsdawn.png',
    'https://lh3.googleusercontent.com/-wl-AjLU19RQ/VVYj7AjH86I/AAAAAAAAD2U/7phIizBzlAg/w1920-h1080/7hCMOpp.png',
    'http://pre07.deviantart.net/9393/th/pre/f/2015/341/d/6/flat_landscape__winter_edition__by_jovicasmileski-d9jbz70.jpg',
    'http://pre05.deviantart.net/27f5/th/pre/f/2015/310/1/5/flat_landscape_wallpaper_by_nicknufayl-d9frf2v.png',
    'http://img02.deviantart.net/8e00/i/2015/260/8/2/flat_landscape_by_ben_aka_riot-d8s19au.png',
    'http://3.bp.blogspot.com/-dXxdKFkVrdw/VKLa3bMmv2I/AAAAAAAAVjI/Lp0vf22tynE/s1600/sandiegodusk.png'
  ],
  getRandomBg() {
    const i = Math.floor(Math.random() * this.backgrounds.length);
    return this.backgrounds[i];
  }
}
