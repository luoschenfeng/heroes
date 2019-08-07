<template>
  <div id = "wrapper">
    <layout-head />
    <router-view></router-view>
    <layout-foot />
  </div> 
</template>
<script >
import layoutHead from '@/views/layout/components/layouthead'
import layoutFoot from '@/views/layout/components/layoutfoot'
export default {
  components: {
    layoutHead,
    layoutFoot
  }
}
</script>

<style>

</style>

