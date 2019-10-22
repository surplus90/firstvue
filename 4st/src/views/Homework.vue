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
            <div class="ba-1 footer">FOOTER</div>
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

</style>
