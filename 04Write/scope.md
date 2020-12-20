# 作用域
此部分主要针对作用域考核，包含：this的指向，箭头函数


### 1.下题的打印结果
 ```javascript
     var foo=1
     function main() {
         console.log(foo)
         var foo=2
         console.log(this.foo);
         this.foo=3
     }
     main()
     new main()
 ```
 答案：undefined；1；undefined；undefined；
    原因：

### 2.下题的打印结果
```javascript
var length = 10;
function fn() {
console.log(this.length);
}

var obj = {
length: 5,
method: function(fn) {
fn();
arguments[0]();
}
};

obj.method(fn, 1);

```

答：10 ；2；原因：虽然在程序执行时，使用了obj.method方法，让this指向了obj，但是真正的函数执行在函数体内部，也即当fn()执行的时候，this是指向window的，所以第一次执行结果是10
分析下在method(fn,1)执行时，经历了什么： 首先两个参数fn和1会被放入arguments中，在arguments中第一个参数就是我们传入的函数；接下来fn执行，此时this没有绑定因此指向window，输出10。 然而到了arguments[0]()这一句，相当于把arguments[0]中的第一个参数拿来执行, 效果如下:
```javascript
arguments[0]()  //执行,等同于下面的
arguments.0() //当然这句话是不合法的，但是这样我们可以更清楚知道，this是指向arguments实例本身
```
arguments.length就是它本身的长度(arguments是一个类数组，具有length属性)，因此输出2


### 3.下题的打印结果
```javascript
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

```
答： 在catch的块级作用域中，x被提前声明，并被覆盖为1，因此打印x=1；
这时x已经变为了块级作用域内的局部变量，全局无权访问，因此，下个x=undefined；
但是y在作用域内没有被声明过，就默认是全局变量，因此，catch中的y = 2，就能被访问到。