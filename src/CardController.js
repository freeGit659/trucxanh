import {Score} from "./Score.js";

var score = 10000;
var numCard = 20;
const screenWidthMid =  window.innerWidth/30-100;
const screenHeightMid = window.innerHeight/30-30;

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
        }));
    }
    checkForMatch(card) {
        let shortIDFirstCard = this.firstCard.id.slice(this.firstCard.id.indexOf("."));
        let shortIDSecondCard = this.secondCard.id.slice(this.secondCard.id.indexOf("."));
                if(this.isClickOne(this.firstCard.id, this.secondCard.id)) {
            this.isFlipped = true;
            return;
        }
        const isMatch = shortIDFirstCard === shortIDSecondCard;
        if(isMatch) {
            this.isCheckingMatch = true;
            this.disableCards(this.firstCard, 1, true);
            this.disableCards(this.secondCard,1);
        }
        else {
            this.unflipCards(card);
        }
    }
    disableCards(card, delay, isOneRound) {
        this.isCheckingMatch = true;
        const duration = 1;
        gsap.to(card, {
            scaleX: 1.5 , scaleY : 1.5, zIndex : 10, x: screenWidthMid, y: screenHeightMid,
            duration,delay: delay,
            onComplete: () => {
                var scorePopUp = new Score();
                scorePopUp.createScorePopup('+1000', 'rgb(255,250,65)');
                card.remove();
                this.clearCard();
                if (isOneRound) score += 1000;
                numCard -= 1;
            }
        });
    }
    unflipCards() {
            this.flipCardBack(this.firstCard, true);
            this.flipCardBack(this.secondCard);
        }
    flipCard(card){
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
    flipCardBack(card, isOneRound){
        this.isCheckingMatch = true;
        const duration = 0.5;
        gsap.to(card, {
            scaleX: 0,
            duration, delay: 1,
            onComplete: () => {
                var scorePopUp = new Score();
                scorePopUp.createScorePopup('-500','#FF0000');
                if (isOneRound) score -= 500;
                card.src = "././images/cardCover.jpg";
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
        this.secondCard = null;
    }
    updateNumCard(){
        return numCard;
    }
    resetScore(){
        score = 10000;
        numCard = 20;
    }
}
