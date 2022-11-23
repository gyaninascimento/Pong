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

        
}