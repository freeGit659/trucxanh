import {Score} from "./Score.js";

var score = 10000;
var numCard = 20;
export class CardController{
    constructor(){
        this.isFlipped = false;
        this.isCheckingMatch = false;
        this.firstCard = null, this.secondCard = null;
        this.cards = document.querySelectorAll('img');
        this.shortID;
    }
    selectingCard(){
        this.cards.forEach(card => card.addEventListener("click", event => {
            console.log("check",this.isCheckingMatch);
            if (this.isCheckingMatch) return;
            this.flipCard(card);
            this.shortID = card.id.slice(card.id.indexOf("."));
            if(!this.isFlipped ) {
                this.isFlipped = true;
                this.firstCard = card;
            } 
            else {
                this.isFlipped = false;
                this.secondCard = card;
                this.isCheckingMatch = true;
                this.checkForMatch(card);
            }
            console.log("IsFlip", this.isFlipped);
        }));
    }
    checkForMatch(card) {
        let shortIDFirstCard = this.firstCard.id.slice(this.firstCard.id.indexOf("."));
        let shortIDSecondCard = this.secondCard.id.slice(this.secondCard.id.indexOf("."));
        console.log(this.firstCard, this.secondCard, this.isClickOne(this.firstCard.id, this.secondCard.id));
        if(this.isClickOne(this.firstCard.id, this.secondCard.id)) {
            this.isFlipped = true;
            return;
        }
        const isMatch = shortIDFirstCard === shortIDSecondCard;
        if(isMatch) {
            this.isCheckingMatch = true;
            score += 1000;
            this.disableCards(this.firstCard, 1);
            this.disableCards(this.secondCard,1);
        }
        else {
            score -= 500;
            this.unflipCards(card);
        }
    }
    disableCards(card, delay) {
        numCard -= 1;
        console.log(this.numCard);
        this.isCheckingMatch = true;
        const duration = 1;
        gsap.to(card, {
            scaleX: 1.5 , scaleY : 1.5, zIndex : 10,
            duration,delay: delay,
            onComplete: () => {
                card.remove();
                this.clearCard();


            }
        });
    }
    unflipCards() {
            this.flipCardBack(this.firstCard);
            this.flipCardBack(this.secondCard);
        }
    flipCard(card, func){
        this.isCheckingMatch = true;
        const duration = 0.5;
        gsap.to(card, {
            scaleX: 0,
            duration,
            onComplete: () => {
                card.src = this.shortID;
            }
        })
        gsap.to(card, { scaleX: 1, duration, delay: duration, onComplete: () => {
            this.isCheckingMatch = false;
        }})
    }
    flipCardBack(card){
        this.isCheckingMatch = true;
        const duration = 0.5;
        gsap.to(card, {
            scaleX: 0,
            duration, delay: 1,
            onComplete: () => {
                card.src = "./img/cardCover.jpg";
            }
        })
        gsap.to(card, { scaleX: 1, duration, delay: duration+1, onComplete: () => {
            this.isCheckingMatch = false;
        }})
    }
    updateScore(){
        return score;
    }
    isClickOne(param1, param2){
        return (param1 === param2);
    }

    clearCard(){
        this.isCheckingMatch = false;
        //this.firstCard = null;
        this.secondCard = null;
    }
    updateNumCard(){
        console.log(numCard);
        return numCard;
    }
}
