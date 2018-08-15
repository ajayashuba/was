<template>
	
<q-page class='flex flex-center ' padding>
	
<div style='width:500px'>

 <q-card inline class="bigger q-ma-sm">
      <q-card-media class="relative-position">
        <img src="https://picsum.photos/500/500" style='height:200px'>

      </q-card-media>
      <q-card-title style='padding-top:0px;padding-bottom:0px' class="relative-position">
      	<img class=' absolute-top-left' src="https://picsum.photos/500/500" style='height:100px;width:100px; transform: translate(0px, -50%) ;border-radius: 50%;margin-left:5px'>
      	<div style='padding-left:105px'>

        <div class="ellipsis  ">Ajay Kumar</div> 
 <q-btn dense icon='add_circle ' style='padding-top:0px;padding-bottom:0px' >Follow</q-btn>  <q-btn style='padding-top:0px;padding-bottom:0px' class='q-ml-sm' dense icon='message'>Message</q-btn>  
 
</div>

        
        
      </q-card-title>
      <q-tabs class="shadow-2" inverted>
        <q-tab slot="title" label="Home" />
        <q-tab slot="title"  label="Post" />
        <q-tab slot="title"  label="Comments" />
        <q-tab slot="title"  label="Mails" />
        <q-tab slot="title"  label="Alarms" />
        <q-tab slot="title" label="Movies" />
        <q-tab slot="title"  label="Mails" />
      </q-tabs>
      <q-card-main>
      	
        <p>$・Italian, Cafe</p>
        <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>5:30PM</q-btn>
        <q-btn flat>7:30PM</q-btn>
        <q-btn flat>9:00PM</q-btn>
        <q-btn flat color="primary">Reserve</q-btn>
      </q-card-actions>
    </q-card></div>

</q-page>




 




</template>



<style type="text/css">
	
.ok {
    width: 100%;
    height: 100px;
}

</style>
