<template>
  <div>
    <group title="single column" label-width="5em">
      <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择"></popup-picker>
      <popup-picker popup-title="请选择" :title="title1" :data="list1" v-model="value1_1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择">
        <template slot="title" slot-scope="props"><!-- use scope="props" when vue < 2.5.0 -->
          <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
            <span class="demo-icon demo-icon-big" style="font-size:20px;vertical-align:middle;"></span>
            <span style="vertical-align:middle;">手机</span>
          </span>
        </template>
      </popup-picker>
    </group>
    <br>
    <div class="picker-buttons">
       <x-button type="primary" @click.native="value1=[]">将值置为空</x-button>
       <x-button type="primary" @click.native="changeList10">重新赋值列表</x-button>
       <x-button type="primary" @click.native="changeList11">push方式更改列表</x-button>
     </div>
     <group title="double columns">
       <popup-picker :title="title2" :data="list2" v-model="value2"></popup-picker>
     </group>
     <br>

     <group title="chained columns">
       <popup-picker :title="title3" :data="list3" :columns="3" v-model="value3" ref="picker3"></popup-picker>
       <cell title="获取值对应的文字" :value="$refs.picker3&&$refs.picker3.getNameValues()"></cell>
       <popup-picker :title="title4" :data="list3" :columns="3" v-model="value4" show-name></popup-picker>
     </group>

     <br>
     <div class="picker-buttons">
       <x-button type="primary" @click.native="changeList21">push方式更改列表</x-button>
     </div>

     <br>
     <divider>Control the visibility of popup-picker</divider>
     <div style="margin: 0 15px;">
       <x-button @click.native="showPopupPicker = true" type="primary">Show PopupPicker. value: {{value5 }}</x-button>
     </div>
     <group>
       <popup-picker :show.sync="showPopupPicker" :show-cell="false" title="TEST" :data="[['1', '2', '3', '4', '5']]" v-model="value5"></popup-picker>
     </group>

     <br>
     <group title="隐藏时不影响其他popup-picker的mask">
       <x-switch title="ishide popup-picker" v-model="switch6"></x-switch>
       <popup-picker v-if="!switch6" title="显示值" :data="['我不会影响遮罩层'.split('')]" v-model="value6"></popup-picker>
     </group>

     <br>
     <br>

     <group title="显示格式化">
      <popup-picker title="时间" :inline-desc="`当前值[${formatDemoValue}]`"v-model="formatDemoValue" :data="[['01','02','03'],['11','12','13']]" :display-format="format"></popup-picker>
     </group>

     <group>
      <popup-radio title="options" :options="options1" v-model="option1"></popup-radio>
    </group>

    <group>
      <popup-radio title="options" :options="options2" v-model="option2" placeholder="placeholder"></popup-radio>
    </group>

    <group>
      <popup-radio title="options" :options="options3" v-model="option3">
        <p slot="popup-header" class="vux-1px-b demo3-slot">Please select</p>
      </popup-radio>
    </group>

    <group>
      <popup-radio title="readonly" readonly :options="options3" v-model="option4">
        <p slot="popup-header" class="vux-1px-b demo3-slot">Please select</p>
      </popup-radio>
    </group>

    <group>
      <popup-radio title="slot:each-item" :options="options3" v-model="option5">
        <template slot-scope="props" slot="each-item"><!-- use scope="props" when vue < 2.5.0 -->
          <p>
            custom item <img src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" class="vux-radio-icon"> {{ props.label }}
            <br>
            <span style="color:#666;">{{ props.index + 1 }} another line</span>
          </p>
        </template>
      </popup-radio>
    </group>

    <group>
      <x-switch title="Default popup" v-model="show"></x-switch>
      <x-switch title="Full popup" v-model="show1"></x-switch>
      <x-switch title="Multi popup (first)" v-model="show3"></x-switch>
      <x-switch title="Mask disable" v-model="show5"></x-switch>
      <x-switch title="Popup address" v-model="show6"></x-switch>
      <x-switch title="default max-height=100%" v-model="show12"></x-switch>
      <x-switch title="set max-height=50%" v-model="show13"></x-switch>
    </group>
    
    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
        <div class="popup0">
          <group>
            <x-switch title="Another XSwitcher" v-model="show"></x-switch>
            <x-switch title="Show Toast" v-model="showToast"></x-switch>
          </group>
        </div>
      </popup>
    </div>

    <toast v-model="showToast">You did it!</toast>
    
    <div v-transfer-dom>
      <popup v-model="show1" height="100%">
        <div class="popup1">
          <group>
            <x-switch title="Another XSwitcher" v-model="show1"></x-switch>
          </group>
        </div>
      </popup>
    </div>
    
    <div v-transfer-dom>
      <popup v-model="show3">
        <div class="popup2">
          <group>
            <x-switch title="Multi Popup (first)" v-model="show3"></x-switch>
            <x-switch title="Multi Popup (second)" v-model="show4"></x-switch>
          </group>
          this is the first popup
        </div>
      </popup>
    </div>
    
    <div v-transfer-dom>
      <popup v-model="show4">
        <div class="popup2">
          <group>
            <x-switch title="Multi Popup (second)" v-model="show4"></x-switch>
          </group>
          this is the second popup
        </div>
      </popup>
    </div>
    
    <div v-transfer-dom>
      <popup v-model="show5" :hide-on-blur=false>
        <div class="popup2">
          <group>
            <x-switch title="Mask disable" v-model="show5"></x-switch>
          </group>
          The mask cannot be clicked!
        </div>
      </popup>
    </div>
    
    <div v-transfer-dom>
      <popup v-model="show6">
        <div class="popup1">
          <group>
            <x-switch title="Popup address" v-model="show6"></x-switch>
          </group>
          <group>
            <x-address :title="title6" v-model="value66" :list="addressData" placeholder="请选择地址" inline-desc="可以设置placeholder" :popup-style="{zIndex: 502}"></x-address>
          </group>
        </div>
      </popup>
    </div>

    <group>
      <x-switch title="transparent background" v-model="show7"></x-switch>
    </group>
    
    <div v-transfer-dom>
      <popup v-model="show7" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
         <group>
          <cell title="Product" value="Donate"></cell>
          <cell title="Total" value="$10.24"></cell>
         </group>
         <div style="padding:20px 15px;">
          <x-button type="primary">Pay</x-button>
          <x-button @click.native="show7 = false">Cancel</x-button>
         </div>
        </div>
      </popup>
    </div>

    <group title="set position">
      <x-switch title="left(100% width)" v-model="show8"></x-switch>
      <x-switch title="right" v-model="show9"></x-switch>
      <x-switch title="top(no mask)" v-model="show10"></x-switch>
      <x-switch title="bottom" v-model="show11"></x-switch>
    </group>

    <div v-transfer-dom>
      <popup v-model="show8" position="left" width="100%">
        <div class="position-horizontal-demo">
          <span class="vux-close" @click="show8 = false"></span>
        </div>
      </popup>
    </div>
    
    <div v-transfer-dom>
      <popup v-model="show9" position="right">
        <div style="width:200px;">
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <popup v-model="show10" position="top" :show-mask="false">
        <div class="position-vertical-demo">
        I'm on top. Hide in 1s.
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <popup v-model="show11" position="bottom">
        <div class="position-vertical-demo">
        I'm on bottom.
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <popup v-model="show12" position="bottom">
        <group>
          <cell v-for="i in 20" :key="i" :title="i"></cell>
        </group>
        <div style="padding: 15px;">
          <x-button @click.native="show12 = false" plain type="primary"> Close Me </x-button>
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <popup v-model="show13" position="bottom" max-height="50%">
        <group>
          <cell v-for="i in 20" :key="i" :title="i"></cell>
        </group>
        <div style="padding: 15px;">
          <x-button @click.native="show13 = false" plain type="primary"> Close Me </x-button>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { TransferDom, Popup, Toast, XAddress, ChinaAddressData, PopupRadio, PopupPicker, Group, Cell, Picker, XButton, Divider, XSwitch } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    PopupPicker,
    Group,
    Picker,
    XButton,
    Divider,
    Cell,
    XSwitch,
    PopupRadio,
    Popup,
    Toast,
    XAddress
  },
  methods: {
    onChange (val) {
      console.log('val change', val)
    },
    changeList10 () {
      this.list1 = [['小米1', 'iPhone1', '华为1', '情怀1', '三星1', '其他1', '不告诉你1']]
    },
    changeList11 () {
      this.list1[0].push('我是push条目')
    },
    changeList20 () {

    },
    changeList21 () {
      this.list3.push({
        name: '美国002_007',
        value: '0007',
        parent: 'usa002'
      })
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    },
    log (str) {
      console.log(str)
    }
  },
  data () {
    return {
      title1: '手机机型',
      title2: '详细机型',
      title3: '联动显示值',
      title4: '联动显示文字',
      list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
      list2: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你'], ['小米1', 'iPhone2', '华为3', '情怀4', '三星5', '其他6', '不告诉你7']],
      list3: [{
        name: '中国',
        value: 'china',
        parent: 0
      }, {
        name: '美国',
        value: 'USA',
        parent: 0
      }, {
        name: '广东',
        value: 'china001',
        parent: 'china'
      }, {
        name: '广西',
        value: 'china002',
        parent: 'china'
      }, {
        name: '美国001',
        value: 'usa001',
        parent: 'USA'
      }, {
        name: '美国002',
        value: 'usa002',
        parent: 'USA'
      }, {
        name: '广州',
        value: 'gz',
        parent: 'china001'
      }, {
        name: '深圳',
        value: 'sz',
        parent: 'china001'
      }, {
        name: '广西001',
        value: 'gx001',
        parent: 'china002'
      }, {
        name: '广西002',
        value: 'gx002',
        parent: 'china002'
      }, {
        name: '美国001_001',
        value: '0003',
        parent: 'usa001'
      }, {
        name: '美国001_002',
        value: '0004',
        parent: 'usa001'
      }, {
        name: '美国002_001',
        value: '0005',
        parent: 'usa002'
      }, {
        name: '美国002_002',
        value: '0006',
        parent: 'usa002'
      }],
      value1: ['iPhone'],
      value1_1: ['iPhone'],
      value2: ['iPhone', '华为3'],
      value3: [],
      value4: [],
      showPopupPicker: false,
      value5: ['2'],
      switch6: false,
      value6: [],
      formatDemoValue: ['01', '12'],
      format: function (value, name) {
        return `${value[0]}:${value[1]}`
      },
      option1: 'A',
      options1: ['A', 'B', 'C'],
      option2: '',
      options2: [{
        key: 'A',
        value: 'label A'
      }, {
        key: 'B',
        value: 'label B'
      }],
      option3: 'C',
      options3: ['A', 'B', 'C'],
      option4: 'B',
      option5: 'B',
      addressData: ChinaAddressData,
      show: false,
      show1: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      title6: '默认空的',
      value66: [],
      show7: false,
      showToast: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      show12: false,
      show13: false
    }
  },
  watch: {
    show10 (val) {
      if (val) {
        setTimeout(() => {
          this.show10 = false
        }, 1000)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/close.less';
.picker-buttons {
  margin: 0 15px;
}
.demo3-slot {
  text-align: center;
  padding: 8px 0;
  color: #888;
}
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
.popup2 {
  padding-bottom:15px;
  height:400px;
}
.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}
.position-horizontal-demo {
  position: relative;
  height: 100%;
  .vux-close {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
}
</style>
