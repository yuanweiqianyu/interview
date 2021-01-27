
> * HTML 属于结构层，负责描绘出内容的结构。
>
> * CSS 属于表示层，负责如何显示有关内容。
>
> * JavaScript  属于行为层，负责内容应如何对事件做出反应。

## 1. 语义化是指使用恰当语义的html标签，让页面具有良好的结构与含义。

1. 去掉或者丢失样式的时候能够让页面呈现出清晰的结构
2. 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
3. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
4. 便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

## 2. Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?

* **<!DOCTYPE>** 是文档类型的简写，声明文档类型和DTD规范的，主要就是告知浏览器以何种模式来解析并渲染文档，不同的渲染模式会影响到浏览器对于 CSS 代码甚至 JavaScript 脚本的解析。 声明位于文档中的最前面，处于 `<html>` 标签之前。

* 严格模式与混杂模式如何区分？
  * CSS1Compat：标准模式，浏览器使用W3C的标准解析渲染页面；严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。
  * BackCompat：怪异模式，浏览器使用自己的怪异模式解析渲染页面。（如果没有声明DOCTYPE，默认就是这个模式）；在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
  * 近乎标准(almost      standards)模式： 会实施了一种表单元格尺寸的怪异行为（与IE7之前的单元格布局方式一致），除此之外符合标准定义

* 你知道多少种Doctype文档类型？
  该标签可声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。
  * HTML 4.01 规定了三种文档类型：Strict、Transitional 以及 Frameset。
  * XHTML 1.0 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。
  * Standards （标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页，而 Quirks（包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。

## 3. HTML、XML、XTML的区别

- HTML(超文本标记语言):      在html4.0之前HTML先有实现再有标准，导致HTML非常混乱和松散
- XML(可扩展标记语言):      主要用于存储数据和结构，可扩展，大家熟悉的JSON也是相似的作用，但是更加轻量高效，所以XML现在市场越来越小了
- XHTML(可扩展超文本标记语言):      基于上面两者而来，W3C为了解决HTML混乱问题而生，并基于此诞生了HTML5，开头加入`<!DOCTYPE>`的做法因此而来，如果不加就是兼容混乱的HTML，加了就是标准模式。

## 4. HTML与XHTML——二者有什么区别
1. 所有的标记都必须要有一个相应的结束标记
2. 所有标签的元素和属性的名字都必须使用小写
3. 所有的XML标记都必须合理嵌套
4. 所有的属性必须用引号""括起来
5. 把所有<和&特殊符号用编码表示
6. 给所有属性赋一个值
7. 不要在注释内容中使“--”
8. 图片必须有说明文字

## 5. DOM操作——怎样添加、移除、移动、复制、创建和查找节点。
1. 创建新节点
   createDocumentFragment() //创建一个DOM片段
   createElement() //创建一个具体的元素
   createTextNode() //创建一个文本节点

2. 添加、移除、替换、插入
- appendChild()
- removeChild()
- replaceChild()
- insertBefore() //并没有insertAfter()
- cloneNode（）

3. 查找
- getElementsByTagName() //通过标签名称
- getElementsByName() //通过元素的Name属性的值(IE容错能力较强，
- 会得到一个数组，其中包括id等于name值的)
- getElementById() //通过元素Id，唯一性
- getElementsByClassName() // 通过元素className的值

## 6. html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分      HTML 和 HTML5？
* 新特性：
  1. HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
  2. 拖拽释放(Drag       and drop) API
  3. 语义化更好的内容标签（header,nav,footer,aside,article,section）
  4. 音频、视频API(audio,video)
  5. 画布(Canvas)       API
  6. 地理(Geolocation)       API
  7. 本地离线存储
  -  localStorage 长期存储数据，浏览器关闭后数据不丢失；
  - sessionStorage 的数据在浏览器关闭后自动删除
  8. 表单控件，calendar、date、time、email、url、search
  9. 新的技术webworker,      websocket,Geolocation

* 移除的元素：
  - 纯表现的元素：basefont，big，center，font,      s，strike(s、strike 加删除线文本，被del代替)，tt(等宽字体)，u下划线)；
  - 对可用性产生负面影响的元素：frame， frameset，noframes；

