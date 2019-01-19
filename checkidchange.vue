<template>
  <q-page class='q-ml-sm q-mr-sm'>
    <div class="row justify-center">
  <div style='max-width:728px;width:100%'>
    <div class='shadow-1 '>
<div class='row q-py-sm q-ml-md relative-position'>
  <img style='width:100px;height:100px ; border: 1px solid #ddd; ;border-radius: 50%;' class='col-auto self-top q-mt-md ' :src='userdata.pic' >
<div class='col'>
<div class='q-pl-md q-mt-sm '><div  class='col q-headline '>{{userdata.username}}  </div>

<truncate class='q-mb-xs' v-if='userdata.truncate &&tm'>{{userdata.truncate}}
</truncate> 


<q-btn icon='edit' class='absolute-top-right' dense v-if='id==$store.state.auth.user.id' @click='cmodal=!cmodal '/>


<div ><q-btn :label='lscore' dense class='q-py-none q-mr-sm' icon='score'  color='white' text-color="black"/>
<q-btn icon='message' dense class='q-py-none' v-if='id!==$store.state.auth.user.id' @click='handler()'></q-btn>
</div>

</div></div>
 <q-modal v-model="cmodal" :content-css="{minWidth: '60vw'}" >
 <q-modal-layout>
    <q-toolbar slot="header">
      <q-btn
        flat
        round
        dense
        v-close-overlay
        icon="arrow_back"
        @click='cmodal=false'

      />
      <q-toolbar-title>
Comments      </q-toolbar-title>
    </q-toolbar>
    <div class="row justify-center q-ma-xs">
  <div style='max-width:600px;width:100%' >
<q-field
        icon="account_circle"
        label="Name"
        :count="120"
        helper="Type names"
        error-label="Check input length"
        :error='errorsend.username'

      >
<q-input v-model='send.username'  @input='checkulength' />    </q-field>
<q-field
        icon="add_photo_alternate"
        label="Image url"
        helper="enter image url"
        error-label="Invalid Url "
        :error='errorsend.pic'
      >
<q-input v-model='send.pic' @input='piccheck' />   </q-field>
<q-field
        icon="info"
        label="Bio"
        :count="300"
        helper="enter your bio"
        error-label="Input length exceeded"
        :error='errorsend.truncate'
      >
<q-input  type='textarea' v-model='send.truncate' @input='checktlength' />   </q-field>   

<div class='row q-mt-xs'> <div class='col'></div> <q-btn icon ='send' class='col-auto'  label='Submit' color='primary' dense @click='senddata()' :disabled='checkdisabled' ></q-btn></div>
 
</div></div>
</q-modal-layout>
 </q-modal>
</div>
 </div>
 <q-tabs v-model="tab">
  <q-tab slot="title"  label="Posts" name='Post' default />
      <q-tab slot="title"  label="Comments" name='Comment'  />
      <q-tab slot="title"  label="Followers" name='Followers' />

      <q-tab slot="title"  label="Following"  name='Following' />

 
      </q-tabs> 

      <div class='shadow-1 row'><div class='col'></div>
     <q-btn-dropdown
        :label='sort'
        dense
        size='sm'
        :icon='sort=="recent"?"whatshot":"score"'
      >
        <q-list link separator dense   >
              
             <q-item @click.native='csort("recent")'
                v-close-overlay>
                  <q-item-side icon="whatshot" />
<q-item-main label="recent" class='uppercase' />
              </q-item>
<q-item @click.native='csort("score")'
                v-close-overlay>
                        <q-item-side icon="score" />

                <q-item-main label="score" class='uppercase'  />
              </q-item>
            </q-list>

      </q-btn-dropdown></div>

<!--<router-view />-->
<q-infinite-scroll :handler="loadMore" ref='load'>
<postwrapper :sort='item'  v-for="(item,index) in pt" :key='item.idkey' @delete='gotdelete'></postwrapper>
 <div class="row justify-center" style="margin-bottom: 50px;" v-if='stop==false'>
          <q-spinner-dots slot="message"  :size="40"></q-spinner-dots>


</div>
</q-infinite-scroll>
<div class=" text-center" v-if='stop==true &&pt&&pt.length==0'>
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Sorry, no activity yet .....</p>
   
  </div>

</div>  
</div>
</q-page>
</template>
<style type="text/css">
  
.fnt{
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;

}

</style>
 
<script>
    import  unescapeJs from 'unescape-js';
        import iframely from '../components/iframely1.vue'
         import truncate from '../components/truncate.vue';
                      import postwrapper from '../components/postwrapper.vue';

  import { mapState } from 'vuex'

