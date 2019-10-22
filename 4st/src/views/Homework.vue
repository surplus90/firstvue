<template>
    <div>
        <div>
            <div class="ba-1 header">HEADER</div>
            <div class="body">
                <div class="ba-1 box-1 scroll-x">
                    <div class="ba-1">1</div>
                    <div class="ba-1">2</div>
                    <div class="ba-1">3</div>
                    <div class="ba-1">4</div>
                    <div class="ba-1">5</div>
                    <div class="ba-1">6</div>
                </div>
                <div class="ba-1 box-1 scroll-x">
                    <div class="ba-1">1</div>
                    <div class="ba-1">2</div>
                    <div class="ba-1">3</div>
                    <div class="ba-1">4</div>
                    <div class="ba-1">5</div>
                    <div class="ba-1">6</div>
                </div>
                <div class="ba-1 box-1 scroll-x">
                    <div class="ba-1">
                        <div class="texto-vertical">HEADER1</div>
                        <div></div>
                    </div>
                    <div class="ba-1">
                        <div class="texto-vertical">HEADER2</div>
                        <div></div>
                    </div>
                </div>
                <div class="ba-1 box-2">
                    <div class="scroll-y">
                        <div class="ba-1">
                            <div class="texto-horizon">HEADER1</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon">HEADER2</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon">HEADER3</div>
                            <div class="box-2-sm"></div>
                        </div>
                    </div>
                    <div class="scroll-y">
                        <div class="ba-1">
                            <div class="texto-horizon">HEADER1</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon">HEADER2</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon">HEADER3</div>
                            <div class="box-2-sm"></div>
                        </div>
                    </div>
                </div>
                <div class="ba-1">5</div>
                <div class="ba-1">6</div>
                <div class="ba-1">7</div>
                <div class="ba-1">8</div>
                <div class="ba-1">9</div>
                <div class="ba-1">10</div>
            </div>
            <div class="ba-1 footer">
                <button class="btn cancel">취소</button>
                <button class="btn default">확인</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
