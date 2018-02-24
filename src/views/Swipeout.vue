<template>
  <div>
  <div class="vux-1px-t">
    
    <swipeout>

      <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">是的</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">正确</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-t">
       JavaScript 是最好的语言
        </div>
      </swipeout-item>

      <swipeout-item :threshold=".5" underlay-color="#ccc">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">收藏</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">删除</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-tb">
        设置滑动阙值为 0.5
        </div>
      </swipeout-item>

      <swipeout-item :disabled="disabled" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary" :width="70">收藏</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">删除</swipeout-button>
          <swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">忽略</swipeout-button>
        </div>

        <div slot="left-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">收藏</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">删除</swipeout-button>
        </div>

        <div slot="content" class="demo-content vux-1px-b">
        {{'now ' + (disabled ? 'disabled' : 'enabled')}}
        </div>
      </swipeout-item>

    </swipeout>
  </div>
    

    <div style="padding:15px;">
      <x-button @click.native="disabled = false" type="primary" :disabled="!disabled">设置可操作</x-button>
      <x-button @click.native="disabled = true" type="warn" :disabled="disabled">设置不可操作</x-button>
      <x-button @click.native="$refs.swipeoutItem.open('left')" type="primary">打开左菜单</x-button>
      <x-button @click.native="$refs.swipeoutItem.open('right')" type="primary">打开右菜单</x-button>
      <x-button @click.native="$refs.swipeoutItem.close()" type="warn">关闭菜单</x-button>
    </div>
    <br>
    <group-title>use vux-1px to style items</group-title>
    <swipeout class="vux-1px-tb">
      <swipeout-item transition-mode="follow" v-for="i in 3" :key="i">
        <div slot="right-menu">
          <swipeout-button type="primary">是的</swipeout-button>
          <swipeout-button type="warn">正确</swipeout-button>
        </div>
        <div slot="content" :class="{'vux-1px-b': i !== 3, 'vux-1px-t': i === 1}" style="padding:12px;">JavaScript 是最好的语言</div>
      </swipeout-item>
    </swipeout>
    <br>
    <br>
  </div>
</template>

<script>
import { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux'

export default {
  components: {
    GroupTitle,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton
  },
  methods: {
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    handleEvents (type) {
      console.log('event: ', type)
    }
  },
  data () {
    return {
      disabled: false
    }
  }
}
</script>

<style lang="less">
.demo-content {
  padding: 10px 10px;
}
</style>
