<template>
  <section id = "detail">
    <div id = "info">
      <h2>{{ name.toUpperCase() }} Details</h2>
      <p> id: {{ id }}</p>
    </div>
    <div id ="changename">
      <label for = "inputname">name:</label><input id = "inputname" v-model = "name"/>
    </div>
    <div id = "submit">
      <button class = "changepage" @click = "goBack">go back</button>
      <button class = "changepage" @click = "saveName">save</button>
    </div>
  </section>
</template>
<script >
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  props: ['id'],
  name: 'detail',
  computed: {
    name: {
      get () {
        return this.heroName
      },
      set (value) {
        this.changeHeroName(value)
      }
    },
    ...mapState([
      'heroName'
    ])
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    saveName () {
      this.updateHero({ id: parseInt(this.id), name: this.name })
      this.$router.back()
    },
    ...mapMutations({
      initialHeroName: 'INITIAL_HERONAME',
      changeHeroName: 'CHANGE_HERONAME',
      insertCache: 'INSERT_CACHE'
    }),
    ...mapActions(['updateHero'])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.initialHeroName(parseInt(vm.id))
      vm.insertCache({ type: 'fetched', message: `hero id=${vm.id}` })
    }
    )
  }
}
</script >
<style lang = "stylus" scoped>
#info h2
  color #444
  font lighter 1.5rem Arial, Helvetica, sans-serif
  margin 1rem 0
#info p
  color #333
#changename label
  display block
  width 3em
  margin-top .5rem
  color #607D8B
  font-weight bold
#changename input
  height 2em
  font-size 1em
  padding-left .4em
  font-family: Arial, Helvetica, sans-serif
.changepage
  margin-top 20px
  font-family Arial
  background-color #eee
  border none
  padding 5px 10px
  border-radius 4px
  color #333
.changepage:hover
  background-color #cfd8dc
</style>
