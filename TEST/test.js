const date = new Date();
const ndate = Date.parse(date);

fetch("https://api.ssyoutube.com/api/convert", {
  method: "POST",
  body: JSON.stringify({
    url: "https://www.youtube.com/watch?v=m1lwVfQN28E&list=PLx-9goQSi3JXZgCV0Jyy6w9byMoMaf6tH&index=8",
    ts: "1685939543735",
    _ts: "1685933979074",
    _tsc: "0",
    _s: "1ad814d65ee9e8681e69f5c3f3a7163fe2c5d075ad7fa23f2746268a4065f25c",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then(json);

// default js
