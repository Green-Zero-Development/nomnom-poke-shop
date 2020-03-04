const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/Chance-Premium-Rubber-Outdoor-Basketball/dp/B07DS4WN9Y/ref=sr_1_1_sspa?keywords=basketball&qid=1583288475&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWTlVSVJKNzcxWk0zJmVuY3J5cHRlZElkPUEwNTE3NTE5MVZJTzdENE9LR0FOUCZlbmNyeXB0ZWRBZElkPUEwMjU4ODcwMjBURUpUUjlXM0ROWCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=');

  const element = await page.$("#productTitle");
  const text = await page.evaluate(element => element.innerText, element);
  const element1 = await page.$("#priceblock_ourprice");
  const text1 = await page.evaluate(element1 => element1.innerText, element1);

  fs.appendFile('./static/test.json', '{', err => err ? console.log(err): null);
  fs.appendFile('./static/test.json', '"name":' + JSON.stringify(text) + ',', err => err ? console.log(err): null);
  fs.appendFile('./static/test.json', '"price":' + JSON.stringify(text1) + '}', err => err ? console.log(err): null);
  fs.appendFile('./static/test.json', '\n', err => err ? console.log(err): null);

  await browser.close();
})();