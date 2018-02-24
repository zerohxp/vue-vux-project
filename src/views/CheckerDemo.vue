<template>
  <div style="padding: 15px 0;">
    <divider>单选，默认不选中任何项</divider>
    <div class="box">
      <checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
      <checker-item value="1">潘</checker-item>
      <checker-item value="2">闲</checker-item>
      <checker-item value="3">邓</checker-item>
      <checker-item value="4">小</checker-item>
      <checker-item value="5">驴</checker-item>
      </checker>
      <br>
      <span>当前值为: {{ demo1 }}</span>
      <br>
    </div>

    <divider>radioRequired</divider>
    <div class="box">
      <checker v-model="demo1Required" radio-required default-item-class="demo1-item" selected-item-class="demo1-item-selected">
      <checker-item value="1">潘</checker-item>
      <checker-item value="2">闲</checker-item>
      <checker-item value="3">邓</checker-item>
      <checker-item value="4">小</checker-item>
      <checker-item value="5">驴</checker-item>
      </checker>
      <br>
      <span>当前值为: {{ demo1Required }}</span>
      <br>
    </div>

    <divider>单选：object类型</divider>
    <div class="box">
      <checker v-model="demo11" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
      </checker>
      <br>
      <span>当前值为: {{demo11}}</span>
      <br>
      <br>
      <checker v-model="demo12" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
      </checker>
      <br>
      <span>当前值为: {{demo12}}</span>
      <br>
    </div>

    <divider>多选：object类型</divider>
    <div class="box">
      <checker v-model="demo21" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
      </checker>
      <br>
      <span>当前值为: {{demo21}}</span>
      <br>
      <br>
      <checker v-model="demo22" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
      </checker>
      <br>
      <span>当前值为: {{demo22}}</span>
       <br>
      <br>
      <checker v-model="demo23" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected" :max="2">
        <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
      </checker>
      <br>
      <span>当前值为: {{demo23}}</span>
      <br>
    </div>


    <divider>多选</divider>
    <div class="box">
       <checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="1">白</checker-item>
        <checker-item :value="2">富</checker-item>
        <checker-item :value="3">美</checker-item>
      </checker>
      <br>
      <span>当前值为: {{demo1Checkbox}}</span>
      <br>
    </div>

    <divider>多选，最多只能选2个</divider>
    <div class="box">
      <checker v-model="demo1CheckboxMax" :max="2" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item value="1">1</checker-item>
        <checker-item value="2">2</checker-item>
        <checker-item value="3">3</checker-item>
      </checker>
      <br>
      <span>当前值为: {{demo1CheckboxMax}}</span>
      <br>
    </div>

    <divider>默认值 2</divider>
    <div class="box">
      <checker v-model="demo2" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
        <checker-item value="1">1</checker-item>
        <checker-item value="2">2</checker-item>
        <checker-item value="3">3</checker-item>
      </checker>
      <br>
      <span>当前值为: {{demo2}}</span>
      <br>
    </div>

    <divider>自定义样式</divider>
    <div class="box">
       <checker v-model="demo3" default-item-class="demo3-item" selected-item-class="demo3-item-selected">
        <checker-item value="one">
          <img src="http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff" alt="">
        </checker-item>
        <checker-item value="two">
          <img src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff" alt="">
        </checker-item>
        <checker-item value="three">
          <img src="http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff" alt="">
        </checker-item>
      </checker>
      <br>
      <span>当前值为: {{demo3}}</span>
      <br>
    </div>

    <divider>Popup 组件中使用</divider>
    <group>
      <cell title="选择颜色" :value="demo4" is-link @click.native="showPopup=true"></cell>
    </group>
    <div v-transfer-dom>
      <popup v-model="showPopup" class="checker-popup">
        <div style="padding:10px 10px 40px 10px;">
          <p style="padding: 5px 5px 5px 2px;color:#888;">Colors</p>
          <checker
          v-model="demo4"
          default-item-class="demo4-item"
          selected-item-class="demo4-item-selected"
          disabled-item-class="demo4-item-disabled">
            <checker-item value="Red" @on-item-click="onItemClick">花跟叶</checker-item>
            <checker-item value="Blue" @on-item-click="onItemClick">鸟与树 </checker-item>
            <checker-item value="Green" @on-item-click="onItemClick">我和你</checker-item>
            <checker-item value="Yellow" disabled @on-item-click="onItemClick"> 全套礼品装 </checker-item>
          </checker>
        </div>
      </popup>
    </div>

    <divider>单选常见例子 {{demo5}}</divider>
    <checker
    v-model="demo5"
    default-item-class="demo5-item"
    selected-item-class="demo5-item-selected">
      <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">￥{{i*300}}</checker-item>
    </checker>
    <br/>
    <divider>多选常见例子 {{demo6}}</divider>
    <checker
    v-model="demo6"
    type="checkbox"
    default-item-class="demo5-item"
    selected-item-class="demo5-item-selected">
      <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">{{['好', '很好','特别好'][i - 1]}}</checker-item>
    </checker>
  </div>
</template>

<script>
import { Checker, CheckerItem, Divider, Group, Cell, Popup, TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Checker,
    CheckerItem,
    Divider,
    Group,
    Cell,
    Popup
  },
  mounted () {},
  methods: {
    onItemClick (value, disabled) {
      console.log(value, disabled)
      if (!this.disabled) {
        this.showPopup = false
      }
    }
  },
  data () {
    return {
      items1: [{
        key: '1',
        value: 'A'
      }, {
        key: '2',
        value: 'B'
      }, {
        key: '3',
        value: 'C'
      }],
      demo1: '',
      demo1Required: '',
      demo11: null,
      demo12: {key: '2', value: 'B'},
      demo21: null,
      demo22: [{key: '2', value: 'B'}],
      demo23: null,
      demo1Checkbox: [2, 1],
      demo1CheckboxMax: ['2', '3'],
      demo2: '2',
      demo3: '',
      demo4: 'Red',
      showPopup: false,
      demo5: 1,
      demo6: [2, 3]
    }
  }
}
</script>

<style scoped>
.box {
  padding: 0 15px;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.demo2-item {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
.demo2-item-selected {
  border-color: green;
}
.demo3-item {
  padding: 5px 5px;
  font-size: 0;
}
.demo3-item-selected {
  outline: 1px solid #8B8AEE;
}
.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}
.demo4-item-selected {
  background-color: #FF3B3B;
  color: #fff;
}
.demo4-item-disabled {
  color: #999;
}
.demo5-item {
  width: 100px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  background: #ffffff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTZDOEJBQ0E3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTZDOEJBQ0I3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNkM4QkFDODc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNkM4QkFDOTc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnMGp3kAAAAJUExURf9KAP///////4Jqdw0AAAADdFJOU///ANfKDUEAAAAuSURBVHjaTMpBDgAABAPB5f+PlhLUpZMWuQcYMWLEyDN4ymqa5KS4+3G+KAEGACQmAGlKzr56AAAAAElFTkSuQmCC)  no-repeat right bottom;
  border-color: #ff4a00;
}
</style>
