var directions = {
    IDLE: 0,
    UP: 1,
    DOWN:2,
    LEFT: 3,
    RIGHT:4
};

var rounds = [5, 5, 3, 3, 2];

var ball = {
    new: function (incremetedSpeed){
        return{
            width: 18,
            height: 18,
            x: (this.canvas.width /2 ) - 9,
            y: (this.canvas.height /2) - 9,
            moveX: directions.IDLE,
            moveY: directions.IDLE,
            speed: incremetedSpeed || 9
        };
    }
};

var bat = {
    new: function (side){
        return{
            width: 18,
            height: 70,
            x: side === 'left'? 150 : this.canvas.width - 150,
            y: (this.canvas.height /2) - 35,
            score: 0,
            move: directions.IDLE,
            speed: 10
        };
    }
};

var game = {
    initialize: function() {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext ('2d');
        this.canvas.width = screen.width;
        this.canvas.height = screen.height;
        this.canvas.style.width = (this.canvas.width - 30) + 'px';
        this.canvas.style.height = (this.canvas.height - 20) + 'px';
        this.player = bat.new.call(this, 'left');
        this.bat = bat.new.call(this, 'right');
        this.ball = ball.new.call(this);
        this.bat.speed = 8;
        this.running = this.over = false;
        this.turn = this.bat;
        this.timer = this.round = 0;
        this.color = '#000000';
        pong.menu();
        pong.listen();
        },

       

        draw: function(){
            this.context.clearRect(
                0,
                0,
                this.canvas.width,
                this.canvas.eight,
            )

            this.context.fillStyle = this.color;
            this.context.fillRect(
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );

            this.context.fillStyle = '#43d545';
            this.context.fillRect(
                this.player.x,
                this.player.y,
                this.player.width,
                this.player.height,

            );

            this.context.fillStyle = '#43d545';
            this.context.fillRect(
                this.bet.x,
                this.bet.y,
                this.bet.width,
                this.bet.height,
            );

            if (pong._turnDelayIsOver.call(this)) {
                this.context.fillRect(
                    this.ball.x,
                    this.ball.y,
                    this.ball.width,
                    this.ball.height,
                )
            }
            this.context.beginPath();
            this.context.setLineDash([7, 15]);
            this.context.moveTo((this.canvas.width / 2), this.canvas.height - 140);
            this.context.lineTo((this.canvas.width / 2), 140);
            this.context.lineWidth = 10;
            this.context.strokeStyle = '#43d545';
            this.context.stroke();
            this.context.font = '100px Courier New';
            this.context.textAlign = 'center';
            this.context.fillText(
                this.player.score.toString(),
                (this.canvas.width / 2) + 300,
                200
            );

            this.context.font = '30px Courier New';

            this.context.fillText(
                'Round'+ (pong.round + 1),
                (this.canvas.width / 2),
                35
            );

            this.context.font = '40px Courier';
            this.context.fillText(
                rounds[pong.round] ? rounds[pong.round] : rounds[pong.round - 1],
                (this.canvas.width / 2),
                100
            );

        },

        menu: function(){
            pong.draw();

            this.context.font = '50px Courier New';
            this.context.fillStyle = this.color;
            this.context.fillRect(
                this.canvas.widht / 2 - 350,
                this.canvas.height / 2 - 48,
                700,
                100
            )
            this.context.fillStyle = '#ffffff';
            this.context.fillText('Press any key to begin',
            this.canvas.widht / 2,
            this.canvas.eight / 2 + 15
            );
    
        },

        endgameMenu: function (text) {
            pong.context.font = '50px Courier New';
            pong.context.fillStyle = this.color;

            this.context.fillRect(
                this.canvas.widht / 2 - 350,
                this.canvas.height / 2 - 48,
                700,
                100
            )

            pong.context.fillStyle = '#43d545';

            pong.context.fillText(text, 
            pong.canvas.widht / 2,
            pong.canvas.height / 2 + 15
            );

            setTimeout(function() {
                pong = Object.assign({}, game);
                pong.initialize(); }, 3000);
            },

            update: function () {
                
            }
};

var pong = Object.assign({}, game);
pong.initialize();