   
   export  let  history = JSON.parse(localStorage.getItem("quizHistory")) || [];
   export let categories =["Javascript","CSS","HTML"];
//    fetch data  from json file :

   
   export async function fetchData(theme){
    const response=await fetch("DataJson/"+theme+".json");
    try{
         let  data= await response.json();
          return data.questions;
        
  
         
    }
    catch(eroor){
        console.log("Error",eroor);
    }
}
// function pour  timer :
export function starTimer(type="minutes",time,timeElement,onfinish){
   
    
    let timeLeft=setInterval(()=>{
        if(type==="secondes"){
            timeElement.innerText=time;
        } 
         else{
        let minutes=parseInt(time/60,10);
        let secondes=parseInt(time%60,10);
       timeElement.innerText = `${minutes}:${secondes.toString().padStart(2,"0")}`;
    }
        time--;
        if(time <=0){
            clearInterval(timeLeft);
            if(onfinish){onfinish();}
        }
    }, 1000);
     return timeLeft;
}
