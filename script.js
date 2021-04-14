const puppy = require("puppeteer");

const name =" hello";
const id="helloagain8090@gmail.com";
const pass= "udemyscrapping";

async function main(){
    const browser = await puppy.launch({ 
        headless: false ,
        defaultViewport: false,
        args: ["--start-maximized"]
    });
  
    let pages = await browser.pages(); 
    let  tab = pages[0]; 
    await tab.goto("https://udemycoupon.learnviral.com/coupon-category/free100-discount/");
    const links = await tab.$$eval(".coupon-code-link.btn.promotion", (list) => list.map((elm) => elm.href));
  
    await tab.goto(links[2]);
    await tab.waitForSelector('button[data-purpose="buy-this-course-button"]', {visible:true});
    await tab.click('button[data-purpose="buy-this-course-button"]');
   
    await tab.waitForSelector(".udlite-btn.udlite-btn-medium.udlite-btn-secondary.udlite-heading-sm");
    await tab.click(".udlite-btn.udlite-btn-medium.udlite-btn-secondary.udlite-heading-sm");
   
    await tab.waitForSelector("#email--1");
    await tab.type("#email--1",id);
    await tab.waitForSelector("#id_password");
    await tab.type("#id_password",pass);
    await tab.waitForSelector("#submit-id-submit");
    await tab.click("#submit-id-submit");
     await tab.waitForSelector(".styles--complete-payment-container--3Jazs button",{visible:true});
     await tab.click(".styles--complete-payment-container--3Jazs button");


  
}

main();
