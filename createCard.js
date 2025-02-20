
const color = [

]
const datos = {"data":
[
        {
            "name": "Daniel Clifford",
            "grade":"Verified Graduate",
            "motivation":"I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
            "description" : "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
            "background_color" : "violet",
            "image":"./images/image-daniel.jpg",
            "font_color":"text-white"

        },
        {
            "name": "Jonathan Walters",
            "grade":"Verified Graduate",
            "motivation":"The team was very supportive and kept me motivated",
            "description" : "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”Jonathan Walters",
            "image":"./images/image-jonathan.jpg",
            "font_color":"text-blackish"
        },
        {
            "name": "Jeanette Harmon",
            "grade":"Verified Graduate",
            "motivation":"An overall wonderful and rewarding experience",
            "description" : "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
            
            "image":"./images/image-kira.jpg",
            "font_color":"text-blackish"
        },
        {
            "name": "Patrick Abrams",
            "grade":"Verified Graduate",
            "motivation":"Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
            "description" : " “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
            "background_color" : "blackish",
            "image":"./images//image-patrick.jpg",
            "font_color":"text-white"
        },
        {
            "name": "Kira Whittle",
            "grade":"Verified Graduate",
            "motivation":"Such a life-changing experience. Highly recommended!",
            "description" : "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from   professionals who can help me learn programming step by step. I was encouraged to enroll by a former  student of theirs who can only say wonderful things about the program. The entire curriculum and staff   did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.  100% recommend! ”",
            "background_color" : "grayish",
            "image":"./images/image-jeanette.jpg",
            "font_color":"text-white"
        }
]};

let i = 0;
const createCard = ()=>{
    //  primary container
    const card = document.createElement("div")
    card.className="card "+ datos.data[i].background_color +" "+datos.data[i].font_color;
    

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
    image.src = datos.data[i].image
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

    const item_name = document.createTextNode(datos.data[i].name);
    const item_ocupation= document.createTextNode(datos.data[i].grade);
    const item_motivation= document.createTextNode(datos.data[i].motivation);
    const item_description= document.createTextNode(datos.data[i].description);

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
const AgregarCard = () => {
    if (i<=5) {
        MontarNodo.appendChild(createCard())
        i++;
    }
}
AgregarTarjeta.addEventListener("click",AgregarCard)
 