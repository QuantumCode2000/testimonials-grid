const mountNode = document.querySelector("#app")
const addCardButton = document.querySelector('button') 

const addCard=()=>{
    mountNode.appendChild(createCardNode())
}
const createCard = ()=>{
    //  primary container
    const card = document.createElement("div")
    //    secundary container
    const card_header = document.createElement("div")
    const card_title = document.createElement("div")
    const card_description = document.createElement("div")
    // tertiary container

    // content of card_header 
    const image = document.createElement("img")
    const header_card = document.createElement("div")
    //content of  header_card
    const paragraf_name = document.createElement("p")
    const paragraf_ocupation = document.createElement("p")
    // content of card_title
    const paragraf_motivation = document.createElement("p")
    // content of card_description
    const paragraf_description = document.createElement("p")

    


    
    

    return card
}