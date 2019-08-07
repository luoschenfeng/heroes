<template>
  <header id = "layouthead">
    <h1>Tour of Heroes</h1>
    <nav>
      <router-link class = "pagebutton" :to = "{name: 'dashboard'}">dashboard</router-link>
      <router-link class = "pagebutton" :to = "{name: 'heroes'}">heroes</router-link>
    </nav>
  </header> 
</template>
<script >
export default {
  
}
</script>

<style lang = "stylus" scoped>
#layouthead > h1
  color #336699
  font bold 1.2rem Arial, Helvetica, sans-serif
nav a 
  color #334953
  padding 5px 10px
  text-decoration none
  margin-top 1rem
  margin-right 1rem
  display inline-block
  background-color #eee
  border-radius 4px
nav a:hover
  color #039be5
  background-color #CFD8DC


</style>

