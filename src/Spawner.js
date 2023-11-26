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
        this.screenHeightMid = window.innerHeight/3-100;
    }
    shuffleCard(num){
        const cards1 = [];
        for(let i = 1; i <= num; i++){
            cards1.push("././images/card"+i+".jpg");
        }
        this.cards = cards1.concat(cards1);
    }
    spawnCard(num){
        this.shuffleCard(num/2);
        var cardTemp = this.cards;
        let card = new Card('main');
        for(let i = 0; i < num; i++){
            this.idCards[i] = i+cardTemp[i];
            card.createCard(this.idCards[i],"././images/cardCover.jpg", 120, 120, this.screenWidthMid-this.screenWidthMid/16,  this.screenHeightMid+30, 1);
            if(this.numberColum >=5){
                this.numberColum = 0;
                this.y += 130;
            }
            this.numberColum++;
            var cardChild = document.getElementById(this.idCards[i]);
            const duration = 0.5;
            this.cardTemp.shift();
            gsap.to(cardChild, duration, {x:(-(this.screenWidthMid/3-i%5*130))+this.screenWidthMid/16,y:this.y-this.screenHeightMid +30,ease: 'elastic.out(2, 1)', delay: i*0.15, onComplete: ()=>{
                if(i == 19){
                    let game = new CardController();
                    game.selectingCard();
                }
            }});
        }
    }

    respawnCard(){
        var main = document.getElementById('main');
        main.remove();
        this.spawnCard(20);
    }
}
