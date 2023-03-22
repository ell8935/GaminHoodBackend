import axios from "axios";
import { load } from "cheerio";
import getConversionRate from "../../shared/utils/getConversionRate.js";

const getGamePriceSteam = async (link) => {
  const res = await axios.get(
    "https://store.steampowered.com/app/2186310/Clash__Lone_Fighter_Pack/"
  );
  const $ = load(res.data); // page
  try {
    const price = $(".discount_original_price").text().replace("₪", "");

    const priceUSD = await getConversionRate(price);

    return priceUSD;
  } catch (err) {
    return;
  }
};

getGamePriceSteam();

export default getGamePriceSteam;
