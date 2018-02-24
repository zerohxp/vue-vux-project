<template>
  <div>
    <group :title="value[0] + ' ' + value[1] + ':' + value[2]">
      <datetime-range title="选择" start-date="2017-01-01" end-date="2017-02-02" format="YYYY年MM月DD日" v-model="value" @on-change="onChange"></datetime-range>
    </group>
        
    <group title="Default format: YYYY-MM-DD">
      <datetime
        v-model="value1"
        @on-change="change"
        title="Birthday"
        @on-cancel="log('cancel')"
        @on-confirm="log('confirm')"
        @on-hide="log('hide', $event)"></datetime>
    </group>

    <group title="自定义分钟列表（每15分钟）">
      <datetime v-model="minuteListValue" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="change" title="Birthday"></datetime>
    </group>

    <group title="定义小时列表">
      <datetime v-model="hourListValue" format="YYYY-MM-DD HH:mm" :hour-list="['09', '10', '11', '12', '13', '14', '15', '16']" :minute-list="['00', '15', '30', '45']" @on-change="change" title="Birthday"></datetime>
    </group>

    <group title="Readonly">
      <datetime v-model="valueReadonly" :readonly="readonly" @on-change="change" title="Birthday"></datetime>
    </group>
    <div style="padding:15px">
      <x-button type="primary" plain @click.native="readonly = !readonly"> 切换 readonly 属性 </x-button>
    </div>

     <group title="格式化显示">
      <datetime v-model="formatValue" :display-format="formatValueFunction" @on-change="change" title="Birthday"></datetime>
    </group>

    <div style="padding:15px;">
      <x-button type="primary" @click.native="formatValue = '2017-11-11'">Set value: 2017-11-11</x-button>
    </div>

    <group title="限定小时范围">
      <datetime v-model="limitHourValue" format="YYYY-MM-DD HH:mm" :min-hour="9" :max-hour="18" @on-change="change" title="限定小时范围" inline-desc="Working hours: 09-18"></datetime>
    </group>

    <group title="设置开始时间和结束日期 2015-11-11 ~ 2017-10-11">
      <datetime v-model="limitHourValue" :start-date="startDate" :end-date="endDate" format="YYYY-MM-DD HH:mm" @on-change="change" title="Start time"></datetime>
    </group>

     <group title="只设置结束时间 2017-10-11">
      <datetime v-model="onlySetEndDateValue" :end-date="onlySetEndDate" format="YYYY-MM-DD HH:mm" @on-change="change" title="Start time"></datetime>
    </group>

    <group :title=" 'Format: ' + format">
      <datetime v-model="value2" :format="format" @on-change="change" title="Start time"></datetime>
    </group>

    <div style="padding:15px;">
      <x-button type="primary" @click.native="toggleFormat">改变格式</x-button>
    </div>

    <group title="提示文字">
      <datetime v-model="value3" default-selected-value="2017-06-18 13" format="YYYY-MM-DD HH" placeholder="请选择" @on-change="change" title="Start time"></datetime>
    </group>

    <group title="设置默认选中值为 2017-11-11">
      <datetime v-model="value3_1" default-selected-value="2017-11-11" format="YYYY-MM-DD" placeholder="请选择" @on-change="change" title="Start time" :inline-desc=" `Current value: ${value3_1}`"></datetime>
    </group>

    <group title="设置开始和结束年份">
      <datetime v-model="value4" placeholder="请选择" :min-year="2000" :max-year="2016" format="YYYY-MM-DD HH:mm" @on-change="change" title="2000年以后的时间"></datetime>
    </group>

    <group title="自定义小时列表生成逻辑">
      <datetime format="YYYY-MM-DD HH" v-model="computeHoursValue" :compute-hours-function="computeHoursFunction" title="Birthday" @on-change="change"></datetime>
    </group>

    <group title="自定义日期列表生成逻辑">
      <datetime format="YYYY-MM-DD HH" v-model="computeDaysValue" :compute-days-function="computeDaysFunction" title="Birthday" @on-change="change"></datetime>
    </group>

    <group title="自定义中文显示模板">
      <datetime v-model="value5" placeholder="请选择" :min-year="2000" :max-year="2016" format="YYYY-MM-DD HH:mm" @on-change="change" title="Chinese" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
    </group>

    <group title="显示中间的清除按钮">
      <datetime v-model="value6" @on-change="change" title="Birthday" clear-text="clear" @on-clear="clearValue"></datetime>
    </group>

    <group title="显示中间的设置日期为今天的按钮">
      <datetime v-model="value7" @on-change="change" title="Birthday" clear-text="today" @on-clear="setToday"></datetime>
    </group>

     <group title="自定义触发内容">
      <datetime v-model="value7" @on-change="change" title="Birthday" clear-text="today" @on-clear="setToday">
        <x-button>Click me</x-button>
      </datetime>
    </group>

    <group title="Required">
      <datetime v-model="value8" title="Required" clear-text="clear" @on-clear="clearValue8" :required="true"></datetime>
    </group>

    <group title="使用 prop: show.sync 控制显示(vue^2.3)">
      <datetime v-model="value9" @on-change="change" title="Birthday" :show.sync="visibility"></datetime>
    </group>

    <div style="padding:15px;">
      <x-button type="primary" plain @click.native="visibility = true">显示</x-button>
    </div>

    <datetime-view v-model="value11" ref="datetime" :format="format"></datetime-view>
    <p class="info">选中值: {{ value11 }}</p>
    <div style="padding:15px;">
      <x-button @click.native="changeValue('2017-11-11')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> 设置为 2017-11-11 </x-button>
      <x-button @click.native="changeValue('2016-08-08')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> 设置为 2016-08-08 </x-button>
      <x-button @click.native="toggleFormat2" type="primary"> 切换时间格式 </x-button>
      <x-button @click.native="showPopup = true" type="primary"> 显示弹窗样式 </x-button>
    </div>
    <div>
      <popup v-model="showPopup">
        <datetime-view v-model="value10"></datetime-view>
      </popup>
    </div>
  </div>

