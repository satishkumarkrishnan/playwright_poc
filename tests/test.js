import { chromium } from 'playwright';
( async () => 
    {   const browser = await chromium.launch();
           const page = await browser.newPage();
              await page.goto('actual Bancslink url'); 
                console.log(await page.title());
                   await browser.close(); })();
