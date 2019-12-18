 constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.canvas = document.getElementById('canvas');
        this.ctx = document.getElementById('canvas').getContext('2d');
        this.save = function(){
            this.ctx.save()
        };
        this.allBalls = [];
};


