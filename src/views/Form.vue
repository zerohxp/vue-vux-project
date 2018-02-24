<template>
  <div>
    <br>
     <divider> inline-x-number </divider>
    <div style="text-align:center;">
      <inline-x-number width="50px"></inline-x-number>
    </div>
    <br>
    <div style="text-align:center;">
      <inline-x-number width="50px" button-style="round"></inline-x-number>
    </div>
    <group>
      <cell title="在cell中使用">
        <inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
      </cell>
    </group>
    <br>
     <divider> number </divider>
     <group title="默认">
      <x-number name="数量" title="数量"></x-number>
    </group>

    <group title="监听">
      <x-number title="数量" :value="0" :min="0" @on-change="change2"></x-number>
    </group>

    <group title="设置宽度为100px">
      <x-number title="数量" width="100px"></x-number>
    </group>

    <group title="圆形按钮">
      <x-number title="数量" v-model="roundValue" button-style="round" :min="0" :max="5"></x-number>
    </group>

    <group title="设置步长为0.5">
      <x-number title="数量" :step="0.5"></x-number>
    </group>

    <group title="设置值为1，最小值为-5，最大值为8">
      <x-number title="数量" :min="-5" :max="8" :value="1"></x-number>
    </group>

    <group title="设置可以输入">
      <x-number :value="10" title="数量" fillable></x-number>
    </group>
    <br>
  <divider> radio </divider>
    <group title="default">
      <radio :options="radio001" @on-change="change"></radio>
    </group>

    <group title=" 默认值 China(禁用操作)">
      <radio :options="radio001" value="China" disabled></radio>
    </group>

    <group :title="'fill mode value is '+radio001Value">
      <radio :selected-label-style="{color: '#FF9900'}" fill-mode :options="radio001" v-model="radio001Value" @on-change="change"></radio>
    </group>

    <group title="fill mode with custom placeholder and label">
      <radio fill-mode fill-label="Other" fill-placeholder="填写其他的哦" :options="radio001" @on-change="change"></radio>
    </group>

    <group title="object options">
      <radio fill-mode fill-label="Other" fill-placeholder="other" :options="radio003" @on-change="change"></radio>
    </group>

    <group title="slot:each-item">
      <radio :options="radio001">
        <template slot-scope="props" slot="each-item"><!-- use scope="props" when vue < 2.5.0 -->
          <p>
            V{{ props.index + 1 }} <img src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" class="vux-radio-icon"> {{ props.label }}
          </p>
        </template>
      </radio>
    </group>
    <divider> range </divider>
    <group title="default range">
      <cell title="Default" :inline-desc="'value: '+data1" primary="content">
        <range v-model="data1" @on-change="onChange"></range>
      </cell>
      <cell title="allow decimals" :inline-desc="'value is: '+data2" primary="content">
        <range v-model="data2" decimal></range>
      </cell>
      <cell title="value=20" :inline-desc="'value is: '+data3" primary="content">
        <range v-model="data3"></range>
      </cell>
    </group>
    <group title="min and max">
      <cell title="min=8" :inline-desc="'value is: '+data4" primary="content">
        <range v-model="data4" :min="8"></range>
      </cell>
      <cell title="max=88" :inline-desc="'value is: '+data5" primary="content">
        <range v-model="data5" :max="88"></range>
      </cell>
      <cell title="min and max" :inline-desc="'value is: '+data6" primary="content">
        <range v-model="data6" :min="7" :max="77"></range>
      </cell>
      <cell title="change min and max" primary="content">
        <range v-model="dynamiValue" :min="min" :max="max" :step="step"></range>
      </cell>
      <cell title="current value" :value="dynamiValue + ''"></cell>
    </group>
    <br>
    <div style="margin:0 10px;">
      <x-button type="primary" @click.native="update">update min = {{min}}, max = {{max}} and step = {{step}}</x-button>
    </div>

    <group title="Step">
      <cell title="step=10" :inline-desc="'valus is: '+data7" primary="content">
        <range v-model="data7" :min="7" :max="77" :step="10"></range>
      </cell>
    </group>

    <group title="disabled">
      <cell title="disabled=true" :inline-desc="'valus is: '+data8" primary="content">
        <range v-model="data8" disabled></range>
      </cell>
      <cell title="Opacity" :inline-desc="'valus is: '+data8" primary="content">
        <range v-model="data8" disabled :disabled-opacity="0.1"></range>
      </cell>
    </group>

    <group title="bar height">
      <cell title="Line width" :inline-desc="'value is: '+data9" primary="content">
        <range v-model="data9" :range-bar-height="4"></range>
      </cell>
    </group>

    <group title="custom min and max html">
      <cell title="文字大小" :inline-desc="'font size: ' + data10" primary="content">
        <range v-model="data10" :min="12" :max="22" min-HTML="<span style='font-size:12px;'>小</span>" max-HTML="<span style='font-size:22px;'>大</span>"></range>
      </cell>
      <cell title="bcontentness" :inline-desc="'value is: ' + data11 + '%'" primary="content">
        <range v-model="data11" min-HTML="<span style='font-size:16px;color:#F90;'>☼</span>" max-HTML="<span style='font-size:30px;color:#F90;'>☼</span>"></range>
      </cell>
    </group>

    <group title="two way binding">
      <cell title="Default" primary="content">
        <range v-model="data12"></range>
      </cell>
      <cell title="Default" primary="content">
        <range v-model="data12"></range>
      </cell>
    </group>

    <group :title="'use v-show ' + 'data: ' + data13">
      <cell title="Default" primary="content">
        <range :step="10" v-model="data13" v-show="showData13"></range>
      </cell>
    </group>

    <br>
    <divider> search </divider>
    <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
    <divider>set value</divider>
    <search @on-submit="onSubmit" :auto-fixed="false" v-model="value2" @on-focus="onFocus" @on-cancel="onCancel"></search>
   <br>
    <search
    @result-click="resultClick"
    @on-change="getResult2"
    :results="results2"
    v-model="value3"
    position="absolute"
    auto-scroll-to-top top="46px"
    @on-focus="onFocus"
    @on-cancel="onCancel"
    @on-submit="onSubmit2"
    ref="search"></search>
     <group>
      <cell title="keyword">{{value3}}</cell>
    </group>
     <div style="padding:15px;">
      <x-button @click.native="setFocus" type="primary">set focus</x-button>
    </div>
    <br>
    <divider> address </divider>
    <group>
      <x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value6" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" inline-desc="可以设置placeholder" :show.sync="showAddress"></x-address>
      <cell title="上面value值" :value="value"></cell>
    </group>

    <div style="padding: 15px;">
      <x-address style="display:none;" popup-title="请选择地址" :title="title" v-model="value6" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>
      <x-button type="primary" @click.native="doShowAddress">单独控制显示(2s后关闭)</x-button>
    </div>

    <group>
    <x-address :title="title" @on-hide="logHide" v-model="value_0_1" :list="addressData" placeholder="请选择地址">
      <template slot="title" slot-scope="props"><!-- use scope="props" when vue < 2.5.0 -->
        <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
          <span class="demo-icon demo-icon-big" style="font-size:20px;vertical-align:middle;"></span>
          <span style="vertical-align:middle;">地址</span>
        </span>
      </template>
    </x-address>
    </group>

    <br>
    <group label-width="5em" label-align="left">
      <x-address :title="title2" v-model="value7" raw-value :list="addressData" value-text-align="left"></x-address>
    </group>
    <br/>
    <div style="padding: 0 15px;">
      <x-button type="primary" @click.native="changeData">改变数据（通过 id）</x-button>
      <x-button type="primary" @click.native="changeDataByLabels">改变数据（通过文字值）</x-button>
      <x-button type="primary" @click.native="changeDataByLabels2">改变数据（两级，通过文字值）</x-button>
    </div>
    <br/>

    <group>
      <x-address title="二级省市" v-model="value8" raw-value :list="addressData"></x-address>
    </group>
    <group>
      <x-address title="只显示省市" v-model="value4" raw-value :list="addressData" hide-district></x-address>
      <cell title="value值" :value="value4"></cell>
      <cell title="转换成文字值" :value="getName(value4)"></cell>
    </group>

    <br/>
    <group title="错误的地址将不能正确渲染到相应位置">
      <x-address title="错误的值" v-model="value5" raw-value :list="addressData" inline-desc="广东省, 深圳 市, 南山区"></x-address>
    </group>
    <br>
    <divider> circle </divider>
    <div class="vux-circle-demo">
    <br>
    <div style='width:150px;height:150px;'>
      <x-circle :percent="percent1" :stroke-width="10" stroke-color="#04BE02">
        <span>{{percent1}}</span>
      </x-circle>
    </div>
    <br>
    <div style='width:100px;height:100px;'>
      <x-circle :percent="percent1" :stroke-width="5" stroke-color="#04BE02">
        <span>{{percent1}}</span>
      </x-circle>
    </div>
    <br>
    <div style='width:50px;height:50px;'>
      <x-circle :percent="percent1" :stroke-width="5" stroke-color="#04BE02">
        <span>{{percent1}}</span>
      </x-circle>
    </div>
    <br>
    <div style="width:180px;">
      <range v-model="percent1" :min="0" :max="100"></range>
    </div>
    <br>
    <div style='width:100px;height:100px;'>
      <x-circle :percent="100" :stroke-width="3" stroke-color="#04BE02">
        <icon type="success"></icon>
      </x-circle>
    </div>
    <br>
    <div style='width:100px;height:100px;'>
      <x-circle :percent="percent2" :stroke-width="6" :trail-width="6" :stroke-color="strokeColor2" trail-color="#ececec">
        <span :style="{color: strokeColor2}">{{percent2}}%</span>
      </x-circle>
    </div>
  </div>
  <br>
  <divider> dialog </divider>
  <group>
      <x-switch v-model="show" title="显示/隐藏"></x-switch>
      <x-switch v-model="show2" title="使用 .sync"></x-switch>
      <x-switch v-model="showToast" title="显示 toast"></x-switch>
      <x-switch v-model="showHideOnBlur" title="点击遮罩自动关闭"></x-switch>
      <x-switch v-model="showDialogStyle" title="显示/隐藏" inline-desc="自定义 dialog 容器样式"></x-switch>
    </group>

    <div v-transfer-dom>
      <x-dialog v-model="showToast" class="dialog-demo">
        <div style="padding:15px;">
          <x-button @click.native="doShowToast" type="primary">show toast</x-button>
        </div>
        <div @click="showToast=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="show" class="dialog-demo">
        <div class="img-box">
          test
        </div>
        <div @click="show=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog :show.sync="show2" class="dialog-demo">
        <div class="img-box">
          test
        </div>
        <div @click="show2=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          test
        </div>
        <div @click="showHideOnBlur=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
        <p style="color:#fff;text-align:center;" @click="showDialogStyle = false">
          <span style="font-size:30px;">HELLO WORLD</span>
          <br>
          <br>
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </p>
      </x-dialog>
    </div>

    <group style="padding-top: 20px">
      <x-switch v-model="showScrollBox" title="很长很长的内容"></x-switch>
    </group>

    <div v-transfer-dom>
      <x-dialog v-model="showScrollBox" class="dialog-demo">
        <p class="dialog-title">Long content</p>
        <div class="img-box" style="height:100px;padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;">
          <p v-for="i in 20">{{i}}</p>
        </div>
        <div @click="showScrollBox=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <br>
  <divider> img </divider>
  <div v-for="src in imglist" style="background-color:yellow;text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div>
  <br>
  <divider> input </divider>
    <group title="禁用内置验证及显示成功或者错误样式">
      <x-input title="禁用验证" placeholder="I'm placeholder" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur" placeholder-align="right"></x-input>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="iconType = 'success'" type="primary"> set success</x-button>
      <x-button @click.native="iconType = 'error'" type="primary"> set error</x-button>
      <x-button @click.native="iconType = ''" type="primary"> set empty</x-button>
    </div>

    <group title="is-type传入function">
      <x-input title="必须输入2333" :is-type="be2333" placeholder="I'm placeholder"></x-input>
    </group>

    <group title="mask">
      <x-input title="手机号码格式化" mask="999 9999 9999" v-model="maskValue" :max="13" is-type="china-mobile"></x-input>
      <cell title="value" :value="maskValue"></cell>
      <x-input title="(99) 9-99" mask="(99) 9-99" v-model="maskValue2" :max="9"></x-input>
    </group>

    <group title="使用icon代替title">
      <x-input title="必须输入2333" :is-type="be2333" placeholder="I'm placeholder">
        <img slot="label" style="padding-right:10px;display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-input>
    </group>

    <group title="max is alias to maxlength">
      <x-input title='max=5' :max="5" @on-change="change" v-model="maxValue"></x-input>
    </group>

    <group title="debounce = 1000">
      <x-input title='debounce' :debounce="500" @on-change="change2" v-model="debounceValue"></x-input>
    </group>

    <group title="disabled">
      <x-input title='value' disabled v-model="disabledValue"></x-input>
    </group>

    <group title="set type = tel">
      <x-input title='value' type="tel"></x-input>
    </group>


    <group title="html title">
      <x-input label-width="4em" :title='`<span style="${style}">hello</span>`' placeholder="I'm placeholder"></x-input>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="style = 'color:red;'" type="primary">set red</x-button>
      <x-button @click.native="style = 'color:green'" type="primary">set green</x-button>
      <x-button @click.native="style = 'color:#000'" type="primary">set default</x-button>
    </div>

    <group title="Default">
      <x-input title="message" placeholder="I'm placeholder"></x-input>
    </group>

    <group title="不显示清除按钮">
      <x-input title="message" required placeholder="I'm placeholder" :show-clear="false" autocapitalize="characters"></x-input>
    </group>

    <group title="focus事件">
      <x-input title="focus-handler" placeholder="focus me!" :show-clear="true" @on-focus="onFocus2"></x-input>
    </group>

    <group title="set is-type=china-name">
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
    </group>

    <group title="set keyboard=number and is-type=china-mobile">
      <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>

    <group title="set is-type=email">
      <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
    </group>

    <group title="set min=2 and max=5">
      <x-input title="2-5个字符" placeholder="" :min="2" :max="5"></x-input>
    </group>

    <group title="确认输入">
      <x-input title="请输入6位数字" type="text" placeholder="" v-model="password" :min="6" :max="6" @on-change="change2"></x-input>
      <x-input title="请确认6位数字" v-model="password2" type="text" placeholder="" :equal-with="password"></x-input>
    </group>

    <group title="enter事件">
      <x-input title="输入完成后回车" type="text" placeholder="" v-model="enterText"
        @on-enter="onEnter"></x-input>
    </group>

    <group title="验证码" class="weui-cells_form">
      <x-input title="验证码" class="weui-cell_vcode">
        <img slot="right" class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg">
      </x-input>
      <x-input title="发送验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
    </group>

    <group title="check if value is valid when required===true">
      <x-input title="message" placeholder="I'm placeholder" ref="input01" required></x-input>
      <cell title="click to get valid value" :value="'$valid value:' + valid1" @click.native="getValid1"></cell>
    </group>

     <group title="check if value is valid when required===false">
      <x-input title="message" placeholder="I'm placeholder" :required="false" ref="input02" @click.native="getValid2"></x-input>
      <cell title="click to get valid value" :value="'$valid value:' + valid2" @click.native="getValid2"></cell>
    </group>

     <br>
     <divider> progress </divider>
     <x-progress :percent="60" :show-cancel="false"></x-progress>
      <br>
     <divider> Table </divider>
     <div style="padding:0 15px;">
      <x-table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
          </tr>
        </tbody>
      </x-table>
     <br>
      <x-table :cell-bordered="false" style="background-color:#fff;">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
            <td> x 1</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td> x 2</td>
          </tr>
        </tbody>
      </x-table>
       <br>
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: #F7F7F7">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
            <td> x 1</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
            <td> x 2</td>
          </tr>
        </tbody>
      </x-table>
       <br>
      <x-table full-bordered style="background-color:#fff;">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple</td>
              <td colspan="2">$1.25 x 10</td>
            </tr>
            <tr>
              <td>Banana</td>
              <td>$1.20</td>
              <td>x 08</td>
            </tr>
          </tbody>
        </x-table>
    </div>
     <br>
     <divider> textarea </divider>
     <group>
      <x-textarea :max="20" placeholder="提示" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
    </group>
    <group title="和input一起使用">
      <x-input placeholder="标题"></x-input>
      <x-textarea :max="200" name="description" placeholder="提示"></x-textarea>
    </group>
    <group title="不显示计数器">
      <x-textarea :max="200" name="detail" placeholder="提示" :show-counter="false"></x-textarea>
    </group>
    <group title="自动高度">
      <x-textarea placeholder="随便写点什么" :show-counter="false" :rows="1" autosize></x-textarea>
      <x-textarea title="标题" placeholder="随便写点什么" :show-counter="false" :rows="1" autosize></x-textarea>
    </group>
    <group title="设置高度为200像素">
      <x-textarea title="标题" :max="200" placeholder="提示" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
    </group>