export default {
  props:['id'],
  name: 'PageIndex',
  mounted(){},computed:{checkdisabled(){ var go=this.errorsend.pic ||this.errorsend.username ||this.errorsend.truncate ;  return go  },lscore:function(){return `Score ${this.score}`},...mapState({
  name1:state=>state.a1.name,pic1:state=>state.a1.pic,truncate1:state=>state.a1.truncate
})},
data(){ return {progress:false,tab:'',errorsend:{pic:false,username:false,truncate:false},tm:true,iframelyprop:'',selectedFile:null,pt:null,offset:2,tname:'',cmodal:false,stop:false,userdata:{pic:this.$store.state.a1.pic,username:this.$store.state.a1.name,truncate:this.$store.state.a1.truncate},send:{username:'',pic:'',truncate:''},score:0,sort:'recent',codelete:{cr:[],ok:[],post:[] } }},
components:{iframely,truncate,postwrapper},
created(){
  if(this.id!==this.$store.state.auth.user.id){

this.$ajax.create({"baseURL":"http://localhost:3000","method":"get","url":"userdata","params":{userid:`eq.${this.id}`}}).then((i=>{this.userdata=i[0]}))

  }else{   this.userdata={username:this.name1,pic:this.pic1,truncate:this.truncate1}     };
this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/getscore","data":{userid1:this.id}}).then(i=>{         var gh=i?i:0 ; this.score=gh})


this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/tabuser","data":{userid1:this.id,myid:this.$store.state.auth.user.id}}).then(i=>{this.tname=i;this.$ajax.create({"method":"post","baseURL":"http://localhost:3000","url":"rpc/getsortp","data":{tname:i}}).then(i=>{console.log(i,'test');if(i){this.pt=i}else{this.pt=[]}})})



},methods:{ piccheck(a){  

  this.$axios.get(a).then(i=>{ var t=['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp', 'image/vnd.microsoft.icon'];  var g=t.includes(i.headers['content-type']);console.log(g)
if(g){this.errorsend['pic']=false}else{this.errorsend['pic']=true}

     }).catch(()=>{ this.errorsend['pic']=true  })           },checktlength(a){;; console.log('tleng')   
;if(a.length>300){ this.errorsend['truncate']=true}else{ this.errorsend['truncate']=false}   },checkulength(a){;;  
;if(a.length>15){ this.errorsend['username']=true}else if(a.length<15 &&a.length>5 ){ this.errorsend['username']=false}else{ this.errorsend['username']=true     }   },gotdelete(i){this.$q.dialog({
              title: 'Confirm',
              message: (this.pt.find((k)=>{ return k.idkey==i}).cr || this.pt.find((k)=>{ return k.idkey==i}).id)?'Delete this comment':'Delete this post',
              ok: 'Agree',
              cancel: 'Disagree'
            }).then(()=>{ console.log(i);

                var g=this.pt.findIndex((k)=>{ return k.idkey==i});this.$q.loading.show()
              if(this.pt[g].cr ||this.pt[g].id){
                    var id = (this.pt[g].cr&&this.pt[g].cr.id)||this.pt[g].id ; 

this.$ajax.create({"baseURL":"http://localhost:3000","method":"delete","url":"comment","params":{id:`eq.${id}`}}).then(i=>{  

this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/usernew","data":{userid1:this.id,myid:this.$store.state.auth.user.id}}).then(i=>{;this.tname=i;


this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/getsort","data":{tname:i}}).then(i=>{this.$q.loading.hide();this.pt=i})}).catch(i=>{this.$q.loading.hide();this.$q.notify(failed)})                         }) 
             
             }  if(!(this.pt[g].cr ||this.pt[g].id)){ ;

this.$ajax.create({"baseURL":"http://localhost:3000","method":"delete","url":"post","params":{id:`eq.${this.pt[g].post.id}`}}).then(()=>{ 


this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/usernew","data":{userid1:this.id,myid:this.$store.state.auth.user.id}}).then(i=>{this.tname=i;

this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/getsort","data":{tname:i}}).then(i=>{this.$q.loading.hide();this.pt=i.data})}).catch(i=>{this.$q.loading.hide();this.$q.notify(failed)})      })                        }       })            },handler(){this.$q.dialog({
              title: 'Send message',
              message: 'type your message',
              prompt: {
                model: '',
                type: 'textarea' // optional
              },
              cancel: true,
              color: 'secondary'
            }).then(data=>{
if(data!==null && data!==''){

  this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"chat","data":{fromid:this.$store.state.auth.user.id,toid:this.id,message:data}})

}


            }).catch(()=>{this.$q.notify('sorry failed')})},csort(a){this.sort=a},senddata(){
this.$q.loading.show()



this.$axios.patch(`https://www.fullduplexdatapipe.stream:3333/userdata?userid=eq.${this.$store.state.auth.user.id}`,{pic:this.send.pic,username:this.send.username,truncate:this.send.truncate}).then(i=>{
this.$q.loading.hide()

this.userdata.pic=this.send.pic;this.userdata.truncate=this.send.truncate;this.userdata.username=this.send.username; this.cmodal=false;this.$store.commit('a1/putname',{name:this.send.username,pic:this.send.pic})
this.$store.commit('a1/puttruncate',this.send.truncate)

}).catch(p=>{this.$q.loading.hide()})


},f(i){

    return unescapeJs(i)
  },clickme(){   this.$refs.form.click()
},loadMore(index,done){
  if(this.pt!==null&&this.progress==false){
if(this.tab=='Post'){ 

this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/getsortp","data":{tname:this.tname,gtr:this.pt.length}}).then(i=>{;;;;console.log(i,'hopeso');if(i==null){this.stop=true;this.$q.notify('scroll over');}else{this.pt=this.pt.concat( i);done()}})
}else if(this.tab=='Comment'){       this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/getsortc","data":{tname:this.tname,gtr:this.pt.length}}).then(i=>{;;;;console.log(i,'hopeso');if(i==null){console.log(this.tid,'tidnull');this.stop=true;this.$q.notify('scroll over');}else{this.pt=this.pt.concat( i);done()}})                        }

 



 }else{ window.setTimeout(()=>{this.$q.notify('ola');done()},2000)}












} },watch:{tab(){
  this.progress=true;
if(this.tab=='Post'){this.$q.loading.show()
;  
;this.sort='recent';;this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/tabuser","data":{userid1:this.id,myid:this.$store.state.auth.user.id}}).then(i=>{this.tname=i;this.$ajax.create({"method":"post","baseURL":"http://localhost:3000","url":"rpc/getsortp","data":{tname:i}}).then(i=>{console.log(i,'test');if(i){this.pt=i}else{this.pt=[]};this.$q.loading.hide();  this.progress=false;
})})          }
else if(this.tab=='Comment'){  this.$q.loading.show()
;

this.sort='recent';
this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/tabuser","data":{userid1:this.id,myid:this.$store.state.auth.user.id,tab:true}}).then(i=>{this.tname=i;this.$ajax.create({"method":"post","baseURL":"http://localhost:3000","url":"rpc/getsortc","data":{tname:i}}).then(i=>{console.log(i,'test');if(i){this.pt=i}else{this.pt=[]};this.$q.loading.hide();this.progress=false})})




 }



},userdata:function(){this.tm=false;this.$nextTick(()=>{ this.tm=true})},name1:function(){   this.userdata={username:this.name1,pic:this.pic1,truncate:this.truncate1}    },sort:function(o,n){
this.progress=true;
this.pt=null;if(this.sort=='recent'){this.$q.loading.show();
if(this.tab=='Post'){

this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/tabuser","data":{userid1:this.id,myid:this.$store.state.auth.user.id}}).then(i=>{this.tname=i;

this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/getsortp","data":{tname:i}}).then(i=>{this.$q.loading.hide();this.pt=i;this.$refs.load.poll();this.progress=false}).catch(()=>{this.$q.loading.hide();this.$q.notify('failed')})})

} else if(this.tab=='Comment'){     

this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/tabuser","data":{userid1:this.id,myid:this.$store.state.auth.user.id,tab:true}}).then(i=>{this.tname=i;

this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/getsortc","data":{tname:i}}).then(i=>{this.$q.loading.hide();this.pt=i;this.$refs.load.poll();this.progress=false}).catch(()=>{this.$q.loading.hide();this.$q.notify('failed')})}) 


}
}
else if(this.sort=='score') {this.$q.loading.show();
if(this.tab=='Post'){
this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/tabuser","data":{userid1:this.id,myid:this.$store.state.auth.user.id,score:true}}).then(i=>{;this.tname=i;

this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/getsortp","data":{tname:i}}).then(i=>{this.$q.loading.hide();this.pt=i;this.$refs.load.poll();this.progress=false})}).catch(()=>{this.$q.loading.hide();this.$q.notify('failed')})}
else if(this.tab=='Comment'){
this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/tabuser","data":{userid1:this.id,myid:this.$store.state.auth.user.id,score:true,tab:true}}).then(i=>{;this.tname=i;

this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/getsortc","data":{tname:i}}).then(i=>{this.$q.loading.hide();this.pt=i;this.$refs.load.poll();this.progress=false})}).catch(()=>{this.$q.loading.hide();this.$q.notify('failed')})







}





}  

 },cmodal:function(){this.send.username=this.userdata.username ;this.send.pic=this.userdata.pic; this.send.truncate=this.userdata.truncate},

id:function(){this.progress=false;

this.sort='recent';this.tab='Post'; this.stop=false;;this.pt=null;;if(this.id!==this.$store.state.auth.user.id){

this.$ajax.create({"baseURL":"http://localhost:3000","method":"get","url":"userdata","params":{userid:`eq.${this.id}`}}).then((i=>{this.userdata=i[0]}))

  }else {this.userdata={pic:this.$store.state.a1.pic,username:this.$store.state.a1.name,truncate:this.$store.state.a1.truncate}}; 
  this.$q.loading.show()
this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/getscore","data":{userid1:this.id}}).then(i=>{this.score=i})
this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/tabuser","data":{userid1:this.id,myid:this.$store.state.auth.user.id}}).then(i=>{this.tname=i;
this.$ajax.create({"baseURL":"http://localhost:3000","method":"post","url":"rpc/getsortp","data":{tname:i}}).then(i=>{this.$q.loading.hide();this.pt=i;this.$refs.load.poll()})}).catch(()=>{this.$q.loading.hide();this.$q.notify(failed)                             })






 }




}
   }
</script>
