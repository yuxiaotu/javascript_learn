# Math

- [表示常数](#1-表示常数)
- [取整方法](#2-取整方法)
- [生成随机数](#3-生成随机数)

# 1. 常用的数字
- Math.PI ：表示常数 `Π`，
- Math.E ：表示常数 `e`。


# 2. 取整方法
- round()
- ceil()
- floor()
- trunc()

## 2.1. round()
返回最接近指定值的整数。

```js
console.log(Math.round(4.5)); 
console.log(Math.round(4.4)); 
```
```
输出结果：
5
4
```

## 2.2. ceil()
向上取整。

```js
console.log(Math.ceil(4.2))
console.log(Math.ceil(-4.2))
```
```
输出结果：
5
-4
```

## 2.3. floor()
向下取整。

```js
console.log(Math.floor(4.9)) 
console.log(Math.floor(-4.2))
```
```
输出结果：
4
-5
```

## 2.4. trunc()
方法取整数部分。

```js
Math.trunc(4.9) 
Math.trunc(-4.2) 
```
```
输出结果：
4
-4
```

# 3. 生成随机数
- random()

## 3.1. random()
生成 `0 ~ 1` 之间的随机数。

```js
Math.floor(random() * 10 + 1);
```