</template>
<script>
import { Group, DatetimeRange, XButton, Datetime, DatetimeView, Popup } from 'vux'

export default {
  components: {
    Group,
    DatetimeRange,
    Datetime,
    XButton,
    DatetimeView,
    Popup
  },
  methods: {
    onChange (val) {
      console.log('change', val)
    },
    log (str1, str2 = '') {
      console.log(str1, str2)
    },
    toggleFormat () {
      this.format = this.format === 'YYYY-MM-DD HH:mm' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm'
    },
    change (value) {
      console.log('change', value)
    },
    clearValue (value) {
      this.value6 = ''
    },
    clearValue8 (value) {
      this.value8 = ''
    },
    setToday (value) {
      let now = new Date()
      let cmonth = now.getMonth() + 1
      let day = now.getDate()
      if (cmonth < 10) cmonth = '0' + cmonth
      if (day < 10) day = '0' + day
      this.value7 = now.getFullYear() + '-' + cmonth + '-' + day
      console.log('set today ok')
    },
    toggleFormat2 () {
      if (this.format === 'YYYY-MM-DD') {
        this.format = 'YYYY-MM-DD HH:mm'
      } else {
        this.format = 'YYYY-MM-DD'
      }
    },
    changeValue (val) {
      this.value11 = val
      this.$refs.datetime.render()
    }
  },
  data () {
    return {
      value: ['2017-01-15', '03', '05'],
      readonly: true,
      minuteListValue: '2017-06-12 09:00',
      hourListValue: '2017-06-12 09:00',
      format: 'YYYY-MM-DD HH:mm',
      value1: '2015-11-12',
      valueReadonly: '2015-11-12',
      value2: '',
      value3: '',
      value3_1: '',
      value4: '',
      value5: '',
      value6: '2016-08-18',
      value7: '',
      value8: '',
      value11: '2017-10-11',
      value10: '2017-10-24',
      showPopup: false,
      limitHourValue: '',
      startDate: '2015-11-11',
      endDate: '2017-10-11',
      formatValue: '2017-10-11',
      formatValueFunction (val) {
        return val.replace(/-/g, '$')
      },
      value9: '',
      visibility: false,
      computeHoursValue: '',
      computeDaysValue: '',
      computeHoursFunction (date, isToday, generateRange) {
        if (isToday) {
          return generateRange(new Date().getHours(), 23)
        } else {
          return generateRange(0, 23)
        }
      },
      computeDaysFunction (options, generateRange) {
        return [options.month] // if current month is n, days are [n]
      },
      onlySetEndDate: '2017-10-11',
      onlySetEndDateValue: ''
    }
  }
}
</script>
<style scoped lang="less">
.center {
  padding-top: 10px;
  padding-left: 15px;
  color: green;
}
</style>