const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// tableau slides [0,1,2,3]

// Ajout de la constante des flèches
const arrows = document.querySelectorAll(".arrow");

// Ajout de la constante Slide active => slide visible
const slideActive = document.querySelector(".active");

// Pour chaque flèche écouter le clic
arrows.forEach((arrow) => {
	arrow.addEventListener('click', (e) => {
		// si je clique sur arrow_left je fais -1 et si je clique sur arrow_right je fais +1
		//calcNextSlide => est ce que e.target.classlist est égal à arrow_right? si oui ca renvoie +1 si non renvoie -1
		let calcNextSlide =0;
			if (e.target.classList === "arrow_right") 
				{calcNextSlide === +1}
				else {calcNextSlide === -1};

		//newIndex => calcule où se positionne la class active dans le tableau slides 
		//si calcNextSlide=-1 et ([...slides].indexOf(slideActive))=1 on aura 0 donc la 1e image
		newIndex = calcNextSlide + ([...slides].indexOf(slideActive));

		//Pour avoir le dernier élément du tableau 
		if(newIndex < 0) {newIndex = slides.length -1};

		//pour avoir le 1e élément du tableau
		if(newIndex >= slides.length) {newIndex = 0;};

		//pour ajouter la class active au nouvel index du tableau et qui permet de montrer l'image à l'écran
		slides[newIndex].classList.add('active');
		//pour enlever la class active à SlideActive
		slideActive.classList.remove('active');
	})
});