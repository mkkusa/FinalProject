const navLinks = document.querySelectorAll(".nav-link");
const planetName = document.querySelector("#planet-name");
const planetIMG = document.querySelector("#planet-img");
const overview = document.querySelector("#overview");
const internal = document.querySelector("#internal");
const geology = document.querySelector("#geology");
const planetDesc = document.querySelector("#planet-description");
const geologyIMG = document.querySelector("#geology-img");
const rotationTime = document.querySelector("#rotation-time");
const revolutionTime = document.querySelector("#revolution-time");
const radius = document.querySelector("#radius");
const averageTemp = document.querySelector("#average-temp");
const burgerBtn = document.querySelector(".burger-btn");
const burgernavEl = document.querySelector("#burger-nav");

const PLANET_API_URI = "https://planets-api.vercel.app/api/v1/planets";

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    getPlanet(navLinks[i].textContent);
  });
}

const getPlanet = async (planet = "Mercury") => {
  const response = await fetch(`${PLANET_API_URI}/${planet}`);
  const data = await response.json();
  planetName.textContent = data["name"];
  planetIMG.src = data["images"]["planet"];
  planetDesc.textContent = data.overview.content;
  rotationTime.textContent = data.rotation;
  revolutionTime.textContent = data.revolution;
  radius.textContent = data.radius;
  averageTemp.textContent = data.temperature;

  overview.addEventListener("click", () => {
    planetDesc.textContent = data.overview.content;
    planetIMG.src = data.images.planet;
  });
  internal.addEventListener("click", () => {
    planetDesc.textContent = data.structure.content;
    planetIMG.src = data.images.internal;
  });
  geology.addEventListener("click", () => {
    planetDesc.textContent = data.geology.content;
    planetIMG.src = data.images.planet;
    geologyIMG.src = data.images.geology;
    geologyIMG.style.display = "block";
  });

  burgerBtn.addEventListener("click", () => {
    burgernavEl.classList.toggle("show");
  });
};

getPlanet();
