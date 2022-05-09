document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'cake',
            img: 'images/cake.png'
        },
        {
            name: 'cake',
            img: 'images/cake.png'
        },
        {
            name: 'cheese',
            img: 'images/cheese.png'
        },
        {
            name: 'cheese',
            img: 'images/cheese.png'
        },
        {
            name: 'donut',
            img: 'images/donut.png'
        },
        {
            name: 'donut',
            img: 'images/donut.png'
        },
        {
            name: 'hamburger',
            img: 'images/hamburger.png'
        },
        {
            name: 'hamburger',
            img: 'images/hamburger.png'
        },
        {
            name: 'onigiri',
            img: 'images/onigiri.png'
        },
        {
            name: 'onigiri',
            img: 'images/onigiri.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    // create board
    const createBoard = () => {
        for(let cardItem in cardArray){
            let card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', cardItem)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    const checkForMatch = () => {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){
            alert('You found a match !')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, Try again !')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulation ! You find them all !'
        }
    }

    // flip card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})