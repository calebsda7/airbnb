const puppeteer = require("puppeteer");

const scrapImages = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // await page.waitForSelector('img', {visible:true})
  // await page.screenshot({path: '3.png'})
  // await page.goto('https://b30d0e.csb.app/Nearby')

  await page.goto(
    "https://www.google.com/travel/things-to-do/places?g2lb=4716130%2C2502548%2C4649665%2C4640247%2C4731709%2C4723331%2C2503781%2C4733706%2C4726607%2C4722435%2C4429192%2C4306835%2C4401769%2C4704212%2C2503771%2C4722900%2C4597339%2C4270442%2C4647135%2C4258168%2C4291517%2C4284970&hl=en-US&gl=us&cs=1&ssta=1&dest_mid=%2Fm%2F071vr&dest_state_type=sap&dest_src=ts&q=things%20to%20do%20in%20san%20diego&sa=X&ved=2ahUKEwizidrKgrv2AhV5KEQIHbHGBU8QuL0BegQIUxA4"
  );

  await page.waitFor(100);

  const data1 = await page.evaluate(() => {
    const list = [];
    const images = Array.from(
      document.querySelectorAll("[data-title] .skFvHc.YmWhbc")
    ).forEach((el) => {
      const obj = {
        title: el.lastElementChild.firstElementChild.textContent,
        image: el.firstElementChild.firstElementChild.lastElementChild.getAttribute(
          "src"
        )
      };

      list.push(obj);
      // list.push(el.firstElementChild.firstElementChild.lastElementChild.getAttribute('src'))
      // list.push(el.textContent)
    });
    return list;
  });

  await browser.close();
  console.log("data=====>", data1);
};

scrapImages();
