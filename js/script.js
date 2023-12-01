// Dato un array di oggetti letterali con:
// URL dell’immagine
// Titolo della slide
// Descrizione della slide
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
// costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso l'alto o verso il basso, 
// l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2: Aggiungere il ciclo infinito del carosello.
// Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto,
//  la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.



const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];




// let activeIndex = 0;

// images.forEach((element, index) => {
    //     const classesForActiveSlide = (index === activeIndex) ? 'active' : '';
    //     carousel.innerHTML += generateNewSlide(element.url, element.title, element.description,
    //         index, classesForActiveSlide);
    // });
    
// document.getElementsByClassName('btn-up').addEventListener('click', function() {
    //     if(--activeIndex < 0) activeIndex = images.length - 1;
    //     changeToSlide(activeIndex);
    // });
        
// document.getElementsByClassName('btn-down').addEventListener('click', function(){
    //     if(++activeIndex >= images.length) activeIndex = 0;
    //     changeToSlide(activeIndex);
    // } );
            


const carousel = document.getElementById('container-carousel');

let btnUp = document.getElementsByClassName('btn-up');
let btnDown = document.getElementsByClassName('btn-down');
            
            
let index = 0;

let activeIndex = images[index].image;

function clickButtonUp (){btnUp.addEventListener('click', function(){
    activeIndex++;
    if (activeIndex >= images.length){
        activeIndex = 0;
    }
})
};

function clickButtonDown(){ btnDown.addEventListener('click', function(){
    activeIndex--;
    if (activeIndex < 0){
        activeIndex = 4;
    }
})
};

const imgCarousel = document.createElement('img');
imgCarousel.classList.add('big-img');
imgCarousel.src = `${activeIndex}`;  


carousel.appendChild(imgCarousel);



const containerMiniImg = document.getElementById('container-mini-img');


for (let i = 0; i <= 5; i++ ){

    let miniImg = images[i].image;

    const miniImgCarusel = document.createElement('img');
    miniImgCarusel.classList.add('mini-img');
    miniImgCarusel.src = `${miniImg}`;


    containerMiniImg.appendChild(miniImgCarusel);

}











