/*앞으로 게임에 등장하게될 모든 ~~~종류의 오브젝트를 표현하는
객체를 정의한다!!
왜? 코드의 중복을 방지하기 위해 = 유지보수성을 높이기위함
    = 돈!! IT분야는 시간이 돈이다!!
     = 이미 반쯤 만들어진 소프트웨어를 많이 활용 =즉 틀이 이미 구축된것을 가리켜
         프레임웤!! ex)스프링 프레임웤 나중에 배울거임..*/

class GameObject{
    constructor(container,src,width,height,velX,velY,x,y){
        this.container=container;
        this.src=src;
        this.img=document.createElement("img");
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        this.x=x;
        this.y=y;

        //스타일 적용
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        //부모요소에 부착
        container.appendChild(this.img);
    }
   
    //최상위 부모클래스에서는 장차 자식들 각자가 어떠한 행동을 할지 
    //예측할 수 없으므로, tick(),render() 메서드의 내용을 확정지을수없다
    //메서드를 미완성 메서드라 하여 추상메서드라 한다
    //자바스크립트에서는 차상메서드까지는 지원하지않는다
    //따라서 비워놓자
    
     //물리적 변화 메서드
    tick(){}
    //그래픽처리 
    render(){}
}