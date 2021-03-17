<template>
  <div>

<!--    <div style="text-align: left" >-->
<!--      <h3>cookie</h3>-->
<!--      <button @click="setCookieFn" >设置 cookie </button><br/>-->
<!--      <div >-->
<!--        <button @click="getAllCookiefn" >获取全部 cookie </button><br/><br/>-->
<!--        <b>key:</b> <input type="text" v-model="cookieKey" >-->
<!--        <button @click="getCookieWithKey" >获取 cookie 中的 {{cookieKey}}</button><br/><br/>-->
<!--        <b>key:</b><input type="text" v-model="changeKey" > | <b>value:</b><input type="text" v-model="changeValue">-->
<!--        <button @click="changeCookieWithKey" >修改 cookie </button>-->
<!--        <br/><br/><button @click="setImgStorage" >图片存储</button>-->
<!--      </div>-->
<!--    </div>-->
    <div style="text-align: left">
      
    </div>
  </div>

</template>

<script>
import Storage from "../js/storage";

export default {
  name: "StorageView",
  data: function (){
    return {
      cookieKey:'',
      changeKey:'',
      changeValue:'',
    }
  },
  methods:{
    /*setCookieFn(){
     Storage.CookieUseClass.setCookie()
    },
    getAllCookiefn(){
      Storage.CookieUseClass.getAllCookie();
    },
    getCookieWithKey(){
      const cookieValue = Storage.CookieUseClass.getCookie(this.cookieKey);
      alert(cookieValue);
    },
    changeCookieWithKey(){
      Storage.CookieUseClass.changeCookie(this.changeKey,this.changeValue);
      console.log(Storage.CookieUseClass.getCookie(this.changeKey));
    },
    setImgStorage(){
      Storage.CookieUseClass.setImgCookie(res=>{
        console.log(res);
        console.log('imgType:',Storage.CookieUseClass.getCookie('imgType'));
        console.log('avatar:',Storage.CookieUseClass.getCookie('avatar'));
       const avatar = Storage.CookieUseClass.getCookie('avatar').replace(/@/g,';');
       const newImg = new Image();
       newImg.src = avatar;
       document.body.appendChild(newImg);
      });
    }*/
  }
}
</script>

<style scoped>

</style>