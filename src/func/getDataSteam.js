import axios from "axios";
import { load } from "cheerio";
import getGameExpireDateSteam from "./getGameExpireDateSteam.js";

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
      const image = $(el).find("img").attr("src");
      const date = await getGameExpireDateSteam(link);
      games.push({ name, date, link, image, dlc: true, platform: "steam" });
    } catch (err) {}
  }

  return games;
};

export default getDataSteam;
