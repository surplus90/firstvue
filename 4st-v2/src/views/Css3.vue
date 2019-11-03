<template>
    <div style="height: calc(100vh - 87px); overflow: hidden; overflow-y: scroll;">
        <header class="text-center position-relative fixed-top bg-white" style="top:87px;">
            <button class="btn btn-default position-absolute-left ml-10" @click="isModal = !isModal">modal</button>
            header
        </header>
        <section class="bt-10">
            <div class="scroll-view scroll-x-view">
                <div class="text-center">1</div
                ><div class="text-center">2</div
                ><div class="text-center">3</div
                ><div class="text-center">4</div
                ><div class="text-center">5</div
                ><div class="text-center">6</div>
            </div>
        </section>
        <section class="bt-10">
            <div class="scroll-view scroll-x-view">
                <div class="text-center scroll-snap-end">1</div
                ><div class="text-center scroll-snap-end">2</div
                ><div class="text-center scroll-snap-end">3</div
                ><div class="text-center scroll-snap-end">4</div
                ><div class="text-center scroll-snap-end">5</div
                ><div class="text-center scroll-snap-end">6</div>
            </div>
        </section>
        <section class="bt-10">
            <div class="scroll-view scroll-x-view">
                <div class="text-center scroll-snap-start"><div class="sticky">header 1</div>1</div
                ><div class="text-center scroll-snap-start"><div class="sticky">header 2</div>2</div
                ><div class="text-center scroll-snap-start"><div class="sticky">header 3</div>3</div
                ><div class="text-center scroll-snap-start"><div class="sticky">header 4</div>4</div
                ><div class="text-center scroll-snap-start"><div class="sticky">header 5</div>5</div
                ><div class="text-center scroll-snap-start"><div class="sticky">header 6</div>6</div>
            </div>
        </section>
        <section class="bt-10 clearfix">
            <div class="scroll-view scroll-y-view w-50 fl">
                <div class="text-center"><div class="sticky">header 1</div>1</div>
                <div class="text-center"><div class="sticky">header 2</div>2</div>
                <div class="text-center"><div class="sticky">header 3</div>3</div>
                <div class="text-center"><div class="sticky">header 4</div>4</div>
                <div class="text-center"><div class="sticky">header 5</div>5</div>
                <div class="text-center"><div class="sticky">header 6</div>6</div>
                <div class="text-center"><div class="sticky">header 7</div>7</div>
                <div class="text-center"><div class="sticky">header 8</div>8</div>
                <div class="text-center"><div class="sticky">header 9</div>9</div>
                <div class="text-center"><div class="sticky">header 10</div>10</div>
            </div>
            <div class="scroll-view scroll-y-view w-50 fl">
                <div class="text-center"><div class="sticky" style="top:5vh;">header 1</div>1</div>
                <div class="text-center"><div class="sticky" style="top:5vh;">header 2</div>2</div>
                <div class="text-center"><div class="sticky" style="top:5vh;">header 3</div>3</div>
                <div class="text-center"><div class="sticky" style="top:5vh;">header 4</div>4</div>
                <div class="text-center"><div class="sticky" style="top:5vh;">header 5</div>5</div>
                <div class="text-center"><div class="sticky" style="top:5vh;">header 6</div>6</div>
                <div class="text-center"><div class="sticky" style="top:5vh;">header 7</div>7</div>
                <div class="text-center"><div class="sticky" style="top:5vh;">header 8</div>8</div>
                <div class="text-center"><div class="sticky" style="top:5vh;">header 9</div>9</div>
                <div class="text-center"><div class="sticky" style="top:5vh;">header 10</div>10</div>
            </div>
        </section>
        <section class="bt-10 mb-50">
            <div class="text-center y-view">1</div>
            <div class="text-center y-view">2</div>
            <div class="text-center y-view">3</div>
            <div class="text-center y-view">4</div>
            <div class="text-center y-view">5</div>
            <div class="text-center y-view">6</div>
            <div class="text-center y-view">7</div>
            <div class="text-center y-view">8</div>
            <div class="text-center y-view">9</div>
            <div class="text-center y-view">10</div>
        </section>
        <!-- <footer class="fixed-bottom bg-white">
            <div class="clearfix">
                <button class="btn btn-default w-50 fl" style="width:44.65%; margin: 5px 10px;">취소</button>
                <button class="btn btn-primary w-50 fl" style="width:44.65%; margin: 5px 10px;">확인</button>
            </div>
        </footer> -->
        <footer class="fixed-bottom bg-white">
            <div class="text-center">
                <button class="btn btn-default ma-5 btn-footer">취소</button>
                <button class="btn btn-primary ma-5 btn-footer">확인</button>
            </div>
        </footer>

        <div v-if="isModal" class="modal">
            <div>
                <div class="modal-header"><button @click="isModal = !isModal" class="close">X</button></div>
                <div class="modal-body"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'css3',
    data(){
        return {
            isModal: false
        }
    },
    methods: {
    },
}
</script>

