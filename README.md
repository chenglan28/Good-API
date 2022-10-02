# 介绍
欢迎使用Good API(GAPI)，它包含了许多API在其中，您可以免费使用，当然你也可以为它添置一些新功能，它会是你写程序的好帮手
# 目录
Good API包含有一些文件在其中
+ main.js
+ object
+ - betterTable.js 更好的表格
+ - betterTable-min.js betterTable.js的压缩版 库名为 betterTable
+ - object.js 选择器
+ math
+ - average.js 平均数
+ - average-min.js average.js的压缩版 库名为 average
+ - median.js 中位数
+ - median-min.js median.js的压缩版 库名为 median
+ - mode.js 众数
+ - mode-min.js mode.js的压缩版 库名为 mode
+ - variance.js 方差
+ - variance-min.js variance.js的压缩版 库名为 variance
+ string
+ - statistics.js 统计器
+ - statistics-min.js statistics.js的压缩版 库名为 statistics
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
betterTable = $GAPI.quote(lib)
```
lib - 库名称(string)
例如:
```javascript
betterTable = $GAPI.quote("betterTable");
```
它的作用相当于
```js
betterTable = ()=>{/*betterTable函数*/};
```
在之后的学习中，我们会同时提供源文件地址与quote引用方式
## 对象类
对象类的功能一般放在 object/ 下
### 选择器
综合的选择器
暂不支持quote引用
储存位置:
object/object.js
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
### 
### 更好的表格
把二维数组转为表格
quote引用:
```javascript
betterTable = $GAPI.quote("betterTable");
```
储存位置:
object/betterTable.js 或 object/betterTable.js
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
## 计算类
计算类一般储存在 math/ 下
### 平均数
求平均数
quote引用:
```javascript
average = $GAPI.quote("average");
```
储存位置:
math/average.js 或 math/average-min.js
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
quote引用:
```javascript
median = $GAPI.quote("median");
```
储存位置:
math/median.js 或 math/median-min.js
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
quote引用:
```javascript
mode = $GAPI.quote("mode");
```
储存位置:
math/mode.js 或 math/mode-min.js
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
quote引用:
```javascript
variance = $GAPI.quote("variance")
```
储存位置:
math/variance.js 或 math/variance-min.js
调用方式:
```javascript
variance(array)
```
## 文字类
文字类一般储存在 string/ 下
### 统计
统计字符串中的所有字符在字符串中出现的次数
quote引用:
```javascript
statistics = $GAPI.quote("statistics");
```
储存位置:
string/statistics.js 或 string/statistics-min.js
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