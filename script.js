let main = document.getElementById("header-cover-image")

let about = document.getElementsByClassName("about")
let Careers = document.getElementsByClassName("Careers")
let Menu = document.getElementsByClassName("Menu")


// 

let menuSection = document.getElementById("menuSection")
let pizzeriaSection = document.getElementById("pizzeriaSection")

let aboutContainer = document.getElementById("about-container")

let careersSection = document.getElementById("careers")

let menuPage = document.getElementById("main-manu-div")


let pizzaDescriptionContainer = document.getElementById('pizza-description-container')


let imageUrl = document.getElementsByClassName("image-url")

// 

// date of basket
let ProductContainer = document.getElementById("Product-container")
let Order = document.getElementsByClassName("order")

let TotalPrise = document.getElementById("Total-Prise")
let TotalQuantity = document.getElementById("Total-quantity")
// 

class Card{
    static dateOfcard = [];
    static sumPrise = 0;
    static sum = 0
    constructor(Name,prise,src){
        this.Name = Name
        this.prise = prise
        this.src = src
        this.filter()
        Card.dateOfcard.push(this)
    }

    filter (){
        let lastElement = Card.dateOfcard[Card.dateOfcard.length-1]
        console.log(lastElement)
        // for(let i =0;i < Card.dateOfcard.length-1;i++){
        //     if(Card.dateOfcard[i].Name === lastElement.Name){
        //         Card.dateOfcard.pop()
        //         // console.log(Card.dateOfcard[i].Name)
        //         console.log(Card.dateOfcard)
        //     }else{
        //         Card.sumPrise += Number(lastElement.prise)
        //         Card.sum += 1
                
        //     }
        // }
    }
}

class App{
    constructor(){
        for(let i =0; i< Order.length;i++){
            Order[i].addEventListener("click", () =>{
                let name = (Order[i].parentElement).parentElement.querySelector(".name-of-btn")
                let prise = (Order[i].parentElement).parentElement.querySelector(".prise-of-btn")
                let url = (Order[i].parentElement).parentElement.querySelector(".image-url")
                const myCard = new Card(name.innerHTML,prise.innerHTML,url.innerHTML)
                // console.log("hi")
                console.log(name.innerHTML)
                console.log(prise.innerHTML)
                console.log(url.innerHTML)
                // Order[i]
                // console.log(Card.dateOfcard)
                this.display()
            })
        }
    }

    display(){
        ProductContainer.innerHTML = ""
        for(let i = 0;i < Card.dateOfcard.length;i++){
            let div = document.createElement("div")
            div.classList.add("Product-div")
            let img = document.createElement("div")
            div.style.backgroundImage = Card.dateOfcard[i].src

            let Name = document.createElement("p")
            Name.innerHTML = Card.dateOfcard[i].Name
            let prise = document.createElement("p")
            prise.innerHTML = Card.dateOfcard[i].prise
            let spanPrise = document.createElement("span")
            spanPrise.innerHTML = "₾"
            prise.appendChild(spanPrise)
            let del = document.createElement("p")
            del.innerHTML = "X"

            img.appendChild(div)
            div.appendChild(Name)
            div.appendChild(prise)
            div.appendChild(del)
            ProductContainer.appendChild(div)
        }

    }
}


const app = new App()




// cearch///
// serch



// date of manu /***// */
const pizzaCardImg = document.getElementsByClassName('pizza-card-img')
const pizzaCards= document.getElementsByClassName('pizza-card')
const mainManuDiv= document.getElementById('main-manu-div')

// //*/*/*//*/*/*/*/*//*//*/
// ---------------------
// search-container
// -------------------
const pizzaPrise = document.getElementsByClassName('pizza-price')
const minPriseInp = document.getElementById("min-price")
const maxPriseInp = document.getElementById("max-price")
const priceBtn = document.getElementsByClassName('prise-arrow')[0]
const searchBtn = document.getElementsByClassName('search-Btn')[0]
const searchInp = document.getElementById('search')

let nameOfbtn = document.getElementsByClassName("name-of-btn1")
// //*/*/*/*/*/*//*/*/*/

let serchLst = [];
let serchLst1 = [];

// variables

let h1 = document.getElementById("h1");
let inp = document.getElementById("search");
let btn = document.getElementsByClassName("search-Btn");




for(let i of nameOfbtn){
    
    serchLst1.push(i.innerHTML.toUpperCase())
}


// console.log(pizzaCards.length)
// console.log(serchLst1[0])


