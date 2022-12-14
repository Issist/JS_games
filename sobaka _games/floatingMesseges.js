export class FloatingMessage {
    constructor(value, x, y, targerX, targerY){
        this.value = value;
        this.x = x;
        this.y = y;
        this.targerX = targerX;
        this.targerY = targerY;
        this.markedForDeletion = false;
        this.timer = 0;
    }
    update(){
        this.x += (this.targerX - this.x) * 0.03;
        this.y += (this.targerY - this.y) * 0.03;
        this.timer++;
        if (this.timer > 100) this.markedForDeletion = true;
    }
    draw(context){
        context.font = '20px Creepster';
        context.fillStyle = 'white';
        context.fillText(this.value, this.x, this.y);
        context.fillStyle = 'black';
        context.fillText(this.value, this.x + 2, this.y + 2);
    }
}