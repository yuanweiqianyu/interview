# Vue-CLI （指南）复习体会总结

## 介绍
> * Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，
> #### 该系统的组件
> * CLI(@vue/cli)
>   * 一个全局安装的 npm 包，提供了终端 `vue` 命令。
>   * `vue create` 快速搭建一个项目。
>   * `vue serve` 构建新想法的原型。
>   * `vue ui` 通过一套图形化界面管理你的所有项目。
> * CLI 服务
>   * （@vue/cli-service）是一个开发环境依赖。局部安装在@vue/cli创建的项目中。
> * CLI 插件
>   * 是向你的 Vue 项目提供可选功能的 npm 包。
>   * Vue CLI 插件的名字以 @vue/cli-plugin- (内建插件) 或 vue-cli-plugin- (社区插件) 开头，非常容易使用。
> 

## 安装
> #### 安装
> ```shell
> npm install -g @vue/cli
> # OR
> yarn global add @vue/cli
> ```
> 
> #### 升级
> ```shell
> npm update -g @vue/cli
> # 或者
> yarn global upgrade --latest @vue/cli
> ```
>

## 基础

#### 一、快速原型开发
<details>
  <summary>展开</summary>

>    * 你可以使用 `vue serve` 和 `vue build` 进行快速开发，不过需要额外安装一个全局扩展：
> ```shell
> npm install -g @vue/cli-service-global
> ```
> * `vue serve` 使用了和 `vue create` 创建的项目相同的默认设置 (webpack、Babel、PostCSS 和 ESLint)。它会在当前目录自动推导入口文件——入口可以是 main.js、index.js、App.vue 或 app.vue 中的一个。
> * 如果需要，你还可以提供一个 index.html、package.json、安装并使用本地依赖、甚至通过相应的配置文件配置 Babel、PostCSS 和 ESLint。
> 

</details>



#### 二、 创建一个项目
<details>
  <summary>展开</summary>

> ```shell
>  vue create hello-world
> ```
> * 创建过程中会提示选择一个 preset，你可以使用默认的包含了基本的 Babel + ESLint 设置的 preset。
> * 也可以选“手动选择特性”来选取需要的特性，并且，将手动选择的特性保存为可复用的preset。（preset 将会存在用户的 home 目录下一个名为 .vuerc 的 JSON 文件里）
> * 可以通过 `vue ui` 命令以图形化界面创建和管理项目。

</details> 

#### 三、 插件和Preset
<details>
  <summary>展开</summary>

> * **插件**
>   * Vue CLI 使用了一套基于插件的架构。查阅 package.json，就会发现依赖都是以 @vue/cli-plugin- 开头的。插件可以修改 webpack 的内部配置，也可以向 vue-cli-service 注入命令。在项目创建的过程中，绝大部分列出的特性都是通过插件来实现的。
>   * 可以通过 `vue ui` 命令使用 GUI 安装和管理插件。
> * **在现有项目中安装插件**
>   * 在一个已经被创建好的项目中安装一个插件，可以使用 `vue add` 命令。
>   * 推荐在运行 vue add 之前将项目的最新状态提交，因为该命令可能调用插件的文件生成器并很有可能更改你现有的文件。
>   * vue add 用法：
>       ```shell
>       vue add eslint // 解析为 @vue/cli-plugin-eslint
>       vue add apollo // 不带@vue，解析为 vue-cli-plugin-apollo
>       vue add @foo/bar // 解析为 @foo/vue-cli-plugin-bar
>       // 以下命令向被安装的插件传递生成器选项 (这样做会跳过命令提示)：
>       vue add eslint --config airbnb --lintOn save  
>       ```
>   * 如果一个插件已经被安装，你可以使用 `vue invoke` 命令跳过安装过程，只调用它的生成器。
>   * 如果出于一些原因你的插件列在了该项目之外的其它 package.json 文件里，你可以在自己项目的 package.json 里设置：
>       ```json
>       {
>         "vuePlugins": {
>           "service": ["my-commands.js"]
>         }
>       }
>       ```
> * **Preset**
>   * 一个 Vue CLI preset 是一个包含创建新项目所需预定义选项和插件的 JSON 对象，让用户无需在命令提示中选择它们。
>   * 在 `vue create` 过程中保存的 preset 会被放在你的 home 目录下的一个配置文件中 (~/.vuerc)。你可以通过直接编辑这个文件来调整、添加、删除保存好的 preset。
>   * `useConfigFiles:true`： congigs 值的合并到响应文件。
>   * preset 可以显示的指定用到插件的版本,并且推荐此法。
>   * 允许插件的命令提示。方法：在插件选项中指定 `"prompts": true` 来允许注入命令提示。
>   * 通过发布 git repo 将一个 preset 分享给其他开发者。
>   * 加载文件系统中的 Preset。如果 `--preset` 选项的值是一个相对或绝对文件路径，或是以 .json 结尾，则 Vue CLI 会加载本地的 preset。

