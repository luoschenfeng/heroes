<template>
  <footer id = "layoutfoot" v-if = "caches.length">
    <h2>Message</h2>
    <button @click = "clearCaches">clear</button>
    <div id = "caches">
      <p v-for = "(cache, index) of caches" :key = "index">HeroService: {{ cache.type }} {{ cache.message}}</p>
    </div>
  </footer>
</template>
<script >
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['caches'])
  },
  methods: {
    ...mapMutations({
      clearCaches: 'CLEAR_CACHES'
    })
  }
}
</script>

<style lang = "stylus" scoped>
#layoutfoot h2
  color red
  font lighter 1.5rem Arial, Helvetica, sans-serif
  margin 1.5rem 0
#layoutfoot button
  color #333
  margin-bottom 12px
  font-family Arial
  background-color #eee
  border none
  padding 5px 10px
  border-radius 4px
#layoutfoot button:hover
  color #333
  background-color #cfd8dc
</style>
