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

// Ajout des variables
const bannerImg = document.querySelector(".banner-img");
const tagline = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot")

let compteur = 0;

// fonction pour changer <img> et <p>
function changeSlide(){
	bannerImg.src = `assets/images/slideshow/${slides[compteur].image}`; // On ajoute le chemin de l'image dans la source
	tagline.innerHTML = slides[compteur].tagLine; // On ajoute en HTML la tagline dans la balise <p>

}
// fonction pour ajouter la class dot_selecteur selon index du tableau
function changeDot(index){
	dots.forEach((dot, compteur) => {
			if (compteur === index) { // Si compteur est égal à l'index du tableau alors
				dot.classList.add("dot_selected"); // On ajoute la classe pour le bullet point actif
			} else {
				dot.classList.remove("dot_selected"); // On supprime la classe pour les autres points bullets
			}
		});
	}

arrowLeft.addEventListener('click', function(){
	compteur--; // On recule d'un élément dans le tableau
	if(compteur < 0){compteur = slides.length -1}; /* Si le compteur est inférieur à 0,
	 												on retourne au dernier objet du tableau et -1 car slides.lenght=3 et dernier objet a index=2 */
	changeSlide();
	changeDot(compteur);
});

arrowRight.addEventListener('click', function(){
	compteur++; // On avance d'un élément dans le tableau
	if(compteur >= slides.length){compteur = 0}; // Si on est au dernier élément du tableau, on revient à l'élément 0
	changeSlide();
	changeDot(compteur);
});