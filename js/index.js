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
    this.options = this.choices.split(',');
  },
  mounted: function mounted() {var _this = this;
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
  template: '\n    <div>\n      <bs-player :image="images[random(images.length)]"></bs-player>\n      <bs-chooser choices="Sugar Puffs, Frosties"></bs-chooser>\n    </div>\n  ' });







function random(n) {
  return Math.floor(Math.random() * n);
}