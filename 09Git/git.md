# Git 相关

## 11111


## 一个项目设置两个 git 地址
> #### 方法1：（需要push两次，不符合题目要求，但是优点是可以pull两次）
> 步骤1：
> 在git A 项目中添加另一个git B远程的地址
> ```shell
> git remote add origin2 git@gitee.com:teamemory/myH5.git    // origin2可以自定义
> ```
> 步骤2：
> 先拉取git B 该地址上的数据
> ```shell
> git pull origin2 master --allow-unrelated-histories   //（--allow-unrelated-histories是为了解决冲突）
> ``` 
> 
> 步骤3：
> ```shell
> // 在git A 项目中把项目内容同步到git B地址中
> git push origin2 master
> ```
> 
> 此时，我们基本实现了可以把一个项目可以提交到两个git地址了，但是每次提交内容都需要进行如下两次提交，才能实现把一个项目同时提交到两个git地址。
> ```shell
> git push origin  master
> git push origin2 master
> ```
> 
> 问题来了，我们想要的实现的是，我提交一次，就能同步两个项目，怎么继续实现呢？请看方法2
> 
> 注意：删除上面的添加的git B的远程地址
> ```
> git remote -v  // 查看此时的包括两个远程地址
> git remote rm origin2  // 删除git B的远程地址
> git remote -v  //此时应该只有git A的远程地址
> ```
> 
> 
> 方法2：（只需要push一次）
> 给origin 增加一个可以push的地址
> ```
> git remote set-url --add origin git@gitee.com:teamemory/myH5.git   //给origin添加一个远程push地址，这样一次push就能同时push到两个地址上面
> git remote -v //查看是否多了一条push地址（这个可不执行）
> ```
> 
> 至此，我们就可以直接一个push，同时推送到两个git地址。
> ```
> git push origin master -f    // 如果第一次推不上去代码，可以使用强推的方式
> ```
> 注意：删除添加的路径的方法是
> ```
> git remote set-url --delete origin git@gitee.com:teamemory/myH5.git
> ```
> 至此，我们建议一次push实现两个git项目的沟通，建议使用方法2！！！
> 
> 转自：https://www.cnblogs.com/teamemory/p/11607613.html


