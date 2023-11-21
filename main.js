import {Node} from "./Node.js"

var cards = [];

var idCards = [];

shuffleCard(10);
spawnCard(20);

function shuffleCard(num){
    for(let i = 1; i <= num; i++){
        cards.push("./img/card"+i+".jpg");
        cards.push("./img/card"+i+".jpg");
    }
    // cards.sort(function() {  
    //     return Math.random() - 0.5
    // });
    //console.log(cards);
}


function spawnCard(num){
    let cardTemp = cards;
    let numberColum = 0; 
    let x = 0;
    let y = 0;
    let card = new Node('main');
    card.setPosition(100, 10);
    let i = 1;
    cardShare();
    function cardShare(){
        if (i > num) return;
        if(numberColum >=5){
            numberColum = 0;
            x = 0;
            y += 200;
        }
        numberColum++;
        idCards[i-1] = i+cardTemp[0]
        card.createCard(idCards[i-1],"./img/cardCover.jpg", 180, 180, 0, 0, 1);
        var cardChild = document.getElementById(idCards[i-1]);
        const duration = 0.3;
        x +=200;
        cardTemp.shift();
        i++;
        gsap.fromTo(cardChild, duration, {x:0,y:0}, {x:x,y:y , onComplete: ()=>{
            cardShare();
        }});
        selectingCard();
    }

    // for(let i = 1; i <= num ;i ++){

    //     if(numberColum >=5){
    //         numberColum = 0;
    //         x = 0;
    //         y += 200;
    //     }
    //     numberColum++;
    //     idCards[i-1] = i+cardTemp[0]
    //     card.createCard(idCards[i-1],"./img/cardCover.jpg", 180, 180, 0, 0, 1);
    //     var cardChild = document.getElementById(idCards[i-1]);
    //     const duration = 5;
    //     gsap.fromTo(cardChild, duration, {x:50,y:50}, {x:x,y:y});
   
    //     x +=200;
    //     cardTemp.shift();
  
    // }
}

function selectingCard(){
        let isFlipped = false;
        let isCheckingMatch = false;
        let firstCard, secondCard;
        const cards = document.querySelectorAll('img');
        // console.log(cards);
        cards.forEach(card => card.addEventListener("click", event => {
            if (isCheckingMatch) return;
            flipCard(card);
            let shortID = card.id.slice(card.id.indexOf("."));
            if(!isFlipped) {
                isFlipped = true;
                firstCard = card;
            } 
            else {
                isFlipped = false;
                secondCard = card;
                isCheckingMatch = true;
                checkForMatch();
            }

            function checkForMatch() {
                let shortIDFirstCard = firstCard.id.slice(firstCard.id.indexOf("."));
                let shortIDSecondCard = secondCard.id.slice(secondCard.id.indexOf("."));
                const isMatch = shortIDFirstCard === shortIDSecondCard;
                console.log(isMatch);
                if(isMatch) {
                    disableCards(firstCard);
                    disableCards(secondCard);
                }
                else {
                    unflipCards();
                }
            }
            
            function disableCards(card) {
                setTimeout(function(){
                    const duration = 1;
                    gsap.to(card, {
                        scaleX: 1.5 , scaleY : 1.5, zIndex : 10,
                        duration,
                        onComplete: () => {
                            card.remove();
                        }
                    });
                    isCheckingMatch = false;
                }, 2000);
            }
            
              function unflipCards() {
                setTimeout(() => {
                  flipCardBack(firstCard);
                  flipCardBack(secondCard);
                  isCheckingMatch = false;
                }, 2000);
              }
            function flipCard(){
                const duration = 1;
                gsap.to(card, {
                    scaleX: 0,
                    duration,
                    onComplete: () => {
                        card.src = shortID;
                    }
                })
                gsap.to(card, { scaleX: 1, duration, delay: duration})
            }

            function flipCardBack(card){
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
        }));
}
