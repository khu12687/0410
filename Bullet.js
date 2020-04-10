//코드의 중복은 추후 유지보수성에 문제가 생긴다 -> 상속으로 해결
//extends 란 상속을 의미하여, 이 extends를 선언한 시점부터는
//부모 객체의 모든 재산을 내가 접근할 수있다!!

    //생성자란 객체 즉 인스턴스가 태어날때 초기화를 담당하는 메서드를 의미한다
    // 주의 -상속관계에서는 자식의 초기화보다 가장 최우선 되어야 할 초기화가 바로 부모에 대한초기화
    //따라서 자식의 생성자에서 부모의 초기화보다 앞서는 코드를 작성할수없다

class Bullet extends GameObject{
    //자식보다 부모가 먼저 생성되어야한다 부모를 super라고한다
    constructor(container,src,width,height,velX,velY,x,y){
        super(container,src,width,height,velX,velY,x,y); //부모의 생성자 호출, 즉 부모의 constructor()메서드호출
        // console.log("Bullet이 지금 태어납니다");
    }
    //GameObject에는 완성되지 못한 추상메서드 2개가 있다
    // 이 메서드들이 미완성인 이유는 귀찮아서가 아니라, 자식 각자의 
    //동작방식을 예측할 수 없으므로, 자식으로 하여금 그 내용을 완성
    //지을수 있는 기회를 주기 위함이다!!
    
    //아래의 tick()과 render()를 총알의 특징에 맞게 완성짓자!!
    tick(){
        //y축으로 등속도 운동하는 물리량 표현
        this.y+=this.velY; //this.velY는 음수로 넘겨야함 부호가 +=이기때문에

        //충돌체크!!
        // collisionCheck(요소1,요소2)
       
        for(var i=0; i<enemyArray.length; i++){
            var result = collisionCheck(this.img,enemyArray[i].img)
            if(result){ //적군과 마주친거임!
                // 나죽고 너죽고 (죽음 == 화면에서도제거 + 배열에서도제거)
                //화면에서 먼저 지워야한다 배열을 먼저 지우면 화면을 지우려고할때 이미사라진배열을쓸려해서
               
                //화면에서 제거 부모요소에서 제거
                this.container.removeChild(this.img);
                enemyArray[i].container.removeChild(enemyArray[i].img);

                //배열명단에서 제거!!
                var index = bulletArray.indexOf(this); //내가 몇번째 들어있니??
                bulletArray.splice(index,1);

                enemyArray.splice(i,1); //적군 명단도 제거

            }
        }
    }
    render(){
        this.img.style.top=this.y+"px";
    }
}