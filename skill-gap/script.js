const res=document.getElementById('res');
function run(){
 let p=+player.value,o=+opponent.value;
 if(!p||!o){res.innerText="Enter values";return;}
 let diff=o-p;
 res.innerText=`Gap: ${diff}`;
}
