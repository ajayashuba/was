<template>
  <q-page class=""  >
  	<div style='max-width:600px;'>  
<q-card  class='q-mb-md q-mt-xl scroll'>
  <div class='row q-ml-xs '>  
<img style='width:30px;height:30px ; border: 1px solid #ddd; ;border-radius: 50%;' class='col-auto q-my-xs' src="https://pbs.twimg.com/profile_images/822921351249825792/M3Y9lsNs_400x400.jpg">
<span class='col self-center q-ml-sm q-body-2 '> Ajay Kumar </span> </div>
  <q-card-separator />

<div class='q-my-sm q-mx-sm q-body-1 text-dark'></div> 
      <div id='ab' class='scroll' ></div>

      <div class='row no-wrap scroll'><q-chip small class='q-body-2'>Defence ministry   
 </q-chip>
       <q-chip small class='q-body-2'>militry hardware</q-chip>
        <q-chip small class='q-body-2'>navy</q-chip>
        <q-chip small class='q-body-2'>army</q-chip>
        <q-chip small class='q-body-2'>utility helicopter</q-chip>
        <q-chip small class='q-body-2'>militry hardware</q-chip>
        <q-chip small class='q-body-2'>navy</q-chip>
        <q-chip small class='q-body-2'>army</q-chip>
        <q-chip small class='q-body-2'>utility helicopter</q-chip></div>


        <q-card-actions class='row no-wrap scroll'> 

        <q-btn flat dense icon="thumb_up" class='capitalize ' color='green' label='2K upvotes' />
        <q-btn flat dense icon="thumb_down"  class='capitalize'  label=' 46 downvotes '/>
        <q-btn flat dense icon="comment" class='capitalize'  label='91K Comments'/>
        <q-btn  flat dense icon="stars" class='capitalize' label='Save Post'/>
</q-card-actions>
    </q-card>




</div>

</q-page>
</template>

<style>
</style> 

<script>

export default {
  name: 'PageIndex',
 data(){return {ok:`<div class="iframely-embed"><div class="iframely-responsive" style="padding-bottom: 66.6667%; padding-top: 120px;"><a href="https://www.livemint.com/Money/2V9VqPLnHLLJOINpqrbiXK/New-insurance-rules-Onroad-car-twowheeler-prices-to-go-u.html" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.livemint.com%2FMoney%2F2V9VqPLnHLLJOINpqrbiXK%2FNew-insurance-rules-Onroad-car-twowheeler-prices-to-go-u.html&key=9eaabb1dab515a2b56a69e6f994267b7"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"><\/script>`}},
    mounted(){

function insertAndExecute(id, text) {
    document.getElementById(id).innerHTML = text;
    var scripts = Array.prototype.slice.call(document.getElementById(id).getElementsByTagName("script"));
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src != "") {
            var tag = document.createElement("script");
            tag.src = scripts[i].src;
            document.getElementsByTagName("head")[0].appendChild(tag);
        }
        else {
            eval(scripts[i].innerHTML);
        }
    }
}
insertAndExecute('ab',this.ok)

 },
}
</script>
