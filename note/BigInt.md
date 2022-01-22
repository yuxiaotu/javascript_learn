# BigInt

## 01. 作用
`BigInt` 是一种特殊的数字类型，表示任意长度的整数。

## 02. 创建
- 在数字字面量后面加 `n`。
- 调用 `BigInt()` 。

```js
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // 与 10n 相同
```