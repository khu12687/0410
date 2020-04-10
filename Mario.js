/*슈퍼마리오를 정의한다*/
class Mario extends GameObject{
    //중력적용이 계산되어야한다..
    constructor(container,src,width,height,velX,velY,x,y){
        //부모초기화!!
        super(container,src,width,height,velX,velY,x,y);

        //나만의 변수 선언: 중력가속도 계수!!
        this.g=0.3;
    }
    tick(){ 
        this.x+=this.velX;
        this.velY+=this.g; //등속이 아닌, 점점 커지는 배수를 더하자
                                    //그러면 가속이 발생한다
                                    //우리는 방향이 y축이므로 중력이 표현

        this.y+=this.velY; //

        //벽돌과 나와의 충돌검사!!
        for(var i=0; i<blockArray.length; i++){
           var result = collisionCheck(this.img,blockArray[i].img);
            if(result){
                // this.container.style.background="red";
                this.velY=0;
                //마리오 다리는 벽돌위에 있어야한다~
                this.y=blockArray[i].y-this.height;
            }
        }
    }
    render(){
        this.img.style.top=this.y+"px";
        this.img.style.left=this.x+"px";
    }
}
