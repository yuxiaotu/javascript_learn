# String

> String 全局对象是一个用于字符串或者是一个字符串序列的构造函数。JavaScript会将基本字符串转变为字符串对象，然后才可以使用字符串对象的方法。字符串字面量和直接调用 String 方法的字符串都是基本字符串。

> 参考资料：

<br>

### 1，搜索方法

#### indexOf()

返回字符串中指定文本的首次出现的索引

```
str.indexOf('a');
```

<br>

#### lastindexOf()

返回字符串中指定文本最后一次出现的索引

```
str.lastindexOf('a');
```

<br>

#### search()

搜索特定的字符串，返回其索引位置

```js
str.search('a');
```

<br>

#### match()

按照正则表达式进行匹配，将匹配的字符串组成一个数组并返回

```
str.metch(/a/g)>
```

<br>

### 2，切片方法

#### slice()

按照索引的开始和结束提取字符串

```js
str.slice(start, end);
```

<br>

#### substring()

类似于 slice() ，但是不接受负值。

<br>

#### substr()

类似于 slice() ，但是第二个参数规定提取的长度

<br>

### 3，替换字符串

#### replace()

用另一个值替换在字符串中指定的值，replace() 对大小写敏感

```js
str.replace("a", "b") // 将字符串中的“a” 用 "b" 替换
```

<br>

### 4，转换大小写

#### toUpperCase()

把字符串转换为大写

<br>

#### toLowerCase()

把字符串转换为小写 

<br>

### 5，连接字符串

#### concat()

连接两个字符串，但是不会修改原始字符串，而是返回一个新的字符串。

```js
"hello".concat("", "world");
```

<br>

#### trim()

删除字符串两端的空白符

```js
str.trim()
```

<br>

### 6，提取字符

#### charAt()

返回字符串中指定下标（位置）的字符串

<br>

#### charCodeAt()

返回字符串中指定索引的字符 unicode 编码

<br>

#### split()

将字符串按照指定的分隔符进行分隔，返回一个数组