/* 
1. grid 안쓰고 레이아웃을 만드는게 첫번째 과제 입니다. grid는 나중에 쓸껍니다. 
2. css 클래스 역시 프로그래밍의 공통 개념은 같습니다. 단일로 선언 하는경우 는 공통 인경우 이고, 현재 레이아웃에 해당하는 경우는 적용 범위를 줄여야 합니다. 
예> 
.box-1{
    height: 100px;
    .box-1-sm {
        width: 80vw;
        height: 100px;
        display: inline-block;
    }
}
이렇게 하면 box-1-sm 의 적용범위를 .box-1로 제한 할수 있습니다. 
또한 저렇게 모든 자식에게 적용하는 경우는 일일히 클래스를 주지 않아도 됩니다.
기본 css 를 먼저 선언하고 좀 다른 애들만 클래스를 다르게 주어서 css 오버라이딩 개념을 사용해서 처리 합니다. 
예>
.box-1{
    height: 100px;
    > div {
        width: 80vw;
        height: 100px;
        display: inline-block;
        color: white;
    }
    .box-1-sm {
        color: red;
    }
}

이렇게 하면 우선적으로 .box-1 > div 가 먼저 적용되고 그에 해당하는 애들중 .box-1 .box-1-sm 이 있는경우 color 를 오버라이딩 하게 됩니다. 

.scroll-x 같은 경우는 주로 공통으로 사용하기 때문에 단일 선택자를 쓴것은 잘한것 입니다. 

2019/10/23
잘하셨습니다. 너무 잘하고 계십니다. 
이정도면 개념은 이해 했다고 보면 될것 같습니다. 계속 만들어 나가시면 될것 같습니다. 


1. 버튼 css 는 어려워요 복사해서 써도 됩니다. 버튼은 퍼블리셔가 만들어 줄것이기 때문에 안만드셔도 되요. 
버튼 만드는건 퍼블리셔도 힘들어 합니다. 디자인 요소가 강하기 때문입니다. 
https://www.bestcssbuttongenerator.com/#/0
이사이트에서 버튼을 만들어서 붙여 넣으세요 
이런식으로 버튼 css 만 만들어 주는 사이트도 있을정도로 디자인 요소가 강합니다. 


2. commit 으로 질문인지, 한탄인지 모르겠지만 그렇게 남기면 저 웃겨 죽습니다. ㅋㅋㅋㅋ
질문을 하세요 ㅋ 
이해도를 파악하기 위해서 질문은 필수 입니다. 
질문이 없으면 다음과 같은 문제가 발생합니다. 
 - 제가 학습자의 현재 상태를 파악하기 힘듭니다. 모르는것이 무엇이고 무엇을 잘못 이해 했는지 정확히 파악할수있어야 
 그다음 진도나 스터디 방법에 대해서 고민을 할수 있습니다. 
 - 설명을 들을때는 이해 한것 같아도 막상해 보면 막힙니다. 이때 다시 기억을 재생 시켜주는 것이 바로 질문 입니다. 
 빠른 진도 및 학습 속도를 위해서는 엄청나게 많은 질문이 필요 합니다. 

질문 하실때 만약 제가 틀렸거나 잘못된 방법이거나 본인에게 도움이 안된다고 생각되면 
반드시 마음을 열고 말해 주세요. 저 보이는 것보다 그렇게 마음이 좁지 않습니다. 
삐져도 쉽게 풀립니다. 그러니 그런거 생각치 말고 말해 주세요 
이 스터디의 목적은 둘다 도움이 되기 위한것 입니다. 
어느 한쪽이 도움이 안되기 시작한다면 반드시 솔직하게 서로 말해서 방향을 찾아야 합니다. 

궁금한것이나 안되는 것을 연락으로 질문하기 힘들거나 정 껄끄러우면 여기 주석으로 남겨 주세요. 
답변을 달아 드리겠습니다. 


3. 위에 설명한것의 부연설명으로 단일 선택자를 사용하는경우 예> .ba-1  
이 css 는 반드시 적용되야 하기 때문에 보통 다음과 같이 미리 적어 주는것이 좋습니다. 

.ba-1 {
    border: 1px solid black !important;
}

!important 키워드는 css 적용할 수치를 계산할때 가장 높은값을 적용해 버립니다. 그래서 강제 적용이 가능합니다. 

!important 이 키워드를 사용할때 는 다음과 같은 제약이 있습니다. 
- 단일 선택자 이고 다른 css 속성을 무시하고 적용되야 하는경우 에 주로 사용하는것이 좋습니다. 

너무 자주 적용하면 나중에 프로젝트가 커질때 다른데 영향을 미칩니다. 


4. .header 와 .footer 같은 경우 현재 방법이 틀린것은 아닙니다. 
다만 현재 html5 스펙상으로는 이 이름은 태그로 사용하는것이 더 명시적 입니다. 
<header></header>, <footer></footer>

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside

전부 태그 이름 자체에 역할을 명시적으로 표현하기위해 고안된 표준 입니다. 표준을 지키시는게 좋습니다. 


5. .btn 같은 경우 색만 다르게 적용 하고 싶은경우는 다음과 같이 합니다. 
- 모든 버튼이 가져야할 기본 css 를 정의 합니다. 
.btn {
  border: black;
  border-radius: 4px;
  padding: 1px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: small;
  background-color: transparent;
}

- 상황에 따라서 적용되야 하는 css 를 정의 합니다. 

.btn-cancel {
    background-color: gray;
}
.btn-default {
    background-color: blue;
}

이렇게 한다음에 css 오버라이딩을 이용해서 적용합니다. 
<div class="btn btn-default"></div>

한가지 참고로 색만 바뀌는 경우는 색으로 클래스를 만들어 적용하는것이 더 좋습니다. 그래야 다양하게 적용할수 있습니다. 
.bg-gray{
   background-color: gray; 
}

<div class="btn bg-gray"></div>

그리고 아래 정의 대로 라면 버튼 태그 안에 자식 태그가 있다는 가정으로 되어 버립니다. 
그래서 자세히 디버거 를 보면 cancel 속성은 적용이 되지 않습니다. 
지금 정의는 다음과 같습니다. 
.btn .calcel{}
즉 자식 태그를 찾습니다. 

btn.calcel 을 원한것이라면 다음과 같이 정의 해야 합니다.

&.cancel {
    background-color: gray;
}


6. sticky 설명 글 
https://developer.mozilla.org/en-US/docs/Web/CSS/position
top, left, right, bottom 속성으로 멈출 위치를 지정 할수 있습니다. 


7. header 안의 글자는 상하 좌우 가운데 정렬 입니다. 
line-height 값을 넣어야 상하 정렬이 가운데로 옵니다. 
https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

쉽게 적용하려면 height, line-height 값을 동일한 값을 적용 하면 됩니다. 

좌우 정렬은 글자 이므로 text-align 인데 이미 부모에서 text-align:center 라서 가운데로 와 있지만 
명시적으로 다시 css 를 추가 해주시는것이 좋습니다. 
text-align: center 를 header 에 넣어 주거나 
단일 선택자로 만들어서 적용하는것이 좋습니다. 
.text-center{
    text-align: center !important;
}


8. position: static 은 기본 값이라서 없으면 자동 static 입니다. 즉 없어도 됩니다. 
absolute 나  relative 에서 기본으로 돌아가는 경우에만 사용 합니다. 

*/
.ba-1 {
    border: 1px solid black;
}

.header {
    height: 30px;
    position: static;
}

.body {
    height: 400px;
    position: relative;
    overflow: auto;
}

.footer {
    height: 30px;
    position: static;
}

.box-1{
    > div {
        width: 80vw;
        height: 100px;
        display: inline-block;
        color: pink;
    }
}

.box-2{
    > div {
        width: 50%;
        height: 150px;
        display: inline-block;
    }
    .box-2-sm {
        height: 100px;
    }
}

.scroll-x {
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
}

.scroll-y {
    overflow: hidden;
    overflow-y: scroll;
    white-space: nowrap;
}

.texto-vertical {
    border: 1px dotted black;
    height: 100%;
    font-size: x-small;
    writing-mode: vertical-rl;
    text-orientation: upright;
}

.texto-horizon {
    border: 1px dotted black;
    font-size: x-small;
}

.btn {
  border: black;
  border-radius: 4px;
  padding: 1px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: small;
  &.cancel {
      background-color: gray;
  }
  .default {
      background-color: blue;
  }
}

</style>
