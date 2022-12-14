# 介绍
欢迎使用Good API(GAPI)，它包含了许多API在其中，您可以免费使用，当然你也可以为它添置一些新功能，它会是你写程序的好帮手
(部分功能为网上收集，如侵害了您的利益，请联系QQ3168265272)
# 功能
## 主类
包含着Good API的各类数据，
储存在 main.js 中
通过 $GAPI 变量访问
### 版本
使用 $GAPI.version 访问，
类型是数组
### 引用
引用库
调用方式:
```javascript
betterTable = $GAPI.require(lib)
```
lib - 库名称(string)
例如:
```javascript
betterTable = $GAPI.require("betterTable");
```
它的作用相当于
```javascript
betterTable = ()=>{/*betterTable函数*/};
```
## 对象类
对象类的功能一般放在 object/ 下
### 选择器
综合的选择器
require引用:
```javascript
query = $GAPI.require("query")
```
调用方法:
```javascript
query(string)
```
string - CSS选择器
例如
```javascript
query("audio#music")
```
返回
```javascript
document.querySelectorAll("audio#music")
```
要注意的是,如果
```javscript
query("audio#music")
```
只有一个节点,那么将会返回
```javascript
document.querySelector("audio#music")
```
此外用 query() 构建的节点将会拥有以下的小功能:
#### query().show()
显示元素
#### query().hide()
隐藏元素
#### query().html(string)
string - 字符串
设置标签内容
如果不存在 string
则返回标签内容
#### query().add(string)
string - 字符串
追加内容
#### query().css(key,value)
key - 样式名
value - 样式值
设定元素样式
您也可以直接使用 key 作为一个对象
如:
```javascript
query({
    "width":"12px",
    "background":"yellow"
})
```
### 更好的表格
把二维数组转为表格
require引用:
```javascript
betterTable = $GAPI.require("betterTable");
```
调用方式:
```javascript
betterTable(array)
```
array - 二维数组(array)
例如
```javascript
betterTable([
    ["","A","B","C"],
    ["0","A0","B0","C0"],
    ["1","A1","B2","C1"],
    ["2","A2","B2","C2"]
])
```
返回
```html
<tr>
    <td></td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
</tr>
<tr>
    <td>0</td>
    <td>A0</td>
    <td>B0</td>
    <td>C0</td>
</tr>
<tr>
    <td>1</td>
    <td>A1</td>
    <td>B2</td>
    <td>C1</td>
</tr>
<tr>
    <td>2</td>
    <td>A2</td>
    <td>B2</td>
    <td>C2</td>
</tr>
```
## 数组类
数组类一般储存在 array/ 下
### 平均数
求平均数
require引用:
```javascript
average = $GAPI.require("average");
```
调用方法:
```javascript
average(array)
```
array - 数组
例如:
```javascript
average([0.5,0.5])
```
返回
```javascript
0.5
```
### 中位数
求中位数
require引用:
```javascript
median = $GAPI.require("median");
```
调用方法:
```javascript
median(array)
```
array - 数组
例如:
```javascript
array([1,1,4,5,1,4])
```
返回
```javascript
2.5
```
### 众数 & 次数最多
求众数 or 求 字符串/数组 中出现频率最高的部分
require引用:
```javascript
mode = $GAPI.require("mode");
```
调用方式:
```javascript
mode(array)
```
array - 数组
例如:
```javascript
mode([1,1,4,5,1,4])
```
返回:
```javascript
1
```
当然，你也可以用它求出 字符串/数组 中出现频率最高的部分
例如:
```javascript
mode(["a","b","c","a"])
```
返回:
```javascript
"a"
```
或是
```javascript
mode("ABCDEE")
```
返回:
```javascript
"E"
```
值得注意的是如果有两个众数，那么只会输出靠前的那一个
例如:
```javascript
mode([1,1,2,2])
```
返回:
```javscript
1
```
### 方差
计算方差
require引用:
```javascript
variance = $GAPI.require("variance")
```
调用方式:
```javascript
variance(array)
```
### 去除相同元素
去除 数组 中与 另一个值 相同的 元素
require引用:
```javascript
removeElement = $GAPI.require("removeElement");
```
调用方法:
```javascript
removeElement(array,val)
```
例如:
```javascript
removeElement([3,3,2,2,1,1],2)
```
返回:
```javascript
[3,3,1,1]
```
### 有效数独判断
判断数独是否有效
require引用:
```javascript
isValidSudoku = $GAPI.require("isValidSudoku")
```
调用方式:
```javascript
isValidSudoku(array)
```
array - 二维数组(空白用 . 表示)
例如:
```javascript
isValidSudoku([
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
])
```
返回:
```javascript
true
```
## 文字类
文字类一般储存在 string/ 下
### 统计
统计字符串中的所有字符在字符串中出现的次数
require引用:
```javascript
statistics = $GAPI.require("statistics");
```
调用方式:
```javascript
statistics(string || number)
```
例如:
```javascript
statistics("Hello World")
```
返回:
```javascript
[{text: 'H', count: 1},
{inner: 'e', count: 1},
{inner: 'l', count: 3},
{inner: 'o', count: 2},
{inner: ' ', count: 1},
{inner: 'W', count: 1},
{inner: 'r', count: 1},
{inner: 'd', count: 1}]
```
## 计算类
### 判断是否为数的幂
判断一个数是否为另一个数的幂
require引用:
```javascript
isPower = $GAPI.require("isPower")
```
调用方式:
```javascript
isPower(n,x)
```
n - 数
x - 底数
## 其它类
### 监听
监听js活动
require引用:
```javascript
$GAPI.require("listener")
```
调用方法:
调用方法是嵌在 addEventListener 中的,
目前可以监听两个: alert HTMLDOM
(getAnimations , getElementById , getElementsByClassName , getElementsByName , getElementsByTagName , getElementsByTagNameNS , getRootNode , getSelection , querySelector , querySelectorAll)
onalert实例:
```javascript
addEventListener("onalert",(e/*onalert的参数是 {message:string}*/)=>{
    console.log(e);
    return false;//当返回值是false时，则代表阻止alert行为的发生
});
alert("你好");//被阻止
```
onDOM实例:
```javascript
addEventListener("onDOM",(e/*onDOM的参数是 {type:string(HTMLDOM的类型),value:string(值),obj:HTMLElement}*/)=>{
    console.log(e);
    return false;//当返回值是false时，则代表阻止HTMLDOM行为的发生
});
document.getElementById("a");//被阻止
```
值得一提的是,监听 HTMLDOM 对 jquery 等库有效