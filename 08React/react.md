# React 面试题

### 1. react和vue的区别
* 相同点：
    * 数据驱动页面，提供响应式的试图组件
    * 都有virtual DOM,组件化的开发，通过props参数进行父子之间组件传递数据，都实现了webComponents规范
    * 数据流动单向，都支持服务器的渲染SSR
    * 都有支持native的方法，react有React native， vue有wexx
* 不同点：
    * 数据绑定：Vue实现了双向的数据绑定，react数据流动是单向的
    * 数据渲染：大规模的数据渲染，react更快
    * 使用场景：React配合Redux架构适合大规模多人协作复杂项目，Vue适合小快的项目
    * 开发风格：react推荐做法jsx + inline style把html和css都写在js了
      vue是采用webpack + vue-loader单文件组件格式，html, js, css同一个文件。

### 2. redux中的reducer（纯函数）
* Redux数据流里，reduces其实是根据之前的状态（previous state）和现有的action（current action）
* 更新state(这个state可以理解为上下累加器的结果）
* 每次redux reducer被执行时，state和action被传入，这个state根据action进行累加或者是'自身消减'(reduce), 进而返回最新的state,这也就是典型reduce函数的用法：state ->  action ->  state

### 3. react的refs
   refs就想一个逃生窗，允许我们之间访问dom元素或者组件实例，可以向组件添加一个ref属性的值是一个回调函数，
   它将接受地城dom元素或组件的已挂在实例，作为第一个参数

### 4. react中的keys
   帮组我们跟踪哪些项目已更改、添加、从列表中删除，key是独一无二的，可以让我们高效的去定位元素，并且操作它

### 5. React的生命周期
http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
* React 16之后有三个生命周期被废弃(但并未删除)
    * componentWillMount
    * componentWillReceiveProps
    * componentWillUpdate


官方计划在17版本完全删除这三个函数，只保留UNSAVE_前缀的三个函数，目的是为了向下兼容，但是对于开发者而言应该尽量避免使用他们，而是使用新增的生命周期函数替代它们


目前React 16.8 +的生命周期分为三个阶段,分别是挂载阶段、更新阶段、卸载阶段


挂载阶段:
* constructor: 构造函数，最先被执行,我们通常在构造函数里初始化state对象或者给自定义方法绑定this
* getDerivedStateFromProps: static getDerivedStateFromProps(nextProps, prevState),这是个静态方法,当我们接收到新的属性想去修改我们state，可以使用getDerivedStateFromProps
* render: render函数是纯函数，只返回需要渲染的东西，不应该包含其它的业务逻辑,可以返回原生的DOM、React组件、Fragment、Portals、字符串和数字、Boolean和null等内容
* componentDidMount: 组件装载之后调用，此时我们可以获取到DOM节点并操作，比如对canvas，svg的操作，服务器请求，订阅都可以写在这个里面，但是记得在componentWillUnmount中取消订阅
更新阶段:
* getDerivedStateFromProps: 此方法在更新个挂载阶段都可能会调用
*  shouldComponentUpdate(nextProps, nextState),有两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true,我们通常利用此生命周期来优化React程序性能
* render: 更新阶段也会触发此生命周期
* getSnapshotBeforeUpdate: getSnapshotBeforeUpdate(prevProps, prevState),这个方法在render之后，componentDidUpdate之前调用，有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，如果你不想要返回值，可以返回null，此生命周期必须与componentDidUpdate搭配使用
* componentDidUpdate: componentDidUpdate(prevProps, prevState, snapshot),该方法在getSnapshotBeforeUpdate方法之后被调用，有三个参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot。第三个参数是getSnapshotBeforeUpdate返回的,如果触发某些回调函数时需要用到 DOM 元素的状态，则将对比或计算的过程迁移至 getSnapshotBeforeUpdate，然后在 componentDidUpdate 中统一触发回调或更新状态。

### 6. React 请求应该放在哪个声明周期中
React的异步请求到底应该放在哪个生命周期里,有人认为在componentWillMount中可以提前进行异步请求,避免白屏,其实这个观点是有问题的.

由于JavaScript中异步事件的性质，当您启动API调用时，浏览器会在此期间返回执行其他工作。当React渲染一个组件时，它不会等待componentWillMount它完成任何事情 - React继续前进并继续render,没有办法“暂停”渲染以等待数据到达。

而且在componentWillMount请求会有一系列潜在的问题,首先,在服务器渲染时,如果在 componentWillMount 里获取数据，fetch data会执行两次，一次在服务端一次在客户端，这造成了多余的请求,其次,在React 16进行React Fiber重写后,componentWillMount可能在一次渲染中多次调用.

目前官方推荐的异步请求是在componentDidmount中进行.

如果有特殊需求需要提前请求,也可以在特殊情况下在constructor中请求:

react 17之后componentWillMount会被废弃,仅仅保留UNSAFE_componentWillMount

### 7. React如何进行组件/逻辑复用?

抛开已经被官方弃用的Mixin,组件抽象的技术目前有三种比较主流:
* 高阶组件:
    * 属性代理
    * 反向继承
* 渲染属性
* react-hooks

### 8. React组件通信如何实现? （React组件间通信方式）
* 父组件向子组件通讯: 父组件可以向子组件通过传 props 的方式，向子组件进行通讯
* 子组件向父组件通讯: props+回调的方式,父组件向子组件传递props进行通讯，此props为作用域为父组件自身的函数，子组件调用该函数，将子组件想要传递的信息，作为参数，传递到父组件的作用域中
* 兄弟组件通信: 找到这两个兄弟节点共同的父节点,结合上面两种方式由父节点转发信息进行通信
* 跨层级通信: Context设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言, 对于跨越多层的全局数据通过Context通信再适合不过
* 发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引入event模块进行通信
* 全局状态管理工具: 借助Redux或者Mobx等全局状态管理工具进行通信,这种工具会维护一个全局状态中心Store,并根据不同的事件产生新的状态
### 9. React子组件向父组件传值
父组件通过props 给子组件传递数据，子组件则是通过调用父组件传给它的函数给父组件传递数据。

### 10. React有哪些优化性能是手段?

### 11. [为什么虚拟DOM会提高性能](https://www.zhihu.com/question/29504639?sort=created)
虚拟DOM相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的doom操作，从而提高性能
具体实现步骤：
* 用JavaScript对象结构表示DOM树的结构；然后用这个树构建一个真正的DOM树，插到文档中
* 当状态变更的时候，重新构造一棵树的对象树，然后用新的树和旧的树进行对比，记录两棵树差异
* 把2所记录的差异应用到步骤1所构建的真正的DOM树上，试图就更新了。