btn[0].addEventListener("click", () =>{
    let value = inp.value.toUpperCase()
    
    for(let i = 0;i < serchLst1.length;i++){
        pizzaCards[i].style.display = "none"
        console.log(serchLst1[i])
        // console.log(value)
        if(serchLst1[i] === value){
            pizzaCards[i].style.display = "flex"
        }
    }
    
})
// for(let i of nameOfbtn){
//     serchLst1.push(i.value)
//     console.log(nameOfbtn[0].innerHTML)
// }


// for(let i of nameOfbtn){
//     serchLst1.push(i)
//     console.log(nameOfbtn[0].innerHTML)
// }

// let pizzas = document.getElementsByClassName("pizza");
// for(let i of pizzas){
//     serchLst.push(i.innerHTML)
// }
// for(let i of pizzas){
//     serchLst1.push(i)
// }
// let serchLst2 = [];

// let loopLst;
// for(i of serchLst){
//     loopLst = []
    
//     for(let m of i){
//         loopLst.push(m)
//     }
//     serchLst2.push(loopLst)
// }




// btn.addEventListener("click",function(){
//     let m = inp.value;   
//     let lstt = [];
//     let lstt2 = [];
//     let count = 0;
//     for(let i of m){
//         // lstt.push(i)
//         lstt.push(i)
//     }
//     let lll = []
//     for(let i of serchLst){
//         if(i != m){
//             serchLst1[serchLst.indexOf(i)].style.visibility = "hidden";
//         }else{
//             serchLst1[serchLst.indexOf(i)].style.visibility = "visible";
//         }
        
//     }
  
//     console.log(lll)
    
    
// })






// /manu//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*

const menuCardImgStatic = [
    'url(/image/alfredo-chicken-sarpinos-static.jpg)',
    'url(/image/BLT-sarpinos-static.jpg)',
    'url(/image/cheese-bonanza-sarpinos-static.jpg)',
    'url(/image/cheese-lovers-sarpinos-static.jpg)',
    'url(/image/margherita-sarpinos-static.jpg)',
    'url(/image/new-york-deli-sarpinos-static.jpg)',
    'url(/image/ranch-style-chicken-sarpinos-static.jpg)',
    'url(/image/santorini-sarpinos-static.jpg)',
    'url(/image/sorrento-delight-sarpinos-static.jpg)',
    'url(/image/thin-crust-lovers-sarpinos-static.jpg)',
    'url(/image/tropical-hawaiian-sarpinos-static.jpg)',
    'url(/image/vegetarian-sarpinos-static.jpg)'
]

const menuCardImgHover= [
    'url(/image/alfredo-chicken-sarpinos-hover.jpg)',
    'url(/image/BLT-sarpinos-hover.jpg)',
    'url(/image/cheese-bonanza-sarpinos-hover.jpg)',
    'url(/image/cheese-lovers-sarpinos-hover.jpg)',
    'url(/image/margherita-sarpinos-hover.jpg)',
    'url(/image/new-york-deli-sarpinos-hover.jpg)',
    'url(/image/iranch-style-chicken-sarpinos-hover.jpg)',
    'url(/image/santorini-sarpinos-hover.jpg)',
    'url(/image/sorrento-delight-sarpinos-hover.jpg)',
    'url(/image/thin-crust-lovers-sarpinos-hover.jpg)',
    'url(/image/tropical-hawaiian-sarpinos-hover.jpg)',
    'url(/image/vegetarian-sarpinos-hover.jpg)'
]


for(let i=0; i< pizzaCardImg.length;i++){
    pizzaCardImg[i].style.backgroundImage = menuCardImgStatic[i]

    pizzaCardImg[i].addEventListener('mouseover', ()=>{
        pizzaCardImg[i].style.backgroundImage = menuCardImgHover[i]
    })

    pizzaCardImg[i].addEventListener('mouseout', ()=>{
        pizzaCardImg[i].style.backgroundImage = menuCardImgStatic[i]

    })
}

// *//**/*/*/*/*/*/*//*/*/*/*// */
// prise search/*** */
// prise search

priceBtn.addEventListener('click',()=>{
    for(let x=0;x<pizzaCards.length;x++){
        pizzaCards[x].style.display = 'none'
        if(pizzaPrise[x].innerHTML <= minPriseInp.value && maxPriseInp.value == '' && minPriseInp.value != '' ){
            pizzaCards[x].style.display = 'flex'
            console.log(maxPriseInp.value)
        }else if(pizzaPrise[x].innerHTML >= minPriseInp.value && pizzaPrise[x].innerHTML<= maxPriseInp.value && maxPriseInp.value != '' && minPriseInp.value != ''){
            pizzaCards[x].style.display = 'flex'
        }else if(pizzaPrise[x].innerHTML >= maxPriseInp.value &&  minPriseInp.value ==''){
            pizzaCards[x].style.display = 'flex'
        }else if(minPriseInp.value =='' && maxPriseInp.value ==''){
            pizzaCards[x].style.display = 'flex'
        }
    }
})
// ------------------
// menu-choice-mapping
// ------------------
const allMapping = document.getElementById('all-mapping')
const vegetarianMapping = document.getElementById('vegetarian-mapping')
const fastingMapping = document.getElementById('fasting-mapping')
const createYourOwn = document.getElementById('create-your-own')