* 支持HTML5新标签：
  - IE8/IE7/IE6支持通过document.createElement方法产生的标签，可以利用这一特性让这些浏览器支持HTML5新标签，
  - 当然最好的方式是直接使用成熟的框架、使用最多的是html5shim框架
    ```html
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
    <![endif]-->
    ```
* 如何区分： DOCTYPE声明\新增的结构元素\功能元素

> * HTML5与HTML4的不同之处（详细,答案二）
> 1. 文件类型声明（<!DOCTYPE>）仅有一型：。
> 2. 新的解析顺序：不再基于SGML。
> 3. 新的元素：section,       video, progress, nav, meter, time, aside, canvas, command, datalist,       details, embed, figcaption, figure, footer, header, hgroup, keygen,       mark, output, rp, rt, ruby, source, summary, wbr。
> 4. input元素的新类型：date,       email, url等等
> 5. 新的属性：ping（用于a与area）,       charset（用于meta）, async（用于script）
> 6. 全域属性：id,       tabindex, repeat。
> 7.  新的全域属性：contenteditable,       contextmenu, draggable, dropzone, hidden, spellcheck。
> 8.  移除元素：acronym,       applet, basefont, big, center, dir, font, frame, frameset, isindex,       noframes, strike, tt

## 7. 什么是data-属性？

- HTML的数据属性，用于将数据储存于标准的HTML元素中作为额外信息,我们可以通过js访问并操作它，来达到操作数据的目的。
	```html
		<article
       id="electriccars"
       data-columns="3"
       data-index-number="12314"
       data-parent="cars">
      ...
      </article>
	```
  

## 8. 有哪些常用的meta标签？
**meta**标签由 name 和 contetmlnt 两个属性来定义，来描述一个HTML网页文档的元信息，例如作者、日期和时间、网页描述、关键词、页面刷新等，除了一些http标准规定了一些name作为大家使用的共识，开发者也可以自定义name。

*  charset，用于描述HTML文档的编码形式
* http-equiv，顾名思义，相当于http的文件头作用,比如下面的代码就可以设置http的缓存过期日期
  ```html
  ＜meta http-equiv="expires" content="Wed, 20 Jun 2019 22:33:00 GMT"＞
  ```
*  viewport，移动前端最熟悉不过，Web开发人员可以控制视口的大小和比例
  ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",viewport-fit=cover>
  ```
  -  initial-scale：初始的缩放比例 
  - minimum-scale：允许用户缩放到的最小比例 
  - maximum-scale：允许用户缩放到的最大比例 
  - user-scalable：用户是否可以手动缩放
*  apple-mobile-web-app-status-bar-style,开发过PWA应用的开发者应该很熟悉，为了自定义苹果工具栏的颜色。
## 9. script标签中defer和async的区别？

* defer：浏览器指示脚本在文档被解析后执行，script被异步加载后并不会立刻执行，而是等待文档被解析完毕后执行。
* async：同样是异步加载脚本，区别是脚本加载完毕后立即执行，这导致async属性下的脚本是乱序的，对于script有先后依赖关系的情况，并不适用。
## 10. src和href的区别？

* src是指向外部资源的位置，指向的内容会嵌入到文档中当前标签所在的位置，在请求src资源时会将其指向的资源下载并应用到文档内，如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，所以一般js脚本会放在底部而不是头部。
* href是指向网络资源所在位置（的超链接），用来建立和当前元素或文档之间的连接，当浏览器识别到它他指向的文件时，就会并行下载资源，不会停止对当前文档的处理。

## 11. 知道img的srcset的作用是什么？（追问）
可以设计响应式图片，我们可以使用两个新的属性 srcset 和 sizes 来提供更多额外的资源图像和提示，帮助浏览器选择正确的一个资源。
* srcset 定义了我们允许浏览器选择的图像集，以及每个图像的大小。
*  sizes 定义了一组媒体条件（例如屏幕宽度）并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择。
   所以，有了这些属性，浏览器会：
  * 查看设备宽度
  * 检查 sizes 列表中哪个媒体条件是第一个为真
  * 查看给予该媒体查询的槽大小
  * 加载 srcset 列表中引用的最接近所选的槽大小的图像
  
  * srcset提供了根据屏幕条件选取图片的能力
```html
   <img src="clock-demo-thumb-200.png"
     alt="Clock"
     srcset="clock-demo-thumb-200.png 200w,
             clock-demo-thumb-400.png 400w"
     sizes="(min-width: 600px) 200px, 50vw">
