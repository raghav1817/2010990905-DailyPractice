function myFun(){
    let n1= document.getElementById("t1").value;
    let n2= document.getElementById("t1").value.length;
    n1= Number(n1);
    let sum=0;
    
    if (n2 < 5 || n2 > 5){
        alert("Enter a 5 digit no.");
        
    }if (isNaN(n1)){
        alert("Please Enter a Valid Number");
    }
    if (n1==0 || n1 == "" || n1 == " "){
        alert("Please enter a Value");
    }
    while (n1>0) {
        sum += n1 % 10;
        n1 = Math.floor(n1 / 10);
    }
    let border= (sum/5) ;
    // document.getElementById("para").innerHTML = sum;

    const box = document.getElementById("square");
    document.getElementById("square").style.transitionDelay = "2s";

    box.style.width = sum +"px";
    box.style.height = sum + "px";
    box.style.backgroundColor = "Black";
    box.style.borderRadius = border + "px";
    box.style.marginLeft = "49%";

}

