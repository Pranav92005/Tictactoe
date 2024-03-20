let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let turn0=true;
let userx=0;
let usery=0;
 let scorex=document.getElementsByClassName("#msg");



const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],

   [1,4,7], 
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8]

]
boxes.forEach((box) => {
    box.addEventListener("click",(event) => {

if(turn0===true){
box.innerText="x"
turn0=false;}
else{
    box.innerText="0";
    turn0=true;
}
box.disabled=true;
showwinner();
    })
})
resetbtn.addEventListener("click",(event) => {
    boxes.forEach((box) => {
box.innerText="";
box.disabled=false;
    })
})

const showwinner=()=>{
for(pranavs of winpatterns) {
    let pos1val=boxes[pranavs[0]].innerText;
    let pos2val=boxes[pranavs[1]].innerText;
    let pos3val=boxes[pranavs[2]].innerText;
    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            let win=pos1val;
            
            msg.innerText=`Congratulations,winner is ${win}`;
            setTimeout(()=>{ boxes.forEach((box) => {
                box.innerText="";
                box.disabled=false;
                msg.innerText="";
            })},2000)
        
        
        }
    
        
        
        }
    
    }
}
