let div = document.getElementsByClassName("div")

let titel = document.getElementById("titel")
let about = document.getElementById("about")
let prise = document.getElementById("prise")
let btn = document.getElementsByClassName("btn")

let container = document.getElementById("container")




class Card{
    static dateOfcard = []
    // static dateOfcard1 = []
    // static num = -1
    constructor(titel,about,prise){
        this.titel = titel,
        this.about = about,
        this.prise = prise,
        Card.dateOfcard.push(this)
        // Card.num ++
        // this.filter()
        // console.log(Card.dateOfcard)
    }

    filter(){

        // if(Card.dateOfcard.length<1){
        //     Card.dateOfcard.push(this)
        // }else{
        //     for(let i =0;i<Card.dateOfcard.length;i++){
        //         if(Card.dateOfcard[i].titel ){
        //             Card.dateOfcard.push(this)
        //         }
        //     }
        // }

        // let num = Card.dateOfcard.length-1
        // for(let i =1; i < Card.dateOfcard.length;i++){
        //     for(let x=0;i<num.length;i++){
        //         if(Card.dateOfcard[x].titel != Card.dateOfcard[i].titel){
        //             console.log(Card.dateOfcard[i].titel)
        //         }
        //     }
        // }
        Card.dateOfcard.forEach((item,index) => {
            console.log(item.titel)
            console.log(this.titel)
            // if(item.titel != this.titel){
            //     // Card.dateOfcard.push(this)
            //     // console.log(item.titel)
            //     // Card.dateOfcard.splice(index,1)
            // }
        })
    }
}




class App{
    constructor(){
        for(let i =0;i < btn.length;i++){
            btn[i].addEventListener("click", () =>{
                const myCard = new Card(div[i].querySelector("#titel").innerHTML,div[i].querySelector("#about").innerHTML,div[i].querySelector("#prise").innerHTML)
                this.dysplay()
                // console.log(Card.dateOfcard)
            })
        }
    }


    dysplay(){
        container.innerHTML = ""
        for (let i = 0;i < Card.dateOfcard.length;i++){
            let div = document.createElement("div")
            div.classList.add("child")
    
            let titel = document.createElement("p")
            titel.innerHTML = Card.dateOfcard[i].titel
            // titel.classList.add("titel")
    
            let about = document.createElement("p")
            about.innerHTML = Card.dateOfcard[i].about
            // about.classList.add("about")
    
            let prise = document.createElement("p")
            prise.innerHTML = Card.dateOfcard[i].prise
            // prise.classList.add("prise")
    
            let del = document.createElement("p")
            del.innerHTML = "X"

            div.appendChild(titel)
            div.appendChild(about)
            div.appendChild(prise)
            div.appendChild(del)
    
            container.appendChild(div)

            // this.arrFilter(i)
    
            del.addEventListener("click", () =>{
                this.remove(i)
            })

            // console.log(Card.dateOfcard[i])
        }
    }
    remove(index){
        Card.dateOfcard.splice(index,1)
        this.dysplay()
    }

//     arrFilter(){
//         // let num = Card.dateOfcard.length 
//         for(let i =0;i < Card.dateOfcard.length;i++){
//             if(Card.dateOfcard.length >1 && Card.dateOfcard[i].titel != this.titel){
//                 // console.log(num)
//                 // Card.dateOfcard.splice(num,1)
//             }

//             // console.log(Card.dateOfcard1)
//             // console.log(this.titel)
//             if(Card.dateOfcard.length > 1  &&  Card.dateOfcard[i].titel === this.titel){
//                 console.log(Card.dateOfcard[i].titel)
//                 // Card.dateOfcard.splice(i,1)
//             }
//         }
//         // console.log(num)
//         // console.log(Card.dateOfcard1)

//     }
}

const app = new App()