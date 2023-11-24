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
        var cardTemp = this.cards;
        let card = new Card('main');
        for(let i = 0; i < num; i++){
            this.idCards[i] = i+cardTemp[i];
            card.createCard(this.idCards[i],"./img/cardCover.jpg", 120, 120, this.screenWidthMid,  this.screenHeightMid+30, 1);
            if(this.numberColum >=5){
                this.numberColum = 0;
                this.y += 130;
            }
            this.numberColum++;
            var cardChild = document.getElementById(this.idCards[i]);
            const duration = 0.5;
            this.cardTemp.shift();
            gsap.to(cardChild, duration, {x:(-(2-i%5)*130),y:this.y-(1.5*130),ease: 'elastic.out(1, 1)', delay: i*0.1, onComplete: ()=>{
                if(i == 19){
                    let game = new CardController();
                    game.selectingCard();
                }
            }});
        }
    }
}
