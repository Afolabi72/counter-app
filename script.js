//console.log("Some Javascript");
//alert("this ia a web page");

    // STRING CONCATENATION
    // STRING CONCATENATION
    // STRING CONCATENATION


const name ="zino";
const age =27;

//const result ="My name is" + " " + name + " and i am " + age + " years old";

//console.log(result);

//2 TEMPLATE LITERAL



//3


const firstName ="zino";
const lastName = "Akpareva";

//const val = firstName.concat(" " + lastName);

//console.log(val);

// number math and arithmetic operator


//const x = 2.7673;
//const val = x.toFixed(2);

//console.log(val);

// math objects

// const p = document.querySelector("p")


// function myFunc () {
//     p.textContent = "text changed" ;
//     p.style.background = "#eee";
// }

// p.addEventListener("click", myFunc);





const count = document.querySelector(".count");
const substract = document.querySelector(".Substract");
const reset = document.querySelector(".Reset");
const add = document.querySelector(".Add")



substract.addEventListener("click", function myFunc () {
    count.innerHTML--;
    setColor()
});

reset.addEventListener("click", function myFunc () {
    count.innerHTML = 0;
    setColor()
});

add.addEventListener("click", function myFunc () {
    count.innerHTML++;
    setColor()
});


function setColor() {
    if (count.innerHTML < 0) {
        count.style.borderColor = "red"
    }

    else if (count.innerHTML > 0) {
        count.style.borderColor = "limegreen" 
    }

    else (count.style.borderColor = "#fff")
}