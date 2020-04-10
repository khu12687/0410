//벽돌을 정의한다
class Block extends GameObject{
    constructor(container,src,width,height,velX,velY,x,y){
        //부모초기화!!
        super(container,src,width,height,velX,velY,x,y);
    }
    //움직임 없으므로 메서드는 재정의할필요가없다
}