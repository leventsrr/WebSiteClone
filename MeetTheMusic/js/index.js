const hamburgerMenu = document.querySelector('.hamburgerMenuIkonu')
const menu = document.querySelector('.acilirPencere');


hamburgerMenu.addEventListener('click',function(){
    menu.classList.contains('pencereInmis') ? menu.classList.remove('pencereInmis') : menu.classList.add('pencereInmis');
    
})

const sentences = [
    {
        b : "Müzik Dinle, Arkadaş Edin",
        p: "Bugüne kadar arkadaşların sana şarkılar önerdi,Artık şarkılar sana arkadaş önerecek!"
    },
    {
        b : "KEŞFET",
        p: "Anlık dinlenilen şarkıları keşfet!"
    },
    {
        b: "EŞLEŞ",
        p: "Şarkı dinle ve arkadaş edin!"
    },
    {
        b: "ANONİM MESAJLAŞ",
        p: "Kimliğin gizli bir şekilde mesajlaşmaya başla!"
    }
]

let h2 = document.querySelector('.baslik')
let p = document.querySelector('.yazi')
let yaziDegis = document.querySelector('.anaBolge')
let i = 1;
yaziDegis.addEventListener('click',function(){
   
    h2.innerText = sentences[i].b
    p.innerText = sentences[i].p
    
    console.log(i)
    i++;
    if(i == 4){
        i = 0;
    }
})

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
  });



