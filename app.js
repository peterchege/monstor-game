new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHeath: 100,
        gameIsRunning: false,
        turns:[]
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHeath = 100;
        },
        attack: function(){
            var damage = this.calculateDamage(3,10);          
            this.monsterHeath -= damage;
            this.turns.unshift({
                isPlayer = true,
                text: 'player hits for monster' + damage
            });
            if(this.checkWin()){
                return;
            }

            this.monsterAttacks();

        },
        specialAttack: function (){
            this.monsterHeath -= this.calculateDamage(10, 20);
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();

        },
        heal:function(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }
            else{
                this.playerHealth = 100;
            }  
            this.monsterAttacks();
            
        },
        giveUp: function(){
            this.gameIsRunning = false;
        },
        monsterAttacks(){
            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkWin();
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