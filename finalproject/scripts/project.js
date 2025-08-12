const today = new Date();
const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last modified: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");

const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const faunas = [
    {
        faunaName: "Whale",
        habitat: "Coastal",
        conservationStatus: "Once on the brink of extinction due to commercial whaling, it is now recovering thanks to international protection.",
        diet: "Filter feeder – consumes plankton and krill.",
        curiosity: "Can live for more than 70 years.",
        imageUrl: "finalproject/images/ballena.webp"
    },
    {
        faunaName: "Marsh Deer",
        habitat: "Terrestrial",
        conservationStatus: "Vulnerable due to wetland destruction and hunting.",
        diet: "Herbivore – aquatic plants and grasses.",
        curiosity: "Excellent swimmer, often seen in marshes.",
        imageUrl: "finalproject/images/ciervo.webp"
    },
    {
        faunaName: "Capybara",
        habitat: "Terrestrial",
        conservationStatus: "Least concern, widely distributed across South America.",
        diet: "Herbivore – feeds on grasses and aquatic plants.",
        curiosity: "World’s largest rodent.",
        imageUrl: "finalproject/images/carpincho.webp"
    },
    {
        faunaName: "Condor",
        habitat: "Aerial",
        conservationStatus: "Near threatened due to poisoning and habitat loss.",
        diet: "Scavenger – feeds on carrion.",
        curiosity: "One of the largest flying birds in the world, with a wingspan up to 3.3 meters.",
        imageUrl: "finalproject/images/condor.webp"
    },
    {
        faunaName: "Sea Lion",
        habitat: "Coastal",
        conservationStatus: "Stable population, though affected by pollution and fishing nets.",
        diet: "Mainly fish and squid.",
        curiosity: "Males develop a large mane during adulthood.",
        imageUrl: "finalproject/images/leon-marino.webp"
    },
    {
        faunaName: "Rufous Hornero",
        habitat: "Aerial",
        conservationStatus: "Least concern, very common in rural and urban areas.",
        diet: "Insects and other small invertebrates.",
        curiosity: "National bird of Argentina, famous for its mud nests shaped like ovens.",
        imageUrl: "finalproject/images/hornero.webp"
    },
    {
        faunaName: "Toucan",
        habitat: "Aerial",
        conservationStatus: "Least concern, but affected by deforestation in some areas.",
        diet: "Fruits, insects, and small reptiles.",
        curiosity: "Its large beak helps regulate body temperature.",
        imageUrl: "finalproject/images/tucan.webp"
    },
    {
        faunaName: "Penguin",
        habitat: "Coastal",
        conservationStatus: "Near threatened due to oil spills and climate change.",
        diet: "Small fish, squid, and crustaceans.",
        curiosity: "Can swim up to 15 km/h.",
        imageUrl: "finalproject/images/pinguino.webp"
    },
    {
        faunaName: "Puma",
        habitat: "Terrestrial",
        conservationStatus: "Least concern, but threatened in some regions by hunting and habitat loss.",
        diet: "Carnivore – mainly deer, guanacos, and smaller mammals.",
        curiosity: "Can jump more than 5 meters in a single leap.",
        imageUrl: "finalproject/images/puma.jpg"
    },
];

createFaunaCard(faunas);

function setFilter(filterName) {
    localStorage.setItem("selectedFilter", filterName);
}
const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    createFaunaCard(faunas);
    setFilter("home");
});
const maritimeLink = document.querySelector("#maritime");
maritimeLink.addEventListener("click", () => {
    createFaunaCard(faunas.filter(fauna => fauna.habitat.includes("Coastal")));
    setFilter("maritime");
});
const terrestrialLink = document.querySelector("#terrestrial");
terrestrialLink.addEventListener("click", () => {
    createFaunaCard(faunas.filter(fauna => fauna.habitat.includes("Terrestrial")));
    setFilter("terrestrial");
});
const aerialLink = document.querySelector("#aerial");
aerialLink.addEventListener("click", () => {
    createFaunaCard(faunas.filter(fauna => fauna.habitat.includes("Aerial")));
    setFilter("aerial");
});

const savedFilter = localStorage.getItem("selectedFilter");
if (savedFilter) {
    if (savedFilter === "home") createFaunaCard(faunas);
    if (savedFilter === "maritime") createFaunaCard(faunas.filter(fauna => fauna.habitat.includes("Coastal")));
    if (savedFilter === "terrestrial") createFaunaCard(faunas.filter(fauna => fauna.habitat.includes("Terrestrial")));
    if (savedFilter === "aerial") createFaunaCard(faunas.filter(fauna => fauna.habitat.includes("Aerial")));
} else {
    createFaunaCard(faunas);
}

function createFaunaCard(filteredFaunas) {
    document.querySelector(".fauna").innerHTML = "";
    filteredFaunas.forEach(fauna => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let habitat = document.createElement("p");
        let conservationStatus = document.createElement("p");
        let diet = document.createElement("p");
        let curiosity = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = fauna.faunaName;
        habitat.innerHTML = `<span class="label">Habitat:</span> ${fauna.habitat}`;
        conservationStatus.innerHTML = `<span class="label">Conservation Status:</span> ${fauna.conservationStatus}`;
        diet.innerHTML = `<span class="label">Diet:</span> ${fauna.diet}`;
        curiosity.innerHTML = `<span class="label">Curiosity:</span> ${fauna.curiosity}`;
        img.setAttribute("src", fauna.imageUrl);
        img.setAttribute("alt", fauna.faunaName);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(habitat);
        card.appendChild(conservationStatus);
        card.appendChild(diet);
        card.appendChild(curiosity);

        document.querySelector(".fauna").appendChild(card);
    });

    const products = [
        {
            id: "fc-1888",
            name: "Sightings and reports",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "Educational activities and events",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "Animal identification",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "Habitats and ecosystems",
            averagerating: 3.9
        }];

    const selectElement = document.getElementById("productName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}
