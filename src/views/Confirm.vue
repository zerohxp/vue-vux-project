<template>
  <div>
    <group>
      <x-switch title="显示" v-model="show"></x-switch>
    </group>
    <group>
      <x-switch title="显示Prompt" v-model="show3"></x-switch>
    </group>
    <group>
      <x-switch title="设置默认输入文字" v-model="show5"></x-switch>
    </group>
    <group>
      <x-switch title="安卓风格" v-model="show2"></x-switch>
    </group>
    <group>
      <x-switch title="阻止自动关闭" v-model="show4"></x-switch>
    </group>
    <div v-transfer-dom>
      <confirm v-model="show"
      title="操作提示"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">Are you sure?</p>
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show3"
      show-input
      title="操作提示"
      :input-attrs="{type: 'number'}"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show5"
      show-input
      ref="confirm5"
      title="操作提示"
      @on-cancel="onCancel"
      @on-confirm="onConfirm5"
      @on-show="onShow5"
      @on-hide="onHide">
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show2"
      title="操作提示"
      theme="android"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">I miss u sunyi</p>
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm
      v-model="show4"
      :close-on-confirm="false"
      title="操作提示"
      @on-confirm="onConfirm4">
        <p style="text-align:center;">Are you sure?</p>
      </confirm>
    </div>
   
  </div>
</template>

<script>
import { Confirm, Group, XSwitch, XButton, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Confirm,
    Group,
    XSwitch,
    XButton
  },
  data () {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    }
  },
  methods: {
    onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      console.log('on confirm')
      if (msg) {
        alert(msg)
      }
    },
    onConfirm4 () {
      console.log('on confirm')
      this.$vux.loading.show({
        transition: '',
        text: 'processing'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.show4 = false
      }, 1000)
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    onShow5 () {
      this.$refs.confirm5.setInputValue('default')
    },
    onConfirm5 (value) {
      this.$refs.confirm5.setInputValue('')
    }
  }
}
</script>
