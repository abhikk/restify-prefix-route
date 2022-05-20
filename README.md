# Restify Prefix Route

This pacakage allows you to add prefix in all the routes in Restify.

# Installation

```bash
$ npm install restify-prefix-route
```

## Methods

``` js
var applyPrefix = require('restify-prefix-route');
```
``` js
server.pre(applyPrefix('/v1'));
```


## Adding a prefix 


```javascript
var restify = require('restify');
var applyPrefix = require('restify-prefix-route');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.pre(applyPrefix('/v1'));

server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
```

### Example route after using restify-prefix-route

```bash
http://localhost:8080/v1/echo/test
```

## Supported Node Versions

Node.js LTS (Active and Maintenance) versions along with Node.js current stable version.

| Node Release  | Supported in Current Version | 
| :--:     | :---: | 
| 11.x | **Yes** | 
| 10.x | **Yes** |
| 8.x  | **Yes** |


## License

MIT License

Copyright (c) 2022 abhikk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
