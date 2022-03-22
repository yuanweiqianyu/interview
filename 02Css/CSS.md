## 1. position的值， relative和absolute分别是相对于谁进行定位的？

（思路：可以从是否脱离文档流，占据位置；依据的什么父级元素定位；z-index。）

- absolute：绝对定位，相对于最近一级的 定位不是 static 的父元素来进行定位，脱离了文档流。通常是参照浏览器的左上角，配合TOP、RIGHT、BOTTOM、LEFT(下面简称TRBL)进行定位，在没有设定TRBL，默认依据父级的做标原始点为原始点。

- relative：相对定位，相对于其在普通流中的位置进行定位。他是参照父级的原始点为原始点，无父级则以BODY的原始点为原始点，配合TRBL进行定位，当父级内有padding等CSS属性时，当前级的原始点则参照父级内容区的原始点进行定位。可通过z-index进行层次分级     。

补:

- Static：默认值。没有定位，元素出现在正常的流中。不能通过z-index设置层级。
- fixed ：固定定位。（老IE不支持）生成绝对定位的元素，通常相对于浏览器窗口或 frame 进行定位。
- sticky：粘性定位。不脱离文档流，仍然保留元素原本在文档流中的位置。生成粘性定位的元素，容器的位置根据正常文档流计算得出.例：通常作为导航栏操作。

参考资料：

[position](https://www.cnblogs.com/ning123/p/11050487.html)、[sticky](https://segmentfault.com/a/1190000018861422)

## 2. position的absolute与fixed共同点与不同点

   - 共同点：      改变行内元素的呈现方式，display被置为block 让元素脱离普通流，不占据空间 默认会覆盖到非定位元素上
   - 不同点：      absolute的”根元素“是可以设置的 fixed的”根元素“固定为浏览器窗口。当你滚动网页，fixed元素与浏览器窗口之间的距离是不变的。

## 3. position:absolute和float属性的异同

*  共同点：对内联元素设置float和absolute属性，可以让元素脱离文档流，并且可以设置其宽高。

*  不同点：float仍会占据位置，absolute会覆盖文档流中的其他元素。

## 4. 谈谈浮动和他的工作原理，能够引起哪些问题？怎么清除浮动

- 是什么：浮动的框可以向左或向右移动，直到他的外边缘碰到包含框或另一个浮动框的边框为止，可以通过margin调整位置。
- 工作原理：浮动元素脱离文档流，不占据空间。浮动的块框会漂浮在文档普通流的块框上。
- 引起的问题：

  （1）父元素的高度无法被撑开，影响与父元素同级的元素

  （2）与浮动元素同级的非浮动元素（内联元素）会跟随其后

  （3）若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构

- 清除浮动的方法：

  1. 额外标签法，`<div style="clear:both;"></div>`（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。） 

  2. 使用after伪类，使用中需注意以下几点: 
   (1). 该方法中必须为需要清除浮动元素的伪对象中设置 `height:0`，否则该元素会比实际高出若干像素。
     (2).content属性是必须的。
  
     ```javascript
         #parent:after{
           content:".";
           height:0;
           visibility:hidden;
           display:block;
           clear:both;
       }
     ```

  4. 给父元素设置`overflow:hidden`或者`overflow:auto`，     `zoom:1`用于兼容IE6。（缺点：不过使用overflow的时候，可能会对页面表现带来影响，而且这种影响是不确定的）
  
  4. 浮动外部元素
  
## 5. CSS中link 和@import的区别是？

  1. link属于HTML标签，而@import是CSS提供的样式文件的读取方式;

  2. 页面被加载的时，link会同时被加载 ，而@import被引用的CSS会等到引用它的CSS文件被加载完再加载;

  3. import只在IE5以上才能识别，而link是HTML标签，无兼容问题;

  4. link方式的样式的权重 高于@import的权重.

## 6. 介绍一下box-sizing属性？

**box-sizing** 属性主要用来控制元素的盒模型的解析模式。默认值是`content-box`。

* content-box：让元素维持W3C的标准盒模型。元素的宽度/高度由border + padding + content的宽度/高度决定，设置width/height属性指的是content部分的宽/高

* border-box：让元素维持IE传统盒模型（IE6以下版本和IE6~7的怪异模式）。设置width/height属性指的是border + padding + content

标准浏览器下，按照W3C规范对盒模型解析，一旦修改了元素的边框或内距，就会影响元素的盒子尺寸，就不得不重新计算元素的盒子尺寸，从而影响整个页面的。

## 7. CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？

* 选择器类型：

    1. id选择器（ # myid）
    2. 类选择器（.myclassname）
    3. 标签选择器（div, h1, p）
    4. 相邻选择器（h1 + p)
    5. 兄弟选择器 匹配选择器（~）
    6. 子选择器（ul > li）
    7. 后代选择器（lia）
    8. 通配符选择器（ * ）
    9. 属性选择器（a[rel = "external"]）
    10. 伪类选择器（a:hover, li:nth-child）

