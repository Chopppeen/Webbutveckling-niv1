const nav = document.querySelector("nav");
const mobileNav = document.querySelector(".mobile-nav");
const hamburgerBtn = document.querySelector("#menu-open")

const closeBtn = document.querySelector("#menu-close")

let shownEvents = 3;

const news = [
	{
		id: "1",
		img: "./img/img1.webp",
		title: "Föredrag 22/10",
		date: "16 oktober 2025",
		content:
		"Niorna kommer och hälsar på och våra egna elever blir utan lektioner – då bjuder vi in föreläsare som kommer och tar hand om dem istället! Åk1 och HSF2 börjar dagen med ett evenemang i Folkets Hus Ånge men kommer sedan upp och avslutar dagen med övriga. Åk3 och YRK2 är i Aulan och får träffa representanter från polisen, Näringslivskontoret, Rocco Oil, Campus Ånge/Komvux, Ålsta folkhögskola, socialkontoret och Kriminalvården. Vi hoppas på en spännande dag!",
	},
	{
		id: "2",
		img: "./img/img2.webp",
		title: "Åk 9 besöksdag",
		date: "5 oktober 2025",
		content:
		"Dagen börjar med att vi samlas i Posthuset där du får ditt schema och en påse med lite smått och gott. Du får sedan information från de tre program som du valt, och lunch. Under programpasset får du även träffa olika företag/arbetsgivare som är aktuella för just det programmet. De kan berätta precis vad de söker efter hos sina anställda, och hur det är att jobba där. Passa på att ställa massa frågor även till dem! Vi avslutar sedan dagen tillsammans med gott fika. Välkommen till en inspirerande dag om ditt gymnasieval! ",
  },
	{
		id: "3",
		img: "./img/img3.webp",
		title: "Föräldramöte åk 1 9/9",
		date: "2 septembet 2025",
		content:
		"Till vårdnadshavare för elever i årskurs 1 Välkomna till föräldramöte! Ni är varmt välkomna till skolan för att träffa rektor, mentorer och en del annan personal. Vi vill gärna ha ett nära samarbete med er så att vi tillsammans kan hjälpa eleverna att lyckas med sin skolgång. Det är första terminen för era ungdomar i en ny skolform som ställer annorlunda krav och har andra förutsättningar än tidigare. Tid:      Tisdag 9 september 2025, kl. 18.30. Plats:            Aulan, Bobergsgymnasiet (mitt i huset, en trappa upp från huvudentrén). Vi kommer först ses i helgrupp för en del allmän information. Efter det går ni vidare med mentorerna för ytterligare information och samtal om just er klass. Under kvällen kommer vi att tala om våra regler och rutiner, informera om programmen i gymnasieskolan och hur arbetet med elevernas lärande går till på Bobergsgymnasiet. Naturligtvis bjuder vi även på fika. Välkomna! / Jennie Stadling Wilsson, rektor Bobergsgymnasiet. Vi ber er fylla i nedanstående talong som lämnas till mentor senast torsdag 4/9. Tack!",
	}
]

const events = [
	{
		day: "10",
		month: "dec",
		title: "Nobeldag/UF-mässa",
		weekday: "onsdag",
		statusColor: "yellow",
	},
	{
		day: "19",
		month: "dec",
		title: "Julavslutning",
		weekday: "fredag",
		statusColor: "green",
	},
	{
		day: "20",
		month: "dec",
		endDay: "07",
		endmonth: "jan",
		title: "Jullov",
		weekday: "onsdag",
		statusColor: "red",
	},
	{
		day: "15",
		month: "dec",
		title: "studiebesök åk2",
		weekday: "onsdag",
		statusColor: "yellow",
	},
	{
		day: "28",
		month: "jan",
		endDay: "30",
		endmonth: "jan",
		title: "studiedag",
		weekday: "onsdag",
		statusColor: "green",
	},
	{
		day: "10",
		month: "dec",
		title: "Nobeldag/UF-mässa",
		weekday: "onsdag",
		statusColor: "yellow",
	},
	{
		day: "10",
		month: "dec",
		title: "Nobeldag/UF-mässa",
		weekday: "onsdag",
		statusColor: "yellow",
	},
	{
		day: "10",
		month: "dec",
		title: "Nobeldag/UF-mässa",
		weekday: "onsdag",
		statusColor: "yellow",
	},
	{
		day: "10",
		month: "dec",
		title: "Nobeldag/UF-mässa",
		weekday: "onsdag",
		statusColor: "yellow",
	},
]


const closeMenu = () => {
	mobileNav.classList.add("hidden")
	nav.classList.add("nav-closed")
	hamburgerBtn.classList.remove("hidden")
}

const openMenu = () => {
	hamburgerBtn.classList.add("hidden")
	nav.classList.remove("nav-closed")
	mobileNav.classList.remove("hidden")
}

const menuCloseBtn = document
.querySelector("#menu-close")
.addEventListener("click", closeMenu);

