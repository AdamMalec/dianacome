const headingEls = document.querySelectorAll(".linear-bg");
const sectionEls = document.querySelectorAll("section");
const storyImageEls = document.querySelectorAll(".story__images li");
const storyInfoEl = document.querySelector(".story__info");
const serviceEls = document.querySelectorAll(".service");
const stepEls = document.querySelectorAll(".step");

console.log(serviceEls);


// const observerHeadersOptions = {
// 	rootMargin: "0% 0% -20% 0%",
// };

const observerOptions = {
	rootMargin: "0% 0% -23% 0%",
};

const observerStoryImages = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			entry.target.classList.add("animate-fade-slide-top");
			observerStoryImages.unobserve(entry.target);
		}
	}
}, observerOptions);

const observerStoryInfo = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			entry.target.classList.add("animate-pop-in-top");
			observerStoryInfo.unobserve(entry.target);
			return;
		}
	}
}, observerOptions);

const observerServices = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			entry.target.classList.add("animate-fade-spring-top");
			observerServices.unobserve(entry.target);
		}
	}
}, observerOptions)

// const observerHeaders = new IntersectionObserver((entries) => {
// 	for (const entry of entries) {
// 		if (entry.isIntersecting) {
// 			entry.target.classList.add("show-heading");
// 			observerHeaders.unobserve(entry.target);
// 			return;
// 		}
// 	}
// }, observerHeadersOptions);

const observerSections = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			const title = entry.target.querySelector(".linear-bg");
			if (title) title.classList.add("show-heading");

			if (entry.target.classList.contains("about")) {
				const image = entry.target.querySelector(".about__image");
				const info = entry.target.querySelector(".about__info");

				image.classList.add("animate-pop-in-bottom");
				info.classList.add("animate-pop-in-bottom");

				setTimeout(() => {
					image.classList.remove("animate-pop-in-bottom");
					info.classList.remove("animate-pop-in-bottom");
				}, 1000);

				observerSections.unobserve(entry.target);
				return;
			}

			// if (entry.target.classList.contains("story")) {
			// 	storyImageEls.forEach((el) => {
			// 		observerStoryImages.observe(el);
			// 	});
			// 	observerStoryInfo.observe(storyInfoEl);

			// 	observerSections.unobserve(entry.target);
			// 	return;
			// }

		}
	}
}, observerOptions);

// headingEls.forEach((el) => {
// 	observerHeaders.observe(el);
// });

sectionEls.forEach((el) => {
	observerSections.observe(el);
});

storyImageEls.forEach((el) => {
	observerStoryImages.observe(el);
});

serviceEls.forEach((el) => {
	observerServices.observe(el);
});

stepEls.forEach((el) => {
	observerStoryImages.observe(el);
});

observerStoryInfo.observe(storyInfoEl);

// дать имена обсерверам по названию анимации
