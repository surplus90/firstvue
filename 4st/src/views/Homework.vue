<template>
    <div>
        <div>
            <header class="header ba-1">
                <div class="modal-btn-box">
                    <button class="btn btn-default" @click="isModal=true">modal</button>
                </div>
                HEADER
            </header>
            <section class="custom-section">
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
                        <div class="texto-vertical sticky">HEADER1</div>
                        <div></div>
                    </div>
                    <div class="ba-1">
                        <div class="texto-vertical sticky">HEADER2</div>
                        <div></div>
                    </div>
                    <div class="ba-1">
                        <div class="texto-vertical sticky">HEADER3</div>
                        <div></div>
                    </div>
                    <div class="ba-1">
                        <div class="texto-vertical sticky">HEADER4</div>
                        <div></div>
                    </div>
                    <div class="ba-1">
                        <div class="texto-vertical sticky">HEADER5</div>
                        <div></div>
                    </div>
                    <div class="ba-1">
                        <div class="texto-vertical sticky">HEADER6</div>
                        <div></div>
                    </div>
                </div>
                <div class="ba-1 box-2">
                    <div class="scroll-y">
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER1</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER2</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER3</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER4</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER5</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER6</div>
                            <div class="box-2-sm"></div>
                        </div>
                    </div>
                    <div class="scroll-y">
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER1</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER2</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER3</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER4</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER5</div>
                            <div class="box-2-sm"></div>
                        </div>
                        <div class="ba-1">
                            <div class="texto-horizon sticky">HEADER6</div>
                            <div class="box-2-sm"></div>
                        </div>
                    </div>
                </div>
                <div class="ba-1 box-3">5</div>
                <div class="ba-1 box-3">6</div>
                <div class="ba-1 box-3">7</div>
                <div class="ba-1 box-3">8</div>
                <div class="ba-1 box-3">9</div>
                <div class="ba-1 box-3">10</div>
            </section>
            <footer class="ba-1 footer">
                <div>
                    <button class="btn btn-default">취소</button>
                </div>
                <div>
                    <button class="btn btn-confirm">확인</button>
                </div>
            </footer>
        </div>

        <div class="modal-box" v-if="isModal">
            <div class="ba-1 modal-content">
                <header class="modal-header">
                    Modal Box
                    <div class="modal-close-btn-box">
                        <button class="btn btn-default" @click="isModal=false">X</button>
                    </div>
                </header>
                <section class="modal-section"></section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homework',
    data(){
        return {
            isModal: false
        }
    },
    methods: {
    },
}
</script>

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

/*
1. footer에 버튼 레이아웃
2. header에 modal 버튼
: 버튼 세로 정렬이 center로 안가네요ㅠㅠ 같이 봐주셨으면 합니다.
=> modal-btn-box 같은 경우 버튼 세로 정렬 하려고 만든것 같습니다. 
이상태 에서 

솔루션 1 
position: absolute;
float: left;

이 두가지 속성 모두 레이아웃에 관계된 것이라 같이 사용하는것을 추천 하지 않습니다. 
하나만 사용해서 위치를 잡으시길 바랍니다. 
.modal-btn-box{
    float: left;
    line-height: 30px; // header 의 높이값과 일치 시켜 줍니다. 
}

이러면 상하 정렬은 됩니다. 

또는 
.header { position: relative } 추가 하거나 별도 단일 css 만들어서 추가 해주고 
.modal-btn-box{
    position: absolute;
    line-height: 30px; // header 의 높이값과 일치 시켜 줍니다. 
}

또는 
.modal-btn-box{
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
}

이건 모달 가운데 정렬 할때와 같습니다. 

솔루션 2 
버튼만 있다고 가정 하겠습니다. .modal-btn-box 없다고 가정 합니다. 
이때 문제가 버튼이 너무 커집니다. 
.btn {
    width: 100%;
    height: 100%;
}

이 두개를 삭제 합니다. 이제 보니 있으면 안되는 게 기본으로 들어가 있네요 
width, height 는 필요시 나중에 추가하는 형태로 갑니다. 
.full-width{width: 100%;}
.full-height{height: 100%;}

저 두개를 빼면 버튼이 작게 됩니다. 이 상테에서 버튼의 크기는 padding 으로 조절 합니다. 

그리고 위 방법에서 
.header { position: relative }
.header .btn-modal{
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
}

으로 해도 됩니다. 

3. modal box 생성
: 이거슨 사실 구글링해서 참고해서 만들었습니다 (복붙...) 아직 혼자 힘으로 그냥 만들지는 못하겠어요.
=> modal 자체는 혼자 힘으로 하기는 힘듭니다. 하지만 구글링을 잘하실꺼라 생각해서 ㅎㅎ 
이것도 정석 같은게 있는지라 나중에는 잘하게 될것 입니다. 
일단 문제점은 모달이 반응형으로 동작하네요 
모달은 화면 크기가 변해도 일정 크기를 유지 해야 합니다. 모달 고정 사이즈로 한번 해보기실 바랍니다. 

모달 가운데 정렬 힌트는 다음과 같습니다. 

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

or 

position: absolute;
top: 50%;
left: 0;
margin: 0 auto;
transform: translate(0, -50%);
*/
.header {
    height: 30px;
    line-height: 30px;
    text-align: center;
    .modal-btn-box {
        position: absolute;
        width: 50px;
        float: left;
    }
}

.custom-section {
    height: 400px;
    position: relative;
    overflow: auto;
}

.footer {
    height: 30px;
    > div {
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        padding: 3px 5px;
        display: inline-block;
    }
}

.box-1 {
    > div {
        width: 80vw;
        height: 100px;
        display: inline-block;
        color: pink;
    }
}

.box-2 {
    > div {
        width: 50%;
        height: 150px;
        display: inline-block;
    }
    .box-2-sm {
        height: 100px;
    }
}

.box-3 {
    height: 100px;
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

.sticky {
    position: sticky;
    top: 0;
    left: 0;
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
    width: 100%;
    height: 100%;
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	border-radius:6px;
	display:inline-block;
	cursor:pointer;
	font-family:Arial;
	font-size:12px;
	font-weight:bold;
	padding: 5px 1px;
	text-decoration:none;
}
.btn-default {
    background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
    background-color:#f9f9f9;
    color:#666666;
    border:1px solid #dcdcdc;
    text-shadow:0px 1px 0px #ffffff;
}
.btn-default:hover {
	background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	background-color:#e9e9e9;
}

.btn-confirm {
    background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
    background-color:#3d94f6;
    color:#ffffff;
    border:1px solid #337fed;
    text-shadow:0px 1px 0px #1570cd;
}
.btn-confirm:hover {
	background:linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
	background-color:#1e62d0;
}

.modal-box {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 50%; /* Could be more or less, depending on screen size */
        height: 50%;
        .modal-header {
            width: 100%;
            height: 10px;
            .modal-close-btn-box {
                width: 20px;
                float: right;
            }
        }
        .modal-section {
            width: 100%;
            height: 100%;
        }                    
    }
}
</style>
