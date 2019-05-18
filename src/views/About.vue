<template>
  <div class="about">
    <h1>about</h1> 
    传入： {{ time }}
  </div>
</template>
<script>
export default {
    props:{
        time:{
            type:[String,Number],
            default:"没数据"
        }
    }
}
</script>


<style>
</style>

