// QUESTION 1 // 

const cat = {
    complain: function() {
        console.log("Meow!")
    }
};
cat.complain();

// QUESTION 2 //

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// QUESTION 3 //

heading.style.fontSize = "2em";


// QUESTION 4 //

console.dir(heading.className);

heading.className = "subheading";
console.log(heading.className);


// QUESTION 5 //

const paragraph = document.querySelectorAll("p");
console.log(paragraph);

for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "red";
}
