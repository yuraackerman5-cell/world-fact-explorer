const COUNTRIES = [
  {
    flag:"🇯🇵",
    name:"Japan",
    capital:"Tokyo",
    region:"Asia",
    image:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    sections:[
      {
        title:"🌸 Introduction",
        facts:[
          "Japan is an island country located in East Asia.",
          "Japan is made up of more than 6,000 islands.",
          "Tokyo is one of the busiest cities in the world.",
          "Japan mixes ancient traditions with futuristic technology.",
          "The country is famous for cleanliness and organization.",
          "Japanese culture values discipline and respect.",
          "Japan has one of the highest life expectancies in the world.",
          "Many tourists visit Japan every year for culture and food."
        ]
      },
      {
        title:"🏯 History",
        facts:[
          "Samurai warriors protected Japan in ancient times.",
          "Bushido was the honor code followed by samurai.",
          "Shoguns ruled Japan for centuries.",
          "Kyoto was Japan's old capital before Tokyo.",
          "Ancient castles and temples still exist today.",
          "Japan stayed isolated from much of the world for over 200 years.",
          "The Meiji Restoration transformed Japan rapidly.",
          "After World War II, Japan rebuilt into a global power."
        ]
      },
      {
        title:"🎎 Culture & Traditions",
        facts:[
          "People bow in Japan to show respect.",
          "Shoes are removed before entering homes.",
          "Traditional Japanese clothing is called kimono.",
          "Tea ceremonies are important traditions.",
          "Cherry blossom season is celebrated every spring.",
          "Traditional festivals include lanterns and dances.",
          "Japanese calligraphy is considered an art form.",
          "Respect for elders is deeply important in society."
        ]
      },
      {
        title:"🍜 Food",
        facts:[
          "Sushi is one of Japan's most famous foods.",
          "Ramen is loved around the world.",
          "Seafood is important in Japanese cuisine.",
          "Popular foods include tempura and udon.",
          "Mochi is a traditional rice cake dessert.",
          "Japanese meals are carefully presented beautifully.",
          "Street foods like takoyaki are very popular.",
          "Convenience stores in Japan are famous for quality food."
        ]
      },
      {
        title:"🎌 Anime & Entertainment",
        facts:[
          "Japan is the birthplace of anime and manga.",
          "Anime is watched by millions globally.",
          "Nintendo and Sony are famous Japanese companies.",
          "Arcades remain popular in Japan.",
          "Cosplay events attract huge crowds.",
          "Anime influences global fashion and art styles.",
          "Studio Ghibli movies became famous worldwide.",
          "Japanese pop culture spreads strongly through the internet."
        ]
      },
      {
        title:"🤖 Technology",
        facts:[
          "Japan is famous for advanced robots and electronics.",
          "Bullet trains travel over 300 km/h.",
          "Japanese trains are known for punctuality.",
          "Tokyo has futuristic buildings and giant screens.",
          "Japan creates many high-tech inventions.",
          "Some hotels and restaurants use robots.",
          "Japanese toilets are famous for advanced technology.",
          "Japan is a leader in gaming technology."
        ]
      },
      {
        title:"⛰ Nature",
        facts:[
          "Mount Fuji is Japan's most famous mountain.",
          "Mount Fuji is an active volcano.",
          "Japan experiences many earthquakes yearly.",
          "The country has forests and bamboo groves.",
          "Autumn leaves attract many visitors.",
          "Japan has peaceful gardens and hot springs.",
          "Snow festivals happen during winter in some regions.",
          "Japan's coastline stretches across thousands of kilometers."
        ]
      }
    ]
  },

  {
    flag:"🇧🇷",
    name:"Brazil",
    capital:"Brasília",
    region:"Americas",
    image:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    sections:[
      {
        title:"🌴 Introduction",
        facts:[
          "Brazil is the largest country in South America.",
          "Portuguese is the official language.",
          "Brazil has one of the world's largest populations.",
          "The country is famous for beaches and tropical forests.",
          "Brazil is full of cultural diversity.",
          "Brasília is the capital city.",
          "Brazil has massive natural resources.",
          "Millions of tourists visit every year."
        ]
      },
      {
        title:"⚽ Football",
        facts:[
          "Football is deeply connected to Brazilian culture.",
          "Brazil has won multiple FIFA World Cups.",
          "Pelé became one of history's most famous players.",
          "Many children play football in streets and beaches.",
          "Brazil produced many legendary football stars.",
          "Football stadiums become extremely energetic during matches.",
          "The national team is recognized worldwide.",
          "Football is considered almost a national religion."
        ]
      },
      {
        title:"🎉 Carnival",
        facts:[
          "Carnival is Brazil's most famous celebration.",
          "Huge parades happen every year in Rio.",
          "People dance samba in colorful costumes.",
          "Music fills the streets during Carnival.",
          "Millions of tourists attend Carnival annually.",
          "Some costumes take months to prepare.",
          "Samba schools compete during parades.",
          "Carnival is one of the largest festivals in the world."
        ]
      },
      {
        title:"🌳 Nature",
        facts:[
          "The Amazon Rainforest covers huge parts of Brazil.",
          "Brazil has incredible biodiversity.",
          "Many rare animals live in the rainforest.",
          "The Amazon River is one of the world's largest rivers.",
          "Brazil has waterfalls and wetlands.",
          "Nature tourism is extremely popular.",
          "Some forests in Brazil are still unexplored.",
          "Brazil has thousands of plant species."
        ]
      },
      {
        title:"🍖 Food",
        facts:[
          "Brazilian barbecue is called churrasco.",
          "Feijoada is a famous traditional dish.",
          "Brazil grows massive amounts of coffee.",
          "Street food is very popular in cities.",
          "Tropical fruits are common in meals.",
          "Brazilian desserts are often sweet and rich.",
          "Seafood is common near coastal areas.",
          "Food changes a lot between different regions."
        ]
      },
      {
        title:"🎵 Music & Dance",
        facts:[
          "Samba is one of Brazil's most famous music styles.",
          "Bossa nova became internationally famous.",
          "Dance is deeply connected to celebrations.",
          "Music festivals happen throughout the year.",
          "Capoeira mixes martial arts with dance.",
          "Brazilian music often uses drums and percussion.",
          "Street performances are common in large cities.",
          "Music plays an important role in daily life."
        ]
      },
      {
        title:"🏙 Cities & Lifestyle",
        facts:[
          "Rio de Janeiro is famous for beaches and scenery.",
          "São Paulo is one of the largest cities in the world.",
          "Brazilian cities are energetic and crowded.",
          "Street art is popular in many neighborhoods.",
          "People in Brazil are known for warmth and friendliness.",
          "Beach culture is important in daily life.",
          "Nightlife is active in many cities.",
          "Brazil has both luxury areas and huge favelas."
        ]
      }
    ]
  },

  {
    flag:"🇫🇷",
    name:"France",
    capital:"Paris",
    region:"Europe",
    image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    sections:[
      {
        title:"🗼 Introduction",
        facts:[
          "France is one of the most visited countries in the world.",
          "Paris is known as the City of Light.",
          "France is famous for art, fashion, and culture.",
          "French is the official language.",
          "Millions visit France every year.",
          "France has beautiful villages and cities.",
          "The country has a long historical influence.",
          "France is known for elegance and architecture."
        ]
      },
      {
        title:"🏰 History",
        facts:[
          "France played a major role in European history.",
          "The French Revolution changed the country forever.",
          "Napoleon Bonaparte became one of France's most famous leaders.",
          "Ancient castles exist across the country.",
          "France participated in both World Wars.",
          "The Palace of Versailles is historically famous.",
          "French kings ruled for centuries.",
          "History strongly shaped French identity."
        ]
      },
      {
        title:"🎨 Art & Fashion",
        facts:[
          "France is famous for luxury fashion brands.",
          "Paris is considered a global fashion capital.",
          "The Louvre Museum is one of the world's most famous museums.",
          "Many famous artists lived in France.",
          "French fashion influences worldwide trends.",
          "Art galleries attract millions of tourists.",
          "Perfume industries are important in France.",
          "French design is known for elegance."
        ]
      },
      {
        title:"🥐 Food",
        facts:[
          "Croissants are famous French pastries.",
          "French cuisine is respected worldwide.",
          "Cheese and bread are important in meals.",
          "France produces many famous desserts.",
          "Wine culture is strongly connected to France.",
          "French restaurants focus heavily on presentation.",
          "Escargot is a well-known French dish.",
          "Food is considered an important part of culture."
        ]
      },
      {
        title:"🗼 Landmarks",
        facts:[
          "The Eiffel Tower is France's most famous landmark.",
          "Notre-Dame Cathedral is historically important.",
          "The Louvre holds the Mona Lisa painting.",
          "Mont Saint-Michel attracts many visitors.",
          "France has beautiful countryside castles.",
          "The Arc de Triomphe stands in Paris.",
          "Many streets in Paris are filled with cafés.",
          "French architecture is admired globally."
        ]
      },
      {
        title:"🌿 Nature",
        facts:[
          "France has beaches, mountains, and forests.",
          "The Alps are popular for skiing.",
          "Lavender fields bloom beautifully in Provence.",
          "French countryside villages are very scenic.",
          "National parks protect wildlife and nature.",
          "France has Mediterranean coastal areas.",
          "Autumn landscapes attract photographers.",
          "Nature tourism is common in France."
        ]
      }
    ]
  },

  {
    flag:"🇪🇬",
    name:"Egypt",
    capital:"Cairo",
    region:"Africa",
    image:"https://images.unsplash.com/photo-1572252009286-268acec5ca0a",
    sections:[
      {
        title:"🐫 Introduction",
        facts:[
          "Egypt is one of the oldest civilizations in history.",
          "The Nile River is extremely important to Egypt.",
          "Cairo is one of Africa's largest cities.",
          "Egypt connects Africa and the Middle East.",
          "Millions visit Egypt yearly.",
          "Ancient culture still influences modern Egypt.",
          "Egypt has deserts and historical sites.",
          "Arabic is the official language."
        ]
      },
      {
        title:"🏺 Ancient Egypt",
        facts:[
          "Ancient Egyptians built massive pyramids.",
          "Pharaohs ruled ancient Egypt.",
          "Mummies were preserved carefully after death.",
          "Hieroglyphics were an ancient writing system.",
          "The Sphinx is one of Egypt's most famous statues.",
          "Ancient temples still survive today.",
          "Egyptian gods were important in society.",
          "Ancient Egypt lasted thousands of years."
        ]
      },
      {
        title:"🔺 Pyramids",
        facts:[
          "The Great Pyramid of Giza is world famous.",
          "The pyramids were built as royal tombs.",
          "Some pyramid stones weigh several tons.",
          "The pyramids remain architectural mysteries.",
          "Tourists visit the pyramids from all over the world.",
          "The pyramids are among the Seven Wonders.",
          "Camels are commonly seen near the pyramids.",
          "The desert landscape adds to their beauty."
        ]
      },
      {
        title:"🌊 Nile River",
        facts:[
          "The Nile is one of the longest rivers in the world.",
          "Ancient farming depended on Nile floods.",
          "Most Egyptians live near the Nile.",
          "The river supports agriculture and cities.",
          "Boat cruises on the Nile are popular.",
          "The Nile shaped Egyptian civilization.",
          "Fishing happens along the river.",
          "The river flows through multiple countries."
        ]
      },
      {
        title:"🍽 Food & Culture",
        facts:[
          "Koshari is a famous Egyptian dish.",
          "Tea is commonly enjoyed in Egypt.",
          "Traditional music and dance are important.",
          "Markets called bazaars are very lively.",
          "Egyptian hospitality is well known.",
          "Storytelling has deep cultural roots.",
          "Family gatherings are very important.",
          "Ancient and modern culture blend together."
        ]
      },
      {
        title:"🌅 Nature & Cities",
        facts:[
          "Egypt has large desert landscapes.",
          "The Red Sea is famous for diving.",
          "Alexandria is a historic coastal city.",
          "Cairo is crowded and energetic.",
          "Palm trees grow near river areas.",
          "Egypt experiences very hot summers.",
          "Tourism is important for the economy.",
          "Sunsets in desert areas are famous."
        ]
      }
    ]
  },

  {
    flag:"🇦🇺",
    name:"Australia",
    capital:"Canberra",
    region:"Oceania",
    image:"https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
    sections:[
      {
        title:"🦘 Introduction",
        facts:[
          "Australia is both a country and a continent.",
          "Canberra is the capital city.",
          "Australia is surrounded by oceans.",
          "The country is known for unique wildlife.",
          "Australia has large open landscapes.",
          "English is the main language.",
          "Many tourists visit beaches and cities.",
          "Australia has a relaxed outdoor culture."
        ]
      },
      {
        title:"🐨 Wildlife",
        facts:[
          "Kangaroos are one of Australia's symbols.",
          "Koalas spend most of their time in trees.",
          "Australia has many unique animal species.",
          "Some animals exist only in Australia.",
          "The country has dangerous snakes and spiders.",
          "Wildlife parks attract many visitors.",
          "Australia also has colorful birds.",
          "Marine life near reefs is diverse."
        ]
      },
      {
        title:"🏄 Beaches & Nature",
        facts:[
          "Australia is famous for beautiful beaches.",
          "The Great Barrier Reef is world famous.",
          "Surfing is very popular.",
          "Australia has deserts and rainforests.",
          "National parks protect wildlife.",
          "Many beaches have clear blue water.",
          "Road trips are common across coastal areas.",
          "Nature tourism is very important."
        ]
      },
      {
        title:"🏙 Cities",
        facts:[
          "Sydney is famous for the Opera House.",
          "Melbourne is known for art and culture.",
          "Brisbane has warm weather most of the year.",
          "Perth is isolated from other major cities.",
          "Australian cities are modern and clean.",
          "Public parks are common in cities.",
          "City lifestyles are active and outdoorsy.",
          "Many people live near the coast."
        ]
      },
      {
        title:"🍔 Food & Lifestyle",
        facts:[
          "Barbecues are popular in Australia.",
          "Seafood is common near coastal cities.",
          "Australian cafés are highly popular.",
          "Meat pies are a classic snack.",
          "Outdoor sports are part of daily life.",
          "People often enjoy beach activities.",
          "Coffee culture is strong in cities.",
          "Australian culture is influenced by immigration."
        ]
      },
      {
        title:"🎭 Culture & Sports",
        facts:[
          "Cricket is one of Australia's favorite sports.",
          "Rugby is also very popular.",
          "Australian films and music are internationally known.",
          "Indigenous cultures are deeply important.",
          "Festivals happen throughout the year.",
          "Sports stadiums attract huge crowds.",
          "Street art exists in many cities.",
          "Australia hosts many international events."
        ]
      }
    ]
  },

  {
    flag:"🇦🇫",
    name:"Afghanistan",
    capital:"Kabul",
    region:"Asia",
    image:"https://images.unsplash.com/photo-1543161949-1f9193812ce8",
    sections:[
      {
        title:"🏔 Introduction",
        facts:[
          "Afghanistan is a landlocked country in Central Asia.",
          "Kabul is the capital and largest city.",
          "Afghanistan has a long and rich history.",
          "The country sits at an important crossroads of civilizations.",
          "Dari and Pashto are the official languages.",
          "Afghanistan is known for its rugged mountain landscapes.",
          "The country has a very young population.",
          "Afghanistan has been home to many ancient cultures."
        ]
      },
      {
        title:"🏛 History",
        facts:[
          "Afghanistan was part of many ancient empires.",
          "Alexander the Great passed through the region.",
          "The Silk Road passed through Afghan territory.",
          "Many powerful empires fought for control of the region.",
          "Afghanistan resisted British colonial attempts.",
          "The country became a republic in the 20th century.",
          "Afghanistan has experienced decades of conflict.",
          "Ancient cities like Balkh are historically important."
        ]
      },
      {
        title:"🕌 Culture & Traditions",
        facts:[
          "Hospitality is deeply important in Afghan culture.",
          "Traditional clothing includes the shalwar kameez.",
          "Poetry is highly respected in Afghan society.",
          "Music and storytelling are important traditions.",
          "Family and community bonds are very strong.",
          "Afghan rugs are famous worldwide for their craftsmanship.",
          "Traditional dances are performed at celebrations.",
          "Respect for elders is a key cultural value."
        ]
      },
      {
        title:"🍽 Food",
        facts:[
          "Kabuli pulao is Afghanistan's national dish.",
          "Naan bread is eaten with almost every meal.",
          "Lamb and rice are staples of Afghan cuisine.",
          "Bolani is a popular stuffed flatbread.",
          "Afghan food uses spices like cardamom and cumin.",
          "Tea is the most popular drink in Afghanistan.",
          "Mantu are steamed dumplings loved across the country.",
          "Food is always shared generously with guests."
        ]
      },
      {
        title:"⛰ Nature",
        facts:[
          "The Hindu Kush mountain range crosses Afghanistan.",
          "Afghanistan has dramatic and rugged landscapes.",
          "The Band-e-Amir lakes are stunningly beautiful.",
          "The country has deserts and fertile valleys.",
          "Snow covers many mountain peaks in winter.",
          "Wildlife includes snow leopards and Marco Polo sheep.",
          "The Amu Darya river forms part of the northern border.",
          "Natural resources include minerals and gemstones."
        ]
      },
      {
        title:"🤝 People & Society",
        facts:[
          "Afghanistan is home to many ethnic groups.",
          "Pashtuns, Tajiks, Hazaras and Uzbeks are major groups.",
          "Community gatherings called jirgas help resolve disputes.",
          "Afghan people are known for their resilience.",
          "Education is deeply valued in Afghan tradition.",
          "Many Afghans live in rural villages.",
          "Craftsmanship including jewelry and weaving is important.",
          "Millions of Afghans live as a diaspora around the world."
        ]
      }
    ]
  },

  {
    flag:"🇩🇪",
    name:"Germany",
    capital:"Berlin",
    region:"Europe",
    image:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    sections:[
      {
        title:"🇩🇪 Introduction",
        facts:[
          "Germany is one of the largest countries in Europe.",
          "Berlin is the capital and largest city.",
          "Germany is known for engineering and innovation.",
          "German is the official language.",
          "Germany has one of the strongest economies in the world.",
          "The country is home to over 80 million people.",
          "Germany is a federal republic with 16 states.",
          "Millions of tourists visit Germany every year."
        ]
      },
      {
        title:"🏰 History",
        facts:[
          "Germany was once divided into East and West.",
          "The Berlin Wall fell in 1989, reuniting the country.",
          "Germany played a central role in both World Wars.",
          "The Holy Roman Empire once covered much of the region.",
          "Martin Luther started the Protestant Reformation in Germany.",
          "Ancient Germanic tribes shaped early European history.",
          "The Weimar Republic preceded the modern German state.",
          "Germany rebuilt rapidly after World War II."
        ]
      },
      {
        title:"🎭 Culture",
        facts:[
          "Germany has a rich tradition of music and philosophy.",
          "Beethoven and Bach were famous German composers.",
          "German literature includes Goethe and Schiller.",
          "Christmas markets are famous traditions across Germany.",
          "Carnival celebrations happen in many German cities.",
          "Germans celebrate many local and regional festivals.",
          "Football is the most popular sport in Germany.",
          "German culture values punctuality and efficiency."
        ]
      },
      {
        title:"🍺 Food & Drink",
        facts:[
          "Germany is famous for sausages called wurst.",
          "Pretzels are a beloved traditional snack.",
          "German bread comes in hundreds of varieties.",
          "Oktoberfest is the world's most famous beer festival.",
          "Sauerkraut and schnitzel are classic dishes.",
          "Germany produces excellent wine in river valleys.",
          "Black Forest cake is a famous German dessert.",
          "Food traditions vary strongly between regions."
        ]
      },
      {
        title:"🏭 Industry & Innovation",
        facts:[
          "Germany is known for world-class car manufacturing.",
          "Brands like BMW, Mercedes, and Volkswagen are German.",
          "Germany leads in engineering and technology.",
          "The country is a global export powerhouse.",
          "German universities are respected worldwide.",
          "Many scientific discoveries were made in Germany.",
          "Germany is a leader in renewable energy.",
          "The printing press was invented by a German."
        ]
      },
      {
        title:"🌲 Nature & Cities",
        facts:[
          "The Black Forest is one of Germany's most famous regions.",
          "The Rhine River is important historically and economically.",
          "Bavaria has stunning alpine landscapes.",
          "Germany has many castles along its rivers.",
          "Hamburg is Germany's major port city.",
          "Munich is famous for culture and Oktoberfest.",
          "Germany has many national parks and nature reserves.",
          "The country has cold winters and mild summers."
        ]
      }
    ]
  },

  {
    flag:"🇵🇪",
    name:"Peru",
    capital:"Lima",
    region:"Americas",
    image:"https://images.unsplash.com/photo-1526392060635-9d6019884377",
    sections:[
      {
        title:"🦙 Introduction",
        facts:[
          "Peru is located on the western coast of South America.",
          "Lima is the capital and largest city.",
          "Spanish is the official language.",
          "Peru is home to one of the world's oldest civilizations.",
          "The country has incredible geographic diversity.",
          "Peru is famous for Machu Picchu.",
          "Over 30 million people live in Peru.",
          "Peru is rich in natural resources and culture."
        ]
      },
      {
        title:"🏛 History & Inca Empire",
        facts:[
          "The Inca Empire was the largest in pre-Columbian America.",
          "Cusco was the capital of the Inca Empire.",
          "Machu Picchu was built by the Incas in the 15th century.",
          "Spanish conquistadors arrived in the 16th century.",
          "Peru declared independence from Spain in 1821.",
          "Ancient Peruvian cultures predate the Incas by thousands of years.",
          "The Nazca Lines are mysterious ancient drawings in the desert.",
          "Peru has many well-preserved archaeological sites."
        ]
      },
      {
        title:"🏔 Nature",
        facts:[
          "The Andes Mountains run through Peru.",
          "Peru contains a large part of the Amazon rainforest.",
          "Lake Titicaca is the highest navigable lake in the world.",
          "Peru has diverse ecosystems from coast to jungle.",
          "Rare wildlife includes jaguars and giant condors.",
          "The Amazon River originates in Peru.",
          "Peru has over 1,800 species of birds.",
          "The country experiences diverse climates across regions."
        ]
      },
      {
        title:"🍽 Food",
        facts:[
          "Peruvian cuisine is considered among the best in the world.",
          "Ceviche is Peru's most famous dish.",
          "Lomo saltado is a popular stir-fry dish.",
          "Peru has thousands of varieties of potato.",
          "Quinoa has been grown in Peru for thousands of years.",
          "Peruvian food blends indigenous and international flavors.",
          "Lima is considered a top global food destination.",
          "Aji peppers are central to Peruvian cooking."
        ]
      },
      {
        title:"🎨 Culture",
        facts:[
          "Peru has a rich tradition of weaving and textiles.",
          "Music and dance are important parts of culture.",
          "The marinera is Peru's national dance.",
          "Festivals blend Spanish and indigenous traditions.",
          "Pottery and crafts have ancient roots in Peru.",
          "Quechua is still spoken by many Peruvians.",
          "Peruvian art reflects centuries of mixed heritage.",
          "Storytelling and oral traditions are important."
        ]
      },
      {
        title:"🏙 Cities & Lifestyle",
        facts:[
          "Lima is a modern, vibrant city on the Pacific coast.",
          "Cusco is a historic city near Machu Picchu.",
          "Arequipa is known as the White City.",
          "Street markets are lively and colorful.",
          "Football is very popular in Peru.",
          "Peruvians are known for their warmth and hospitality.",
          "Rural and urban lifestyles differ greatly.",
          "Tourism plays a major role in the economy."
        ]
      }
    ]
  },

  {
    flag:"🇳🇿",
    name:"New Zealand",
    capital:"Wellington",
    region:"Oceania",
    image:"https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
    sections:[
      {
        title:"🥝 Introduction",
        facts:[
          "New Zealand is an island country in the South Pacific.",
          "Wellington is the capital city.",
          "Auckland is the largest city.",
          "English and Māori are official languages.",
          "New Zealand is known for stunning natural scenery.",
          "The country has about 5 million people.",
          "New Zealand was one of the first countries to give women the vote.",
          "It is one of the most remote countries in the world."
        ]
      },
      {
        title:"🌿 Māori Culture",
        facts:[
          "The Māori are the indigenous people of New Zealand.",
          "The Treaty of Waitangi is an important founding document.",
          "The haka is a powerful traditional Māori dance.",
          "Māori culture values land, family, and community.",
          "Traditional Māori art includes intricate carvings and tattoos.",
          "The Māori language is taught in many schools.",
          "Māori traditions are celebrated throughout the country.",
          "Māori culture is central to New Zealand's identity."
        ]
      },
      {
        title:"🏔 Nature",
        facts:[
          "New Zealand has dramatic mountains, fjords, and beaches.",
          "Fiordland National Park is one of the most beautiful places on earth.",
          "The Southern Alps stretch across the South Island.",
          "New Zealand has many active volcanoes.",
          "Geothermal activity creates hot springs and geysers.",
          "The country has unique wildlife found nowhere else.",
          "Kiwi birds are a national symbol of New Zealand.",
          "New Zealand has some of the cleanest air in the world."
        ]
      },
      {
        title:"🎬 Film & Culture",
        facts:[
          "New Zealand was the filming location for Lord of the Rings.",
          "The film industry has grown significantly in recent decades.",
          "New Zealand produces internationally acclaimed music and art.",
          "Rugby is more than a sport, it is a national passion.",
          "The All Blacks rugby team is one of the most famous in the world.",
          "New Zealand culture blends Māori and European influences.",
          "Outdoor adventure is a huge part of the lifestyle.",
          "New Zealanders are known for being friendly and laid back."
        ]
      },
      {
        title:"🍽 Food & Lifestyle",
        facts:[
          "New Zealand is famous for lamb and dairy products.",
          "Seafood including green-lipped mussels is popular.",
          "A hangi is a traditional Māori method of cooking.",
          "New Zealand wine is respected around the world.",
          "Café culture is very strong in cities.",
          "Outdoor barbecues are a common way to socialize.",
          "New Zealand exports kiwifruit worldwide.",
          "Food culture reflects the country's multicultural population."
        ]
      },
      {
        title:"🏙 Cities & Adventure",
        facts:[
          "Auckland is built on a volcanic field.",
          "Queenstown is known as the adventure capital of the world.",
          "Wellington is a compact, creative, and cultural city.",
          "Christchurch rebuilt beautifully after a major earthquake.",
          "Bungee jumping was invented in New Zealand.",
          "Hiking and tramping are very popular activities.",
          "New Zealand cities are clean, safe, and modern.",
          "The country is a top destination for backpackers."
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
    <div class="card" onclick="openModal(${index})" style="--card-bg: url('${country.image}')">
      <div class="flag">${country.flag}</div>
      <div class="country-name">${country.name}</div>
      <div class="region">${country.region}</div>
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p class="fact">
        ${country.sections ? country.sections[0].facts[0] : ""}
      </p>
    </div>
  `).join("");
}

function createSectionButtons(country,buttonClass,functionName){
  return country.sections.map((section,i)=>`
    <div class="${buttonClass}" onclick="${functionName}(${i})">
      <div class="${buttonClass}-icon">${section.title.split(" ")[0]}</div>
      <div class="${buttonClass}-name">${section.title.replace(section.title.split(" ")[0],"")}</div>
    </div>
  `).join("");
}

function openModal(index){
  const country = currentCountries[index];

  document.getElementById("mName").textContent =
    country.flag + " " + country.name;
  document.getElementById("mCapital").textContent =
    "Capital: " + country.capital;

  const nameMap = {
    "Japan":       { cls:"japan-btn",       fn:"openJapanSection" },
    "Brazil":      { cls:"brazil-btn",      fn:"openBrazilSection" },
    "France":      { cls:"france-btn",      fn:"openFranceSection" },
    "Egypt":       { cls:"egypt-btn",       fn:"openEgyptSection" },
    "Australia":   { cls:"australia-btn",   fn:"openAustraliaSection" },
    "Afghanistan": { cls:"afghanistan-btn", fn:"openAfghanistanSection" },
    "Germany":     { cls:"germany-btn",     fn:"openGermanySection" },
    "Peru":        { cls:"peru-btn",        fn:"openPeruSection" },
    "New Zealand": { cls:"newzealand-btn",  fn:"openNewZealandSection" }
  };

  const map = nameMap[country.name];
  if(map){
    document.getElementById("mFacts").innerHTML = `
      <div class="japan-layout">
        <div class="left-menu">
          ${createSectionButtons(country, map.cls, map.fn)}
        </div>
        <div class="right-content">
          <div id="sectionFacts"></div>
        </div>
      </div>
    `;

    if(country.name === "Japan")       openJapanSection(0);
    if(country.name === "Brazil")      openBrazilSection(0);
    if(country.name === "France")      openFranceSection(0);
    if(country.name === "Egypt")       openEgyptSection(0);
    if(country.name === "Australia")   openAustraliaSection(0);
    if(country.name === "Afghanistan") openAfghanistanSection(0);
    if(country.name === "Germany")     openGermanySection(0);
    if(country.name === "Peru")        openPeruSection(0);
    if(country.name === "New Zealand") openNewZealandSection(0);
  }

  document.getElementById("modal").style.display = "block";
}

function renderFacts(countryName,index,boxClass){
  const country = COUNTRIES.find(c => c.name === countryName);
  const section = country.sections[index];
  document.getElementById("sectionFacts").innerHTML = `
    <div class="${boxClass}">
      <h2>${section.title}</h2>
      <ul>
        ${section.facts.map(fact=>`<li>${fact}</li>`).join("")}
      </ul>
    </div>
  `;
}

function openJapanSection(index){       renderFacts("Japan",index,"japan-facts-box"); }
function openBrazilSection(index){      renderFacts("Brazil",index,"brazil-facts-box"); }
function openFranceSection(index){      renderFacts("France",index,"france-facts-box"); }
function openEgyptSection(index){       renderFacts("Egypt",index,"egypt-facts-box"); }
function openAustraliaSection(index){   renderFacts("Australia",index,"australia-facts-box"); }
function openAfghanistanSection(index){ renderFacts("Afghanistan",index,"afghanistan-facts-box"); }
function openGermanySection(index){     renderFacts("Germany",index,"germany-facts-box"); }
function openPeruSection(index){        renderFacts("Peru",index,"peru-facts-box"); }
function openNewZealandSection(index){  renderFacts("New Zealand",index,"newzealand-facts-box"); }

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