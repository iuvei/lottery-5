<template>
  <div class="lottery-hall">
    <Navbar>
      <span slot="headtitle">{{test}}</span>
    </Navbar>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <button @click="change">12222222</button>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'lotteryHall',
    components: {
      Navbar
    },
    methods: {
      change() {
        this.$store.commit(SET_TEST, 111)
      }
    },
    computed: {
      ...mapGetters([
        'test'
      ])
    },
    mounted() {
      console.log(this.app.test)
    }
  }
</script>