<style scoped>
header{
    border: 1px solid red;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
}
section{
    border: 1px solid blue;
    width: 100%;
}
footer{
    border: 1px solid black;
    width: 100%;
}
.btn{
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.btn-primary{
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}
.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}
.fl{
    float: left !important;
}
.fr{
    float: right !important;
}
.clearfix{
    overflow: auto;
}
.clearfix::after{
    content: "";
    clear: both;
    display: table;
}
.text-center{
    text-align: center;
}
.position-relative{
    position: relative;
}
.position-absolute{
    position: absolute;
}
.position-absolute-left{
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
.ml-10{
    margin-left: 10px;
}
.mr-10{
    margin-right: 10px;
}
.ma-5{
    margin: 5px;
}
.ma-10{
    margin: 10px;
}
.mb-35{
    margin-bottom: 35px;
}
.mb-50{
    margin-bottom: 50px;
}
.bt-10{
    border-top: 10px solid darkgray;
}
.w-50{
    width: 50% !important;
}
.scroll-view{
    overflow: hidden;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling:touch;
}
.scroll-x-view{
    width: 100%;
    height: 20vh;
    white-space: nowrap;
    overflow-x: scroll;
    scroll-snap-type: x proximity;
}
.scroll-x-view > div{
    scroll-snap-align:center;
    display: inline-block;
    width: 80vw;
    height: 100%;
    border: 1px solid gray;
}
.scroll-snap-start{
    scroll-snap-align:start !important;
}
.scroll-snap-center{
    scroll-snap-align:center !important;
}
.scroll-snap-end{
    scroll-snap-align:end !important;
}
.scroll-x-view > div >.sticky{
    /* display: inline-block; */
    float: left;
    height: 100%;
    width: 5%;
    white-space: normal;
    word-break: break-all;
    text-align: center;
    text-transform: uppercase;
}
.y-view{
    width: 100%;
    height: 40vh;
    border: 1px solid gray;
}
.scroll-y-view{
    width: 100%;
    height: 50vh;
    overflow-y: scroll;
    scroll-snap-type: y proximity;
}
.scroll-y-view > div{
    scroll-snap-align:center;
    display: block;
    width: 100%;
    height: 20vh;
    border: 1px solid green;
}
.fixed-top{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.fixed-top + *{
    margin-top: 50px;
}
.fixed-bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
.sticky{
    position: sticky;
    top: 0;
    left: 0;
    z-index: -1; /* position: sticky 는 z-index 가 다르게 적용되므로 fixed 가 있는경우 넣어야 할수 있다. */
    background-color: white;
    border: 2px dotted;
}
.bg-white{
    background-color: white;
}
.btn-footer{
    width: calc(50% - 15px);
}
/* 배경 스크롤 방지용 css */
body.modal-open{
    overflow: hidden;
}
/* body .modal{
    display: none;
}
body.modal-open .modal{
    display: block;
} */
.modal{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgb(0,0,0,0.4);
}
.modal > div{
    position: relative;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    width: 200px;
    height: 250px;
    margin: 0 auto;
    background-color: white;
}
.modal .modal-header{
    overflow: hidden;
}
.modal .modal-header .close{
    float: right;
}
.modal .modal-body{
    /* position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 250px;
    margin: 0 auto;
    background-color:white; */
}
</style>