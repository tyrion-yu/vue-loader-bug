在`install`之后，执行`npm start`或者`webpack`，会发生编译错误。

内容为

```
ERROR in ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js?id=data-v-5c71072a!./~/vue-loader/lib/
selector.js?type=styles&index=0!./src/demo.vue
Module build failed: TypeError: Path must be a string. Received undefined
    at assertPath (path.js:7:11)
    at Object.relative (path.js:536:5)
    at Object.<anonymous> (D:\h\vue-loader-bug\node_modules\css-loader\lib\loader.js:101:19)
    at Array.map (native)
    at Object.<anonymous> (D:\h\vue-loader-bug\node_modules\css-loader\lib\loader.js:99:31)
    at D:\h\vue-loader-bug\node_modules\css-loader\lib\processCss.js:199:3
 @ ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js?id=data-v-5c71072a!./~/
vue-loader/lib/selector.js?type=styles&index=0!./src/demo.vue 4:14-220
 @ ./src/demo.vue
 @ ./src/main.es6
```

去掉`demo.vue`中的`style`标签，可以成功编译。这时打开`/index.html`可以看到网页显示`Hello bug`。

OS: Windows7