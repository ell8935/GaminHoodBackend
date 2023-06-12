import axios from "axios";
import { load } from "cheerio";
import getConversionRate from "../../shared/utils/getConversionRate.js";

const getGamePriceSteam = async (link) => {
  try {
    axios.defaults.headers.Cookie =
      "wants_mature_content=1; birthtime=786232801; lastagecheckage=1-0-1995";
    const res = await axios.get(link);
    const $ = load(res.data); // page
    const price = $(".discount_original_price").text();
    const match = price.match(/[\d,]+(?:\.\d+)?/);
    const priceNumeric = match ? parseFloat(match[0].replace(",", ".")) : null;
    const priceUSD = await getConversionRate(priceNumeric);

    return priceUSD ? priceUSD : "9.99";
  } catch (err) {
    return "9.99";
  }
};

export default getGamePriceSteam;
