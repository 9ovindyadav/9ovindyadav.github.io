let currentStep = 0 ;
displayStep(currentStep);

function displayStep(stepNumber){

    let steps = document.getElementsByClassName("form_step");

    steps[stepNumber].style.display = "flex";

    if(stepNumber == 0){
        document.getElementById('back_btn').style.display = "none";
    }else{
        document.getElementById('back_btn').style.display = "inline";
    }
}

function nextBackBtn(stepNumber){

    let steps = document.getElementsByClassName("form_step");

    steps[currentStep].style.display = "none";
    currentStep += stepNumber ;

    if(currentStep >= steps.length){
        document.getElementById("register_form").submit();
        return false;
    }
    displayStep(currentStep);

}

