 function saturdayFun(activity="roller-skate"){
    return(`This Saturday, I want to ${activity}!`);   
} 
saturdayFun("bathe my dog"); 
saturdayFun();

function mondayWork(job="go to the office"){
   return(`This Monday, I will ${job}.`);

}
mondayWork();
mondayWork("work from home");

function wrapAdjective(b="*"){
    function coder(a="special"){
      return(`You are ${b}${a}${b}!`);
   }
   return coder
}
