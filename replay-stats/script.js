const res=document.getElementById('res');
function run(){
 let k=+kills.value,d=+deaths.value,t=+time.value;
 if(!k||!d||!t){res.innerText="Enter values";return;}
 res.innerText=`KPM: ${(k/t).toFixed(2)}`;
}
