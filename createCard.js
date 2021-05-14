import data from "./dates.json"


const createCard = ()=>{
    //  primary container
    const card = document.createElement("div")
    card.className="card";
    //    secundary container
    const card_header = document.createElement("div")
    card_header.className="card__header";
    const card_title = document.createElement("div")
    card_title.className ="card__title";
    const card_description = document.createElement("div")
    card_description.className="card__description";
    // tertiary container

    // content of card_header 
    const image = document.createElement("img")
    const header_card = document.createElement("div")
    header_card.className="herader-card__name-container";
    //content of  header_card
    const paragraf_name = document.createElement("p")
    paragraf_name.className="name";
    const paragraf_ocupation = document.createElement("p")
    paragraf_ocupation.className="ocupation"
    // content of card_title
    const paragraf_motivation = document.createElement("p")
    paragraf_motivation.className="motivation";
    // content of card_description
    const paragraf_description = document.createElement("p")
    paragraf_description.className="motivation";

    const item_name = document.createTextNode("nombre");
    const item_ocupation= document.createTextNode("ocupation");
    const item_motivation= document.createTextNode("motivation");
    const item_description= document.createTextNode("description");

    paragraf_name.appendChild(item_name);
    paragraf_ocupation.appendChild(item_ocupation);
    paragraf_motivation.appendChild(item_motivation);
    paragraf_description.appendChild(item_description);
    header_card.appendChild(paragraf_name);
    header_card.appendChild(paragraf_ocupation);
    card_header.appendChild(image);
    card_header.appendChild(header_card);
    card_title.appendChild(paragraf_motivation);
    card_description.appendChild(paragraf_description);
    card.appendChild(card_header);
    card.appendChild(card_title);
    card.appendChild(card_description);


    return card
}

const MontarNodo = document.querySelector("#app")
const AgregarTarjeta = document.querySelector("button")
const AgregarCard = () => {MontarNodo.appendChild(createCard)}
AgregarTarjeta.addEventListener(click,AgregarCard)
 