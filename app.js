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
            var max = 10;
            var min = 3;    
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.monsterHeath -= damage;

            if(this.monsterHeath <=0){
                alert("You Won!");
                this.gameIsRunning = false;
                return;
            }

            var max = 12;
            var min = 5;    
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.playerHealth -= damage;

            if(this.playerHealth <=0){
                alert("You Lost!");
                this.gameIsRunning = false;
                return;
            }


        },
        specialAttack: function (){

        },
        heal:function(){

        },
        giveUp: function(){


        }
    },
});