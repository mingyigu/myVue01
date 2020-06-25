
<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <div>
        <div class="div1">
            <button v-on:click="show1 = !show1">平滑消失</button>
            <transition name="fade">
                <p v-show="show1" id="p1">平滑消失</p>
            </transition>
        </div>

        <div class="div1">
            <button v-on:click="show2 = !show2">移动消失</button>
            <transition name="slide-fade">
                <p v-show="show2">移动消失</p>
            </transition>
        </div>

        <div class="div1">
            <button v-on:click="show3 = !show3">放大缩小消失</button>
            <transition name="bounce">
                <p v-show="show3">移动消失</p>
            </transition>
        </div>

        <div class="div1">
            <button v-on:click="show4 = !show4">移动消失2.0</button>
            <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
                <p v-if="show4">移动消失2.0</p>
            </transition>
        </div>
        <div class="div1">
            <button v-on:click="show5 = !show5">自定义</button>
            <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
                <p v-if="show5">自定义</p>
            </transition>
        </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'animation',
  data () {
    return {
      msg: 'Hello animation',
      show1: 'true',
      show2: 'true',
      show3: 'true',
      show4: 'true',
      show5: 'true',
    }
  },
    /*自定义所以的方法*/
    methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
}




</script>
<style scoped>
.div1 {
    width: 200px;
    height: 100px;
    margin: auto;
}


/*平滑消失*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


/*移动消失*/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/*放大缩小消失*/
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
