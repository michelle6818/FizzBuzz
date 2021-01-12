
// This is an anonymous function to call a named function
document.getElementById("fizzButton").addEventListener("click", function(){
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
        runTheNumbers(num1, num2);
}) 

// This is the named function, it will only run when something else calls it
        // loop = 1 var specialValue = 3 % 3 = 0
        // loop = 2 var specialValue = 5 % 5 = 0
        // loop = 3 var specialValue = 15 % 15 = 0

 function runTheNumbers(num1, num2){
    let solution = document.getElementById("result")
    let output = "";
    for (let loop = num1; loop <= num2; loop++) {
        let specialValue1 = loop % 3;
        let specialValue2 = loop % 5;
        // let specialValue3 = loop % 15;
    if (specialValue1 == 0 && specialValue2 == 0) 
    {
         
        output += `<span class="fizzBuzz">FizzBuzz! </span>`;
    }
    else if (specialValue1 == 0)
    {
        output += `<span class= "fizz">Fizz! </span>`;
    }
    else if (specialValue2 == 0)
    {
        output += `<span class= "buzz">Buzz! </span>`;
    }
    else 
    {
        solution.innerHTML += loop;
    }
    solution.innerHTML = output;
    }
};



//     //  Print out to the user the 
//      document.getElementById("output1").innerHTML = "Fizz";
//      document.getElementById("output2").innerHTML = "Buzz";
//      document.getElementById("output3").innerHTML = "FizzBuzz";


// The order you test MIGHT be very important
// The premise of FizzBuzz is to take 2 user inputs and find all of their multiples between 1 and 100
// If the loop count is a multiple of 3 it is a Fizz case
// if the loop count is a multiple of 5 it is a Buzz case
// If the loop count is a multiple of both input it is a FizzBuzz case












// document.getElementById("fizzButton").addEventListener("mouseover", function(){
//     alert("you clicked the paragraph");
// });