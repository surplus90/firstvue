<template>
    <div>
        <div>
            <div class="ba-1 header">HEADER</div>
            <div class="body">
                <div class="ba-1 scroll-x">
                    <div class="ba-1 box-1-sm">1</div>
                    <div class="ba-1 box-1-sm">2</div>
                    <div class="ba-1 box-1-sm">3</div>
                    <div class="ba-1 box-1-sm">4</div>
                    <div class="ba-1 box-1-sm">5</div>
                    <div class="ba-1 box-1-sm">6</div>
                </div>
                <div class="ba-1 scroll-x">
                    <div class="ba-1 box-1-sm">1</div>
                    <div class="ba-1 box-1-sm">2</div>
                    <div class="ba-1 box-1-sm">3</div>
                    <div class="ba-1 box-1-sm">4</div>
                    <div class="ba-1 box-1-sm">5</div>
                    <div class="ba-1 box-1-sm">6</div>
                </div>
                <div class="ba-1 scroll-x">
                    <div class="ba-1 box-1-sm">
                        <div class="texto-vertical">HEADER1</div>
                        <div></div>
                    </div>
                    <div class="ba-1 box-1-sm">
                        <div class="texto-vertical">HEADER2</div>
                        <div></div>
                    </div>
                </div>
                <div class="ba-1"></div>
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

.box-1 {
    height: 100px;
}

.box-1-sm {
    width: 80vw;
    height: 100px;
    display: inline-block;
}

.scroll-x {
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
}

.texto-vertical {
    border: 1px dotted black;
    height: 100%;
    font-size: x-small;
    writing-mode: vertical-rl;
    text-orientation: upright;
}

</style>