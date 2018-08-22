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
function jpg(err,row1){if(err===null){
	
	let ew1=row1['r'];var rtw=ew1.concat(rowt['r']);
	r.table('abcate').get(row1['id']).update({r:rtw}).run(conn);
 yu1.next(jpg)
hp(err,row1)}
}


yu1.next(jpg);}
  h1.next(hp) }

}

h1.next(hp)
 

}

to()
