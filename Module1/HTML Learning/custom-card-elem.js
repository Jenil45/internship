class CardElem extends HTMLElement
{
    constructor(className)
    {
        super();
        console.log(this);
        this.setAttribute("class" , className);
    }

    makeTitle(title) {
        var titleElem = document.createElement("h3");
        titleElem.innerHTML = title
        this.appendChild(titleElem)
    }
    makeCategory(category) {
        var titleElem = document.createElement("h5");
        titleElem.innerHTML = category
        this.appendChild(titleElem)
    }
    makeDescription(desc) {
        var titleElem = document.createElement("p");
        titleElem.innerHTML = desc
        this.appendChild(titleElem)
    }
}

customElements.define("card-elem" , CardElem);

function createCard()
{
    const titleE = document.getElementsByName("itemName");
    const titleC = document.getElementsByName("itemCategory");
    const titleD = document.getElementsByName("itemDesc");

    var card = new CardElem("itemCard");

    // card.makeTitle(titleE.value);
    card.makeTitle("Title");
    // card.makeCategory(titleC.value);
    card.makeCategory("category 2");
    // card.makeDescription(titleD.value);
    card.makeDescription("vbdvvbdvbd chjdvbvhdbvbc");

    document.querySelector(".itemContainer").appendChild(card)
}