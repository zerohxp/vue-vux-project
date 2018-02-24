<template>
  <div>
    <group>
      <cell title="合计" value="￥1024"></cell>
      <cell-form-preview :list="list"></cell-form-preview>
    </group>

     <form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list2" :footer-buttons="buttons1"></form-preview>
    <br>
    <form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list2" :footer-buttons="buttons2" name="demo"></form-preview>
    <br>
    <form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list2"></form-preview>
  </div>
</template>


<script>
import { CellFormPreview, Group, Cell, FormPreview } from 'vux'

export default {
  components: {
    CellFormPreview,
    Group,
    Cell,
    FormPreview
  },
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      list2: [{
        label: '商品',
        value: '电动打蛋机'
      }, {
        label: '标题标题',
        value: '名字名字名字'
      }, {
        label: '标题标题',
        value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
      }],
      buttons1: [{
        style: 'default',
        text: '辅助操作'
      }, {
        style: 'primary',
        text: '跳转到首页',
        link: '/'
      }],
      buttons2: [{
        style: 'primary',
        text: '点击事件',
        onButtonClick: (name) => {
          alert(`clicking ${name}`)
        }
      }]
    }
  }
}
</script>
