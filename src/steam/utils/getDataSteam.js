import axios from "axios";
import { load } from "cheerio";
import getGamePriceSteam from "./getGamePriceSteam.js";
import getGameExpireDateSteam from "./getGameExpireDateSteam.js";
import getGameBetterImageSteam from "./getGameBetterImageSteam.js";

const getDataSteam = async () => {
  const res = await axios.get(
    "https://store.steampowered.com/search/?maxprice=free&category1=21%2C998&specials=1"
  );

  const $ = load(res.data); // page

  const container = $("#search_resultsRows").children(); // only search results

  const games = [];

  for (let index = 0; index < container.length; index++) {
    try {
      const el = container[index];
      const link = $(el).attr("href");
      const name = $(el).find(".title").text();
      const price = `$${await getGamePriceSteam(link)}` || "49.99"; //got only 1500 api calls for conversion
      // console.log(link);
      // console.log(price);
      const date = await getGameExpireDateSteam(link);
      let image = await getGameBetterImageSteam(link);
      if (!image) image = $(el).find("img").attr("src");
      games.push({
        name,
        date,
        link,
        image,
        price,
        dlc: false,
        platform: "steam",
      });
    } catch (err) {
      console.log(err);
    }
  }

  return games;
};

export default getDataSteam;
