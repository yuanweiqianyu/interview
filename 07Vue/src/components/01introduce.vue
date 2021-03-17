<template>
  <div id="01introduce" class="supStyle" :title="des">
    是否展示：<button @click="handleAction" >{{isShow? '展示' : '不展示'}}</button>
    <ul v-if="isShow" >
      <li>{{rendering}}</li>
      <li v-for="liEven of liNums" :key="liEven.key" >{{liEven.showMsg}}</li>
      <li>
        <div>{{inputMsg}}</div>
        <input type="text" v-model="inputMsg" >
      </li>
    </ul>
    <my-component sup="introduce-component"  ></my-component>
<!--    <my-component-haha sup="introduce-component-haha" ></my-component-haha>-->
  </div>
</template>

<script>

// import Vue from 'vue';

// Vue.component('my-component',{
//   props: ['sup', ],
//   template: '<div>{{sup}}</div>',
// });
// Vue.component('my-component-haha',{
//   props: ['sup', ],
//   template: '<div>haha:{{sup}}</div>',
// });

export default {
  name: "Introduce",
  components: {
    'my-component': {
      props: ['sup', ],
      template: '<div>{{sup}}</div>',
    },
  },
  data: function (){
    return {
      isShow: true,
      liNums: [
          {showMsg:'1',
          key: '1'},
          {showMsg:'2',
          key:'2'},
        ],
      rendering: '声明式渲染',
      des: '鼠标悬停信息',
      inputMsg: '',
    }
  },
  methods: {
    handleAction: function (){
      this.isShow = !this.isShow;
    },

  }
}
</script>

<style scoped>
.supStyle{
  padding: 10px;
  background-color: #168cf5;
  color: white;
  text-align: left;
}
</style>