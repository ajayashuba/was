method(){
	
  this.$axios.get('http://104.248.119.54:3000/likedislike',{params:{postid:'eq.'+this.data.id}}).then(i=>{
if(i.data.length==0){this.like=null; if(rt){this.$axios.post('http://104.248.119.54:3000/likedislike',{postid:this.data.id,likedislike:true}).then(i=>{this.like=true}).catch(i=>{this.$q.notify('try again')})}else{this.$axios.post('http://104.248.119.54:3000/likedislike',{postid:this.data.id,likedislike:false}).then(i=>{this.like=false}).catch(i=>{this.$q.notify('try again')})}} else { 
if(i.data[0].likedislike){
this.like=true;
if(!rt){

this.$axios.delete('http://104.248.119.54:3000/likedislike',{postid:this.data.id}).then(i=>{this.like=null;this.$axios.post('http://104.248.119.54:3000/likedislike',{postid:this.data.id,likedislike:false})}).then(i=>{this.like=false}).catch(i=>{this.$q.notify('try again')})

}else {
this.$axios.delete('http://104.248.119.54:3000/likedislike',{postid:this.data.id}).then(i=>{this.like=null})
}

}else{
this.like=false;
if(rt){

this.$axios.delete('http://104.248.119.54:3000/likedislike',{postid:this.data.id}).then(i=>{this.like=null;this.$axios.post('http://104.248.119.54:3000/likedislike',{postid:this.data.id,likedislike:true})}).then(i=>{this.like=true}).catch(i=>{this.$q.notify('try again')})} else {this.$axios.delete('http://104.248.119.54:3000/likedislike',{postid:this.data.id}).then(i=>{this.like=null})}

}



}

}).catch(i=>{this.$q.notify('try again')}) 





}
