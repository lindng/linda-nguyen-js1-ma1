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


// QUESTION 6 //

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p> New Paragraph </p>";

resultsContainer.style.background = "yellow";


// QUESTION 7 // 

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function oneParameter (list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

oneParameter (cats);


// QUESTION 8 // 

function createCats (cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {
        let unknownAge = "Age unknown";

        if(cats[i].age) {
            unknownAge = cats[i].age;
        }
        html += `<div class="listCats">
        <h5>${cats[i].name}</h5>
        <p>Age: ${unknownAge}</p>
        </div>`;
        
    }
    return html;
    
}

const newHTML = createCats(cats);
console.log(newHTML);

const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = newHTML;
