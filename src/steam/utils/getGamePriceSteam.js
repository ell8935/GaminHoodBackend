import axios from "axios";
import { load } from "cheerio";
import getConversionRate from "../../shared/utils/getConversionRate.js";

const getGamePriceSteam = async (link) => {
  try {
    const res = await axios.get(link);
    const $ = load(res.data); // page
    const price = $(".discount_original_price").text();
    const match = price.match(/\d+(\.\d{1,2})?/);
    const priceNumeric = match ? parseFloat(match[0]) : null;

    const priceUSD = await getConversionRate(priceNumeric);

    return priceUSD;
  } catch (err) {
    return;
  }
};

getGamePriceSteam();

export default getGamePriceSteam;
