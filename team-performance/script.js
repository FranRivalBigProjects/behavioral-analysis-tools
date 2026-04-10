const res=document.getElementById('res');
function run(){
 let w=+wins.value,l=+losses.value;
 if(!w||!l){res.innerText="Enter values";return;}
 let rate=w/(w+l);
 res.innerText=rate>0.5?"Strong team":"Weak team";
}
