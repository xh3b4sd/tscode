# tscode

Dummy repo for generated ts code.



### Installation

```
npm install xh3b4sd/tscode
```

```
$ cat package.json
...
"dependencies": {
  "@xh3b4sd/tscode": "github:xh3b4sd/tscode#v0.7.2"
},
...
```



### Usage

Import the generated client package where you want to make use of it.

```
import tscode from "@xh3b4sd/tscode";
```

Create a new client for the resource you want to interact with. A resource is
any entity a gRPC service is defined for. The endpoint URL is not pointing to a
gRPC server, but a middleman like envoy acting as ingress controller. Envoy is
able to upgrade the HTTP 1.1 request to HTTP 2 and dispatches the request to the
gRPC server in the backend.

```
const client = new tscode.Post.Client("http://127.0.0.1:7777")
```

Create a request according to the gRPC service definition.

```
var req = new tscode.Post.Create.I();
req.setName("create input");
```

Make a unary RPC call using the request, metadata and a callback. The metadata
object must be given, even if it is empty in order to make the callback work.

```
client.create(req, {}, function(err, res) {
  if (err) {
    console.log(err.code);
    console.log(err.message);
  } else {
    console.log(res.getMessage());
  }
});
```

In case the request succeeded the response is being printed.

```
create output
```
