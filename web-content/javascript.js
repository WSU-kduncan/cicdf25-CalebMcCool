    console.log(5 + "5");
    let age = 21;
    let x = 0;
    let answer = 0;
    if (age > 21){
        console.log("greater than 21");
        alert("something alerted");
    }

    // for loop
    for (let i = 0; i < 11; i++){
        console.log(i);
    }

    // while loop
    while (x < 100){
        console.log(x);
        x = x + 10;
    }

    //let userInput = prompt("Enter a number: ");

    if (userInput == 8){
        console.log("you succeed");
    }

    myFunctionName();

    //let num1 = prompt("Enter Number 1: ");
    //let num2 = prompt("Enter Number 2: ");
    answer = answer + addNumbers(num1, num2);
    alert(answer);




    function myFunctionName(){
        console.log("Called on a function");
    }

    function addNumnbers(parameter1, parameter2){
        return parameter1 + parameter2;
    }

function getTime(){
    const today_date = new Date();
    const month = Number(today_date.getMonth())+1;
    let message = "Your order was placed on "+today_date.getFullYear()+"-"+month+"-"+today_date.getDate();
    document.getElementById("finalMessage").innerHTML = message;
    
}

function printRecipt(){
    const itemID = document.getElementById("itemID").value;
    alert("You Just Bought Item #: " + itemID);
}

function switchColor() {
    const colorparagraph = document.getElementById("colorparagraph");

    if (colorparagraph.classList.contains("redText")){
        colorparagraph.classList.remove("redText");
        colorparagraph.classList.add("blueText");
    } else {
        colorparagraph.classList.remove("blueText")
        colorparagraph.classList.add("redText");
    }
}

function saveData(){
    const firstName = document.getElementById("firstName").value;

    const lastName = document.getElementById("lastName").value;

    const itemID = document.getElementById("itemID").value;

    const price = document.getElementById("price").value;

    const quantity = document.getElementById("quantity").value;

    let inputData = {
        FirstName: firstName,
        LastName: lastName,
        ItemID: itemID,
        Price: price,
        Quantity: quantity,
        Total: (price * quantity)
    }

    let inputDatas = JSON.parse(localStorage.getItem("inputData")) || [];

    inputDatas.push(inputData);

    localStorage.setItem("inputDatas", JSON.stringify(inputData));

    document.getElementById("CartForm").reset();

}

function loadData(){
    const allData = localStorage.getItem("inputDatas");
    if (allData){
        const inputDatas = JSON.parse(allData);
        document.getElementById("display").textContent = JSON.stringify(inputDatas)
    }
}

