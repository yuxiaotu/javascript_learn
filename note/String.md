# String

- [String 对象的作用](#1-String-对象的作用)
- [字符串搜索方法](#2-字符串搜索方法)
  - [indexOf](#21-indexOf)
  - [lastindexOf()](#22-lastindexOf)
  - [earch()](#23-search)
  - [match()](#24-match)
- [字符串切片方法](#3-字符串切片方法)
  - [slice()](#31-slice)
  - [substring()](#32-substring)
  - [substr()](#33-substr)
- [替换字符串](#4-替换字符串)
- [大小写转换](#5-大小写转换)
- [字符串的拼接](#6-字符串的拼接)


# 1. String 对象的作用
`String` 对象是一个用于「字符串」或者是一个「字符串序列」的构造函数。`Js` 会将基本字符串转变为字符串对象，然后才可以使用字符串对象的方法。

通过字符串字面量，或者是直接调用 `String()` 方法创建的字符串都是基本字符串。

```js
str = 'Hello World';
```


# 2. 字符串搜索方法
- indexOf()
- lastindexOf()
- search()
- match()

## 2.1. indexOf()
返回指定文本在字符串中首次出现的位置的索引。

```js
console.log(str.indexOf('l')); 
```
```
输出结果：
1
```

## 2.2. lastindexOf()
返回指定文本字符串中最后一次出现的位置的索引。

```js
console.log(str.lastindexOf('l')); 
```
```
输出结果：
9
```

## 2.3. search()
搜索特定的字符串，或者是匹配正则表达式，返回其索引位置。如果没有找到会返回`-1`。

```js
console.log(str.search('H')); 
```
```
输出结果：
0
```

## 2.4. match()
按照正则表达式进行匹配，将匹配的字符串组成一个数组并返回。

```js
console.log(str.match(/[A-Z]/g));
```
```
输出结果：
["H", "W"]
```


# 3. 字符串切片方法
- slice()
- substring()
- substr()

## 3.1. slice()
按照索引的开始和结束提取字符串，不包括结束位置。

```js
console.log(str.slice(0, 2));
```
```
输出结果：
He
```

## 3.2. substring()
类似于 `slice()` ，但是不接受负值。

```js
console.log(str.substring(0, 2));
```
```
输出结果：
He
```

## 03.3. substr()
类似于 `slice()` ，但是第二个参数规定提取的长度。

```js
console.log(str.substr(0, 3));
```
```
输出结果：
Hel
```


# 4. 替换字符串
- replace()

## 4.1. replace()
用另一个值替换在字符串中指定的值，replace() 对大小写敏感

```js
console.log(str.replace("H", "h"));
```
```
输出结果：
hello World
```


# 5. 大小写转换
- toUpperCase()
- toLowerCase()

## 5.1. toUpperCase()
把字符串转换为大写。
```js
console.log(str.toUpperCase());
```
```
输出结果：
HELLO WORLD
```

## 5.2. toLowerCase()
把字符串转换为小写。
```js
console.log(str.toLowerCase());
```
```
输出结果：
hello world
```


# 6. 字符串的拼接
- concat()
- trim()

## 6.1. concat()
连接两个字符串，但是不会修改原始字符串，而是返回一个新的字符串。

```js
console.log("hello".concat("", "world"));
```
```
输出结果：
hello, world
```

## 6.2. trim()
删除字符串两端的空白符。

```js
console.log(" Hello World ".trim());
```
```
输出结果：
Hello Wordl
```


# 7. 提取字符
- chartAt()
- charCodeAt()
- split()

## 7.1. charAt()
返回字符串中指定下标位置的字符串。
```js
console.log(str.charAt(1));
```
```
输出结果：
e
```

## 7.2. charCodeAt()
返回字符串中指定索引的字符 `unicode` 编码。
```js
console.log(str.charCodeAt(0));
```
```
输出结果：
72
```

## 7.3. split()
将字符串按照指定的分隔符进行分隔，返回一个数组。
```js
console.log(str.split(' '));
```
```
输出结果：
["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
```

