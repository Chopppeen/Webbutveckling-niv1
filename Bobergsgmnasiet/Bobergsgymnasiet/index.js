const nav = document.querySelector("nav");
const mobileNav = document.querySelector(".mobile-nav");
const hamburgerBtn = document.querySelector("#menu-open")

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