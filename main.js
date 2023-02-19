var images = document.querySelectorAll('img')

document.querySelector('.right').onclick = right;
document.querySelector('.left').onclick = left;

var li = document.querySelectorAll('li')

var counter = 0;

function right(){
    images[counter].classList.remove('active')
    li[counter].classList.remove('active-li')
    counter++;
    
    if(images.length == counter){
        counter = 0;
    }
    
    images[counter].classList.add('active')
    li[counter].classList.add('active-li')
    autoplay()
}

function left(){
    images[counter].classList.remove('active')
    li[counter].classList.remove('active-li')
    counter--;
    
    if(counter < 0){
        counter = images.length - 1
    }
    
    images[counter].classList.add('active')
    li[counter].classList.add('active-li')
    autoplay()
}


for(var i = 0; i < li.length; i++){
    li[i].onclick = function(){
        
        for(var j = 0; j<li.length; j++){
            li[j].classList.remove('active-li');
            images[j].classList.remove('active');
        }
        
        this.classList.add('active-li')
        var dataSlide = this.getAttribute('data-slide')
        images[dataSlide].classList.add('active')
        counter = dataSlide
        
    }
}


var timer;

function autoplay(){
    timer = setTimeout(right, 4000)
}

autoplay()





