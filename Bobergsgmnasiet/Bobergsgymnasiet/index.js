const menuCloseBtn = document.querySelector(".menu-close-btn");

const closeMenu = () => {
	const nav = document.querySelector("nav");
	nav.classList.add["hidden"];
}

if (menuCloseBtn) {
	menuCloseBtn.addEventListener("click", closeMenu);
}
