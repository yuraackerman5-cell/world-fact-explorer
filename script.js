const COUNTRIES = [
  {
    flag:"🇯🇵",
    name:"Japan",
    capital:"Tokyo",
    region:"Asia",

    sections:[

      {
        title:"🌸 Introduction",
        facts:[
          "Japan is an island country located in East Asia.",
          "The country mixes ancient traditions with futuristic technology.",
          "Japan is made up of more than 6,000 islands.",
          "Tokyo is one of the busiest cities in the world.",
          "Japan is known for being clean, safe, and organized.",
          "Many people admire Japan’s discipline and respectful culture."
        ]
      },

      {
        title:"🏯 History",
        facts:[
          "Samurai warriors once protected Japan and followed a strict honor code called Bushido.",
          "Japan was ruled by powerful military leaders called shoguns.",
          "Kyoto was the old capital before Tokyo.",
          "Ancient castles and temples still exist across Japan.",
          "Japan stayed isolated from much of the world for over 200 years.",
          "After World War II, Japan rebuilt itself into a global economic power."
        ]
      },

      {
        title:"🎎 Culture & Traditions",
        facts:[
          "People in Japan often bow to show respect.",
          "Shoes are removed before entering homes.",
          "Traditional Japanese clothing is called kimono.",
          "Cherry blossom season is celebrated every spring.",
          "Tea ceremonies are an important cultural tradition.",
          "Japanese festivals include lanterns, fireworks, and traditional dances."
        ]
      },

      {
        title:"🍜 Food",
        facts:[
          "Sushi is one of Japan’s most famous foods.",
          "Ramen is loved all around the world.",
          "Japanese meals are often carefully designed and beautifully presented.",
          "Seafood is an important part of Japanese cuisine.",
          "Popular foods include tempura, mochi, udon, and takoyaki.",
          "Japan’s convenience stores are famous for quality food."
        ]
      },

      {
        title:"🎌 Anime & Entertainment",
        facts:[
          "Japan is the birthplace of anime and manga.",
          "Anime is watched by millions of fans globally.",
          "Nintendo and Sony are famous Japanese gaming companies.",
          "Arcades are still popular in many Japanese cities.",
          "Cosplay events attract huge crowds every year.",
          "Anime characters and styles influence fashion worldwide."
        ]
      },

      {
        title:"🤖 Technology",
        facts:[
          "Japan is famous for advanced robots and electronics.",
          "Bullet trains can travel over 300 kilometers per hour.",
          "Japanese trains are known for being extremely punctual.",
          "Tokyo is filled with giant screens and futuristic buildings.",
          "Japan creates many high-tech inventions.",
          "Some restaurants and hotels even use robots."
        ]
      },

      {
        title:"⛰ Nature",
        facts:[
          "Mount Fuji is Japan’s most famous mountain.",
          "Mount Fuji is actually an active volcano.",
          "Japan experiences many earthquakes every year.",
          "The country has beautiful forests and bamboo groves.",
          "Autumn leaves in Japan attract many visitors.",
          "Japan has many peaceful gardens and hot springs."
        ]
      }

    ]
  },

  {
    flag:"🇧🇷",
    name:"Brazil",
    capital:"Brasília",
    region:"Americas",

    sections:[
      {
        title:"🌴 Introduction",
        facts:[
          "Brazil is the largest country in South America."
        ]
      }
    ]
  },

  {
    flag:"🇫🇷",
    name:"France",
    capital:"Paris",
    region:"Europe",

    sections:[
      {
        title:"🗼 Introduction",
        facts:[
          "France is one of the most visited countries in the world."
        ]
      }
    ]
  },

  {
    flag:"🇪🇬",
    name:"Egypt",
    capital:"Cairo",
    region:"Africa",

    sections:[
      {
        title:"🐫 Introduction",
        facts:[
          "Egypt is one of the oldest civilizations in history."
        ]
      }
    ]
  },

  {
    flag:"🇦🇺",
    name:"Australia",
    capital:"Canberra",
    region:"Oceania",

    sections:[
      {
        title:"🦘 Introduction",
        facts:[
          "Australia is both a country and a continent."
        ]
      }
    ]
  }
];

let activeRegion = "all";
let searchText = "";
let currentCountries = [];

function renderCountries(){

  const grid = document.getElementById("grid");

  currentCountries = COUNTRIES.filter(country => {

    const regionMatch =
      activeRegion === "all" ||
      country.region === activeRegion;

    const searchMatch =
      country.name.toLowerCase().includes(searchText.toLowerCase());

    return regionMatch && searchMatch;
  });

  if(currentCountries.length === 0){
    grid.innerHTML = "<p>No countries found.</p>";
    return;
  }

  grid.innerHTML = currentCountries.map((country,index)=>`

    <div class="card" onclick="openModal(${index})">

      <div class="flag">${country.flag}</div>

      <div class="country-name">${country.name}</div>

      <div class="region">${country.region}</div>

      <p><strong>Capital:</strong> ${country.capital}</p>

      <p class="fact">
        ${
          country.sections
          ? country.sections[0].facts[0]
          : ""
        }
      </p>

    </div>

  `).join("");
}

function openModal(index){

  const country = currentCountries[index];

  document.getElementById("mName").textContent =
    country.flag + " " + country.name;

  document.getElementById("mCapital").textContent =
    "Capital: " + country.capital;

  if(country.name === "Japan"){

    document.getElementById("mFacts").innerHTML = `

      <div class="japan-layout">

        <div class="left-menu">

          ${country.sections.map((section,i)=>`

            <div
              class="japan-btn"
              onclick="openJapanSection(${i})"
            >

              <div class="japan-btn-icon">
                ${section.title.split(" ")[0]}
              </div>

              <div class="japan-btn-name">
                ${section.title.replace(section.title.split(" ")[0],"")}
              </div>

            </div>

          `).join("")}

        </div>

        <div class="right-content">

          <div class="japan-welcome">

            <h2>
              Explore Area
            </h2>

            <div class="welcome-box">

              <div class="welcome-glow"></div>

              <p>
                Select a topic from the left side
                to begin your journey through Japan.
              </p>

            </div>

          </div>

          <div id="sectionFacts"></div>

        </div>

      </div>

    `;

    openJapanSection(0);
  }

  else{

    document.getElementById("mFacts").innerHTML = `

      <ul>
        ${country.sections[0].facts.map(fact=>`
          <li>${fact}</li>
        `).join("")}
      </ul>

    `;
  }

  document.getElementById("modal").style.display = "block";
}

function openJapanSection(index){

  const country =
    COUNTRIES.find(c => c.name === "Japan");

  const section = country.sections[index];

  document.getElementById("sectionFacts").innerHTML = `

    <div class="japan-facts-box">

      <h2>${section.title}</h2>

      <ul>

        ${section.facts.map(fact=>`
          <li>${fact}</li>
        `).join("")}

      </ul>

    </div>

  `;
}

document.getElementById("closeBtn")
.addEventListener("click", ()=>{

  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click",(e)=>{

  if(e.target.id === "modal"){
    document.getElementById("modal").style.display = "none";
  }
});

document.querySelectorAll(".filter-btn")
.forEach(button=>{

  button.addEventListener("click",()=>{

    document.querySelectorAll(".filter-btn")
    .forEach(btn=>btn.classList.remove("active"));

    button.classList.add("active");

    activeRegion = button.dataset.region;

    renderCountries();
  });
});

document.getElementById("searchInput")
.addEventListener("input",(e)=>{

  searchText = e.target.value;

  renderCountries();
});

renderCountries();