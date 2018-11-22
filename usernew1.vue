<template>
	<q-page class="row justify-center">
	<div style='max-width:728px;width:100%'>
		<div class='shadow-1 '>
<div class='row q-py-sm q-ml-md'>
	
<img style='width:100px;height:100px ; border: 1px solid #ddd; ;border-radius: 50%;' class='col-auto' src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg">
<div class='col'>
<div class='q-pl-md q-mt-sm '><div  class='col q-headline '>Ajay Kumar</div>
<div ><q-btn label='Score 22K' dense class='q-py-none q-mr-sm' icon='score'  color='white' text-color="black"/>
<q-btn icon='message' dense class='q-py-none'></q-btn>
</div>

</div></div>

</div>
 </div>
 <q-tabs >
  <q-tab slot="title" default label="overview"  />
     <q-tab slot="title" label="about"  />

 
      </q-tabs> 
      <div class='shadow-1 row'><div class='col'></div>
      <q-btn-dropdown
        label="tags"
        dense
        size='sm'
        class='order-last'
      >
        <q-list link>
          <q-item v-for="n in 2" :key="`1.${n}`" v-close-overlay @click.native="showNotification">
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label>Photos</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
          <q-item-separator inset />
          <q-list-header inset>Files</q-list-header>
          <q-item v-close-overlay @click.native="showNotification">
            <q-item-side icon="assignment" inverted color="secondary" />
            <q-item-main>
              <q-item-tile label>Vacation</q-item-tile>
              <q-item-tile sublabel>February 22, 2016</q-item-tile>
            </q-item-main>
            <q-item-side right icon="info" color="amber" />
          </q-item>
        </q-list>
      </q-btn-dropdown></div>

<!--<router-view />-->

 <div class='shadow-1 q-mb-lg  '   v-for='(n,index) in iframelyprop' >
  <div class='row q-ml-xs ' >  
<img style='width:30px;height:30px ; border: 1px solid #ddd; ;border-radius: 50%;' class='col-auto q-my-xs self-center' src="https://quasar-framework.org/quasar-play/android/statics/boy-avatar.png">
<span class='col-auto self-center q-ml-sm q-body-2 '> Ajay Kumar </span><!--<span class='col-auto self-center q-ml-sm'> <q-icon name="reply " />  </span>--> <span class='col-auto self-center q-ml-sm' style='font-size:90%'><q-icon name="timelapse" />10 min ago</span>
</div>
<q-card-separator />
<div class='q-ma-sm'>The border-color property is used to set the color of the four borders.

The color can be set by:

name - specify a color name, like "red"
Hex - specify a hex value, like "#ff0000"
RGB - specify a RGB value, like "rgb(255,0,0)"
transparent
The border-color property can have from one to four values (for the top border, right border, bottom border, and the left border). 

If border-color is not set, it inherits the color of the element</div>
<div class='q-ml-lg q-mt-md cursor-pointer shadow-2' > 
  <q-card-separator />
<div class='row q-ml-xs ' >  
<img style='width:30px;height:30px ; border: 1px solid #ddd; ;border-radius: 50%;' class='col-auto q-my-xs self-center' src="https://pbs.twimg.com/profile_images/822921351249825792/M3Y9lsNs_400x400.jpg">
<span class='col-auto self-center q-ml-sm q-body-2 '> Ajay Kumar </span> 
</div>
<q-card-separator />

 <div class='q-my-sm q-mx-md  text-justify scroll ' v-html='f(n.intro)'></div> 
<iframely class='q-px-md no-scroll'  :url='n.url' ></iframely> 
<!-- <iframely class='q-px-md no-scroll'  :url='n.url' style="max-height:750px"></iframely>-->

<q-card-separator />
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


export default {
  name: 'PageIndex',
data(){return {iframelyprop:''}},
components:{iframely,},
created(){
var g=this.$axios.get('http://104.248.119.54:3000/post?select=*,tags:posttags(tag)')
g.then(i=>{this.iframelyprop=i.data})


},methods:{f(i){

    return unescapeJs(i)
  }}
   }
</script>
