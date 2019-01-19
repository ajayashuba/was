<template>
	

 <q-page  >
    <div class="row justify-center">
  <div style='max-width:600px;width:100%' >   
<q-btn icon='done_all' label='mark seen all' @click='markseen()' class='q-my-sm' v-if='ncomment!==null' />
<q-list highlight separator multiline>
        <q-list-header>Recent Notification</q-list-header>
       <q-infinite-scroll :handler="loadMore" >
    
 <q-item  v-for='(n,index) in list' @click.native='routeme(n)' :key='n.id'>
          <q-item-side :avatar="n.pic" />
          <q-item-main > <q-item-tile label lines=1>{{n.username}} <span>commented to your </span><span style='color:black' v-if='n.postid'>post</span><span style='color:black' v-if='n.commentid'>comment</span> </q-item-tile>
    <q-item-tile sublabel lines=1>{{n.comment}}

</q-item-tile></q-item-main>
              <q-item-side right ><q-item-tile stamp>{{time(n.time)}}</q-item-tile>
            <q-chip dense color="red" class="shadow-2" v-if='n.seen==false'>new </q-chip>

</q-item-side>
        </q-item>
</q-infinite-scroll>
<q-modal-layout v-if='cmodal'>
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
Post      </q-toolbar-title>
    </q-toolbar>
<npost :id1='n.id'  :commentid='n.commentid?n.commentid:false' :postid='n.postid?n.postid:false'        :seen='n.seen'  replyid='n.aid?n.aid:false'     />

    </q-modal-layout>
<div class="text-center" v-if='list&&list.length==0'>
    <p>
      <q-icon  name='warning' />
    </p>
    <p class="text-faded">No notification yet.....</p>
    
  </div>
      </q-list>


</div></div></q-page>

</template>
<script type="text/javascript">
	import moment from 'moment';
  import { mapState } from 'vuex'
    import fc from '../store/fclient.js'
   import npost from '../pages/npost.vue';
export default {
	     beforeDestroy(){this.e.close()},components:{npost},


	methods:{markseen(){ 

    this.$ajax.create({"method":"post","baseURL":"http://localhost:3000","url":"/rpc/marknotifseen","data":{userid1:this.$store.state.auth.user.id}}).then(()=>{this.list=this.list.map(i=>{i.seen=true;return i})})        



      } ,loadMore(index,done){
  

if(this.list !==null ){

  this.$q.notify('first');;this.$ajax.create({"method":"get","baseURL":"http://localhost:3000","url":this.tid,"params":{row_number:`gt.${this.list.length}`,limit:1}}).then(i=>{;;if(i.length==0){}else{this.list.push(i[0]); ;done()}                   })



}else(window.setTimeout(()=>{this.$q.notify('ola');done()},2000))
 

}
,time(t){return moment(t).fromNow()},routeme(n){ this.n=n;this.cmodal=true
}},
created(){


this.$ajax.create({"method":"post","baseURL":"http://localhost:3000","url":"rpc/commentnotif","data":{userid1:this.$store.state.auth.user.id}}).then(i=>{this.tid=i;
this.$ajax.create({"method":"get","baseURL":"http://localhost:3000","url":i,"params":{limit:1}}).then(i=>{this.list=i})})

var url=`wss://www.fullduplexdatapipe.stream:8088/${this.$store.state.auth.accessToken}`
    ;this.e=new WebSocket(url);

this.e.onopen=(event)=>{

this.e.onmessage = (event)=> {
    
    var obj = JSON.parse(event);;

if(obj.hasOwnProperty('comment')){

this.list.unshift(obj)

}



   
}
}


},
mounted(){





},
data(){return{list:null,e:null,tid:null,cmodal:false,n:null}},computed: mapState({
  // map this.count to store.state.count
  ncomment:state=>state.a1.ncomment
})


}
</script>