const menuOpenBtn = document
.querySelector("#menu-open")
.addEventListener("click", openMenu);

const renderNews = () => {
	const container = document.querySelector(".news-grid");

	news.forEach((news) => {
		const card = document.createElement("div");
		card.className = "news-card";

		card.innerHTML = `
			<img src="${news.img}" alt="${news.title}" class="news-image" />
			<h3 class="news-title">${news.title}</h3>
			<p class="news-date">${news.date}</p>
			`;


		card.addEventListener("click", () => {
			window.location.href = `news.html?id=${news.id}`;
		});


			container.appendChild(card);
	});
};

const renderNewsDetail = () => {
	const container = document.querySelector(".news-content");
	if (!container) return;

	// Hämta ID från URL-parametern
	const urlParams = new URLSearchParams(window.location.search)
	const newsId = urlParams.get("id")

	// Hitta rätt artikel
	const newsItem = news.find((n) => n.id === newsId)

	if (newsItem) {
		container.innerHTML = `
		<img src="${newsItem.img}" alt="${newsItem.title}" class="news-image" />
		<h1 class="news-title">${newsItem.title}</h1>
		<p class="news-date">${newsItem.date}</p>
		<p class="news-text">${newsItem.content}</p>
		`;
	} else {
		container.innerHTML =`
	<p>Artikeln kunde inte hittas.</p>
	`;
	}
};
// Rendera beroende på vilken sida vi är på
if (document.querySelector(".news-grid")) renderNews()
if (document.querySelector(".news-content")) renderNewsDetail()

const createDateElement = (event) => {
	// kolla om händelsen har ett slutdatum
	if (event.endDay && event.endMonth) {
		//kolla om händelsen är inom samma månad
		if (event.month === event.endMonth) {
			//om samma månad,visa datum i en ruta´
			return `
			<div class="event-date">
				<h2>${event.day} - ${event.endDay}</h2>
			</div>
			<div class="event-month">
				<p>${event.month} - ${event.endMonth}</p>
			</div>
			`;
		} else {
			return `
				<div class="event-date">
					<div class="event-date-container">
						<h2>${event.day}</h2>
					</div>
					<div="date-container">
						<h2>${event.endDay}</h2>
					</div>
				</div>
				<div class="event-date">
					<div class="event-date-container">
						<h2>${event.month}</h2>
					</div>
					<div="date-container">
						<h2>${event.endMonth}</h2>
					</div>
				</div>
			`;
		}
	} else {
		return `
		
		`;
	}
};

// const newArticles = [
//   { title: "Ny Artikel 1", date: "20 november 2025", img: "./img/new1.webp", content: "Innehåll 1" },
//   { title: "Ny Artikel 2", date: "20 november 2025", img: "./img/new2.webp", content: "Innehåll 2" },
//   { title: "Ny Artikel 3", date: "20 november 2025", img: "./img/new3.webp", content: "Innehåll 3" },
//   { title: "Ny Artikel 4", date: "20 november 2025", img: "./img/new4.webp", content: "Innehåll 4" },
//   { title: "Ny Artikel 5", date: "20 november 2025", img: "./img/new5.webp", content: "Innehåll 5" },
//   { title: "Ny Artikel 6", date: "20 november 2025", img: "./img/new6.webp", content: "Innehåll 6" }
// ];

// let shownNew = 3;
// const container = document.querySelector(".news-grid");
// let btnNew = document.querySelector("#loadNewArticlesBtn");

// if (!btnNew) {
//   btnNew = document.createElement("button");
//   btnNew.id = "loadNewArticlesBtn";
//   btnNew.style.marginTop = "20px";
//   btnNew.style.cursor = "pointer";
//   container.parentNode.appendChild(btnNew);
// }

// function renderNewArticles() {
//   const next = shownNew + 3; 
//   for (let i = shownNew; i < next && i < newArticles.length; i++) {
//     const n = newArticles[i];
//     const card = document.createElement("div");
//     card.className = "news-card";

//     card.innerHTML = `
//       <img src="${n.img}" alt="${n.title}" class="news-image" />
//       <h3>${n.title}</h3>
//       <p>${n.date}</p>
//       <button class="expand-btn">Visa mer</button>
//       <p class="news-text" style="display:none">${n.content}</p>
//     `;

//     const expandBtn = card.querySelector(".expand-btn");
//     const textP = card.querySelector(".news-text");

//     expandBtn.addEventListener("click", () => {
//       if (textP.style.display === "none") {
//         textP.style.display = "block";
//         expandBtn.textContent = "Visa mindre";
//       } else {
//         textP.style.display = "none";
//         expandBtn.textContent = "Visa mer";
//       }
//     });

//     container.appendChild(card);
//   }

//   shownNew += 3;

//   if (shownNew >= newArticles.length) {
//     btnNew.style.display = "none";
//   }
// }

// btnNew.addEventListener("click", renderNewArticles);

