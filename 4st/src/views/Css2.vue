<template>
  <div class="sooyoon">
    <h4>display block</h4>
    <p>div, p 등이 block 태그 이다.</p>
    <div class="ba-1 mt-10">block</div>
    <div class="ba-1 w-50-center mt-10">block center</div>
    <h4>inline</h4>
    <p>width, height 가 적용되지 않는다. 크기는 내용의 크기 이다.</p>
    <p>a, span 등이 inline 태그 이다. </p>
    <div class="mt-10">
      <span class="ba-1">ab</span>
      <span class="ba-1">bcd</span>
      <span class="ba-1">cdefg</span>
    </div>
    <div class="ba-1 w-50-center scroll-x mt-10" style="width:10vw;">
      <span class="ba-1" style="width:20vw;height: 100%;">ab</span>
      <span class="ba-1" style="width:20vw;height: 100%;">bcd</span>
      <span class="ba-1" style="width:20vw;height: 100%;">cdefg</span>
      <span class="ba-1" style="width:20vw;height: 100%;">cdefg</span>
      <span class="ba-1" style="width:20vw;height: 100%;">cdefg</span>
      <span class="ba-1" style="width:20vw;height: 100%;">cdefg</span>
    </div>
    <h4>inline-block</h4>
    <p>width, height 가 적용된다.</p>
    <ul class="inline-block ba-1 w-50-center scroll-x">
        <li class="ba-1">1</li>
        <li class="ba-1">2</li>
        <li class="ba-1">3</li>
        <li class="ba-1">4</li>
        <li class="ba-1">5</li>
    </ul>
    <h4>flex</h4>
    <h4>grid</h4>
    <br/>>
    <h4>static</h4>
    <p>static 속성은 기본 값으로 자신의 위치를 기준으로 잡는다. 하지만 위치 이동은 불가능 하다.</p>
    <h4>relative</h4>
    <p>relative 속성 은 현재 자신의 위치를 기준으로 위치를 잡는다. 위치 이동이 가능하다. </p>
    <h4>absolute</h4>
    <p>부모중 relative 속성이 있는 태그를 기준으로 위치를 잡는다. 위치 이동이 가능하다.</p>
    <p>겹치기가 가능하다.</p>
    <p>relative 속성이 없는경우 최상단 루트태그 html 을 기준으로 한다.</p>
    <div class="sooyoon2">
        <div class="ca">a</div>
        <div class="cb">b</div>
        <div class="cc">c</div>
        <div class="cd">
            d
            <div class="dd">dd</div>
        </div>
    </div>
    <h4>z-index</h4>
    <p>기본은 쌓임규칙을 따라간다.</p>
    <p>relative, absolute 속성이 있어야만 적용된다.</p>
    <p>부모 태그에 z-index 값이 있는경우 그 값이 우선 된다. </p>
    <div class="sooyoon2">
        <div class="ca" style="z-index:1;">a</div>
        <div class="cb" style="z-index:1;">b</div>
        <div class="cc" style="z-index:1;">c</div>
        <div class="cd" style="z-index:0;">
            d
            <div class="dd" style="z-index:10;">dd</div>
        </div>
    </div>
    <p>부모 태그에 z-index 값이 없는경우 값이 있는 태그끼리 비교 적용된다.  </p>
    <div class="sooyoon2">
        <div class="ca">a</div>
        <div class="cb">b</div>
        <div class="cc" style="z-index:1;">c</div>
        <div class="cd">
            d
            <div class="dd" style="z-index:2;">dd</div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@mixin absoluteMix($width, $height: $width){
    width: $width;
    height: $height;
    position: absolute;
    $colors: (red, orange, blue, blueviolet, gray, darkgray, yellow);
    @each $color in $colors {
        $i: index($colors, $color);
        &:nth-child(#{$i}) {
            top: 20px * $i;
            left: 20px * $i;
            background-color: $color;
        }
    }
}

h4{
    color: chocolate;
    margin: 10px 0;
}
.ba-1{
    border: 1px solid black;
}
.w-50-center{
    width: 50%;
    margin: 0 auto;
}
.mt-10{
    margin-top: 10px;
}
ul{
    &.inline-block{
        height: 50px;
        >li{
            display: inline-block;
            width:20vw;
            height: 100%;
        }
    }
}
.scroll-x{
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
}
.sooyoon {
    .sooyoon2{
        position: relative;
        height: 40vh;
        > div {
            @include absoluteMix(20vw);
            > div {
                @include absoluteMix(10vw);
            }
        }
    }
}



</style>