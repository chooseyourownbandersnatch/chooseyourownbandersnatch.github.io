var images = [
'https://www.goombastomp.com/wp-content/uploads/2018/12/tumblr_pkehu6PaoE1weghcuo2_500.gif',
'https://m0.joe.ie/wp-content/uploads/2018/12/31115507/Bander.gif',
'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/black-mirror-bandersnatch-netflix-10-1546183044.gif',
'http://secretldn.com/wp-content/uploads/2018/12/Netflix-Black-Mirror-2018.gif'];


Vue.component(
'bs-player',
{
  props: ['image'],
  template: '\n<div class="player" :style="{ \'background-image\': \'url(\' + image + \')\' }">\n</div>\n    ',



  data: function data() {
    return {};

  },
  computed: {},

  methods: {},

  created: function created() {
  },
  mounted: function mounted() {
  } });



Vue.component(
'bs-chooser',
{
  props: ['choices'],
  template: '\n      <div class="chooser" :class="chooserClass">\n        <div class="chooser-timer">\n        </div>\n        <div class="chooser-choices">\n          <button class="chooser-choice" v-for="(option, index) in options" @click="select(index)" :class="selected === -1 ? null : (selected === index ? \'selected\' : \'hidden\')">\n            {{ option }}\n          </button>\n        </div>\n      </div>\n    ',










  data: function data() {
    return {
      options: [],
      selected: -1,
      active: false };

  },
  computed: {
    chooserClass: function chooserClass() {
      return [
      this.selected !== -1 ? 'selectionMade' : '',
      this.active ? 'active' : ''].
      join(' ');
    } },

  methods: {
    select: function select(option) {
      if (this.selected === -1) {
        this.selected = option;
      }
    } },

  created: function created() {

  },
  mounted: function mounted() {var _this = this;
    this.options = this.choices.split(',');
    this.selected = -1;
    this.active = false;

    setTimeout(function () {
      _this.active = true;
    }, 0);

    setTimeout(function () {
      if (_this.selected === -1) {
        _this.select(random(_this.options.length));
      }

      _this.active = false;
      // Fire callback
    }, 10 * 1000);
  } });




var app = new Vue({
  el: '#app',
  template: '\n    <div>\n      <bs-player :image="image"></bs-player>\n      <bs-chooser :choices="choices" :key="key"></bs-chooser>\n    </div>\n  ',





  data: {
    key: 123,
    image: '',
    choices: '' },

  created: function created() {var _this2 = this;
    this.image = images[random(images.length)];
    this.choices = 'Sugar Puffs, Frosties';

    if (window.location.search) {
      var queryString = window.location.search;

      if (queryString.charAt(0) === '?') {
        queryString = queryString.substring(1);
      }

      queryString = queryString.split('|');

      queryString = queryString.map(decodeURIComponent);

      if (queryString[0]) {
        this.image = queryString[0];
      }
      if (queryString[1] && queryString[2]) {
        this.choices = queryString[1] + ', ' + queryString[2];
      }
    }

    setInterval(function () {
      _this2.key = random(999999);
    }, 20 * 1000);
  } });


function random(n) {
  return Math.floor(Math.random() * n);
}