let createOwncontainer = document.getElementById("create-own-container")


allMapping.addEventListener('click', ()=>{
    createOwncontainer.style.display = "none"
    for(let x=0;x<pizzaCards.length;x++){
        pizzaCards[x].style.display = 'flex'
    }
})

vegetarianMapping.addEventListener('click',()=>{
    createOwncontainer.style.display = "none"
    for(let x=0;x<pizzaCards.length;x++){
        pizzaCards[x].style.display = 'none'
        console.log(pizzaCards[x].querySelector('h1').innerHTML.toUpperCase().split(' '))
        if(pizzaCards[x].querySelector('h1').innerHTML.toUpperCase().split(' ').includes('VEGETARIAN' )){
            pizzaCards[x].style.display = 'flex'
        }
    }
})

fastingMapping.addEventListener('click',()=>{
    createOwncontainer.style.display = "none"
    for(let x=0;x<pizzaCards.length;x++){
        pizzaCards[x].style.display = 'none'
        console.log(pizzaCards[x].querySelector('h1').innerHTML.toUpperCase().split(' '))
        if(pizzaCards[x].querySelector('h1').innerHTML.toUpperCase().split(' ').includes('VEGETARIAN' ) || pizzaCards[x].querySelector('h1').innerHTML.toUpperCase().split(' ').includes('BLT' ) ){
            pizzaCards[x].style.display = 'flex'
        }
    }
})


// create your own

for(let x=0;x<pizzaCards.length;x++){
    createYourOwn.addEventListener('click', ()=>{
       pizzaCards[x].style.display = 'none' 
       createOwncontainer.style.display = "flex"

    }) 
    

}

// /**/**/ */ */

// menu pizza description
// ---------------------------------

const pizzaArrDescription = [
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'Baked to perfection on a mayonnaise base and loaded with crispy smoked bacon, our signature gourmet cheese blend, crisp Romaine lettuce and ripe tomatoes. Enjoy this unique, Sarpino’s specialty pizza near you.',
        calories: 240.89,
        FatCals:109.87,
        SaturatedCals: 12.25,
        SaturatedFat: 4.45,
        TransFat:0
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    },
    {   
        description: 'An Alfredo-lover’s favorite, topped with tender Chicken Strips, crispy Bacon, Parmesan, our Signature Gourmet Cheese blend and creamy Alfredo Sauce. Baked to perfection near you.',
        calories: 225.75,
        FatCals:84.81,
        SaturatedCals: 45.37,
        SaturatedFat: 5.04,
        TransFat:0.08
    }
]

let descriptionImg = document.getElementById('img-description') 
let nameDescription = document.getElementById('name-description')
let titleDescription =document.getElementById('title-description')
let caloriesDesc = document.getElementById('Calories')
let fatCalsDesc = document.getElementById('fat-cals')
let saturateCalsDesc = document.getElementById('saturated-cals')
let saturatedFatsDesc = document.getElementById('saturated-fat')
let transFatDesc = document.getElementById('trans-fat')
let descPrice = document.getElementById('desc-price')
const pizzaZoom = document.getElementsByClassName('pizza-zoom')

