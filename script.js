function temp() {
    var a =document.getElementById("celcius").value;
   
    var b= (a*9/5)+32;
   document.getElementById("fg").innerHTML= b + " 'F";
   console.log("temp is ",b);
}