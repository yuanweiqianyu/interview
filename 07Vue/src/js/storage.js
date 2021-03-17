/**
 * 【cookie、localstorage、sessionstorage 的使用的区别】
 *
 * */

// 项目图片转化为base64
function convertImgToBase64(url, callback, outputFormat) {
    console.log(url);
    let canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;
    img.onload = function (){
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img,0,0);
        const dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this,dataURL);
        canvas = null;
    };
}

const CookieUseClass = {
    setCookie: function () {
        const name = '小明';
        const age = 13;
        const sex = 1; // 1-男 ，2-女

        const uriName = encodeURIComponent(name);// 把字符串作为 URI 组件进行编码

        // 设置过期时间
        const time = new Date().getTime() + 24 * 60 * 60 * 1000;
        const expireTime = new Date(time);
        const utcExpireTime = expireTime.toUTCString(); // 格林尼治时间


        document.cookie = `usename=${uriName};expires=${utcExpireTime};path=/`;
        document.cookie = `age=${age};expires=${utcExpireTime};path=/`;
        document.cookie = `sex=${sex};expires=${utcExpireTime};path=/`;
    },
    getAllCookie: function () {
        console.log(document.cookie);
    },
    getCookie: function (key) {
        const cookieArr = document.cookie.split(';');

        let currentV = '';
        cookieArr.map((value) => {
            const perCookie = value.trim().split('=');
            const perKey = perCookie[0];
            if (key === perKey) {
                currentV = decodeURIComponent(perCookie[1]);
            }
        })
         return currentV;

    },
    changeCookie(key,value){
        // 设置过期时间
        const time = new Date().getTime() + 24 * 60 * 60 * 1000;
        const expireTime = new Date(time);
        const utcExpireTime = expireTime.toUTCString(); // 格林尼治时间
        console.log(key,value)
        document.cookie = `${key}=${value};expires=${utcExpireTime};path=/`;
    },
    setImgCookie(callback){
        // 设置过期时间
        const time = new Date().getTime() + 5 * 1000;
        const expireTime = new Date(time);
        const utcExpireTime = expireTime.toUTCString(); // 格林尼治时间

        const url = require('../imgs/diff2.png');
        convertImgToBase64(url,function (base64Img){
            console.log(base64Img.length,'----');
            console.log(base64Img);
            const changeStr = base64Img.replace(/;/g,'@');
            console.log(changeStr);

            // document.cookie = `imgType=jpg;expires=${utcExpireTime};path=/`;
            document.cookie = `avatar=${changeStr};expires=${utcExpireTime};path=/`;
            callback('success!')


        })
    }
};

export default {
    CookieUseClass,
}