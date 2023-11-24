import {Card} from "./Card.js"
import {CardController} from "./CardController.js"

export class Spawn{
    constructor(){
        this.cards = [];
        this.idCards = [];
        this.cardTemp = [];
        this.numberColum = 0;
        this.numberRow = 0; 
        this.x = 0;
        this.y = 0;
        this.index = 1;
        this.screenWidthMid = window.innerWidth/2;
        this.screenHeightMid = window.innerHeight/3;
    }
    shuffleCard(num){
        for(let i = 1; i <= num; i++){
            this.cards.push("./img/card"+i+".jpg");
            this.cards.push("./img/card"+i+".jpg");
        }
    }
    spawnCard(num){
        this.shuffleCard(num/2);
        this.cardTemp = this.cards;
        let card = new Card('main');
        for(let i = 1; i <= num; i++){
            this.idCards[i-1] = i+this.cardTemp[i]
            card.createCard(this.idCards[i-1],"./img/cardCover.jpg", 120, 120, this.screenWidthMid,  this.screenHeightMid, 1);
        }
        this.cardShare(num, card);
        let game = new CardController();
        game.selectingCard();
    }
        cardShare(num, card){
            if (this.index > num) return;
            if(this.numberColum >=5){
                this.numberColum = 0;
                this.numberRow = 0; 
                this.y += 130;
            }
            this.numberColum++;
            var cardChild = document.getElementById(this.idCards[this.index-1]);
            const duration = 0.1;
            this.cardTemp.shift();
            gsap.to(cardChild, duration, {x:((2-this.numberRow)*130),y:this.y-(1.5*130),ease: 'elastic.out(1, 1)', onComplete: ()=>{
                this.cardShare(num, card);
            }});
            this.index++;
            this.numberRow++;
        }
}
