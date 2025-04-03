const header = document.querySelector(".header");

window.addEventListener("load", () => {
	if (window.scrollY > 8) {
		header.classList.add("header--on-top");
	}
});

window.addEventListener("scroll", () => {
	if (window.scrollY > 8) {
		header.classList.add("header--on-top");
	} else {
		header.classList.remove("header--on-top");
	}
});

// пофиксить, когда после перезагрузки страницы нет хедер-меню, а мы не в самом начале страницы
