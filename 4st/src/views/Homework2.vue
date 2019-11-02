<template>
    <div>
        <div>
            <header class="header ba-1">
                <button class="btn btn-default btn-modal-layout" @click="isModal=true">modal</button>
                HEADER
            </header>
            <section class="custom-section">
                <div class="ba-1 box-1 scroll-x x-mandatory-scroll-snapping">
                    <div class="ba-1">1</div>
                    <div class="ba-1">2</div>
                    <div class="ba-1">3</div>
                    <div class="ba-1">4</div>
                    <div class="ba-1">5</div>
                    <div class="ba-1">6</div>
                </div>
                <div class="ba-1 box-1 scroll-x x-mandatory-scroll-snapping">
                    <div class="ba-1">1</div>
                    <div class="ba-1">2</div>
                    <div class="ba-1">3</div>
                    <div class="ba-1">4</div>
                    <div class="ba-1">5</div>
                    <div class="ba-1">6</div>
                </div>
                <div class="ba-1 box-1 scroll-x x-mandatory-scroll-snapping">
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
                    <div class="scroll-y y-mandatory-scroll-snapping">
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
                    <div class="scroll-y y-mandatory-scroll-snapping">
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
                <button class="btn btn-default btn-cancel-layout vertical-center">취소</button>
                <button class="btn btn-confirm btn-ok-layout vertical-center">확인</button>
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
    name: 'homework2',
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
1. css 선택자 참고: http://www.nextree.co.kr/p8468/ 
*/
.header {
    position: relative;
    height: 50px;
    line-height: 50px;
    text-align: center;
}

.btn-modal-layout {
    position: absolute;
    left: 3px;
    top: 50%;
    transform: translate(0, -50%);
}

.custom-section {
    height: 400px;
    position: relative;
    overflow: auto;
}

.footer {
    height: 50px;
    position: relative;
    .btn-cancel-layout {
        width: calc(50% - 10px);
        left: 5px;
    }
    .btn-ok-layout {
        width: calc(50% - 10px);
        right: 5px;
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

.x-mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
  > div {
      scroll-snap-align: center;
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
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	border-radius:6px;
	display:inline-block;
	cursor:pointer;
	font-family:Arial;
	font-size:12px;
	font-weight:bold;
	padding: 5px 10px;
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