</div>
</template>


<script>
import { XTextarea, XTable, XProgress, XNumber, XInput, XImg, Group, Cell, InlineXNumber, Radio, XButton, Range, GroupTitle, Search, Divider, XAddress, ChinaAddressV4Data, Value2nameFilter as value2name, XCircle, Icon, XDialog, XSwitch, TransferDomDirective as TransferDom } from 'vux'

export default {
  ready () {
    setInterval(this.update2, 2000)
  },
  directives: {
    TransferDom
  },
  components: {
    Group,
    Cell,
    InlineXNumber,
    Radio,
    XButton,
    Range,
    GroupTitle,
    Search,
    Divider,
    XAddress,
    Icon,
    XCircle,
    XDialog,
    XSwitch,
    XImg,
    XInput,
    XNumber,
    XProgress,
    XTable,
    XTextarea
  },
  mounted () {
    setTimeout(() => {
      this.showData13 = true
    }, 2000)
  },
  data () {
    return {
      radio001: [ 'China', 'Japan' ],
      radio001Value: 'China',
      radio002Value: 'Japan',
      radio003: [{
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '001',
        value: 'radio001'
      }, {
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '002',
        value: 'radio002'
      }],
      data1: 0,
      data2: 0,
      data3: 20,
      data4: 18,
      data5: 28,
      data6: 37,
      data7: 17,
      data8: 25,
      data9: 50,
      data10: 14,
      data11: 30,
      data12: 0,
      data13: 10,
      showData13: false,
      min: 0,
      max: 100,
      step: 1,
      dynamiValue: 0,
      results: [],
      autoFixed: false,
      value: '',
      value1: 'hello',
      value2: 'vux',
      results2: [],
      value3: 'test',
      title: '默认为空',
      value_0_1: [],
      value6: [],
      title2: '设置值',
      value7: ['天津市', '市辖区', '和平区'],
      value8: ['广东省', '中山市', '--'],
      addressData: ChinaAddressV4Data,
      value4: [],
      value5: ['广东省', '深圳市', '南山区'],
      showAddress: false,
      percent1: 10,
      percent2: 30,
      strokeColor2: '#3FC7FA',
      show: false,
      show2: false,
      showToast: false,
      showHideOnBlur: false,
      showScrollBox: false,
      showDialogStyle: false,
      imglist: [
        'https://o5omsejde.qnssl.com/demo/test1.jpg',
        'https://o5omsejde.qnssl.com/demo/test2.jpg',
        'https://o5omsejde.qnssl.com/demo/test0.jpg',
        'https://o5omsejde.qnssl.com/demo/test4.jpg',
        'https://o5omsejde.qnssl.com/demo/test5.jpg'
      ],
      password: '123465',
      password2: '',
      enterText: '',
      valid1: false,
      valid2: false,
      iconType: '',
      be2333: function (value) {
        return {
          valid: value === '2333',
          msg: 'Must be 2333'
        }
      },
      style: '',
      disabledValue: 'hello',
      debounceValue: '',
      maxValue: '',
      maskValue: '13545678910',
      maskValue2: '',
      roundValue: 0
    }
  },
  methods: {
    change (value, label) {
      console.log('change:', value, label)
    },
    onChange (val) {
      console.log('change', val)
    },
    update () {
      this.min = Math.floor(Math.random() * 30)
      this.max = Math.floor(50 + Math.random() * 100)
      this.step = 1 + Math.floor(Math.random() * 10)
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit (val) {
      window.alert('on submit' + val)
    },
    onCancel () {
      console.log('on cancel')
    },
    onFocus () {
      console.log('on focus')
    },
    getResult2 (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value3) : []
    },
    onSubmit2 () {
      this.$refs.search.setBlur()
    },
    setFocus () {
      this.$refs.search.setFocus()
    },
    doShowAddress () {
      this.showAddress = true
      setTimeout(() => {
        this.showAddress = false
      }, 2000)
    },
    onShadowChange (ids, names) {
      console.log(ids, names)
    },
    changeData () {
      this.value7 = ['430000', '430400', '430407']
    },
    changeDataByLabels () {
      this.value7 = ['广东省', '广州市', '天河区']
    },
    changeDataByLabels2 () {
      this.value7 = ['广东省', '中山市', '--']
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    },
    doShowToast () {
      this.$vux.toast.show({
        text: 'toast'
      })
    },
    success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    },
    getValid1 () {
      this.valid1 = this.$refs.input01.valid
    },
    getValid2 () {
      this.valid2 = this.$refs.input02.valid
    },
    change2 (val) {
      console.log('on change', val)
    },
    onBlur (val) {
      console.log('on blur', val)
    },
    onFocus2 (val, $event) {
      console.log('on focus', val, $event)
    },
    onEnter (val) {
      console.log('click enter!', val)
    },
    onEvent (event) {
      console.log('on', event)
    }
  }
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
<style  lang="less" scoped>
@import '../assets/css/close.less';
p {
  padding: 10px 15px;
  font-size: 14px;
  color: #888;
}
.dialog-demo {
  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color: yellow;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
</style>