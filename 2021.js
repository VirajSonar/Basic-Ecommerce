

function validate(){
    var n=document.getElementById("num");
    var n1=document.getElementById("num1");
    var n2= document.getElementById("num2");
    // 888888if(n1.value !="" && n2.value !=""){ This work done by pattern in input tag
       // if(n1.value.length >= 8){
            
            if(n1.value==n2.value){
            return alert("Hello    "+n.value+"\nThanks for Subcribing Us!");
            }
            alert("Password not Matching")
            return false;
            
       /* }
       alert("not less than 8 char");
       return false;
      }
    alert("password should not be blank");
    return false;*/
}
