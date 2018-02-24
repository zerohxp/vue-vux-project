<template>
  <div>
    <group>
      <x-switch title="显示" v-model="show"></x-switch>
    </group>
    <div>
      <alert v-model="show" title="恭喜" @on-show="onShow" @on-hide="onHide"> 消息已成功发送</alert>
    </div>

    <group title="Prop: content">
      <x-switch title="显示" v-model="show2"></x-switch>
    </group>
    <div>
      <alert v-model="show2" title="恭喜" content="消息已成功发送"></alert>
    </div>

    <group title="Use as a module">
      <cell title="显示" @click.native="showModule" is-link></cell>
      <cell title="3秒后关闭" @click.native="showModuleAuto" is-link></cell>
    </group>
  </div>
</template>


<script>
import { AlertModule, Alert, Group, XSwitch, Cell } from 'vux'

export default {
  components: {
    Alert,
    Group,
    XSwitch,
    Cell
  },
  data () {
    return {
      show: false,
      show1: false,
      show2: false
    }
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    showModule () {
      AlertModule.show({
        title: 'VUX is Cool',
        content: '你同意么',
        onShow () {
          console.log('Module: I\'m showing')
        },
        onHide () {
          console.log('Module: I\'m hiding now')
        }
      })
    },
    showModuleAuto () {
      this.showModule()
      setTimeout(() => {
        AlertModule.hide()
      }, 3000)
    }
  }
}
</script>
