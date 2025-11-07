const mobilenav = document.querySelector(".mobilenav");
const hamburgerBtn = document.querySelector("#menu-open")

const closeMenu = () => {
	mobileNav.classList.add("hidden")
	hamburgerBtn.classList.remove("hidden")
}

const openMenu = () => {
	hamburgerBtn.classList.add("hidden")
	mobileNav.classList.remove("hidden")
}

const menuCloseBtn = document
.querySelector("#menu-close")
.addEventListener("click", closeMenu);

const menuOpenBtn = document
.querySelector("#menu-open")
.addEventListener("click", openMenu);