for(let x=0; x<pizzaCards.length;x++){
    pizzaCards[x].querySelector('a').addEventListener('click',()=>{
        mainManuDiv.style.display= 'none'
        pizzaDescriptionContainer.style.display = 'flex'
        descriptionImg.style.backgroundImage = menuCardImgStatic[x]
        nameDescription.innerHTML = pizzaCards[x].querySelector('h1').innerHTML
        titleDescription.innerHTML = pizzaArrDescription[x].description
        caloriesDesc.innerHTML= pizzaArrDescription[x].calories
        fatCalsDesc.innerHTML = pizzaArrDescription[x].FatCals
        saturateCalsDesc.innerHTML = pizzaArrDescription[x].SaturatedCals
        saturatedFatsDesc.innerHTML = pizzaArrDescription[x].SaturatedFat
        transFatDesc.innerHTML = pizzaArrDescription[x].TransFat
        descPrice.innerHTML = pizzaPrise[x].innerHTML
        // imageUrl[0].innerHTML = menuCardImgStatic[i]

        for(let i=0;i<pizzaZoom.length;i++){
            pizzaZoom[i].addEventListener('click', ()=>{
                descPrice.innerHTML = pizzaPrise[x].innerHTML/ 8 * pizzaZoom[i].innerHTML
                caloriesDesc.innerHTML=Number(pizzaArrDescription[x].calories/8 * pizzaZoom[i].innerHTML).toFixed(2)
                fatCalsDesc.innerHTML = Number(pizzaArrDescription[x].FatCals/8 * pizzaZoom[i].innerHTML).toFixed(2)
                saturateCalsDesc.innerHTML = Number(pizzaArrDescription[x].SaturatedCals/8 * pizzaZoom[i].innerHTML).toFixed(2)
                saturatedFatsDesc.innerHTML = Number(pizzaArrDescription[x].SaturatedFat/8 * pizzaZoom[i].innerHTML).toFixed(2)
                transFatDesc.innerHTML = Number(pizzaArrDescription[x].TransFat/8 * pizzaZoom[i].innerHTML).toFixed(2)
            })
        }
    })
}

// /*/**/**/**/*//*/*/**/****//*/**/*/*///* */ */ */ */ */ */

const peperonInp = document.getElementById('peperoniInp')
const hamInp = document.getElementById('hamInp')
const tomatoinp = document.getElementById('tomatoinp')
const onionIpn = document.getElementById('onionIpn')
const vegetableInp =document.getElementById('vegetableInp')
const mashroomInp =document.getElementById('mashroomInp')
const oreganoInp = document.getElementById("oreganoInp")

const ham = document.getElementById('lori-div')
const mashroom = document.getElementById('mashroom-div')
const peperoni = document.getElementById('peperoni-div')
const tomato = document.getElementById('tomato-div')
const vegetable = document.getElementById('vegetable-div')
const onion = document.getElementById('onion-div')
const oregano = document.getElementById('oregano-div')
const ingredients = document.getElementsByClassName('ingredients-check')
const totalIngredientsPrise = document.getElementById('total-ingredient-prise')

let sumOfPriseIngredients = 0
const foodMap = new Map([
    [1,"peperoni"],
    [2,'ham'],
    [3,'tomato'],
    [4,'vegetable'],
    [5,'onion'],
    [6,'mashroom'],
    [7,'oregano'],

])

const ingredientPrise = new Map([
    ["peperoni",10],
    ['ham',9],
    ['tomato',3],
    ['vegetable',2],
    ['onion',1],
    ['mashroom',3],
    ['oregano',2],
])

for(let i=0;i<ingredients.length;i++){
    ingredients[i].addEventListener('click', ()=>{
        let keyInp 
        foodMap.forEach((value,key)=>{
            if(key == ingredients[i].value){
                keyInp = key
            }
        })


        if(ingredients[i].checked == true ){
            switch(keyInp){
                case 1:
                    peperoni.style.opacity = '1'
                    sumOfPriseIngredients += 10
                    // peperoni.style.transition = '0.5'
                    break;
                case 2:
                    ham.style.opacity = '1'
                    sumOfPriseIngredients += 9
                    break;
                case 3:
                    tomato.style.opacity = '1'
                    sumOfPriseIngredients += 3
                    break;
                case 4:
                    vegetable.style.opacity = '1'
                    sumOfPriseIngredients += 2
                    break;
                case 5:
                    onion.style.opacity = '1'
                    sumOfPriseIngredients += 1
                    break;
                case 6:
                    mashroom.style.opacity = '1'
                    sumOfPriseIngredients += 3
                    break;
                case 7: 
                    oregano.style.opacity = '1'
                    sumOfPriseIngredients += 2
        }}
        else{
                switch(keyInp){
                    case 1:
                        console.log('1')
                        peperoni.style.opacity = '0'
                        sumOfPriseIngredients -= 10
                        break;
                    case 2:
                        ham.style.opacity = '0'
                        sumOfPriseIngredients -= 9
                        break;
                    case 3:
                        tomato.style.opacity = '0'
                        sumOfPriseIngredients -= 3
                        break;
                    case 4:
                        vegetable.style.opacity = '0'
                        sumOfPriseIngredients -= 2
                        break;
                    case 5:
                        onion.style.opacity = '0'
                        sumOfPriseIngredients -= 1
                        break;
                    case 6:
                        mashroom.style.opacity = '0'
                        sumOfPriseIngredients -= 3
                        break;
                    case 7: 
                        oregano.style.opacity = '0'
                        sumOfPriseIngredients -= 2
                } }
                
                totalIngredientsPrise.innerHTML = sumOfPriseIngredients
    })
}


