# 笔试题总结

## 代码题

* 知识点：
    * 预解析、变量提升、作用域、this指向
    * return语句的规则
    * 小数计算
    * 闭包、宏任务、微任务
    * 数组、字符串的排列、组合、筛选、正则、
    * 原型、原型链

### 1. **0.1+0.2===0.3？为什么？怎么解决？**
难度： ***

   答：不等于，结果0.30000000000000004；  
   原因：计算机中的计算都是通过二进制计算的，计算前先转化为二进制，而在JavaScript 中无论是小数还是整数都是Number类型，双精度浮点数，它的实现遵循IEEE 754标准，使用64位固定长度，其中最高的1位是符号位S，接着的11位是指数E，剩下的52位为有效数字M，因此0.1+0.2的二进制计算方式就是取有效位数52位，进行计算，最后的结果转化十进制就是0.30000000000000004；如下面计算方式：

   ```javascript
         0.0000100110011001100110011001100110011001100110011001
       + 0.0001001100110011001100110011001100110011001100110011 
   ```

   解决方式：
   (1). 使用类库，例：math.js、decimal.js、big.js.
   (2). 知道小数位数的情况下，转换成为整数计算
   (3). 使用toFixed()指定下小数点精度

   参考资料：

* IEEE 754标准：格式为(-1)^S x Mx 2^E。S，是符号位，决定正负，0时为正数，1时为负数；M，是指有效位数，大于1小于2；E，是指数位。

   * [解决JS浮点数运算结果不精确的Bug](https://juejin.cn/post/6844903903071322119)
   * [深度剖析0.1 +0.2===0.30000000000000004的原因](https://blog.csdn.net/weixin_34332905/article/details/88945447?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)
   * [如何解决0.1+0.2===0.3类问题](https://segmentfault.com/a/1190000011913127?_ea=2804668)
   * [如何解决JavaScript中0.1+0.2不等于0.3](https://blog.csdn.net/qq_38932355/article/details/79340749)
   * [二进制转十进制，十进制转二进制](https://jingyan.baidu.com/article/597a0643614568312b5243c0.html)

### 2. **1&&2，1||2代码的输出值是？**
难度： *

答：2；1； 原因：
（1）只要“||”前面为false,不管“||”后面是true还是false，都返回“||”后面的值。
（2）只要“||”前面为true,不管“||”后面是true还是false，都返回“||”前面的值。
（3）只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值。
（4）只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值。

### 3. **请用js去除字符串的空格**
难度： **

答：
```javascript
// 去除所有空格
const str = ' hello world and me ';
str.replace(/\s*/g,'');
// 去除两边的空格
// 方法一：
str.replace(/^\s*|*\s$/g,'');
// 方法二：
str.trim();
```
### 4. **数组去重**
难度： *

答：
```javascript
// 方法一： 遍历
const arr = ['1','a','2','1','a','123'];
const unquirArr = []; 
for (let i = 0;i<arr.length;i++){
    const item = arr[i];
    if(unquirArr.indexOf(item)===-1){
        unquirArr.push(item);
    }
}
// 方法二
const unqiArr = [].concat(new Set(arr));
const unqiArr = [...(new Set(arr))];
```

### 5. **如何检查一个数是整数**
难度： **

答：
```javascript
function isInt(num){
    return num % 1 ===0;
}
```
### 6. **如何为Array对象添加你自定义的函数，使得如下代码可以正常工作。**
难度： ***
```javascript
const arr = [1,2];
arr.average();
```
答：
```javascript
    Array.prototype.average = function() {
      // calculate sum
      var sum = this.reduce(function(prev, cur) { return prev + cur; });
      // return sum divided by number of elements
      return sum / this.length;
    }
```
### 7. **在以下代码中，typeof a和typeof b的值分别是什么：**
难度： *

```javascript
function foo() {
  let a = b = 0;
  a++;
  return a;
}

foo();
typeof a; // => ???
typeof b; // => ???
```
答： typeof a 为undefined；typeof b 为 number； 原因：let a = b = 0。这个语句声明了一个局部变量a，全局变量b，在foo()作用域或全局作用域中都没有声明变量 b ”。因此JavaScript将表达式 b = 0 解释为 window.b = 0。

### 8. **根据以下代码推测，clothes[0] 的值是什么**
难度： *

```javascript
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
clothes[0]; // => ???
```
答： undefined；原因：数组对象的 length 属性有一个 特殊的行为，减少length属性的值有一个副作用，就是会删除索引位于新旧长度值之间的元素。clothes.length = 0;数组被清空了。
### 9. **numbers 数组的内容是什么：（鹰眼测试）**
难度： *

```javascript
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);{
  numbers.push(i + 1);
}

numbers; // => ???
```
答：[5];原因：for循环（）后有个；号，而它创建了一个空语句。空语句是不做任何事情的语句。等到执行push操作，i已经为4，并且只会push（i+1）一次。


### 10. **arrayFromValue() 返回什么值？**
难度： **

```javascript
function arrayFromValue(item) {
  return
    [item];
}
arrayFromValue(10); // => ???
```
答： undefined；原因return关键字和[items]表达式之间的换行，换行使JavaScript自动在return和[items]表达式之间插入一个分号。

### 11. **以下脚本会在控制台输出什么？如果有问题，怎么修改为正确的**
难度： ***

```javascript
    let i;
    for (i = 0; i < 3; i++) {
    const log = () => {
    console.log(i);  }
    setTimeout(log, 100);
    }
```
答：3，3，3；let i放到了for循环之前声明，就被定义为全局作用域，再for循环中仍然能够访问i，等到setTimeOut时间结束，for循环已经将i置为3。
修改为：
原因：将let 声明再for的条件判断内，就相当于i是在块级作用域，并且不会影响for循环内部的作用域，log函数是一个闭包，则每次循环会暂时保存i的值，而不会访问之前的i，因此，最终能够循环得出0，1，2.
```javascript
// 方法一：
for (let i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}
// -------
// 方法二：
for (var i = 0; i < 3; i++) {
    (function (j){
        const log = () => {
            console.log(j);
        }
        setTimeout(log, 100);
    })(i)
}// 0,1,2

```
深度解析：[80%应聘者都不及格的JS面试题](https://www.jb51.net/article/109005.htm)

### 12. **如果在声明之前访问myVar和myConst会发生什么?**
难度： **

```javascript
myVar;   // => ???
myConst; // => ???
var myVar = 'value';
const myConst = 3.14;
```
答：myVar会初始化为undefined，myConst会直接报错ReferenceError；
原因：（变量提升和暂时性死区是影响JavaScript变量生命周期的两个重要概念。）在一个作用域下，以var声明的变量，会变量提升,被提升至作用域最顶部，自动初始化为undefined，直至赋值。
而以let、const声明的变量，不会变量提升，let、const必须先声明初始化，才能使用，声明之前访问，就会出现暂时性死区，抛出ReferenceError的错误.
而let 初始化的时候可以不赋值，会自动赋值为undefined,但是const 初始化的时候必须赋值。

详细资料可见：[Javascript中 let, var的变量提升问题](https://blog.csdn.net/weixin_44539199/article/details/99674839)

### 13. **下面代码输出什么**
```javascript
// 题一
alert(a)
a();
var a=3;
function a(){
    alert(10)
}   
alert(a)
a=6;
a();  

// ------------分割线------------------
// 题二
alert(a)
a();
var a=3;
var a=function(){
    alert(10)
}   
alert(a)
a=6;
a();
```
答：第一部分运行结果：1.函数声明优先于变量声明，所以，刚开始，a就是function a(){alert(10)} ，就会看到这个函数。2.a()，执行函数，就是出现alert(10)3.执行了var a=3; 所以alert(a)就是显示34.由于a不是一个函数了，所以往下在执行到a()的时候， 报错。第二部分运行结果：1.underfind2.报错在之前说过，预解析是把带有var和function关键字的事先声明，但不会赋值。所以一开始是underfind，然后报错是因为执行到a()的时候，a并不是一个函数。

### 14. **费波纳茨数组**
```javascript
var arr=[];
for(var i=0;i<10;i++ ){
    i<=1?arr.push(1):arr.push(arr[i-1]+arr[i-2]);
}
console.log(arr)
```
### 15. **请从2017-05-15T09:10:23 Europe/Paris提取出结果["2017","05","15","09","10","23"]**
```javascript
let str = '2017-05-15T09:10:23 Europe/Paris';
let arr = str.match(  /\d{1,}/g); 
//match会返回一个数组，
// \d 查找数字  
// {1,} 表示至少重复几次 
// /g表示全局搜索
```
### 16. **数据排列，打印出类似1234321的数字**

```javascript
function num(n,m){
    console.log(n);
    if(n<m){
        num(n+1,m);
        console.log(n);
    }
}
num(2,5)
```

### 17. **实现快速排序算法**
### 18. **实现冒泡排序算法**
### 19. **111**


题库收藏：
难度：*
* [[译] 送你 43 道 JavaScript 面试题](https://juejin.cn/post/6844903869378461710#heading-2)

难度：**（下面两个有点综合，有些面试的）
* [前端笔试题面试题记录](https://juejin.cn/post/6844903588817289224)
* [前端面试题2019持续整理汇总](https://juejin.cn/post/6844903566830731278) 

难度：***
[同学，你会手写代码吗？](https://juejin.cn/post/6844903810586918925#heading-12)
[中高级前端开发高频面试题](https://juejin.cn/post/6844903854107000839#heading-1)(给我感觉一般，不是很高频，看一眼就行)

难度：****
* [「中高级前端面试」JavaScript手写代码无敌秘籍](https://juejin.cn/post/6844903809206976520#heading-14)
* [一道面试题引起的思考](https://juejin.cn/post/6844903719792803847)



## 简答题，叙述题（简单记录下，并未整理，之后更吧）
### 1. **JavaScript中的类型都有哪些**
答：基础类型：string、number、boolean、null、undefined、symbol (ES6的新语法)
引用类型：object、array

### 2. **什么叫IIFEs(Immediately Invoked Function Expressions)?**
答：IIFE叫做立即执行表达式，顾名思义，该表达式一被创建就立即执行。

### 3. **JavaScript怎么进行类型转换？**
答：两种：显示类型转换和隐式类型转换。

### 4. **==和===的区别**
答：==会进行隐式的类型转换，===不会。

### 5. **"use strict"到底有何用处？**
答：use strict 放在文件的顶部或则函数的第一行来启动更加严格的检查来避免失误引起的错误。

### 6. **请解释Null和Undefined**
答：如果还没有被初始化，则是undefined; 如果不可用，则可以用null来表示；

### 7. **请解释原型模式**

### 8. **闭包**

### 9. **请解释hoisting（提升）是什么意思**
答：提升(hoisting)是指JavaScript的解释器将所有的变量和函数声明都提升到该作用域的顶部，有两种提升类型： 变量提升、函数提升；
在一个作用域中通过声明的变量和函数在整个作用域中都可以使用。

### 10. **JavaScript作用域**

### 11. **this关键字如何工作**












参考文章：
* [让我印象深刻的 JavaScript 面试题](https://juejin.cn/post/6844903512971673607)

