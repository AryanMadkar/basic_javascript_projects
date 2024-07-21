
let result = document.getElementById("anser")


function calculate(){
    let height = document.getElementById("heightInput").value
    let Weight = document.getElementById("weightInput").value
    
    if(height == "" || Weight == ""){
        alert("Please enter both height and weight")
        return;
    }
    if(height>100){
        swan = height/100
    }
    else{
        swan = height
    }
    let Bmi = (Weight/(swan*swan))
    console.log(Bmi);
    result.innerHTML = "Your BMI is : " + Bmi;
    console.log("Weight is : " + Weight);
    console.log("Height is : " + height);

}