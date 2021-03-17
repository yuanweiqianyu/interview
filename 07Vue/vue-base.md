# Vue 复习心得体会总结

## 基础
<details>
    <summary style="color: #b1b1b1;"><span style="font-size: 17px; ">基础知识</span></summary>



### 一、安装

<details>
    <summary style="color: #b1b1b1;"><span style="font-size: 17px; ">展开内容详情</span></summary>

1. 安装方式：
* **CDN** - 功能：用于制作原型或学习。注意：生产环境，明确版本号和构建文件。
* **NPM** - 功能：构建大型应用。能很好的和 webpack 或 Browserify 模块打包器配合使用。
* **CLI** - 功能： 为单页面应用快速搭建繁杂的脚手架。（./vue-cli-base.md 对vue-cli教程的阅读）
2. 不同的构建版本
* 完整版
* 编译器
* 运行时

  **使用：**
    * 需要在客户端编译模板（比如传入一个字符串给 `template` 选项，过挂载一个元素上并以其 DOM 内部的 HTML 作为模板），需要加上编译器，即完整版。
    * 生产包中不需要编译器，所以只用运行时版本。

</details>




### 二、介绍

<details>
    <summary style="color: #b1b1b1;"><span style="font-size: 17px; ">展开内容详情</span></summary>

#### (一)、Vue 是什么？
* Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
* 所有东西都是 _**响应式**_ 的。

#### (二)、起步
###### 1. 安装 - （见上一部分）

示例：
```javascript
    var app = new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!',
        description: '鼠标悬停信息',
        seen: true,
        todos: [
          { text: '学习 JavaScript' },
          { text: '学习 Vue' },
          { text: '整个牛项目' }
        ]  
      }
    })
```

###### 2. 声明式渲染（ `{{}} 、v-` ）
* 方式： 
  * 文本插值（ {{}} ）
  * 指令( v- )绑定元素。
    
    ```html
    <div id="app" v-title="description" > {{ message }} </div>
     ```
    
    * 所有东西都是 _**响应式**_ 的。
    * **注意**：我们不再和 HTML 直接交互，而是将应用挂载到一个DOM元素上。HTML 只是入口。

###### 3. 条件与循环（`v-if、v-for`）
```html
<div id="app"> 
  <p v-if="seen">现在你看到我了</p> 
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```
###### 3. 处理用户输入( v-on:click、v-model )
```html
<!--v-on:click-->
<button v-on:click="reverseMessage">反转消息</button>
<!--v-model 双向绑定-->
<input v-model="message">
```

###### 4. 组件化应用构建( component )
```javascript
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
```

> <div style="color: rebeccapurple; font-weight: bold; " >➣ 与自定义元素的关系</div>
> 
> 它是 Web 组件规范的一部分，这是因为 Vue 的组件语法部分参考了该规范。例如 Vue 组件实现了 Slot API 与 is attribute。但是，还是有几个关键差别：
>   * Web Components 规范已经完成并通过，但未被所有浏览器原生实现。目前 Safari 10.1+、Chrome 54+ 和 Firefox 63+ 原生支持 Web Components。相比之下，**Vue 组件不需要任何 polyfill**，并且在所有支持的浏览器 (IE9 及更高版本) 之下表现一致。必要时，Vue 组件也可以包装于原生自定义元素之内。
> 
>   * Vue 组件提供了纯自定义元素所不具备的一些重要功能，最突出的是**跨组件数据流、自定义事件通信以及构建工具集成**。
> 
> 虽然 Vue 内部没有使用自定义元素，不过在应用使用自定义元素、或以自定义元素形式发布时，依然有很好的互操作性。Vue CLI 也支持将 Vue 组件构建成为原生的自定义元素。
> 

</details>

### 三、Vue 实例
<details>
    <summary style="color: #b1b1b1;"><span style="font-size: 17px; ">展开内容详情</span></summary>

#### (一)、创建一个 Vue 实例
```javascript
var vm = new Vue({
    // 选项
})
```
* 没有完全遵循MVVM模型
* 可以传入一个选项对象，来创建你想要的行为。
* 一个Vue应用由一个通过`new Vue`创建的根**Vue**实例，以及可选的嵌套的、可复用的组件树组成。
* 所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)。
  选项对象：
    * [选项/数据](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE)
        * data - Object/Funtion  、  
      * props-Array<string>|Object  、 
      *  propsData - {[key:string]:any}  、 
      * computed - {[key: string]: Function|{get:Function, set: Function}}  、 
      * methods - {[key: string]: Function}   、 
      * watch - {[key: string]: string|Function|Object|Array}。
      
    * [选项/DOM](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-DOM)
      * el - string| Element、
      * template - string、
      * render - (createElement: ()=> VNode)=> VNode、
      * renderError - (createElement: ()=>VNode,errror:Error) => VNode


#### (二)、数据（property）与方法
```javascript
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})
```
* data
    * 当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的**响应式系统**中。**例外是使用 `Object.freeze()`**。
    * 注意的是只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。
* Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 $，以便与用户定义的 property 区分开来。
  * 实例 property ：
      * `vm.$data - Object`
      * `vm.$props - Object`
      * `vm.$el - Element`
      * `vm.$options - Object`,
      * `vm.$parent - Vue instance`
      * `vm.$root - Vue instance`
      * `vm.children - Array<Vue instance>`
      * `vm.$solts - {{[name:string]: ?Array<VNode>}}`
      * `vm.$scoppedSlots - {[name:string]: props => Array<VNode> | undefined}` 
      * `vm.$refs - Object`
      * `vm.$isServer - Boolean`
      * `vm.$attrs - {[key: string]: string}`
      * `vm.listeners - { [key: string]: Function | Array<Function> }`
  * 实例方法 / 数据、事件、生命周期
      
    数据
    * `vm.$watch`
    * `vm.$set`
    * `vm.$delete`

    事件
    * `vm.$on`
    * `vm.once`
    * `vm.$emit`
    * `vm.$off`

    生命周期
    * `vm.$mount`
    * `vm.$forceUpdate`
    * `vm.$nextTick`
    * `vm.$destroy`

#### (三)、实例生命周期钩子
* 每个 Vue 实例在被创建时都要经过一系列的初始化过程，会运行一些叫做生命周期钩子的函数，给了用户在不同阶段添加自己的代码的机会。
* 注意：不要在选项 property 或回调上使用箭头函数，因为箭头函数并没有 this。
* 生命周期图示

<img src="https://github.com/yuanweiqianyu/interview/blob/master/07Vue/src/imgs/lifecycle.png" alt="生命周期图示">


  
</details>



</details>






