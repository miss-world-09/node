const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL)
console.log(myURL.href)
console.log(myURL.host)
console.log(myURL.hostname)
console.log(myURL.password)
console.log(myURL.port)
console.log(myURL.protocol)
console.log(myURL.search)
