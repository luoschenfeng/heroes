<template>
  <section id = "dashboard">
    <h3>Top Heroes</h3>
    <div id = "heroesbox">
        <router-link v-for = "getHero of getHeroes" :key = "getHero.id" :to = "{name: 'detail', params: {id: getHero.id}}" >
          <h4>{{ getHero.name }}</h4>
        </router-link>
    </div>
    <div id = "searchhero">
      <h4><label for = "search">Hero Search</label></h4>
      <input type = "text" :value = "typeValue" @input = "addCache">
      <div id = "result">
        <p v-for = "searchHero of searchHeroes" :key = "searchHero.id" class = "heroline">
          <router-link :to = "{name: 'detail', params: {id: searchHero.id}}" >
            {{ searchHero.name }}
          </router-link>
        </p>
      </div>
    </div>
  </section>
</template>
<script >
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'dashboard',
  data () {
    return {
      typeValue: '',
      timeout: ''
    }
  },
  computed: {
    searchHeroes () {
      if (this.typeValue === '') {
        return []
      } else {
        return this.filterHeroes(this.typeValue)
      }
    },
    ...mapGetters(['getHeroes', 'filterHeroes'])
  },
  methods: {
    addCache (event) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.typeValue = event.target.value
        if (this.typeValue !== '') {
          this.insertCache({ type: 'found', message: `heroes matching ${'"' + this.typeValue + '"'}` })
        }
      }, 1000)
    },
    ...mapMutations({
      clearCaches: 'CLEAR_CACHES',
      insertCache: 'INSERT_CACHE'
    })
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.insertCache({ type: 'fetched', message: 'heros' }))
  }
}
</script>

<style lang = "stylus" scoped>
#dashboard h3
  box-sizing border-box
  color #444
  font: lighter 1.2rem Arial, Helvetica, sans-serif
  margin 1rem 0
  text-align center
##heroesbox
  width 100%
#heroesbox a
  display inline-block
  text-decoration none
  box-sizing border-box
  padding-right 1rem
  width 25%
a h4
  background-color #3f525c
  color #eeeeee
  text-align center
  height 6rem
  line-height 6rem
 a h4:hover
  background-color #EEE
  color #607d8b
#searchhero h4
  margin 1rem 0
#searchhero label
  font bold 1rem Arial, Helvetica, sans-serif
  color #333
#searchhero input
  width 200px
  height 20px
#result p
  border 1px solid gray
  border-top none
  width 205px
  height 26px
  background-color white
#result p:hover
  background-color #607D8B
#result a
  padding 5px
  line-height 16px
  color #888
  display block
  text-decoration none
  font-family Arial, Helvetica, sans-serif
#result a:hover
  color white
</style>
