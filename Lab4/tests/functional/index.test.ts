const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    await page.screenshot({ path: 'example.png' });
    await page.waitFor(2000);
    await page.type('#enterTitle','Test');
    await page.type('#enterText','Test text');
    await page.click('#addButton');
    await page.waitFor(2000);
    await page.screenshot({path: 'noteAdded.jpg'});
    //await browser.close();
  })();