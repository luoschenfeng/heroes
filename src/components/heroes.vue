<template>
  <section id = "heroes">
    <div id = "addhero">
      <h2>My Heroes</h2>
      <label for = "inputname">Hero name:</label><input id = "inputname" type = "text" v-model = "typeValue">
      <button @click = "toAddHero">add</button>
    </div>
    <router-link  v-for = "hero of heroes" :key = "hero.id" class = "heronav" :to = "{name: 'detail', params: {id: hero.id }}">
      <div class = "hero">
        <span class = "heroid">{{ hero.id }}</span>
        <span class = "heroname">{{ hero.name }}</span>
      </div>
      <span class = "cancelhero" @click.prevent = "deleteHero(hero.id)">
         x
      </span>
    </router-link>
  </section>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      typeValue: ''
    }
  },
  computed: {
    ...mapState([
      'heroes'
    ])
  },
  methods: {
    ...mapMutations({
      insertCache: 'INSERT_CACHE'
    }),
    ...mapActions(['addHero', 'deleteHero']),
    toAddHero () {
      if (this.typeValue) {
        this.addHero(this.typeValue).then(this.typeValue = '')
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.insertCache({ type: 'fetched', message: 'heros' }))
  },
}
</script>
<style lang = "stylus" scoped>
#addhero h2
  color #444
  font lighter 1.5rem Arial, Helvetica, sans-serif
  margin 0.83rem 0
#addhero button
  background-color #eee
  border none
  padding 5px 10px
  border-radius 4px
  color #333333
#addhero button:hover
  background-color #cfd8dc
.heronav
  position relative
  display block
  padding .3em 0
  width 250px
  text-decoration none
.hero
  border-radius 4px
  height 2rem
  line-height 2rem
  background-color #eeeeee
.heronav:hover
  left .1em
  .hero
    background-color #DDD
    .heroname
      color #607D8B
.heroid
  padding .3rem
  color white
  background-color #405061
  border-radius 4px
.heroname
  padding 1rem
  color #333
.cancelhero
  position absolute
  right .15rem
  top .4rem
  border-radius 4px
  color #ffffff
  padding .4rem
  margin .25rem
  background-color gray
</style>
