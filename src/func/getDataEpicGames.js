import puppeteer from "puppeteer-core";

const getDataEpicGames = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "./node_modules/chromium/lib/chromium/chrome-win/chrome",
  });

  const page = await browser.newPage();
  page.setViewport({ width: 0, height: 0 });
  await page.goto("https://www.epicgames.com/store/en-US/free-games");

  await page.waitForTimeout(3000);
  try {
    const freeGamesSelector = ".css-1myhtyb";
    await page.waitForSelector(freeGamesSelector);

    const data = await page.evaluate(() => {
      const freeGamesContainer = document.querySelectorAll(".css-shu77l");
      const freeGamesArray = [];
      Array.from(freeGamesContainer).forEach((el, i) => {
        const isFree = el.querySelector("span").innerText;
        if (isFree.includes("FREE NOW")) {
          const name = el.querySelector(
            'div[data-testid="offer-title-info-title"]'
          ).innerText;
          const date = el.querySelector(
            ".css-hkjq8i>[data-testid='offer-title-info-subtitle']"
          ).innerText;
          const image = el.querySelector("img").getAttribute("src");
          const endpoint = el.closest("a").getAttribute("href");
          const link = `https://store.epicgames.com${endpoint}`;

          freeGamesArray.push({
            name,
            date,
            image,
            link,
            dlc: true,
            platform: "epicGames",
          });
        }
      });

      return freeGamesArray;
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getDataEpicGames;
