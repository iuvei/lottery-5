<template>
  <div id="product-sec-countdown"></div>
</template>

<script>
  export default {
    data() {
      return {
        timer: ''
      }
    },
    created() {
      const _this = this
      this.$nextTick(() => {
        _this.countdown(480) //结束时间到开始时间的时间差，单位秒
      })
    },
    methods: {
      countdown(sec) {
        const _this = this
        setTimeout(function () {
          var hour = 0
          var minute = 0
          var second = 0
          _this.timer = setInterval(function () {
            if (sec >= 60) {
              minute = Math.floor(sec / 60)
              second = sec % 60
              if (minute >= 60) {
                hour = Math.floor(minute / 60)
                minute = minute % 60
              } else {
                hour = 0
              }
            } else {
              second = sec
              hour = 0
              minute = 0
            }

            hour = parseInt(hour) < 10 && parseInt(hour) > 0 ? '0' + hour : hour
            minute = parseInt(minute) < 10 && parseInt(minute) > 0 ? '0' + minute : minute
            second = parseInt(second) < 10 && parseInt(second) > 0 ? '0' + second : second
            var countdownStr = hour + ':' + minute + ':' + second
            document.getElementById('product-sec-countdown').innerHTML = countdownStr
            sec--
            if (sec <= 0) {
              window.location.reload()
            }
          }, 1000)
        }, 0)
      }
    },
    destroyed() {
      clearInterval(this.timer)
    }
  }
</script>
