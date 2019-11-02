<template>
    <div>
        <div>
            <header class="bd-charcoal ps-r hp-50 lh-50px ta-c">
                <button class="ps-a ps-m btn-bd" style="left: 3px;" @click="isModal=true">modal</button>
                HEADER
            </header>
            <!-- <section class="custom-section"> -->
            <section class="container100">
                <div class="container100 box-1 scroll-x x-mandatory-scroll-snapping">
                <!-- <div class="box-1 scroll-x x-mandatory-scroll-snapping"> -->
                    <div class="bd-charcoal">1</div>
                    <div class="bd-charcoal">2</div>
                    <div class="bd-charcoal">3</div>
                    <div class="bd-charcoal">4</div>
                    <div class="bd-charcoal">5</div>
                    <div class="bd-charcoal">6</div>
                </div>
                <div class="box-1 scroll-x x-mandatory-scroll-snapping">
                    <div class="bd-charcoal">1</div>
                    <div class="bd-charcoal">2</div>
                    <div class="bd-charcoal">3</div>
                    <div class="bd-charcoal">4</div>
                    <div class="bd-charcoal">5</div>
                    <div class="bd-charcoal">6</div>
                </div>
                <div class="box-1 scroll-x x-mandatory-scroll-snapping">
                    <div class="bd-charcoal">
                        <div class="row-full fs-11 ml-05 texto-vertical sticky">HEADER1</div>
                        <div></div>
                    </div>
                    <div class="bd-charcoal">
                        <div class="row-full fs-11 ml-05 texto-vertical sticky">HEADER2</div>
                        <div></div>
                    </div>
                    <div class="bd-charcoal">
                        <div class="row-full fs-11 ml-05 texto-vertical sticky">HEADER3</div>
                        <div></div>
                    </div>
                    <div class="bd-charcoal">
                        <div class="row-full fs-11 ml-05 texto-vertical sticky">HEADER4</div>
                        <div></div>
                    </div>
                    <div class="bd-charcoal">
                        <div class="row-full fs-11 ml-05 texto-vertical sticky">HEADER5</div>
                        <div></div>
                    </div>
                    <div class="bd-charcoal">
                        <div class="row-full fs-11 texto-vertical sticky">HEADER6</div>
                        <div></div>
                    </div>
                </div>
                <div style="height: 150px;" class="cf">
                    <div class="col-6 dp-ib">
                        <div class="scroll-y y-mandatory-scroll-snapping" style="height: 150px;">
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER1</div>
                                <div style="height: 100px;"></div>
                            </div>
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER2</div>
                                <div style="height: 100px;"></div>
                            </div>
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER3</div>
                                <div style="height: 100px;"></div>
                            </div>
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER4</div>
                                <div style="height: 100px;"></div>
                            </div>
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER5</div>
                                <div style="height: 100px;"></div>
                            </div>
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER6</div>
                                <div style="height: 100px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 dp-ib">
                        <div class="scroll-y y-mandatory-scroll-snapping" style="height: 150px;">
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER1</div>
                                <div style="height: 100px;"></div>
                            </div>
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER2</div>
                                <div style="height: 100px;"></div>
                            </div>
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER3</div>
                                <div style="height: 100px;"></div>
                            </div>
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER4</div>
                                <div style="height: 100px;"></div>
                            </div>
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER5</div>
                                <div style="height: 100px;"></div>
                            </div>
                            <div class="bd-charcoal">
                                <div class="fs-11 sticky">HEADER6</div>
                                <div style="height: 100px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bd-charcoal" style="height: 100px;">1</div>
                <div class="bd-charcoal" style="height: 100px;">2</div>
                <div class="bd-charcoal" style="height: 100px;">3</div>
                <div class="bd-charcoal" style="height: 100px;">4</div>
                <div class="bd-charcoal" style="height: 100px;">5</div>
                <div class="bd-charcoal" style="height: 100px;">6</div>
                <div class="bd-charcoal" style="height: 100px;">7</div>
                <div class="bd-charcoal" style="height: 100px;">8</div>
                <div class="bd-charcoal" style="height: 100px;">9</div>
                <div class="bd-charcoal" style="height: 100px;">10</div>
            </section>
            <footer class="bd-charcoal hp-50 ps-r">
                <button class="btn-white ps-a ps-m" style="width: calc(50% - 10px); left: 5px;">취소</button>
                <button class="btn-blue ps-a ps-m" style="width: calc(50% - 10px); right: 5px;">확인</button>
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
/**
잘하셨습니다. 
지금은 내가 잘하고 있는건가 싶을지 몰라도 계속 하다 보면 이해도가 올라가면서 알게 될것 입니다. 
제가 볼때는 레이아웃 개념은 이제 잡히신것 같습니다. 나머지 애매한 부분은 업무를 진행 하시면서 자잘한 
부분을 직접 고쳐나가면서 배우시게 될것 입니다. 

다음번 으로 css 는 끝입니다. 

이번 에 고쳐봐야할 것은 다음과 같습니다. 

1. 기본적으로 회사 퍼블리싱은 div 를 위주로합니다. 
html5 기본 스펙은 위와 같으나 회사 css 와 최대한 유사 할수 있게 div 형태로 바꾸어 봅니다. 
뭐 section 만 일단 div 로 바꾸면 될것 같습니다. 

2. 화면을 나눌때 기본이 다음과 같습니다. 
<div class="container100"> 을 기본으로 화면을 세로 분할 하는 형태로 레이아웃을 작성 하는 형태 입니다.

css 는 다음과 같습니다. 
.container100{position:relative; width:100%; margin:0 auto;}

position:relative 인것이 특징 입니다. 
자식의 요소가 만약에 position: absolute; 가 있을것에 대비해서 미리 부모에 해당하는 태그에
넣어 둔것이라 봅니다.

이것은 퍼블리셔의 설계 전략 이라 보면 됩니다. 

2. col- 속성은 그리드 형태 인데 이것을 쓸때는 다음과 같이 주의 점이 있습니다. 
[class*="col-"] {float: left;}

css 선택자로 class 이름이 col- 로 시작하는 모든 class 에 float: left; 속성을 넣는다 입니다. 
이럴때는 left 속성을 반드시 클리어 해줘야 하기 때문에 다음과 같이 해야 합니다. 

<div class="cf">
    <div class="col-6"></div>
    <div class="col-6"></div>
</div>

그래야 다음 레이아웃에 영향을 끼치지 않습니다. float 속성은 계속 상속되어 내려가기 때문에 반드시 
clear:both; 를 해줘야 합니다. 

3. 우린 vue 를 사용하는 컴포넌트 단위 이기 때문에 거의 상관없지만 일반적인 퍼블리싱 에서는 하지 말하야 할것이 바로 
<button style="width: calc(50% - 10px); left: 5px;">취소</button>
이런 형태를 인라인 스타일 이라고 합니다. 인라인 스타일은 기본적으로 우선순위가 매우 높습니다. 
그래서 인라인 스타일은 보통 !important 와 더불어 높은 값을 적용받는 것이라 왠만해서는 사용하지 않습니다.
도저히 안될때 사용합니다. 보통은 class 로 분리 적용해야 합니다. 
이건 참고 사항입니다. 

다음 은 flex 입니다. 참고 입니다. 
https://d2.naver.com/helloworld/8540176
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://flexbox.alexpermyakov.com/
https://codepen.io/enxaneta/full/adLPwv/


이것은 2가지만 할것 입니다. 
풋터 버튼 정렬 과 모달 만들기 만 이것으로 수행해 봅니다. 

위에 링크만 읽고 도전해 보실수 있으면 도전해 보셔도 됩니다. 

추가 과제는 다음과 같습니다. 
1. 모달을 width: 250px; 으로 고정하고 마진 으로 중앙 정렬이 아닌 
transform: translate 을 이용한 방법으로 중앙 정렬 해보세요 

이건 그냥 도전 안해도 됩니다. 
2. 풋터 버튼 정렬 과 모달 을 flex 로 해보세요 

제가 작업한것 Css3 에 넣어서 파일로 올렸습니다. 실행해 보시고 참고해주세요 
그리고 이해 안되는것 은 질문 하시면 됩니다. 
 */
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

.custom-section {
    height: 400px;
    position: relative;
    overflow: auto;
}

.box-1 {
    > div {
        width: 80vw;
        height: 100px;
        display: inline-block;
        color: orange;
    }
}

.scroll-y {
    overflow: hidden;
    overflow-y: scroll;
    white-space: nowrap;
}

.y-mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
  > div {
      scroll-snap-align: center;
  }
}

.scroll-x {
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
}

.x-mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
  > div {
      scroll-snap-align: center;
  }
}

.texto-vertical {
    writing-mode: vertical-rl;
    text-orientation: upright;
}

.sticky {
    position: sticky;
    top: 0;
    left: 0;
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