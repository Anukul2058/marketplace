var first = document.getElementById('first')
var second = document.getElementById('second')
var third = document.getElementById('third')
var four = document.getElementById('four')
var fifth = document.getElementById('fifth')



first.addEventListener('click',function show(){

    document.querySelector('.first-dropdown').classList.toggle('mystyle')
    

})
second.addEventListener('click',function show2(){

    document.querySelector('.second-dropdown').classList.toggle('mystyle2')
    console.log('hi')

})
third.addEventListener('click',function show3(){

    document.querySelector('.third-dropdown').classList.toggle('mystyle3')
    

})

fifth.addEventListener('click',function show5(){
    document.querySelector('.fifth-dropdown').classList.toggle('mystyle5')
    console.log('hi')
})


// slider 

const display = {
    type: 'carousel',
    
    perView: 3,
    breakpoints:{
        800: {
        perView: 2
        },
        500:{
            perView:1
        }

    },
    gap : '10vw',
    autoplay : '3000'
    
  }
new Glide('.glide',display).mount()



var menu = document.getElementById('menu')
 

menu.addEventListener('click',()=>{
 document.querySelector('.side-nav').classList.toggle('sidenavbar')
 gsap.from('.side-nav',{x:'50vw',duration:1,ease:'Power2easeIn'}) 


})

var search = document.getElementById('search')
search.addEventListener('click',()=>{
    gsap.from('.search-bar',{duration:0.5,y:'-50vh',ease:'Power2easeIn'})
    document.getElementById('navigation').style.display = 'none'

    document.querySelector('.search-bar').style.display = 'flex'
})
document.getElementById('cross').addEventListener('click',()=>{
    
    gsap.to('.search-bar',{duration:1,y:'-50vh',ease:'Power2easeIn',display:'none'})
    
    document.getElementById('navigation').style.display = 'flex'

    
    
})


