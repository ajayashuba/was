<div  class='flex flex-center ' v-if='!url.html'>
<q-card inline style="width: 500px"> 
  <a href="https://www.livemint.com/Money/R2PDw0gTrPj3ckf9ZdwoIJ/Sebi-panel-proposes-relaxing-foreign-fund-rules-for-NRIs.html"><q-card-media>
    <img :src="url.links.thumbnail[0].href">
  </q-card-media></a>
  <div class='q-px-md q-py-sm'><a :href="url.meta.canonical"><div class='q-subheading text-weight-bold fnt' >{{url.meta.title}}
  </div></a>
<p class='q-my-xs q-body-1 fnt ellipsis-3-lines	' >{{url.meta.description}}</p>  

<img :src="url.links.icon[0].href" style='width:15px;height:15px;' class=' q-mt-xs vertical-middle fnt'><span class='text-grey q-ml-sm fnt' style="font-size: .9em">{{url.meta.site}}</span> </div>

</q-card> 

</div>
