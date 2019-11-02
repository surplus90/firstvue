<template>
    <div>
        <div>
            <header class="bd-charcoal ps-r hp-50 lh-50px ta-c">
                <button class="ps-a ps-m btn-bd" style="left: 3px;" @click="isModal=true">modal</button>
                HEADER
            </header>
            <section class="custom-section">
                <div class="box-1 scroll-x x-mandatory-scroll-snapping">
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
                <div style="height: 150px;">
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