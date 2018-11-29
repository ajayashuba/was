<template>
	
 <div class='shadow-1 q-mb-lg  ' >
  <div class='row q-ml-xs ' >  
<img style='width:30px;height:30px ; border: 1px solid #ddd; ;border-radius: 50%;' class='col-auto q-my-xs self-center' src="https://pbs.twimg.com/profile_images/822921351249825792/M3Y9lsNs_400x400.jpg">
<span class='col-auto self-center q-ml-sm q-body-2 '> Ajay Kumar </span> <span class='col-auto self-center q-ml-sm text-grey' style='font-size:90%'><q-icon name="timelapse" />&nbsp{{time}}</span>
</div>
<q-card-separator />
<truncate class='q-my-sm q-mx-md  text-justify scroll '><div  v-html='f(data.intro)'></div></truncate>
<iframely class='q-px-md no-scroll'  :url='data.url' ></iframely> 
<!-- <iframely class='q-px-md no-scroll'  :url='n.url' style="max-height:750px"></iframely>-->
<div class='q-mt-xs relative-position no-scroll' style='max-height:33px' >
<div  class='row no-wrap scroll  absolute-position' ><q-chip small  color='primary'   v-for='i in data.tags' :key='i.tag'>{{i.tag}}</q-chip>  </div> </div>
<q-card-separator />

<q-card-actions align='around'>
 
  <q-btn flat  dense icon="thumb_up" :color ='likecolor' label='23K' @click='clicklike' />
  <q-btn flat dense icon="thumb_down" label='14K' :color='dislikecolor' @click='clickdislike'/>
    <q-btn flat dense icon="comment" label=' 100' /> 

  
</q-card-actions>

</div>

</template>
<script type="text/javascript">
	    import iframely from '../components/iframely1.vue'

	  import  unescapeJs from 'unescape-js';
	           import truncate from '../components/truncate.vue';
import moment from 'moment'

export default {
	name:'post',
	data(){ return{like:false,dislike:false,}},
props:['data'],
mounted(){if(!(this.data.like.length==0)){if(this.data.like[0].likedislike){this.like=this.data.like[0].likedislike;}else{this.dislike=true;}}},
computed:{likecolor(){if(this.like==true){return 'primary'}else{return ''}},dislikecolor(){if(this.dislike==true){return 'primary'}else{return ''}},time(){return moment(this.data.time).fromNow()}},
 components:{iframely,truncate}, 
 methods:{
 	
 	f(i){

    return unescapeJs(i)
  },
  clicklike(){if(this.dislike){this.dislike=!this.dislike;
this.$axios.delete('http://104.248.119.54:3000/likedislike',{postid:this.data.id,}).catch(i=>{this.$q.notify('sorry failed try again')})
  };
   if(!this.like ){
this.$axios.post('http://104.248.119.54:3000/likedislike',{postid:this.data.id,likedislike:true}).then(i=>{this.like=!this.like;}).catch(i=>{this.like=false;this.$q.notify('sorry failed try again')})
}else{this.$axios.delete('http://104.248.119.54:3000/likedislike',{postid:this.data.id,}).catch(i=>{this.$q.notify('sorry failed try again');this.like=false})} 
 },
 clickdislike(){if(this.like){this.like=!this.like;
this.$axios.delete('http://104.248.119.54:3000/likedislike',{postid:this.data.id,}).catch(i=>{this.$q.notify('sorry failed try again')})
 };
if(!this.dislike ){
this.$axios.post('http://104.248.119.54:3000/likedislike',{postid:this.data.id,likedislike:false}).then(i=>{this.dislike=!this.dislike;}).catch(i=>{this.dislike=false;this.$q.notify('sorry failed try again')})
}else{this.$axios.delete('http://104.248.119.54:3000/likedislike',{postid:this.data.id,}).catch(i=>{this.$q.notify('sorry failed try again');this.dislike=false})}

}
}
}











</script>


