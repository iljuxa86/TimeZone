// let tabs = document.getElementById('tabs-cards');
// Табы

let content = document.getElementById('contents');
let batn = Array.from(document.querySelectorAll('.btn')) ;


function changeClass(el) {
    for (let i = 0; i < batn.length; i++) {
        batn[i].classList.remove('active');
        
    }
        el.classList.add('active');   
}

for (let index = 0; index < batn.length; index++) {
    batn[index].addEventListener('click' , e=>{
        let currentTab = e.target.dataset.btn;
            changeClass(e.target)
        for (let i = 0; i < content.children.length; i++) {
            content.children[i].classList.remove('active');
            if (content.children[i].dataset.content == currentTab) {
                content.children[i].classList.add('active')
            }       
        }
        
    })
}

// МОДАЛЬНОЕ ОКНО

let Modal = document.getElementById('modal-wrapper');
let BtnOpen = document.getElementById('modal-btn');
let overlay = document.getElementById('overlay');

BtnOpen.addEventListener('click', () =>{
    Modal.classList.add('active');
}) 

overlay.addEventListener('click' , () =>{
    Modal.classList.remove('active');
})


// СЛАЙДЕР

let prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    squares = document.querySelectorAll('.square'),
    SlidesWrap = document.querySelectorAll('slider-wrapper');

let index = 0;

const activeSlide = n =>{
    for (const slide of slides) {
        slide.classList.remove('active');    
    }
    slides[n].classList.add('active');
}
const nextSlide = () =>{
    if (index==slides.length-1) {
        index=0;
        PrepareCurrentSlide(index)
    }else{
        index++;
        PrepareCurrentSlide(index);
    }
}

const prevSlide = () =>{
    if (index==0) {
        index=slides.length-1;
        PrepareCurrentSlide(index)
    }else{
        index--;
        PrepareCurrentSlide(index);
    }
}

const activeSquare = n =>{
    for (const square of squares) {
        square.classList.remove('active');    
    }
    squares[n].classList.add('active');
    
}

const PrepareCurrentSlide = ind =>{
    activeSlide(ind);
    activeSquare(ind);
}



squares.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        PrepareCurrentSlide(index);
    })
});

prev.addEventListener('click',prevSlide);
next.addEventListener('click',nextSlide);

