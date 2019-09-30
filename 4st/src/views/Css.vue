<template>
  <div class="sooyoon">
    <div>display block</div>
    <div>
      <span>ab</span>
      <span>bcd</span>
      <span>cdefg</span>
    </div>
    <h4>
      <div class="sooyoon2">
        <div class="ca">a</div>
        <div class="cb">b</div>
        <div class="cc">c</div>
        <div class="cd">
          d
          <div class="dd">dd</div>
        </div>
      </div>
    </h4>
  </div>
</template>

<style lang="scss" scoped>
.sooyoon {
  margin: 5px;
  padding: 5px;
  border: 20px solid purple !important;
}

.sooyoon2 {
  overflow: hidden;
  overflow-x: scroll;
  width: 100vw;
  height: 100vh;
}

.sooyoon2 {
  position: relative;
  div {
    // display: inline-block;
    width: 10vw;
    height: 10vw;
    border: 2px solid red;
    position: absolute;
    &.ca{
      border: 1px solid gray;
      background-color: aquamarine;
    }
    &.cb {
      border: 1px solid blue;
      top: 10px;
      left: 10px;
      background-color: green;
    }
    &.cc {
      border: 1px solid gray;
      top: 20px;
      left: 20px;
      background-color: black;
    }
    &.cd {
      border: 1px solid blue;
      top: calc(10px * 3);
      left: 30px;
      background-color: yellow;

      .dd {
        width: 8vw;
        height: 8vh;
        border: 1px solid blue;
        top: calc(10px * 3);
        left: 30px;
        background-color: blueviolet;
      }
    }
  }
}


</style>