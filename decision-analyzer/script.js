const res=document.getElementById('res');
function run(){
 let g=+good.value,b=+bad.value;
 if(!g||!b){res.innerText="Enter values";return;}
 let ratio=g/(g+b);
 res.innerText=ratio>0.6?"Good decisions":"Needs improvement";
}