* 优先级为: 不同级别：总结排序：!important > 行内样式>ID选择器 >class(( 类选择器) > 标签 > *(通配符) > 继承 > 浏览器默认属性

* CSS3新增伪类举例：

    p:first-of-type : 一组兄弟元素中其类型的第一个元素。

    p:last-of-type : p的父元素 的所有子元素中的最后一个选定元素，也包括子元素的最后一个子元素并以此类推。

    p:only-of-type : p内，任意一个元素，这个元素没有其他相同类型的兄弟元素。也包括子元素的子元素，所有后代。

    p:only-child ：p内，（每个子层级） 匹配没有任何兄弟元素的元素。

    p:nth-child(2) 选择所有兄弟元素的第二个子元素，并且是 <p>类型的 元素。

        ？:nth-child(an+b) 首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从1开始排序，选择的结果为CSS伪类:nth-child括号中表达式（an+b）匹配到的元素集合（n=0，1，2，3...），合集中为？类型的元素

        ？：nth-of-type(n)  具有一组兄弟节点的标签, 用 n 来筛选出在一组兄弟节点的位置。并且类型为？。

    :enabled :disabled控制表单控件的禁用状态。

    :checked 单选框或复选框被选中。



## 8. CSS3有哪些新特性？

1. CSS3实现圆角（border-radius）、阴影（box-shadow）、

对文字加特效（text-shadow、）、border-image

1. 线性渐变（gradient），

2. 旋转（transform），transform:rotate(9deg)     scale(0.85,0.90)translate(0px,-30px)skew(-9deg,0deg);//旋转,缩放,定位,倾斜

3.  transition 过渡效果

4. Animation 属性可以像Flash制作动画一样，通过控制关键帧来控制动画的每一步，实现更为复杂的动画效果。

5. 增加了更多的CSS选择器     多背景颜色定义方式 rgba

6. 在CSS3中唯一引入的伪元素是::selection.

7. 媒体查询@media()，多栏布局

8. CSS3中新增了一种盒模型计算方式：box-sizing。盒模型默认的值是content-box,     新增的值是padding-box和border-box，几种盒模型计算元素宽高的区别如下：

    - content-box（默认）

    布局所占宽度Width：

    Width = width + padding-left + padding-right + border-left + border-right

    布局所占高度Height:

    Height = height + padding-top + padding-bottom + border-top + border-bottom

    - padding-box

    布局所占宽度Width：

    Width = width(包含padding-left + padding-right) + border-top + border-bottom

    布局所占高度Height:

    Height = height(包含padding-top + padding-bottom) + border-top + border-bottom

    - border-box

    布局所占宽度Width：

    Width = width(包含padding-left + padding-right + border-left + border-right)

    布局所占高度Height:

    Height = height(包含padding-top + padding-bottom + border-top + border-bottom)

参考 1：[《CSS3 圆角》](http://www.runoob.com/css3/css3-border-radius.html)

参考 2：[《CSS3 渐变（Gradients）》](http://www.runoob.com/css3/css3-gradients.html)

参考 3：[《CSS3 transform 属性》](http://www.runoob.com/cssref/css3-pr-transform.html)

参考 4：[《CSS3 transition 属性》](http://www.runoob.com/cssref/css3-pr-transition.html)

参考 5：[《CSS3 animation（动画） 属性》](http://www.runoob.com/cssref/css3-pr-animation.html)

参考 6：[《CSS3 box-shadow 属性》](http://www.w3school.com.cn/cssref/pr_box-shadow.asp)

参考 7：[《个人总结（css3新特性）》](https://segmentfault.com/a/1190000010780991)

## 9. transition和animation的区别

* Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，
* 他们的主要区别：
  * transition需要触发一个事件才能改变属性， 而animation不需要触发任何事件的情况下才会随时间改变属性值，
  * transition为2帧，从from .... to，而animation可以一帧一帧的。
  * transition 规定动画的名字 规定完成过渡效果需要多少秒或毫秒 规定速度效果 定义过渡效果何时开始 animation 指定要绑定到选择器的关键帧的名称

## 10. 对BFC规范的理解？

BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。在同一个BFC中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的margin会发生折叠。

（W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用。

**BFC触发条件:（如何形成？创建）**

1. 根元素，即HTML元素
2. position:     fixed/absolute
3. float     不为none
4. overflow不为visible
5. display的值为inline-block、table-cell、table-caption

**BFC应用**

1. 防止margin重叠
2. 清除内部浮动
3. 自适应两（多）栏布局
4. 防止字体环绕

**BFC的特性**

1. 内部的Box会在垂直方向上一个接一个的放置。
2. 垂直方向上的距离由margin决定
3. bfc的区域不会与float的元素区域重叠。
4. 计算bfc的高度时，浮动元素也参与计算
5. bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。

拓展阅读：[深入理解BFC](https://www.cnblogs.com/xiaohuochai/p/5248536.html)

## 11. 常见兼容性问题？

1. png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.也可以引用一段脚本处理.
2. 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。
3. IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。

浮动ie产生的双倍距离（IE6双边距问题：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。）

\#box{ float:left; width:10px; margin:0 0 0 100px;}

这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入

_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)

渐进识别的方式，从总体中逐渐排除局部。

首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。

接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

css

.bb{

background-color:#f1ee18;/*所有识别*/

.background-color:#00deff\9; /*IE6、7、8识别*/

+background-color:#a200ff;/*IE6、7识别*/

_background-color:#1e0bd1;/*IE6识别*/

}

怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发

怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。现在

可以使用[html5]([http://www.w3.org/TR/html5/single-page.html](https://link.zhihu.com/?target=http%3A//www.w3.org/TR/html5/single-page.html))推荐的写法：`<doctype html>`

上下margin重合问题

ie和ff都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。

解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。

## 12. 有哪些方式（CSS）可以隐藏页面元素？

1. opacity:0：本质上是将元素的透明度将为0，就看起来隐藏了，但是依然占据空间且可以交互
2. visibility:hidden:      与上一个方法类似的效果，占据空间，但是不可以交互了
3. overflow:hidden:      这个只隐藏元素溢出的部分，但是占据空间且不可交互
4. display:none:      这个是彻底隐藏了元素，元素从文档流中消失，既不占据空间也不交互，也不影响布局
5. z-index:-9999:      原理是将层级放到底部，这样就被覆盖了，看起来隐藏了
6. transform:     scale(0,0): 平面变换，将元素缩放为0，但是依然占据空间，但不可交互

* 还有一些靠绝对定位把元素移到可视区域外，或者用clip-path进行裁剪的操作过于Hack，就不提了

## 13. 常见单位

1. px：绝对单位，页面按精确像素展示      

2. em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值      

3. rem：相对单位，可理解为”root em”,      相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持

4. vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1% 

5. vh：viewpoint      height，视窗高度，1vh等于视窗高度的1% 

6. vmin：vw和vh中较小的那个 

7. vmax：vw和vh中较大的那个 

8. %:百分比

## 14. em\px\rem区别？

- px：绝对单位，页面按精确像素展示。
- em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。
- rem：相对单位，可理解为”root      em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持

## 15. 行内元素水平垂直居中方法:

1. 行内元素
  ```
    text-align:center /*水平居中*/ 
    height: 100px; /*垂直居中 */
    line-height: 100px; 
  ```

2. Table
  ```
  	text-align:center 水平居中 
   	display:table-cell; 垂直居中 
   	vertical-align:middle; 
  ```

3. flex
  ```
  .parent {
   	display: flex;
   	align-items: center; 
  }
  ```

4. 绝对定位

	 - 定高
    ```
      .son { 
        position: absolute; 
        top: 50%; 
        height: 高度; 
        margin-top: -0.5高度; 
      }
    ```
	- 不定高
    ```
    .son { position: absolute; top: 50%; transform: translate( 0, -50%); }
    ```
  
	- Top/bottom:0;
    ```
    .son { position: absolute; height: 高度; top: 0; bottom: 0; margin: auto 0; }
    ```

## 16. 块级元素水平居中的方法？

如果使用Hack的话，水平居中的方法非常多，我们只介绍主流的，奇葩的见拓展阅读

1. margin:0 auto方法
    ```
     .center{
        height: 200px;
        width:200px;
        margin:0 auto;
        border:1px solid red;
      }
      <div class="center">水平居中</div>
    ```
2. flex布局，目前主流方法
    ```
     .center{
        display:flex;
        justify-content:center;
      }
      <div class="center">
        <div class="flex-div">1</div>
        <div class="flex-div">2</div>
      </div>
    ```


3.  table方法
    ```
     .center{
        display:table;
        margin:0 auto;
        border:1px solid red;
      }
      <div class="center">水平居中</div>
    ```

4. 行内元素
    ```
    .parent { text-align: center; }
    ```
5. 还有一些通过`position+(margin|transform)`等方法的不一样列举了，非重点没必要。

  * 绝对定位
    - 绝对定位定宽
      ```
        .son{
        position: absolute;
        width: 宽度;
        left: 50%;
        margin-left: -0.5*宽度
        }
      ```

        ```
        .son { 
          position: absolute; 
          width: 宽度;
          left: 0; 
          right: 0; 
          margin: 0 
          auto; 
        }
        ```

    - 绝对定位不定宽
      ```
      .son {
         position: absolute;
         left: 50%;
         transform: translate(-50%, 0);
       }
      ```

拓展阅读: [16种方法实现水平居中垂直居中](https://louiszhai.github.io/2016/03/12/css-center/)

## 17. 如何理解z-index？

CSS 中的z-index属性控制重叠元素的垂直叠加顺序，默认元素的z-index为0，我们可以修改z-index来控制元素的图层位置，而且z-index只能影响设置了position值的元素。

1. 如何理解层叠上下文,是什么？

   层叠上下文是HTML元素的三维概念，这些HTML元素在一条假想的相对于面向（电脑屏幕的）视窗或者网页的用户的z轴上延伸，HTML元素依据其自身属性按照优先级顺序占用层叠上下文的空间。

2. 如何产生？

   触发一下条件则会产生层叠上下文：

- 根元素     (HTML),
- z-index     值不为 "auto"的 绝对/相对定位，
- 一个     z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素 display:     flex|inline-flex，
- opacity     属性值小于 1 的元素（参考 the specification for opacity），
- transform     属性值不为 "none"的元素，
- mix-blend-mode     属性值不为 "normal"的元素，
- filter值不为“none”的元素，
- perspective值不为“none”的元素，
- isolation     属性被设置为 "isolate"的元素，
- position:     fixed
- 在     will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值（参考 这篇文章）
- -webkit-overflow-scrolling     属性被设置 "touch"的元素

拓展阅读：[层叠上下文-张鑫旭](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)

 

## 18. 你对css sprites的理解，好处是什么？

* 是什么 ？

雪碧图也叫CSS精灵， 是一CSS图像合成技术，开发人员往往将小图标合并在一起之后的图片称作雪碧图。

* 如何操作？

使用工具（PS之类的）将多张图片打包成一张雪碧图，并为其生成合适的 CSS。 每张图片都有相应的 CSS 类，该类定义了background-image、background-position和background-size属性。 使用图片时，将相应的类添加到你的元素中。

* 好处：
  * 减少加载多张图片的     HTTP 请求数（一张雪碧图只需要一个请求）
  * 提前加载资源
* 不足：
  * CSS     Sprite维护成本较高，如果页面背景有少许改动，一般就要改这张合并的图片
  * 加载速度优势在http2开启后荡然无存，HTTP2多路复用，多张图片也可以重复利用一个连接通道搞定

## 19. 浅谈CSS响应式布局

1. 使用@media查询可以针对不同的媒体类型定义不同的样式
2. @media  可以针对不同的屏幕尺寸设置不同的样式，特别是如果需要设置设计响应式的页面。
3. 重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。

  * 语法：

    ```
    @media 媒介类型 and | not | only (媒介特性)      {
    	css 代码
    }
    ```

  * 媒介类型：
    `print`:      用于打印机和打印预览
    `screen`:      用于电脑屏幕、平板电脑、只能手机等
    `all`: 用于所有媒体设备类型

  * 媒介特性：
    `device-height`:      定义输出设备的屏幕可见高度
    `device-width`:      定义输出设备的屏幕可见宽度
    `height`：定义输出设备中的页面可见区域高度。
    `width`：定义输出设备中的页面可见区域宽度。
    `max-device-height`：定义输出设备的屏幕可见的最大高度。
    `max-device-width`：定义输出设备的屏幕可见的最大宽度。
    `max-height`：定义输出设备中的页面可见的最大高度。
    `max-width`：定义输出设备中的页面可见的最大宽度。
    `min-device-height`：定义输出设备的屏幕可见的最小高度。
    `min-device-width`：定义输出设备的屏幕可见的最小宽度。
    `min-height`：定义输出设备中的页面可见的最小高度。
    `min-width`：定义输出设备中的页面可见的最小宽度。

## 20. 你对媒体查询的理解？

* 是什么

  媒体查询由一个可选的媒体类型和零个或多个使用媒体功能的限制了样式表范围的表达式组成，例如宽度、高度和颜色。媒体查询，添加自CSS3，允许内容的呈现针对一个特定范围的输出设备而进行裁剪，而不必改变内容本身,非常适合web网页应对不同型号的设备而做出对应的响应适配。

* 如何使用？

  媒体查询包含一个可选的媒体类型和，满足CSS3规范的条件下，包含零个或多个表达式，这些表达式描述了媒体特征，最终会被解析为true或false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式的值都是true，那么该媒体查询的结果为true.那么媒体查询内的样式将会生效。

  ```html
  <!-- link元素中的CSS媒体查询 -->
  <link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
  <!-- 样式表中的CSS媒体查询 -->

  <style>
    @media (max-width: 600px) {
    .facet_sidebar {
    display: none;
    }
    }
  </style>
  ```

* 拓展阅读：[深入理解CSS Media媒体查询](https://www.cnblogs.com/xiaohuochai/p/5848612.html)

  
## 21. 你对盒模型的理解✨

* 是什么？

  当对一个文档进行布局（lay out）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）。CSS 决定这些盒子的大小、位置以及属性（例如颜色、背景、边框尺寸…）。

  盒模型由content（内容）、padding（内边距）、border（边框）、margin（外边距）组成。

<img src="https://github.com/yuanweiqianyu/interview/blob/master/02Css/img/content-box.png" alt="content-box" style="zoom:50%;" />

## 22. 标准盒模型和怪异盒模型有什么区别？✨

在W3C标准下，我们定义元素的width值即为盒模型中的content的宽度值，height值即为盒模型中的content的高度值。

因此，标准盒模型下：

元素的宽度 = margin-left + border-left + padding-left + width + padding-right + border-right + margin-right

<img src="https://github.com/yuanweiqianyu/interview/blob/master/02Css/img/strict-module.png" alt="截屏2020-12-31 上午12.26.47" style="zoom:50%;" />

而IE怪异盒模型（IE8以下）width的宽度并不是content的宽度，而是border-left + padding-left + content的宽度值 + padding-right + border-right之和，height同理。

在怪异盒模型下：

元素占据的宽度 = margin-left + width + margin-right

<img src="https://github.com/yuanweiqianyu/interview/blob/master/02Css/img/ie-module.png" alt="截屏2020-12-30 下午10.54.56" style="zoom:40%;" />

虽然现代浏览器默认使用W3C的标准盒模型，但是在不少情况下怪异盒模型更好用，于是W3C在css3中加入box-sizing。

box-sizing: content-box // 标准盒模型
 box-sizing: border-box // 怪异盒模型
 box-sizing: padding-box // 火狐的私有模型，没人用

此演示来源于拓展阅读文章

See the Pen [LKpyzz](https://codepen.io/xiaomuzhu/pen/LKpyzz/) by Iwobi ([@xiaomuzhu](https://codepen.io/xiaomuzhu)) on [CodePen](https://codepen.io/).

<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

拓展阅读：
* [深入理解盒模型](https://www.cnblogs.com/xiaohuochai/p/5202597.html)

* [盒模型](https://segmentfault.com/a/1190000014801021)

## 23. 获取盒子宽高的几种方式及区别

dom.style.width/height

这种方式只能取到dom元素内联样式所设置的宽高，也就是说如果该节点的样式是在style标签中或外联的CSS文件中设置的话，通过这种方法是获取不到dom的宽高的

dom.currentStyle.width/height

获取渲染后的宽高。但是仅IE支持

window.getComputedStyle(dom).width/height

与2原理相似，但是兼容性，通用性更好一些

dom.getBoundingClientRect().width/height

计算元素绝对位置，获取到四个元素left,top,width,height

扩展：

获取浏览器高度和宽度的兼容性写法：

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
 var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

## 24. 为什么有时候人们用translate来改变位置而不是定位？

translate()是transform的一个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此translate()更高效，可以缩短平滑动画的绘制时间。

而translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发生这种情况。

拓展阅读:[CSS3 3D transform变换-张鑫旭](https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/)

## 25. 伪类和伪元素的区别是什么？

* 是什么？

  * 伪类（pseudo-class） 是一个以冒号(:)作为前缀，被添加到一个选择器末尾的关键字，当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类。

  * 伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过::before来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

* 区别

  其实上文已经表达清楚两者区别了，伪类是通过在元素选择器上加入伪类改变元素状态，而伪元素通过对元素的操作进行对元素的改变。

  我们通过p::before对这段文本添加了额外的元素，通过 p:first-child改变了文本的样式。

See the Pen [qzOXxO](https://codepen.io/xiaomuzhu/pen/qzOXxO/) by Iwobi ([@xiaomuzhu](https://codepen.io/xiaomuzhu)) on [CodePen](https://codepen.io/).

`<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`

拓展阅读：[伪类与伪元素](http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/)

## 26. 你对flex布局的理解？✨

* **定义**: Flex布局元素，称为Flex容器，简称"容器"。它的所有子元素自动成为容器元素，简称"项目"。容器默认存在两根轴：水平的主轴(main axis)和垂直的交叉轴(cross axis)。主轴的排列方式：从左到右；交叉轴的排列方式：从上到下。

1. display:flex;     在父元素设置，子元素受弹性盒影响，默认排成一行，如果超出一行，按比例压
2. flex:1;     子元素设置，设置子元素如何分配父元素的空间，flex:1,子元素宽度占满整个父元素
3. align-items:center     定义子元素在父容器中的对齐方式，center 垂直居中
4. justify-content:center     设置子元素在父元素中居中，前提是子元素没有把父元素占满，让子元素水平居中。

* **作用和优点**

web应用有不同设备尺寸和分辨率，这时需要响应式界面设计来满足复杂的布局需求，Flex弹性盒模型的优势在于开发人员只是声明布局应该具有的行为，而不需要给出具体的实现方式，浏览器负责完成实际布局，当布局涉及到不定宽度，分布对齐的场景时，就要优先考虑弹性盒布局

- 父元素属性

 

| **属性名**      | **属性值**                                            | **备注**                                                     |
| --------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| display         | flex                                                  | 定义了一个flex容器，它的直接子元素会接受这个flex环境         |
| flex-direction  | row,row-reverse,column,column-reverse                 | 决定主轴的方向                                               |
| flex-wrap       | nowrap,wrap,wrap-reverse                              | 如果一条轴线排不下，如何换行                                 |
| flex-flow       | [flex-direction] , [flex-wrap]                        | 是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap |
| justify-content | flex-start,flex-end,center,space-between,space-around | 设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式         |
| align-items     | flex-start,flex-end,center,baseline,stretch           | 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式         |

- 子元素属性

| **属性名**  | **属性值**                                       | **备注**                                                     |
| ----------- | ------------------------------------------------ | ------------------------------------------------------------ |
| order       | [int]                                            | 默认情况下flex order会按照书写顺训呈现，可以通过order属性改变，数值小的在前面，还可以是负数。 |
| flex-grow   | [number]                                         | 设置或检索弹性盒的扩展比率,根据弹性盒子元素所设置的扩展因子作为比率来分配剩余空间 |
| flex-shrink | [number]                                         | 设置或检索弹性盒的收缩比率,根据弹性盒子元素所设置的收缩因子作为比率来收缩空间 |
| flex-basis  | [length], auto                                   | 设置或检索弹性盒伸缩基准值                                   |
| align-self  | auto,flex-start,flex-end,center,baseline,stretch | 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式，可以覆盖父容器align-items的设置 |

 

- 具体用法移步阮一峰的[flex语法](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)、[flex实战](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)，讲得非常通俗易懂，而且我们一两句话说不清楚。
-  https://juejin.im/post/5d428c5451882556dc30535c

## 27. Grid布局

称为网格布局；(可以理解为iOS UICollection );

详细内容见:

https://www.cnblogs.com/cythia/p/10894598.html

https://www.jianshu.com/p/d183265a8dad

## 28. 关于CSS的动画与过渡问题

[深入理解CSS动画animation](https://www.cnblogs.com/xiaohuochai/p/5391663.html)

[深入理解CSS过渡transition](https://www.cnblogs.com/xiaohuochai/p/5347930.html)


## 29. 行内元素和块级元素

* 行内元素：宽度和高度由内容决定，与其他元素共占一行的元素，我们将其叫行内元素。例如：`<span>、<i>、<a>` 等……

* 块级元素：默认宽度由父容器决定，默认高度由内容决定，独占一行并且可以设置宽高的元素，我们将其叫做块级元素。例如：`<p>、<div>、<ul>` 等……

* 在日常开发中，我们经常使用 CSS 的 display 属性来打破两者的壁垒：display: inline-block，使它们拥有更多的状态。

## 30. 让页面里的字体变清晰，变细用CSS怎么做

* -webkit-font-smoothing在window系统下没有起作用，但是在IOS设备上起作用
* -webkit-font-smoothing：antialiased是最佳的，灰度平滑

## 31. display有哪些值？说明他们的作用?

* `inline`（默认）–内联

* `none`–隐藏

* `block`–块显示

* `table`–表格显示

* `list-item`–项目列表

* `inline-block`-内联块

## 32. display:none 和 visibility: hidden的区别

- display:none 隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。
- visibility:hidden 隐藏对应的元素，但是在文档布局中仍保留原来的空间。

## 33. img中alt和title的区别

* 图片中的 alt属性是在图片不能正常显示时出现的文本提示。alt有利于SEO优化

* 图片中的 title属性是在鼠标在移动到元素上的文本提示。

## 34. calc函数

* calc函数是css3新增的功能，可以使用calc()计算border、margin、pading、font-size和width等属性设置动态值。

    > 示例：比父元素宽高小20px，并且居中
  ```css
  #div1 {
    position: absolute;
    left: 10px;
    top: 10px;
    width: calc( 100% - ( 10px * 2 ) );
    height: calc( 100% - ( 10px * 2 ) );
    border: 1px solid #000000;
     //兼容写法
     width: calc( 100% - ( 10px * 2 ) );
     width: calc( 100% - ( 10px * 2 ) );
   }
  ```

* 注意点：
  * 需要注意的是，运算符前后都需要保留一个空格，例如：width:     calc(100% - 10px);
  * calc()函数支持     "+", "-", "*", "/" 运算;
  * 对于不支持     calc() 的浏览器，整个属性值表达式将被忽略。不过我们可以对那些不支持 calc()的浏览器，使用一个固定值作为回退。

## 35. 用纯CSS创建一个三角形

```html
<style>      
  div {          
  width: 0;          
  height: 0;         
  border-top: 40px solid transparent;         
  border-left: 40px solid transparent;          
  border-right: 40px solid transparent;          
  border-bottom: 40px solid #ff0000;      
  }      
</style> 

</head>  <body>    <div></div>  </body>
```


## 35. 常见的页面布局

水平居中布局

左侧固定 右侧自适应

流式布局

弹性布局

圣杯布局([弹性盒子](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes))

双飞翼布局

