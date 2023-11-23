
export class CardController{
    constructor(){
        this.isFlipped = false;
        this.isCheckingMatch = false;
        this.firstCard, this.secondCard;
        this.cards = document.querySelectorAll('img');
        this.shortID;
        this.score = 10000;
    }
    selectingCard(){
        this.cards.forEach(card => card.addEventListener("click", event => {
            console.log(this.isCheckingMatch);
            if (this.isCheckingMatch) return;
            this.flipCard(card);
            this.shortID = card.id.slice(card.id.indexOf("."));
            console.log(this.shortID);
            if(!this.isFlipped) {
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
        const isMatch = shortIDFirstCard === shortIDSecondCard;
        console.log(isMatch);
        if(isMatch) {
            this.score += 500;
            setTimeout(()=>{
                this.disableCards(this.firstCard);
                this.disableCards(this.secondCard);
                this.isCheckingMatch = false;
            },2000);
            
        }
        else {
            this.unflipCards(card);
        }
    }
    disableCards(card) {
        const duration = 1;
        gsap.to(card, {
            scaleX: 1.5 , scaleY : 1.5, zIndex : 10,
            duration,
            onComplete: () => {
                card.remove();
            }
        });
    }
    unflipCards() {
        setTimeout(() => {
            this.flipCardBack(this.firstCard);
            this.flipCardBack(this.secondCard);
            this.isCheckingMatch = false;
        }, 2000);
        }
    flipCard(card){
        const duration = 1;
        gsap.to(card, {
            scaleX: 0,
            duration,
            onComplete: () => {
                card.src = this.shortID;
            }
        })
        gsap.to(card, { scaleX: 1, duration, delay: duration})
    }
    flipCardBack(card){
        const duration = 1;
        gsap.to(card, {
            scaleX: 0,
            duration,
            onComplete: () => {
                card.src = "./img/cardCover.jpg";
                console.log(card.src);
            }
        })
        gsap.to(card, { scaleX: 1, duration, delay: duration})
    }
}