// career-slide - /*/*/*/*/

let slide =  document.getElementById("child-container")
let imageOfslide = document.getElementsByClassName("team")

let index = -1
let aryOfslideimage = ["url('/image/team1.jpeg')","url('/image/Team2.jpg')","url('/image/Team3.jpeg')","url('/image/Team4.jpeg')","url('/image/Team5.jpg')",
    "url('/image/Team6.jpg')","url('/image/Team7.jpg')","url('/image/Team8.jpg')","url('/image/Team9.jpg')","url('/image/Team10.jpg')","url('/image/Team11.jpg')","url('/image/Team12.jpg')","url('/image/Team13.webp')","url('/image/Team14.jpg')","url('/image/Team15.jpg')"]

const Slide = () => {
    index ++ 
    if(index > aryOfslideimage.length-1){
        index = 0
    }
    let div = document.createElement("div")
    div.style.backgroundImage = aryOfslideimage[index]

    div.classList.add("team")
    slide.appendChild(div)
    slide.removeChild(slide.querySelector("div"))
    // console.log(slide)
}

setInterval(Slide,1000)

// career form  - card//
let inputName = document.getElementById("input-Name")
let inputSurname = document.getElementById("input-Surname")
let inputPhone = document.getElementById("input-Phone")
let inputEmail = document.getElementById("input-email")
let inputFile = document.getElementById("input-file")

let input = document.getElementsByClassName("input")

let catdName = document.getElementById("user-name")
let catdSurname = document.getElementById("user-surname")
let catdPhon = document.getElementById("user-phone")
let catdEmail = document.getElementById("user-email")
let catdbtn = document.getElementById("career-btn")

let User = document.getElementsByClassName("user")

for(let i =0;i < input.length;i ++){
        input[i].addEventListener("input", () => {
            User[i].textContent = ""
            User[i].textContent = input[i].value
    })
}

class DateOfuser{
    static userdate = []
    constructor(Username,Usersurname,UserPhone,UserEmail){
        this.Username = Username,
        this.Usersurname = Usersurname,
        this.UserPhone = UserPhone,
        this.UserEmail = UserEmail
        DateOfuser.userdate.push(this) 
    }
}

catdbtn.addEventListener("click", () =>{
    const Date = new DateOfuser(inputName.value,inputSurname.value,inputPhone.value,inputEmail.value)
    for(let i =0;i < input.length;i ++){
        input[i].value = ""
        User[i].textContent = " . . ."
    }
})

// about****//
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
    

// ///*/////

main.addEventListener("click", () =>{
    menuSection.style.display = "flex"
    pizzeriaSection.style.display = "flex"
    aboutContainer.style.display = "none"
    careersSection.style.display = "none"
    menuPage.style.display = "none"
    pizzaDescriptionContainer.style.display = "none"
})


for(let i = 0;i < about.length;i++){
    about[i].addEventListener("click", () =>{
        menuSection.style.display = "none"
        pizzeriaSection.style.display = "none"
        careersSection.style.display = "none"
        menuPage.style.display = "none"
        aboutContainer.style.display = "flex"
        menuSection.style.display = "none"
        pizzeriaSection.style.display = "none"
        careersSection.style.display = "none"
        pizzaDescriptionContainer.style.display = "none"

    })
}

for(let i = 0;i < Careers.length;i++){
    Careers[i].addEventListener("click", () =>{
        menuSection.style.display = "none"
        pizzeriaSection.style.display = "none"
        aboutContainer.style.display = "none"
        menuPage.style.display = "none"
        careersSection.style.display = "flex"
        aboutContainer.style.display = "none"
        menuSection.style.display = "none"
        pizzeriaSection.style.display = "none"
        aboutContainer.style.display = "none"
        pizzaDescriptionContainer.style.display = "none"
    })
}

for(let i = 0;i < Menu.length;i++){
    Menu[i].addEventListener("click", () =>{
        menuPage.style.display = "flex"
        careersSection.style.display = "none"
        aboutContainer.style.display = "none"
        menuSection.style.display = "none"
        pizzeriaSection.style.display = "none"
        aboutContainer.style.display = "none"
        menuSection.style.display = "none"
        pizzeriaSection.style.display = "none"
        aboutContainer.style.display = "none"
        careersSection.style.display = "none"
        pizzaDescriptionContainer.style.display = "none"
    })
}


