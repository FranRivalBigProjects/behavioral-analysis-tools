const res=document.getElementById('res');
function run(){
 let arr=data.value.split("\n").map(x=>+x).filter(x=>x===0||x===1);
 if(!arr.length){res.innerText="Enter valid data";return;}
 let mistakes=arr.filter(x=>x===0).length;
 res.innerText=`Mistakes: ${mistakes}`;
}
