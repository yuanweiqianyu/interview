# Vue 面试题总结

### 1. VUE和REACT有什么区别？
 * react整体是函数式的思想，把组件设计成纯组件，状态和逻辑通过参数传入，所以在react中，是单向数据流；
 * vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom。
### 2. 自己搭建过vue开发环境吗
 
 * 想详细了解的小伙伴，请查看[从零开发一套完整的vue项目开发环境](https://juejin.cn/post/6844904036206919688)
### 3. 自己封装过组件吗
 
 * 想详细了解的小伙伴，请查看[从零实现一套属于自己的UI框架-发布到npm](https://juejin.cn/post/6844904049259577351)
### 4. MVC & MVVM的理解
 * MVVM 模式，顾名思义即 Model-View-ViewModel 模式。它萌芽于2005年微软推出的基于 Windows 的用户界面框架 WPF ，前端最早的 MVVM 框架 knockout 在2010年发布。
 * Model 层: 对应数据层的域模型，它主要做域模型的同步。通过 Ajax/fetch 等 API 完成客户端和服务端业务 Model 的同步。在层间关系里，它主要用于抽象出 ViewModel 中视图的 Model。
 * View 层:作为视图模板存在，在 MVVM 里，整个 View 是一个动态模板。除了定义结构、布局外，它展示的是 ViewModel 层的数据和状态。View 层不负责处理状态，View 层做的是 数据绑定的声明、 指令的声明、 事件绑定的声明。
 * ViewModel 层:把 View 需要的层数据暴露，并对 View 层的 数据绑定声明、 指令声明、 事件绑定声明 负责，也就是处理 View 层的具体业务逻辑。ViewModel 底层会做好绑定属性的监听。当 ViewModel 中数据变化，View 层会得到更新；而当 View 中声明了数据的双向绑定（通常是表单元素），框架也会监听 View 层（表单）值的变化。一旦值变化，View 层绑定的 ViewModel 中的数据也会得到自动更新。
想详细了解的，请查看[MVVM详解](https://juejin.cn/post/6844904067525935118)

### 5. MVVM的优缺点?
 * 优点:
   
   （1）.	分离视图（View）和模型（Model）,降低代码耦合，提高视图或者逻辑的重用性: 比如视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定不同的"View"上，当View变化的时候Model不可以不变，当Model变化的时候View也可以不变。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑
   
     （2）.	提高可测试性: ViewModel的存在可以帮助开发者更好地编写测试代码
   
     （3）.	自动更新dom: 利用双向绑定,数据更新后视图自动更新,让开发者从繁琐的手动dom中解放
   
 * 缺点:
   
   (1).	Bug很难被调试: 因为使用双向绑定的模式，当你看到界面异常了，有可能是你View的代码有Bug，也可能是Model的代码有问题。数据绑定使得一个位置的Bug被快速传递到别的位置，要定位原始出问题的地方就变得不那么容易了。另外，数据绑定的声明是指令式地写在View的模版当中的，这些内容是没办法去打断点debug的
   
   (2).	一个大的模块中model也会很大，虽然使用方便了也很容易保证了数据的一致性，当时长期持有，不释放内存就造成了花费更多的内存
   
   (3).	对于大型的图形应用程序，视图状态较多，ViewModel的构建和维护的成本都会比较高

### 6. 聊聊对vue的理解
 
* vue是一个渐进式的JS框架。他易用，灵活，高效； 可以把一个页面分隔成多个组件；当其他页面有类似功能时，直接让封装的组件进行复用； 他是构建用户界面的声明式框架，只关心图层；不关心具体是如何实现的

### 7. V-model的原理是什么？

 * Vue的双向数据绑定是由数据劫持结合发布者订阅者实现的。 数据劫持是通过Object.defineProperty()来劫持对象数据的setter和getter操作。 在数据变动时作你想做的事
     * 原理: 通过Observer(观察者)来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile(编译)之间的通信桥梁，达到数据变化->视图更新 在初始化vue实例时，遍历data这个对象，给每一个键值对利用Object.definedProperty对data的键值对新增get和set方法，利用了事件监听DOM的机制，让视图去改变数据
       https://www.cnblogs.com/chenhuichao/p/10818396.html

### 8. 谈谈对生命周期的理解
 * 生命周期：Vue实例从开始创建、初始化数据、编译模板、挂载DOM-》渲染、更新-》渲染、卸载等一系列过程，称为Vue的生命周期
 * beforeCreate阶段：vue实例的挂载元素el和数据对象data都是undefined，还没有初始化。
 * created阶段：vue实例的数据对象data有了，可以访问里面的数据和方法，未挂载到DOM，el还没有
 * beforeMount阶段：vue实例的el和data都初始化了，但是挂载之前为虚拟的dom节点
 * mounted阶段：vue实例挂载到真实DOM上，就可以通过DOM获取DOM节点
 * beforeUpdate阶段：响应式数据更新时调用，发生在虚拟DOM打补丁之前，适合在更新之前访问现有的DOM，比如手动移除已添加的事件监听器
 * updated阶段：虚拟DOM重新渲染和打补丁之后调用，组成新的DOM已经更新，避免在这个钩子函数中操作数据，防止死循环
 * beforeDestroy阶段：实例销毁前调用，实例还可以用，this能获取到实例，常用于销毁定时器，解绑事件
 * destroyed阶段：实例销毁后调用，调用后所有事件监听器会被移除，所有的子实例都会被销毁
   <img src="https://github.com/yuanweiqianyu/interview/blob/master/07Vue/src/imgs/lifeDetail.png" alt="生命周期图示详情" />

### 9. 异步请求适合在哪个生命周期调用？
* 官方实例的异步请求是在mounted生命周期中调用的，而实际上也可以在created生命周期中调用。

### 10. `v-if`和`v-show`区别
* `v-if` 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
* v-show 就简单得多—— 不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。


### 11.	computed和watch有什么区别?
* computed:

（1）. computed是计算属性,也就是计算值,它更多用于计算值的场景

（2）. computed具有缓存性,computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取computed的值时才会重新调用对应的getter来计算

（3）. computed适用于计算比较消耗性能的计算场景
   
* watch:

(1). 更多的是「观察」的作用,类似于某些数据的监听回调,用于观察props $emit或者本组件的值,当数据变化时来执行回调进行后续操作

(2).	无缓存性，页面重新渲染时值不变化也会执行
* 小结:

(1). 当我们要进行数值计算,而且依赖于其他数据，那么把这个数据设计为computed

(2). 如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化

### 12.	vuex的流程
   * 页面通过mapAction异步提交事件到action。
   * action通过commit把对应参数同步提交到mutation。mutation会修改state中对于的值。 
   * 最后通过getter把对应值跑出去，在页面的计算属性中通过mapGetter来动态获取state中的值复制代码

### 13.	vuex有哪几种状态和属性
* state中保存着共有数据，数据是响应式的
* getter可以对state进行计算操作，主要用来过滤一些数据，可以在多组件之间复用
* mutations定义的方法动态修改state中的数据，通过commit提交方法，方法必须是同步的
* actions将mutations里面处理数据的方法变成异步的，就是异步操作数据，通store.dispatch来分发actions，把异步的方法写在actions中，通过commit提交mutations，进行修改数据。
* modules：模块化vuex

### 14. vue路由的两种模式
* hash ——即地址栏URL中的#符号（此hsah 不是密码学里的散列运算） hash 虽然出现URL中，但不会被包含在HTTP请求中，对后端完全没有影响，因此改变hash不会重新加载页面。
* history ——利用了HTML5 History Interface 中新增的pushState() 和replaceState() 方法
* 这两个方法应用于浏览器的历史记录站，在当前已有的back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改是，虽然改变了当前的URL，但你浏览器不会立即向后端发送请求。

### 15. vue中 key 值的作用
* 当 Vue.js 用v-for正在更新已渲染过的元素列表时，它默认用“就地复用”策略。 如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM。
  
   答案二:
  
   key是为Vue中的vnode标记的唯一id,通过这个key,我们的diff操作可以更准确、更快速
   
   diff算法的过程中,先会进行新旧节点的首尾交叉对比,当无法匹配的时候会用新节点的key与旧节点进行比对,然后超出差异.
   
   diff程可以概括为：oldCh和newCh各有两个头尾的变量StartIdx和EndIdx，它们的2个变量相互比较，一共有4种比较方式。如果4种比较都没匹配，如果设置了key，就会用key进行比较，在比较的过程中，变量会往中间靠，一旦StartIdx>EndIdx表明oldCh和newCh至少有一个已经遍历完了，就会结束比较,这四种比较方式就是首、尾、旧尾新头、旧头新尾.
   * 准确: 如果不加key,那么vue会选择复用节点(Vue的就地更新策略),导致之前节点的状态被保留下来,会产生一系列的bug.
   * 快速: key的唯一性可以被Map数据结构充分利用,相比于遍历查找的时间复杂度O(n),Map的时间复杂度仅仅为O(1).
     <img src="https://github.com/yuanweiqianyu/interview/blob/master/07Vue/src/imgs/diff.png" alt="diff" />

    

### 16. Vue 组件间的通信
   * props 和 $emit
      * 父组件向子组件传递数量通过props传递
      * 子组件向父组件传递通过$emit派发事件
         
   * parent
      * 中央数据总线EventBus
      * ref 和 refs
      * Provide 和 inject ,listeners
      * Vuex

### 17. vue的diff算法
* 问题：渲染真实的DOM开销是很大的，修改了某个数据，如果直接渲染到真实dom上会引起整个DOM树的重绘和重排。Virtual Dom 根据真实DOM生成的一个Virtual DOM，当Virtual DOM某个节点的数据改变后生成一个新的Vnode，然后Vnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为Vnode. 
* 注意：在采取diff算法比较的时候，只会在同层级进行，不会跨层级比较。当数据发生改变时，set方法会让调用Dep.notify()方法通知所有订阅者Watcher，订阅者就会调用patch函数给真实的DOM打补丁，更新响应的试图。

### 18. Proxy与Object.defineProperty()的对比
* Proxy的优点：
  * 可以直接监听对象而非属性,并返回一个新对象
  * 可以直接监听数值的变化 
  * 可以劫持整个对象，并返回一个新对象复制代码 
* Proxy的缺点：Proxy是es6提供的新特性，兼容性不好，所以导致Vue3一致没有正式发布让让广大开发者使用
* Object.defineProperty的优点：E9以下的版本不兼容
* Object.defineProperty的缺点：1. 只能劫持对象的属性，我们需要对每个对象的每个属性进行遍历，无法监控到数组下标的变化，导致直接通过数组的下标给数组设置值，不能实时响应


### 19. $route和$router的区别
* $route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。
* $router是“路由实例”对象包括了路由的跳转方法，钩子函数等。
### 20. vue-router守卫
* 导航守卫 router.beforeEach 全局前置守卫
   * to: Route: 即将要进入的目标（路由对象）
   * from: Route: 当前导航正要离开的路由
   * next: Function: 一定要调用该方法来 resolve 这个钩子。（一定要用这个函数才能去到下一个路由，如果不用就拦截） 执行效果依赖 next 方法的调用参数。
   * next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
   * next(false): 取消进入路由，url地址重置为from路由地址(也就是将要离开的路由地址)。
   ```javascript
   // main.js 入口文件
   import router from './router'; // 引入路由
   router.beforeEach((to, from, next) => {
   next();
   });
   router.beforeResolve((to, from, next) => {
   next();
   });
   router.afterEach((to, from) => {
   console.log('afterEach 全局后置钩子');
   });
   ```
* 路由独享的守卫 你可以在路由配置上直接定义 beforeEnter 守卫
  ```javascript
   const router = new VueRouter({
   routes: [
   {
   path: '/foo',
   component: Foo,
   beforeEnter: (to, from, next) => {
   // ...
   }
   }
   ]
   })
   ```
* 组件内的守卫 你可以在路由组件内直接定义以下路由导航守卫
   ```javascript
   const Foo = {
   template: `...`,
   beforeRouteEnter (to, from, next) {
   // 在渲染该组件的对应路由被 confirm 前调用
   // 不！能！获取组件实例 `this`
   // 因为当守卫执行前，组件实例还没被创建
   },
   beforeRouteUpdate (to, from, next) {
   // 在当前路由改变，但是该组件被复用时调用
   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
   // 可以访问组件实例 `this`
   },
   beforeRouteLeave (to, from, next) {
   // 导航离开该组件的对应路由时调用，我们用它来禁止用户离开
   // 可以访问组件实例 `this`
   // 比如还未保存草稿，或者在用户离开前，
   // 将setInterval销毁，防止离开之后，定时器还在调用。
   }
   }
   ```

### 21. Vue 路由懒加载
* Vue项目中实现路由按需加载（路由懒加载）的3中方式：
   * vue异步组件
   * es6提案的import()
   * webpack的require.ensure()
   ```text
   一、Vue异步组件技术：
   {
   path: '/home',
   name: 'Home',
   component: resolve => reqire(['path路径'], resolve)
   }
   二、es6提案的import()
   const Home = () => import('path路径')
   三、webpack提供的require.ensure()
   {
   path: '/home',
   name: 'Home',
   component: r => require.ensure([],() =>  r(require('path路径')), 'demo')
   }
   ```
### 22. axios是什么？怎么使用？描述使用它实现登录功能的流程？
* 请求后台资源的模块。$ npm install axios -S装好 
* 然后发送的是跨域，需在配置文件中config/index.js进行设置。后台如果是Tp5则定义一个资源路由。 js中使用import进来，然后.get或.post。返回在.then函数中如果成功，失败则是在.catch函数中

### 23. vue修饰符
* stop：阻止事件的冒泡
* prevent：阻止事件的默认行为
* once：只触发一次
* self：只触发自己的事件行为时，才会执行 

### 24. vue项目中的性能优化
* 不要在模板里面写过多表达式
* 循环调用子组件时添加key
* 频繁切换的使用v-show，不频繁切换的使用v-if
* 尽量少用float，可以用flex
* 按需加载，可以用require或者import()按需加载需要的组件 
* 路由懒加载

### 25. vue.extend和vue.component
* extend 是构造一个组件的语法器。 然后这个组件你可以作用到Vue.component这个全局注册方法里 还可以在任意vue模板里使用组件。 也可以作用到vue实例或者某个组件中的components属性中并在内部使用apple组件。
* Vue.component 你可以创建 ，也可以取组件。 

### 26. 双向数据绑定
* Vue 采用 数据劫持 结合 发布者-订阅者 模式的方式，通过 Object.defineProperty() 来劫持各个属性的 setter 以及 getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
   * 第一步：需要 Observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
   * 第二步：Compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新数据。
   * 第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情有： 
      * 在自身实例化时往属性订阅器（dep）里面添加自己。
      * 自身必须有一个 update() 方法
      * 待属性变动 dep.notice() 通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。
   * 第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的桥梁，达到数据变化 -> 视图更新；视图交互变化（input） -> 数据 model 变更的双向绑定效果。
* js 实现简单的双向绑定
   ```html
   <body>
   <div id="app">
       <input type="text" id="txt">
           <p id="show"></p>
   </div>
   
   <script>
       window.onload = function() {
       let obj = {};
       Object.defineProperty(obj, "txt", {
       get: function() {
       return obj;
   },
       set: function(newValue) {
       document.getElementById("txt").value = newValue;
       document.getElementById("show").innerHTML  = newValue;
   }
   })
       document.addEventListener("keyup", function(e) {
       obj.txt = e.target.value;
   })
   }
   </script>
   </body>
   
   ```  

* Object.defineProperty 接收三个参数：对象，属性名，配置对象这里使用的是 Object.defineProperty，这是 Vue 2.0 进行双向数据绑定的写法。在 Vue 3.0 中，它使用 Proxy 进行数据劫持。
* **为什么 Vue 3.0 中使用 Proxy 了？**
   * Vue 中使用 Object.defineProperty 进行双向数据绑定时，告知使用者是可以监听数组的，但是只是监听了数组的 push()、pop()、shift()、unshift()、splice()、sort()、reverse() 这八种方法，其他数组的属性检测不到。
   * Object.defineProperty 只能劫持对象的属性，因此对每个对象的属性进行遍历时，如果属性值也是对象需要深度遍历，那么就比较麻烦了，所以在比较 Proxy 能完整劫持对象的对比下，选择 Proxy。
   * 为什么 Proxy 在 Vue 2.0 编写的时候出来了，尤大却没有用上去？因为当时 es6 环境不够成熟，兼容性不好，尤其是这个属性无法用 polyfill 来兼容。（polyfill 是一个 js 库，专门用来处理 js 的兼容性问题-js 修补器）
* 参考自[《实现双向绑定Proxy比defineproperty优劣如何》](https://www.jianshu.com/p/2df6dcddb0d7)
  
答案二：利用Object.defineProperty劫持对象的访问器,在属性值发生变化时我们可以获取变化,然后根据变化进行后续响应,在vue3.0中通过Proxy代理对象进行类似的操作。
```javascript
// 这是将要被劫持的对象
const data = {
    name: '',
};
function say(name) {
    if (name === '古天乐') {
        console.log('给大家推荐一款超好玩的游戏');
    } else if (name === '渣渣辉') {
        console.log('戏我演过很多,可游戏我只玩贪玩懒月');
    } else {
        console.log('来做我的兄弟');
    }
}
// 遍历对象,对其属性值进行劫持
Object.keys(data).forEach(function(key) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            console.log('get');
        },
        set: function(newVal) {
            // 当属性值发生变化时我们可以进行额外操作
            console.log(`大家好,我系${newVal}`);
            say(newVal);
        },
    });
});
data.name = '渣渣辉';
//大家好,我系渣渣辉
//戏我演过很多,可游戏我只玩贪玩懒月

```

### 27. Virtual DOM
* Vue 在 render 中 createElement 的时候，并不是产生真实的 DOM 元素，实际上 createElement 描述为 createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点。因此，我们将这样的节点描述为 “虚拟节点”（Virtual Node），简称 VNode。“虚拟 DOM” 是我们对由 Vue 组件树建立的整个 VNode 树的称呼。作为一枚切图仔，很荣幸地跟小伙伴说：“其实我也不懂 Virtual DOM！”但是，总会有些面试场合会提到的，所以这里找了几篇资料，小伙伴们可以进一步学习：
   * [《Vue原理解析之Virtual Dom》](https://segmentfault.com/a/1190000008291645?utm_source=tag-newest)
   * [《virtual-dom(Vue实现)简析》](https://segmentfault.com/a/1190000010090659)

* 另一个答案
```text
 一、什么是vdom？
   Virtual DOM 用JS模拟DOM结构
   二、为何要用vdom？
   1. DOM操作非常非常“rang贵”，将DOM对比操作放在JS层，提高效率
   2. DOM结构的对比，放在JS层来做（图灵完备语言：能实现逻辑代码的语言）
   三、vdom核心函数有哪些 核心函数：
      核心函数：
      h('标签名', {...属性名...}, [...子元素...])
      h('标签名', {...属性名...}, '.........')
      patch(container, vnode)
      patch(vnode, newVnode)
```
  


* 答案三：[https://juejin.im/post/5c64d15d6fb9a049d37f9c20#heading-62](https://juejin.im/post/5c64d15d6fb9a049d37f9c20#heading-62)


### 28. template 编译
   * Vue template 编译的理解Vue 中 template 就是先转化成 AST 树，再得到 render 函数返回 VNode（Vue 的虚拟 DOM 节点）。
   * 通过 compile 编译器把 template 编译成 AST 语法树（abstract syntax tree - 源代码的抽象语法结构的树状表现形式），compile 是 createCompiler 的返回值，createCompiler 是用以创建编译器的。另外 compile 还负责合并 option。
   * AST 会经过 generate（将 AST 语法树转换成 render function 字符串的过程）得到 render 函数，render 的返回值是 VNode，VNode 是 Vue 的虚拟 DOM 节点，里面有标签名、子节点、文本等待。

### 29. nextTick
* 用法：Vue.nextTick( [callback, context] )
* 参数：
   * {Function} [callback]
   * {Object} [context]
* 说明：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
* 案例：
```javascript
// 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
    // DOM 更新了
})
// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
Vue.nextTick().then(function () {
    // DOM 更新了
})
```
关于 nextTick 的更多理解，需要学习的小伙伴可以查看：
* [《Vue.nextTick 的原理和用途》](https://segmentfault.com/a/1190000012861862)
  
* 答案二：
   在下次dom更新循环结束之后执行延迟回调，可用于获取更新后的dom状态
   * 新版本中默认是microtasks, v-on中会使用macrotasks
   * macrotasks任务的实现:
      * setImmediate / MessageChannel / setTimeout

### 30. scoped属性作用
* 在Vue文件中的style标签上有一个特殊的属性，scoped。当一个style标签拥有scoped属性时候，它的css样式只能用于当前的Vue组件，可以使组件的样式不相互污染。如果一个项目的所有style标签都加上了scoped属性，相当于实现了样式的模块化。scoped属性的实现原理是给每一个dom元素添加了一个独一无二的动态属性，给css选择器额外添加一个对应的属性选择器，来选择组件中的dom。
```html
<template>
    <div className="box">dom</div>
</template>
<style lang="scss" scoped>
    .box{
    background:red;
}
</style>
```

### 31. scoped样式穿透
* scoped虽然避免了组件间样式污染，但是很多时候我们需要修改组件中的某个样式，但是又不想去除scoped属性。
```html
// 1. 使用/deep/
//Parent
<template>
    <div class="wrap">
        <Child />
    </div>
</template>
<style lang="scss" scoped>
    .wrap /deep/ .box{
    background: red;
}
</style>
//Child
<template>
    <div class="box"></div>
</template>

// 1. 使用两个style标签
//Parent
<template>
<div class="wrap">
    <Child />
    </div>
</template>
<style lang="scss" scoped>
//其他样式
</style>
<style lang="scss">
.wrap .box{
background: red;
}
</style>
//Child
<template>
<div class="box"></div>
</template>
```

### 32. ref的作用
* 获取dom元素this.$refs.box
* 获取子组件中的datathis.$refs.box.msg
* 调用子组件中的方法this.$refs.box.open()

### 33. computed和watch区别
* 1.当页面中有某些数据依赖其他数据进行变动的时候，可以使用计算属性computed。
  ```html
   <template>{{fullName}}</template>
   ```

  ```javascript
   export default {
   data(){
   return {
   firstName: 'xie',
   lastName: 'yu fei',
   }
   },
   computed:{
   fullName: function(){
   return this.firstName + ' ' + this.lastName
   }
   }
   }
   ```
* 2.watch用于观察和监听页面上的vue实例，如果要在数据变化的同时进行异步操作或者是比较大的开销，那么watch为最佳选择。

```vue
<template>{{fullName}}</template>
export default {
data(){
return {
firstName: 'xie',
lastName: 'xiao fei',
fullName: 'xie xiao fei'
}
},
watch:{
firstName(val) {
this.fullName = val + ' ' + this.lastName
},
lastName(val) {
this.fullName = this.firstName + ' ' + val
}
}
}

```

### 34. 你是如何理解Vue的响应式系统的?
   <img src="https://github.com/yuanweiqianyu/interview/blob/master/07Vue/src/imgs/vue响应式系统.png" alt="Vue的响应式系统" />

* 响应式系统简述:
   * 任何一个 Vue Component 都有一个与之对应的 Watcher 实例。
   * Vue 的 data 上的属性会被添加 getter 和 setter 属性。
   * 当 Vue Component render 函数被执行的时候, data 上会被 触碰(touch), 即被读, getter 方法会被调用, 此时 Vue 会去记录此 Vue component 所依赖的所有 data。(这一过程被称为依赖收集)
   * data 被改动时（主要是用户操作）, 即被写, setter 方法会被调用, 此时 Vue 会去通知所有依赖于此 data 的组件去调用他们的 render 函数进行更新。


  相似问题二：
   ```text
   数据响应(数据劫持)
   看完生命周期后，里面的watcher等内容其实是数据响应中的一部分。数据响应的实现由两部分构成: 观察者( watcher ) 和 依赖收集器( Dep )，其核心是 defineProperty这个方法，它可以 重写属性的 get 与 set 方法，从而完成监听数据的改变。
   • Observe (观察者)观察 props 与 state 
           ○ 遍历 props 与 state，对每个属性创建独立的监听器( watcher )
       • 使用 defineProperty 重写每个属性的 get/set(defineReactive）
   ○ get: 收集依赖 
               § Dep.depend() 
                   □ watcher.addDep()
           ○ set: 派发更新 
               § Dep.notify()
               § watcher.update()
               § queenWatcher()
               § nextTick
               § flushScheduleQueue
               § watcher.run()
               § updateComponent()
   大家可以先看下面的数据相应的代码实现后，理解后就比较容易看懂上面的简单脉络了。
   let data = {a: 1}
   // 数据响应性
   observe(data)
   // 初始化观察者
   new Watcher(data, 'name', updateComponent)
   data.a = 2
   // 简单表示用于数据更新后的操作
   function updateComponent() {
       vm._update() // patchs
   }
   // 监视对象
   function observe(obj) {
       // 遍历对象，使用 get/set 重新定义对象的每个属性值
       Object.keys(obj).map(key => {
           defineReactive(obj, key, obj[key])
       })
   }
   function defineReactive(obj, k, v) {
       // 递归子属性
       if (type(v) == 'object') observe(v)
   
       // 新建依赖收集器
       let dep = new Dep()
       // 定义get/set
       Object.defineProperty(obj, k, {
           enumerable: true,
           configurable: true,
           get: function reactiveGetter() {
               // 当有获取该属性时，证明依赖于该对象，因此被添加进收集器中
               if (Dep.target) {
                   dep.addSub(Dep.target)
               }
               return v
           },
           // 重新设置值时，触发收集器的通知机制
           set: function reactiveSetter(nV) {
               v = nV
               dep.nofify()
           },
       })
   }
   // 依赖收集器
   class Dep {
       constructor() {
           this.subs = []
       }
       addSub(sub) {
           this.subs.push(sub)
       }
       notify() {
           this.subs.map(sub => {
               sub.update()
           })
       }
   }
   Dep.target = null
   // 观察者
   class Watcher {
       constructor(obj, key, cb) {
           Dep.target = this
           this.cb = cb
           this.obj = obj
           this.key = key
           this.value = obj[key]
           Dep.target = null
       }
       addDep(Dep) {
           Dep.addSub(this)
       }
       update() {
           this.value = this.obj[this.key]
           this.cb(this.value)
       }
       before() {
           callHook('beforeUpdate')
       }
   }
   
   ```

### 35. 父子组件通讯
```text
关于 Vue 中的父子组件通讯，相信经常开发 Vue 的小伙伴比 jsliang 知道的多很多。
没怎么使用 Vue 的小伙伴可以看下下面的文章，并尝试自己写一写：
• 《Vue 中关于 $emit 的用法》
下面咱讲下使用 bus.js 实现非父子组件通讯：
假设在工作中，有三个 .vue 文件：A.vue、B.vue、C.vue。A.vue 是主页面，B.vue 和 C.vue 类似于头部导航条和底部导航栏。现在，B.vue 点击会切换路由，C.vue 需要获取 B.vue 传递的信息。
	A.vue
    <template>
    <div>
    <top-nav></top-nav>
<div class="container">
    <router-view></router-view>
</div>
<bottom-nav></bottom-nav>
</div>
</template>
复制代码
bus.js
import Vue from 'vue';
// 使用 Event Bus
const bus = new Vue();
export default bus;
复制代码
B.vue
<template>
<div class="bottom-nav">
<div class="nav-one" @click="goToPage({path: '/HomeIndex', meta:'首页'})">
<i class="icon-home"></i>
<span>首页</span>
</div>
</div>
</template>
<script>
import bus from '../utils/bus'
export default {
methods: {
goToPage(route) {
this.$router.push(route.path);
bus.$emit('meta', route.meta);
}
}
}
</script>
复制代码
C.vue
<template>
<div class="top-nav">
<span class="title">{{title}}</span>
</div>
</template>
<script>
import bus from '../utils/bus'
export default {
data() {
return {
title: ''
}
},
created() {
bus.$on('meta', msg=> {
this.title = msg;
})
}
}
</script>
```
### 36. vue-router导航守卫
```text
一、导航守卫大体分为三类：
1. 全局守卫钩子
2. 独享守卫钩子
3. 路由组件守卫钩子
复制代码
二、全局守卫钩子（在路由切换全局执行）
全局守卫钩子函数有三种：
const router = new VueRouter({....})
// 全局前置守卫
router.beforeEach((to, from, next) => {
    // do something
})
// 全局解析守卫
router.beforeResolve((to, from, next) => {
    // do something
})
// 全局后置守卫
router.afterEach((to, from) => {
    // do something
})
注意：
	to：route即将进入的路由
from：route即将离开的路由
next：function这个是必须要调用的
next()接受参数：
  next()：直接执行下一个钩子，如果执行完了导航状态为comfirmed状态
next(false)：中断当前导航，回到from的位置
next('/hello')或next({path:'/hello'})：路由到任意地址，可以携带参数等
next(error)：会回到router.onError(callback)
复制代码
三、独享守卫钩子
独享守卫是定义在单独的某一个路由里的
const router = new VueRouter({
    routes: [
        {
            path: '/foo',
            component: Foo,
            beforeEnter: (to, from, next) => {
                // do something
            },
            beforeLeave: (to, from, next) => {
                // do something
            }
        }
    ]
})
复制代码
四、路由组件守卫钩子
路由组件即是在vue-router中注册的组件叫路由组件
beforeRouteEnter(to, from, next) {}
beforeRouteUpdate(to, from, next) {}
beforeRouteLeave(to,from, next){}

```

### 37. Vuex的理解及使用场景
```text
Vuex 是一个专为 Vue 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。
1. Vuex 的状态存储是响应式的；当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新
2. 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation，这样使得我们可以方便地跟踪每一个状态的变化
复制代码
Vuex主要包括以下几个核心模块：
 	1. State：定义了应用的状态数据
2. Getter：在 store 中定义“getter”（可以认为是 store 的计算属性），就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
3. Mutation：是唯一更改 store 中状态的方法，且必须是同步函数
4. Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作
5. Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中
复制代码
Vuex架构图

```

### 38. Vue底层实现原理
```text
vue.js是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter和getter，在数据变动时发布消息给订阅者，触发相应的监听回调
Vue是一个典型的MVVM框架，模型（Model）只是普通的javascript对象，修改它则试图（View）会自动更新。这种设计让状态管理变得非常简单而直观
复制代码
Vue实现这种数据双向绑定的效果，需要三大模块:
    1. Observer：能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者.

2. Compile：对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数。
                          	        			3. Watcher：链接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应的回调函数，从而更新试图。
复制代码
Observer（数据监听器）
		Observer的核心是通过Object.defineProprtty()来监听数据的变动，这个函数内部可以定义setter和getter，每当数据发生变化，就会触发setter。这时候Observer就要通知订阅者，订阅者就是Watcher
Watcher（订阅者）
		Watcher订阅者作为Observer和Compile之间通信的桥梁，主要做的事情是：
			1.在自身实例化时往属性订阅器(dep)里面添加自己
2.自身必须有一个update()方法
3.待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调
Compile（指令解析器）
		Compile主要做的事情是解析模板指令，将模板中变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加鉴定数据的订阅者，一旦数据有变动，收到通知，更新试图
复制代码
若小伙伴想详细了解Vue的MVVM源码实现，请查看 MVVM原理
```

### 39. 既然Vue通过数据劫持可以精准探测数据变化,为什么还需要虚拟DOM进行diff检测差异?
* 考点: Vue的变化侦测原理
* 前置知识: 依赖收集、虚拟DOM、响应式系统
* 现代前端框架有两种方式侦测变化,一种是pull一种是push
* pull: 其代表为React,我们可以回忆一下React是如何侦测到变化的,我们通常会用setStateAPI显式更新,然后React会进行一层层的Virtual Dom Diff操作找出差异,然后Patch到DOM上,React从一开始就不知道到底是哪发生了变化,只是知道「有变化了」,然后再进行比较暴力的Diff操作查找「哪发生变化了」，另外一个代表就是Angular的脏检查操作。
* push: Vue的响应式系统则是push的代表,当Vue程序初始化的时候就会对数据data进行依赖的收集,一但数据发生变化,响应式系统就会立刻得知,因此Vue是一开始就知道是「在哪发生变化了」,但是这又会产生一个问题,如果你熟悉Vue的响应式系统就知道,通常一个绑定一个数据就需要一个Watcher,一但我们的绑定细粒度过高就会产生大量的Watcher,这会带来内存以及依赖追踪的开销,而细粒度过低会无法精准侦测变化,因此Vue的设计是选择中等细粒度的方案,在组件级别进行push侦测的方式,也就是那套响应式系统,通常我们会第一时间侦测到发生变化的组件,然后在组件内部进行Virtual Dom Diff获取更加具体的差异,而Virtual Dom Diff则是pull操作,Vue是push+pull结合的方式进行变化侦测的.
### 40. Vue为什么没有类似于React中shouldComponentUpdate的生命周期？
* 考点: Vue的变化侦测原理
* 前置知识: 依赖收集、虚拟DOM、响应式系统
* 根本原因是Vue与React的变化侦测方式有所不同
   * React是pull的方式侦测变化,当React知道发生变化后,会使用Virtual Dom Diff进行差异检测,但是很多组件实际上是肯定不会发生变化的,这个时候需要用shouldComponentUpdate进行手动操作来减少diff,从而提高程序整体的性能.
   * Vue是pull+push的方式侦测变化的,在一开始就知道那个组件发生了变化,因此在push的阶段并不需要手动控制diff,而组件内部采用的diff方式实际上是可以引入类似于shouldComponentUpdate相关生命周期的,但是通常合理大小的组件不会有过量的diff,手动优化的价值有限,因此目前Vue并没有考虑引入shouldComponentUpdate这种手动优化的生命周期.

### 41. 如何实现一个Event
```text
本文标题的题目是由其他问题延伸而来,面试中面试官的常用套路,揪住一个问题一直深挖,在产生这个问题之前一定是这个问题.
    React/Vue不同组件之间是怎么通信的?
    Vue
    1. 父子组件用Props通信
2. 非父子组件用Event Bus通信
3. 如果项目够复杂,可能需要Vuex等全局状态管理库通信
4. $dispatch(已经废除)和$broadcast(已经废除)
React
1. 父子组件,父->子直接用Props,子->父用callback回调
2. 非父子组件,用发布订阅模式的Event模块
3. 项目复杂的话用Redux、Mobx等全局状态管理管库
4. 用新的Context Api
我们大体上都会有以上回答,接下来很可能会问到如何实现Event(Bus),因为这个东西太重要了,几乎所有的模块通信都是基于类似的模式,包括安卓开发中的Event Bus,Node.js中的Event模块(Node中几乎所有的模块都依赖于Event,包括不限于http、stream、buffer、fs等).
我们仿照Node中Event API实现一个简单的Event库,他是发布订阅模式的典型应用.
    提前声明: 我们没有对传入的参数进行及时判断而规避错误,仅仅对核心方法进行了实现.
    基本构造
初始化class
我们利用ES6的class关键字对Event进行初始化,包括Event的事件清单和监听者上限.
    我们选择了Map作为储存事件的结构,因为作为键值对的储存方式Map比一般对象更加适合,我们操作起来也更加简洁,可以先看一下Map的基本用法与特点.
    class EventEmeitter {
    constructor() {
        this._events = this._events || new Map(); // 储存事件/回调键值对
        this._maxListeners = this._maxListeners || 10; // 设立监听上限
    }
}
监听与触发
触发监听函数我们可以用apply与call两种方法,在少数参数时call的性能更好,多个参数时apply性能更好,当年Node的Event模块就在三个参数以下用call否则用apply.
    当然当Node全面拥抱ES6+之后,相应的call/apply操作用Reflect新关键字重写了,但是我们不想写的那么复杂,就做了一个简化版.
// 触发名为type的事件
    EventEmeitter.prototype.emit = function(type, ...args) {
    let handler;
    // 从储存事件键值对的this._events中获取对应事件回调函数
    handler = this._events.get(type);
    if (args.length > 0) {
        handler.apply(this, args);
    } else {
        handler.call(this);
    }
    return true;
};
// 监听名为type的事件
EventEmeitter.prototype.addListener = function(type, fn) {
    // 将type事件以及对应的fn函数放入this._events中储存
    if (!this._events.get(type)) {
        this._events.set(type, fn);
    }
};
我们实现了触发事件的emit方法和监听事件的addListener方法,至此我们就可以进行简单的实践了.
// 实例化
    const emitter = new EventEmeitter();
// 监听一个名为arson的事件对应一个回调函数
emitter.addListener('arson', man => {
    console.log(`expel ${man}`);
});
// 我们触发arson事件,发现回调成功执行
emitter.emit('arson', 'low-end'); // expel low-end
似乎不错,我们实现了基本的触发/监听,但是如果有多个监听者呢?
    // 重复监听同一个事件名
    emitter.addListener('arson', man => {
        console.log(`expel ${man}`);
    });
emitter.addListener('arson', man => {
    console.log(`save ${man}`);
});
emitter.emit('arson', 'low-end'); // expel low-end
是的,只会触发第一个,因此我们需要进行改造.
    升级改造
监听/触发器升级
我们的addListener实现方法还不够健全,在绑定第一个监听者之后,我们就无法对后续监听者进行绑定了,因此我们需要将后续监听者与第一个监听者函数放到一个数组里.
// 触发名为type的事件
    EventEmeitter.prototype.emit = function(type, ...args) {
    let handler;
    handler = this._events.get(type);
    if (Array.isArray(handler)) {
        // 如果是一个数组说明有多个监听者,需要依次此触发里面的函数
        for (let i = 0; i < handler.length; i++) {
            if (args.length > 0) {
                handler[i].apply(this, args);
            } else {
                handler[i].call(this);
            }
        }
    } else { // 单个函数的情况我们直接触发即可
        if (args.length > 0) {
            handler.apply(this, args);
        } else {
            handler.call(this);
        }
    }
    return true;
};
// 监听名为type的事件
EventEmeitter.prototype.addListener = function(type, fn) {
    const handler = this._events.get(type); // 获取对应事件名称的函数清单
    if (!handler) {
        this._events.set(type, fn);
    } else if (handler && typeof handler === 'function') {
        // 如果handler是函数说明只有一个监听者
        this._events.set(type, [handler, fn]); // 多个监听者我们需要用数组储存
    } else {
        handler.push(fn); // 已经有多个监听者,那么直接往数组里push函数即可
    }
};
是的,从此以后可以愉快的触发多个监听者的函数了.
    // 监听同一个事件名
    emitter.addListener('arson', man => {
        console.log(`expel ${man}`);
    });
emitter.addListener('arson', man => {
    console.log(`save ${man}`);
});
emitter.addListener('arson', man => {
    console.log(`kill ${man}`);
});
// 触发事件
emitter.emit('arson', 'low-end');
//expel low-end
//save low-end
//kill low-end
移除监听
我们会用removeListener函数移除监听函数,但是匿名函数是无法移除的.
    EventEmeitter.prototype.removeListener = function(type, fn) {
    const handler = this._events.get(type); // 获取对应事件名称的函数清单
// 如果是函数,说明只被监听了一次
    if (handler && typeof handler === 'function') {
        this._events.delete(type, fn);
    } else {
        let postion;
        // 如果handler是数组,说明被监听多次要找到对应的函数
        for (let i = 0; i < handler.length; i++) {
            if (handler[i] === fn) {
                postion = i;
            } else {
                postion = -1;
            }
        }
        // 如果找到匹配的函数,从数组中清除
        if (postion !== -1) {
            // 找到数组对应的位置,直接清除此回调
            handler.splice(postion, 1);
            // 如果清除后只有一个函数,那么取消数组,以函数形式保存
            if (handler.length === 1) {
                this._events.set(type, handler[0]);
            }
        } else {
            return this;
        }
    }
};
发现问题
我们已经基本完成了Event最重要的几个方法,也完成了升级改造,可以说一个Event的骨架是被我们开发出来了,但是它仍然有不足和需要补充的地方.
1. 鲁棒性不足: 我们没有对参数进行充分的判断,没有完善的报错机制.
2. 模拟不够充分: 除了removeAllListeners这些方法没有实现以外,例如监听时间后会触发newListener事件,我们也没有实现,另外最开始的监听者上限我们也没有利用到.
    当然,这在面试中现场写一个Event已经是很够意思了,主要是体现出来对发布-订阅模式的理解,以及针对多个监听状况下的处理,不可能现场撸几百行写一个完整Event.
    索性Event库帮我们实现了完整的特性,整个代码量有300多行,很适合阅读,你可以花十分钟的时间通读一下,见识一下完整的Event实现.
```