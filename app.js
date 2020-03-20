new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHeath: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHeath = 100;
        },
        attack: function(){
           
            this.monsterHeath -=  this.calculateDamage(3,10);
            if(this.checkWin()){
                return;
            }

            this.playerHealth -= this.calculateDamage(5,10);
            this.checkWin();

        },
        specialAttack: function (){

        },
        heal:function(){

        },
        giveUp: function(){


        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function(){
            if(this.monsterHeath <=0){
                if(confirm("You won ! new Game")){
                    this.startGame();
                } else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if(this.playerHealth <=0){
                if(confirm("You Lost ! new Game")){
                    this.startGame();
                } else{
                    this.gameIsRunning = false;
                }
                return false;
            }
            }
    }
});