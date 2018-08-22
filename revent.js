async function to(){
r=require('rethinkdb');conn= await r.connect();
h=r.table('abcate').run(conn);
h1=await h;

async function hp(err,rowt){
	if(err===null){
let yut=r.table('abcate').getAll(rowt['*'], {index: "cate"}).isEmpty().run(conn);
let yut1=await yut;
if(!yut1){

let yu=r.table('abcate').getAll(rowt['*'], {index: "cate"}).run(conn);
let yu1=await yu;
yu1.each(function(err,row1){
	
	let ew1=row1['r'];var rtw=ew1.concat(rowt['r']);
	r.table('abcate').get(row1['id']).update({r:rtw}).run(conn);
 
hp(err,row1)
});}
  h1.next(hp) }

}

h1.next(hp)
 

}

to()