```

## 12. 还有哪一个标签能起到跟srcset相似作用？（追问）

* `<picture>`元素通过包含零或多个 `<source>` 元素和一个` <img>`元素来为不同的显示/设备场景提供图像版本。浏览器会选择最匹配的子` <source>` 元素，如果没有匹配的，就选择 `<img>` 元素的 src 属性中的URL。然后，所选图像呈现在`<img>`元素占据的空间中
*  `<picture>`同样可以通过不同设备来匹配不同的图像资源
```html
 <picture>
      <source srcset="/media/examples/surfer-240-200.jpg"
          media="(min-width: 800px)">
      <img src="/media/examples/painted-hand-298-332.jpg" />
  </picture>
```

## 13. 如何实现浏览器内多个标签页之间的通信?
调用localstorge、cookies等本地存储方式

## 14. 有几种前端储存的方式？这些方式的区别是什么？
` cookies、localstorage、sessionstorage、Web SQL、IndexedDB`

* 区别：
  * cookies：      在HTML5标准前本地储存的主要方式，优点是兼容性好，请求头自带cookie方便，缺点是大小只有4k，自动请求头加入cookie浪费流量，每个domain限制20个cookie，使用起来麻烦需要自行封装。如果不设置时间，则在浏览器关闭窗口的时候会消失。
  * localStorage：HTML5加入的以键值对(Key-Value)为标准的方式，优点是操作方便，永久性储存（除非手动删除），大小为5M，兼容IE8+
  * sessionStorage：与localStorage基本类似，区别是sessionStorage当页面关闭后会被清理，而且与cookie、localStorage不同，他不能在所有同源窗口中共享，是会话级别的储存方式
  * Web SQL：2010年被W3C废弃的本地数据库数据存储方案，但是主流浏览器（火狐除外）都已经有了相关的实现，web      sql类似于SQLite，是真正意义上的关系型数据库，用sql进行操作，当我们用JavaScript时要进行转换，较为繁琐。
  * IndexedDB：是被正式纳入HTML5标准的数据库储存方案，它是NoSQL数据库，用键值对进行储存，可以进行快速读取操作，非常适合web场景，同时用JavaScript进行操作会非常方便。

## 15. 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？
* FOUC - FlashOf Unstyled Content 文档样式闪烁
  `<styletype="text/css"media="all">@import"../fouc.css";</style>`
  而引用CSS文件的`@import`就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。
* 解决方法简单的出奇，只要在`<head>`之间加入一个`<link>`或者`<script>`元素就可以了。

## 16. 列举IE 与其他浏览器不一样的特性？
1. IE支持currentStyle，FIrefox使用getComputStyle
2. IE  使用innerText，Firefox使用textContent
3. 滤镜方面：IE:filter:alpha(opacity= num)；Firefox：-moz-opacity:num
4. 事件方面：IE：attachEvent：火狐是addEventListener
5. 鼠标位置：IE是event.clientX；火狐是event.pageX
6. IE使用event.srcElement；Firefox使用event.target
7. IE中消除list的原点仅需margin:0即可达到最终效果；FIrefox需要设置margin:0;padding:0以及list-style:none
8.  CSS圆角：ie7以下不支持圆角

## 17. 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？
分为4个步骤：
1. 当发送一个URL请求时，不管这个URL是Web页面的URL还是Web页面上每个资源的URL，浏览器都会开启一个线程来处理这个请求，同时在远程DNS服务器上启动一个DNS查询。这能使浏览器获得请求对应的IP地址。
2.  浏览器与远程`Web`服务器通过`TCP`三次握手协商来建立一个`TCP/IP`连接。该握手包括一个同步报文，一个同步-应答报文和一个应答报文，这三个报文在浏览器和服务器之间传递。该握手首先由客户端尝试建立起通信，而后服务器应答并接受客户端的请求，最后由客户端发出该请求已经被接受的报文。
3.  一旦`TCP/IP`连接建立，浏览器会通过该连接向远程服务器发送`HTTP`的`GET`请求。远程服务器找到资源并使用HTTP响应返回该资源，值为200的HTTP响应状态表示一个正确的响应。
4. 此时，`Web`服务器提供资源服务，客户端开始下载资源。
5. 请求返回后，便进入了我们关注的前端模块
6. 简单来说，浏览器会解析`HTML`生成`DOM Tree`，其次会根据CSS生成CSS Rule Tree，而`javascript`又可以根据`DOM API`操作`DOM`
* 详细参考：[一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？]()

## 18. 浏览器渲染的主要流程是什么?
1. 浏览器获取HTML文件，然后对文件进行解析，按照深度优先遍历来形成DOM Tree
2. 与此同时，进行CSS解析，生成Style      Rules
3. 接着将DOM      Tree与Style Rules合成为 Render Tree
4. 接着进入布局（Layout）阶段，也就是为每个节点分配一个应出现在屏幕上的确切坐标
5. 随后调用GPU进行绘制（Paint），遍历Render      Tree的节点，并将元素呈现出来

> * 答案二:
> * 浏览器渲染原理及流程 DOM -> CSSOM -> render -> layout -> print
> * 流程：解析html以及构建dom树 -> 构建render树 -> 布局render树 -> 绘制render树
> * 概念：
    >     1. 构建DOM树： 渲染引擎解析HTML文档，首先将标签转换成DOM树中的DOM node(包括js生成的标签)生成内容树
>     2. 构建渲染树： 解析对应的css样式文件信息（包括js生成的样式和外部的css）
>     3. 布局渲染树：从根节点递归调用，计算每一个元素的大小，位置等。给出每个节点所在的屏幕的精准位置
>     4. 绘制渲染树：遍历渲染树，使用UI后端层来绘制每一个节点
>

## 19. 浏览器如何解析css选择器？
- 浏览器会『从右往左』解析CSS选择器。

> 我们知道DOM Tree与Style Rules合成为 Render Tree，实际上是需要将*Style Rules*附着到DOM Tree上，因此需要根据选择器提供的信息对DOM Tree进行遍历，才能将样式附着到对应的DOM元素上。
> 以下这段css为例
>   ```
>    mod-nav h3 span {font-size: 16px;}
>   ```
> 我们对应的DOM Tree 如下
<img src="https://github.com/yuanweiqianyu/interview/blob/master/01Html/img/css-selector.png?raw=true" style="zoom:50%;" />
> - 若从左向右的匹配，过程是：
    >   1. 从 .mod-nav 开始，遍历子节点 header 和子节点 div
>   2. 然后各自向子节点遍历。在右侧      div 的分支中
>   3. 最后遍历到叶子节点 a ，发现不符合规则，需要回溯到 ul 节点，再遍历下一个 li-a，一颗DOM树的节点动不动上千，这种效率很低。
> - 如果从右至左的匹配：
    >   1. 先找到所有的最右节点 span，对于每一个 span，向上寻找节点 h3
>   2. 由      h3再向上寻找 class=mod-nav 的节点
>   3. 最后找到根元素      html 则结束这个分支的遍历。
> - 后者匹配性能更好，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点）；而从左向右的匹配规则的性能都浪费在了失败的查找上面。
>


## 20. 重绘和重排的区别

- **重绘（repaint或redraw）**：重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。当盒子的位置、大小以及其他属性。重绘发生在元素的可见的外观被改变，但并没有影响到布局的时候。比如，仅修改DOM元素的字体颜色（只有Repaint，因为不需要调整布局）

- **重排（重构/回流/reflow）**：当渲染树中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建, 这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候。

- 重排必定会引发重绘，但重绘不一定会引发重排。

- **触发重排的条件**：任何页面布局和几何属性的改变都会触发重排：
  1. 页面渲染初始化(无法避免)
  2. 添加或删除可见的DOM元素；例：`display:none; visibility: hidden;`
  3. 元素位置的改变，或者使用动画
  4. 元素尺寸的改变——大小，外边距，边框
  5. 填充内容的改变，比如文本的改变或图片大小改变而引起的计算值宽度和高度的改变
  6. 浏览器窗口尺寸的变化

- **如何避免重绘或者重排？**
  1. **集中改变样式**
     我们往往通过改变class的方式来集中改变样式
      ```javascript
     // 判断是否是黑色系样式
     const theme = isDark ? 'dark' : 'light'
     // 根据判断来设置不同的class
     ele.setAttribute('className', theme)
      ```
  2. **使用DocumentFragment**
     我们可以通过createDocumentFragment创建一个游离于DOM树之外的节点，然后在此节点上批量操作，最后插入DOM树中，因此只触发一次重排
     
      ```javascript
      var fragment = document.createDocumentFragment();
      for (let i = 0;i<10;i++){
           let node = document.createElement("p");
           node.innerHTML = i;
           fragment.appendChild(node);
          }
      document.body.appendChild(fragment);
      ```
3. **提升为合成层**
  
      * 将元素提升为合成层有以下优点：
          * 合成层的位图，会交由  GPU 合成，比 CPU 处理要快
          * 当需要      repaint 时，只需要 repaint 本身，不会影响到其他的层
          * 对于      transform 和 opacity 效果，不会触发 layout 和 paint
      * 提升合成层的最好方式是使用 CSS 的 will-change 属性：
          ```css
          #target {
               will-change: transform;
              }
          ```
  - 关于合成层的详解请移步[无线性能优化：Composite](https://fed.taobao.org/blog/2016/04/26/performance-composite/)

## 21. ie各版本和chrome可以并行下载多少个资源
IE6 两个并发，iE7升级之后的6个并发，之后版本也是6个; Firefox，chrome也是6个

## 22. 事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
1. **事件**：我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。
2. **事件处理机制**：IE是事件冒泡、firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件。；
    * 取消冒泡：`ev.stopPropagation()`;注意旧ie的方法`ev.cancelBubble = true`;
    * 取消默认行为：w3c的方法是e.preventDefault()，IE则是使用`e.returnValue = false;`

## 23. 常见的浏览器内核有哪些？
- 常见的浏览器内核：

  - Trident内核：IE，360，搜过浏览器；
  - Gecko内核：Netscape6及以上版本，Firefoxs，
  - Presto内核：Opera
  - Blink内核：Opera、Chrome；
  - Webkit内核：Safari，Chrome

- 辨别不停的浏览器内核

  - 针对不同浏览器内核，HTML 辨别：
    * IE 内核浏览器识别：`<!--[if IE]><![endif]-->`
    * 非 IE 内核浏览器识别：`<!--[if !IE]><![endif]-->`
  - 针对不同浏览器内核，CSS 辨别：

      ```css
      /* 设置文字不可选取 */
      {
      -moz-user-select: none; /* 火狐 浏览器 */
      -webkit-user-select: none; /* Webkit 浏览器 */
      -o-user-select: none; /* Opera 浏览器 */
      -ms-user-select: none; /* IE10 浏览器 */
      -khtml-user-select: none; /* 早期浏览器 */
      user-select: none; /* 默认 */
      }
      ```

## 24. 说说严格模式的限制
* 严格模式的限制：
    1. 变量必须声明后再使用
    2. 函数的参数不能有同名属性，否则报错
    3. 不能使用with语句
    4. 禁止this指向全局对象
    5. 不能使用前缀0表示八进制数，否则报错
    6. 不能对只读属性赋值，否则报错;
       不能删除不可删除的属性，否则报错;
       不能删除变量delete prop，会报错，只能删除属性`delete global[prop]`;
    7. eval不会在它的外层作用域引入变量、
    8. eval和arguments不能被重新赋值
    9. arguments不会自动反映函数参数的变化;
       不能使用arguments.callee;
       不能使用arguments.caller[ˈkɔːlər];
    10. 不能使用fn.caller和fn.arguments获取函数调用的堆栈
    11. 增加了保留字（比如protected、static和interface）
* 设立”严格模式”的目的，主要有以下几个：
    1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
    
    2. 消除代码运行的一些不安全之处，保证代码运行的安全；
    
  3. 提高编译器效率，增加运行速度；
  
  4. 为未来新版本的Javascript做好铺垫。
  
* 注：经过[测试](https://link.zhihu.com/?target=http%3A//lib.csdn.net/base/softwaretest)IE6,7,8,9均不支持严格模式。
* 参考：
  - **arguments.callee** 属性包含当前正在执行的函数。
    [arguments.callee](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - 废弃的 **arguments.caller** 属性原先用在函数执行的时候调用自身。本属性已被移除且不再有用。