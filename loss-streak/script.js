const res=document.getElementById('res');
function run(){
 let arr=matches.value.split("\n").map(x=>+x);
 let max=0,current=0;
 arr.forEach(v=>{if(v===0){current++;max=Math.max(max,current)}else{current=0}});
 res.innerText=`Max loss streak: ${max}`;
}
