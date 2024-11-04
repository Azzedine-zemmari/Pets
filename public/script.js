const arr = [
    {id: 1, name: "eva", categorie: "malinois", age: "3 months", image: "../image/eva.jpg"},
    {id: 2, name: "emaa", categorie: "cat", age: "1 year", image: "../image/cats.jpg"},
    {id: 3, name: "foxi", categorie: "fox", age: "2 years", image: "../image/fox.jpg"},
    {id: 4, name: "gold", categorie: "golden dog", age: "5 years", image: "../image/goldenDog.jpg"},
    {id: 5, name: "karam", categorie: "horse", age: "10 years", image: "../image/horse.jpg"}
];
const adobted = [];
let indice = 0;

function choose() {
    const valid = document.getElementById("valide");
    const invalid = document.getElementById("invalide");

    valid.onclick = function(event) {
        event.preventDefault();
        if (indice < arr.length) {
            adobted.push(arr[indice]);
            console.log("Adopted array: ", adobted);
            indice++;
            show();
        }
    };
    
    invalid.onclick = function(event) {
        event.preventDefault()
        if (indice < arr.length) {
            indice++;
            show();
        }
    };
}
function show() {
    const main = document.getElementById("indexMain");
    const cards = document.getElementById("cards");
    cards.classList.add("hidden")

    if (indice >= arr.length) {
        main.innerHTML = "NO MORE PETS";
        return; 
    }
    setTimeout(()=>{
        main.innerHTML = ""; // this line cause like a loading effect 
        const newDiv = document.createElement("div");
        newDiv.classList.add("flex","justify-center","items-center","w-[80%]","mx-auto","bg-white")
        newDiv.innerHTML = `
            <div>
                <img class="w-96 rounded-lg" src="${arr[indice].image}" alt="${arr[indice].name}"/>
                <div class="mt-6">
                <h2 class=" font-bold text-2xl" >${arr[indice].name}</h2>
                <p class=" text-gray-700 font-semibold">${arr[indice].categorie}</p><p>${arr[indice].age}</p>
                </div>
            </div>
        `;
        main.appendChild(newDiv);
    },500)
}


function showAdobted() {
    console.log("test showAdobted function : ",adobted);
    const validation = document.getElementById("validation")
    validation.classList.add("hidden")
    const cards = document.getElementById("cards");
    cards.classList.toggle("hidden")
    const main = document.getElementById("indexMain");
    main.classList.add("hidden")
    // const main = document.getElementById("indexMain");
    cards.innerHTML = ""; 
    adobted.forEach(item => {
        const div1 = document.createElement("div");
        div1.innerHTML = `
        <div class="flex gap-4 w-[80%] md:w-[50%] mx-auto mt-6 rounded-md  shadow-lg">
        <img class=" w-32 md:w-56 rounded-lg" src="${item.image}" alt="${item.name}"/>
        <div class="flex flex-col"> 
        <h1 class=" font-bold text-lg">${item.name}</h1>
        <p class="text-gray-500">${item.categorie}</p>
        <p class ="text-gray-500">${item.age}</p>
        </div>
        </div>
        `;
        console.log("test test test")
        console.log("Cards", document.getElementById("cards"))
        cards.classList.add("flex","flex-col","gap-4")
        cards.appendChild(div1)
    });
}

document.addEventListener("DOMContentLoaded", function() {
    show();
    choose();
    document.getElementById("adobted").addEventListener("click", function(event) {
        event.preventDefault()
        document.getElementById("adobted").classList.add("active")
        document.getElementById("Discover").classList.remove("active")
        showAdobted();
        
        // document.getElementById("adobted").classList.add("hidden")
    });
});
