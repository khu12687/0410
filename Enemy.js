//적군을 정의한다
//상속에 개념에 대해 주의할점??
// 상속받는다하여 부모 클래스의 코드가 나에게 다 덮어씌어지는게 아니라
//부모와 나는 별도로 존재하되, 내가 부모의 인스턴스안에 있는 데이터를 마치
//내것처럼 맘대로 접근할 수있는것 뿐이다..
class Enemy extends GameObject{
    constructor(container,src,width,height,velX,velY,x,y){
        // this.k=100; //부모의 초기화보다 앞설수있는 코드는 허용하지않는다
        //넘겨받은 변수들을 부모에게 전달
        super(container,src,width,height,velX,velY,x,y);
    }
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}