let images=[ `./img/01.webp `, `./img/02.webp `, `./img/03.webp `, ` ./img/04.webp`, `./img/05.webp `]

let sliderelement = document.querySelector('.slider');
let slidercontent = ''
for( let i=0; i < images.length; i++){
    console.log(images[i]);
    let currentimage = images [i];
    slidercontent += `  
    <div class="slide">
        <img src="${currentimage}">
    </div>
    `

}

console.log(slidercontent)
sliderelement.innerHTML = slidercontent;

let allslides = document.getElementsByClassName('slide');

let active_element = 0

console.log(allslides)
allslides[active_element].classList.add('active');

let prevbutton = document.querySelector('.prev')
let nextbutton = document.querySelector('.next')

nextbutton.addEventListener('click', function(){
    if(active_element < (images.length - 1)){
        allslides[active_element].classList.remove('active');
        active_element++;
        allslides[active_element].classList.add('active');

    }

})

prevbutton.addEventListener('click', function(){
    if(active_element > 0){
        allslides[active_element].classList.remove('active');
        active_element--;
        allslides[active_element].classList.add('active');

    }

})