</details> 



#### 四、 CLI 服务
<details>
  <summary>展开</summary>

> * vue-cli-service serve
>   * 除了通过命令行参数，你也可以使用 vue.config.js 里的 devServer 字段配置开发服务器。
> * vue-cli-service build
>   * 两个命令的命令参数也非常有用。此处不一一赘述。
> * vue-cli-service inspect
>   * 你可以使用 vue-cli-service inspect 来审查一个 Vue CLI 项目的 webpack config。
> * vue-cli-service help
>   * 查看所有的可用命令
>       * 有些 CLI 插件会向 vue-cli-service 注入额外的命令。例如 @vue/cli-plugin-eslint 会注入 `vue-cli-service lint` 命令。
>   * 学习每个命令可用的选项 
> 
>       `vue-cli-service help [command]`
> 
> * 缓存和并行处理
>   * **cache-loader** 会默认为 Vue/Babel/TypeScript 编译开启。文件会缓存在 node_modules/.cache 中——如果你遇到了编译方面的问题，记得先删掉缓存目录之后再试试看。
>   * **thread-loader** 会在多核 CPU 的机器上为 Babel/TypeScript 转译开启。
> * Git Hook  
>   * 安装安装 **yorkie**，在 package.json 的 gitHooks 字段中方便地指定 Git hook。
>   * 注意 yorkie fork 自 husky 并且与后者不兼容。
> * 配置时无需 Eject 
>

</details> 

## 开发

#### 一、浏览器兼容性
<details>
    <summary>展开</summary>

> (内容有点多，理解还有点模糊，暂时不做体会总结，后期理解，用到查阅把)

</details>


#### 二、HTML和静态资源
<details>
    <summary>展开</summary>
> (内容有点多，理解还有点模糊，暂时不做体会总结，后期理解，用到查阅把)

</details>


#### 三、 CSS 相关
<details>
    <summary>展开</summary>

> (内容有点多，理解还有点模糊，暂时不做体会总结，后期理解，用到查阅把)

</details>


#### 四、webpack 相关
<details>
    <summary>展开</summary>

> (内容有点多，理解还有点模糊，暂时不做体会总结，后期理解，用到查阅把)

</details>


#### 五、模式和环境变量
<details>
    <summary>展开</summary>

> (内容有点多，理解还有点模糊，暂时不做体会总结，后期理解，用到查阅把)

</details>


#### 六、构建目标
<details>
    <summary>展开</summary>

> (内容有点多，理解还有点模糊，暂时不做体会总结，后期理解，用到查阅把)

</details>


#### 七、部署
<details>
    <summary>展开</summary>

> (内容有点多，理解还有点模糊，暂时不做体会总结，后期理解，用到查阅把)

</details>

* 感觉以上内容都是 vue.config.js 内对 loader 、plugin 、webpack 怎么配置的指南，之后用到再说吧。 


