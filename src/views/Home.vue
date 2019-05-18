<template>
  <div class="home">
    <HelloWorld msg="父组件参量"/>
    
    <button @click="goToAbout">去about页</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
      goToAbout (){
          console.log('go to about');
          //this.$router.go(-1)
          //this.$router.back()
          //this.$router.push('/about')
          const this_time = '2018-08-08'
          this.$router.replace({
            path:`/about/${this_time}`
            //name:'about',
            //   query:{
            //       this_time:'2018-08-08'
            //   }
            // params:{
            //     name:'hhhh'
            // }
          })

      }
  }
}
</script>
