# wisp-payload-gen
Generate HTTP "payloads" (requests) for use with wisp-js (and it's derivatives).

## Using on web
Using this package on web is actually quite simple. You can find the web version of the package at `/dist/web/wisp_payload_gen,js` in the NPM repository. From there you can either paste the code into the wisp package or another version of it (i.e. epoxy), or download it as a file and run it that way. After that, you can access the module and it's functions via the wisp_payload_gen object attached to the root window object.

## Using in NodeJS/TypeScript
You can use the library with CommonJS and MJS imports via the npm repo: https://www.npmjs.com/package/wisp-payload-gen

## Examples
All of these examples assume that you have already connected to a wisp server, and that the connection object is named `conn`.


***GET requests*** (this example will use www.google.com on port 80 as an example)
```js
let stream = conn.create_stream("www.google.com", 80);
stream.onmessage = (data) => {
  let text = new TextDecoder().decode(data);
  console.log(text);
};
stream.onclose = (reason) => {
  console.log("stream closed for reason: " + reason);
};

let payload = wisp_payload_gen.get("http://www.google.com"); // This will output "GET / HTTP/1.1\r\nHost: www.google.com\r\nConnection: close\r\n\r\n"
stream.send(new TextEncoder().encode(payload));
```
