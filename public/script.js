const arr = [
    {id: 1, name: "eva", categorie: "malinois", age: "3 months", image: "../image/eva.jpg"},
    {id: 2, name: "ema", categorie: "malinois", age: "3 months", image: "../image/eva.jpg"},
    {id: 3, name: "poli", categorie: "malinois", age: "3 months", image: "../image/eva.jpg"}
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
    
    invalid.onclick = function() {
        if (indice < arr.length) {
            indice++;
            show();
        }
    };
}
function show() {
    const main = document.getElementById("indexMain");
    main.innerHTML = ""; 
    if (indice >= arr.length) {
        main.innerHTML = "NO MORE PETS";
        return; 
    }
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
}


function showAdobted() {
    console.log("test showAdobted function : ",adobted);
    const cards = document.getElementById("cards");
    const main = document.getElementById("indexMain");
    main.innerHTML = ""; 
    adobted.forEach(item => {
        const div1 = document.createElement("div");
        div1.innerHTML = `
        <div class="flex gap-2 ">
        <img class="w-72" src="${item.image}" alt="${item.name}"/>
        <h1>${item.name}</h1>
        <p>${item.categorie}</p>
        </div>
        `;
        console.log("test test test")
        console.log("Cards", document.getElementById("cards"))
        
        cards.appendChild(div1)
    });
}

document.addEventListener("DOMContentLoaded", function() {
    show();
    choose();
    document.getElementById("adobted").addEventListener("click", function(event) {
        event.preventDefault()
        showAdobted();
        document.getElementById("adobted").classList.add("hidden")
    });
});
