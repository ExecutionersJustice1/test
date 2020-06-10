<template>
 <div class="news">
    <FeedReader />
      

     
    
 </div>
</template>






<script>
import FeedReader from '@/components/feed-list.vue'

 export default{
  name:'news',
  data (){
   return{
    title:'news'
   }
  },
  components:{FeedReader }
 }
</script>




<style scoped>
 
</style>