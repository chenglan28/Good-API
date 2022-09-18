# 介绍
欢迎使用Good API(GAPI)，它包含了许多API在其中，您可以免费使用，当然你也可以为它添置一些新功能，它会是你写程序的好帮手
# 目录
Good API包含有一些文件在其中
+ main.js
+ object
+ - betterTable.js 更好的表格
+ - betterTable-min.js betterTable.js的压缩版 库名为 betterTable
+ math
+ - average.js 平均数
+ - average-min.js average.js的压缩版 库名为 average
+ - median.js 中位数
+ - median-min.js median.js的压缩版 库名为 median
+ - mode.js 众数
+ - mode-min.js mode.js的压缩版 库名为 mode
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
$GAPI.quote(lib)
```
lib - 库名称(string)
例如:
```javascript
$GAPI.quote("betterTable");
```
它的作用相当于
```html
<script src="object/betterTable-min.js"></script>
```
注意:引用的文件为压缩过的文件
## 对象类
对象类的功能一般放在 object/ 下
### 更好的表格
把二维数组转为表格
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
## 平均数
求平均数
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
## 中位数
求中位数
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
## 众数 & 次数最多
求众数 or 求 字符串/数组 中出现频率最高的部分
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