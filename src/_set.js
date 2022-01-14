const set = new Set()

set.add(1)
set.add("Lydia")
set.add({ name: "Lydia" })

for (let item of set) {
  console.log(item + 2)
}

/**
 * 3, Lydia2, [Object object]2
 */

/**
 * {name：“ Lydia”}是一个对象。 
 * 数字和对象都不是字符串，
 * 因此将二者都字符串化。 
 * 每当我们对常规对象进行字符串化时，它就会变成[Object object]。 与“2”串联的“ [Object object]”成为“[Object object]2”。
 */