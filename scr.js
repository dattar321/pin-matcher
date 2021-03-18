document.getElementById("generatePin").addEventListener("click",()=>{
    const newInputValue = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("inputValue").value = newInputValue;
    document.getElementById("attempPass").style.display = "none";
    document.getElementById("attempFail").style.display = "none";
    document.getElementById("attempCnt").innerText = 3;
});
let numbers = document.getElementsByClassName("number");
for(let i = 0;i<numbers.length;i++)
    numbers[i].addEventListener("click",function(){
        let output=document.getElementById("outputValue").value;
		if(output!=NaN){ 
			output=output+this.id;
			document.getElementById("outputValue").value = output;
		}
    });
document.getElementById("<").addEventListener("click",function(){
    let output=document.getElementById("outputValue").value;
		if(output!=NaN){ 
			output=output.slice(0,-1);
			document.getElementById("outputValue").value = output;
		}
});
document.getElementById("C").addEventListener("click",function(){
		document.getElementById("outputValue").value = "";
		
});
document.getElementById("submit").addEventListener("click",function(){
    const pin = document.getElementById("inputValue").value;
    const tried = document.getElementById("outputValue").value;
    if(pin==tried){
        //alert("nais");
        document.getElementById("attempPass").style.display = "block";
        document.getElementById("attempFail").style.display = "none";
    }else{
        document.getElementById("attempFail").style.display = "block";
        let cnt = document.getElementById("attempCnt").innerText;
        cnt--;
        document.getElementById("attempCnt").innerText = cnt;
        if(cnt<=0){
            document.getElementById("inputValue").value = "";
            document.getElementById("attempCnt").innerText = 0;
        }
    }
});