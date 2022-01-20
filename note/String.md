# String

## 01. 作用
`String` 对象是一个用于字符串或者是一个字符串序列的构造函数。JavaScript会将基本字符串转变为字符串对象，然后才可以使用字符串对象的方法。字符串字面量和直接调用 `String` 方法的字符串都是基本字符串。

```js
str = 'hello';
```

## 02. 搜索方法
### 02.1. indexOf()
返回指定文本在字符串中首次出现的位置的索引。

```js
str.indexOf('l'); // 2
```

### 02.2. lastindexOf()
返回指定文本字符串中最后一次出现的位置的索引。

```js
str.lastindexOf('l'); // 3
```

### 02.3. search()
搜索特定的字符串，或者是匹配正则表达式，返回其索引位置。如果没有找到会返回 `-1`。

```js
str.search('h'); // 0
```

### 02.4. match()
按照正则表达式进行匹配，将匹配的字符串组成一个数组并返回。

```js
str.metch(/h/g)
```

## 03. 切片方法
### 03.1. slice()
按照索引的开始和结束提取字符串

```js
str.slice(0, 2);
```

### 03.2. substring()
类似于 `slice()` ，但是不接受负值。

```js
str.substring(0, 2);
```

### 03.3. substr()
类似于 `slice()` ，但是第二个参数规定提取的长度。

```js
str.substr(0, 2);
```

## 04. 替换字符串
### 04.1. replace()
用另一个值替换在字符串中指定的值，replace() 对大小写敏感

```js
str.replace("h", "H") // 将字符串中的“a” 用 "b" 替换
```

## 05. 转换大小写
### 05.1. toUpperCase()
把字符串转换为大写。
```js
str.toUpperCase();
```

### 05.2. toLowerCase()
把字符串转换为小写 。
```js
str.toLowerCase();
```

## 06.连接字符串
### 06.1. concat()
连接两个字符串，但是不会修改原始字符串，而是返回一个新的字符串。

```js
"hello".concat("", "world");
```

### 06.2. trim()
删除字符串两端的空白符。

```js
str.trim()
```

## 07. 提取字符
### 07.1. charAt()
返回字符串中指定下标（位置）的字符串。
```js
word = str.charAt(1);
```

### 07.2. charCodeAt()
返回字符串中指定索引的字符 unicode 编码。
```js
code = str.charCodeAt(0);
```

### 07.3. split()
将字符串按照指定的分隔符进行分隔，返回一个数组。
```js
words = str.split(' ');
```

