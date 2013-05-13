# solo

> Super simple static server


Very basic server for running a single HTML file, useful for tests

installation:
```shell
npm install solo --save-dev
```

command-line usage:
```shell
solo my-file.html -p 8888
```

API usage:
```js
solo.run("my-file.html",{port:8888});
```
