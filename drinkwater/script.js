const smallCups=document.querySelectorAll('.cup-small');
const liters=document.getElementById('liters');
const percentage=document.getElementById("percentage");
const remaind=document.getElementById('remained');

const updateBigCup=()=>{
    const fullCups=document.querySelectorAll('.cup-small.full').length
    const total = smallCups.length;

   console.log(fullCups,total)

    if(fullCups===0){
        percentage.style.visibility="hidden";
        percentage.style.height=0;
    }else{
        percentage.style.visibility="visible";
        percentage.style.height=`${(fullCups/total)*330}px`;
        percentage.innerText=`${(fullCups/total)*100}%`;
    }
  console.log(fullCups,total)
    if(fullCups === total){
        remaind.style.visibility="hidden";
        remaind.style.height=0;
    }else{
        remaind.style.visibility="visible";
        liters.innerHTML=`${2 - (250 * fullCups)/1000}L`
    }
   

}

updateBigCup();



const fillCup=(idx)=>{

 if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')
 ){
      idx--;
 }
   
    smallCups.forEach((cup,idx2) => {
        if(idx2 <= idx){
            cup.classList.add("full")
        }else{
            cup.classList.remove("full")
        }
    })

updateBigCup();
}
smallCups.forEach((cup,idx)=>{
    cup.addEventListener("click",()=>{
       fillCup(idx);
    })
});

