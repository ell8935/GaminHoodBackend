import axios from "axios";
import { load } from "cheerio";
import formatDate from "./formatDate.js";

const getGameExpireDateSteam = async (link) => {
  const res = await axios.get(link);
  const $ = await load(res.data); // page
  try {
    const date = $(".game_purchase_discount_quantity")
      .text()
      .split("before")[1]
      .split(".")[0];
    formatDate(date);
    return date;
  } catch (err) {
    return;
  }
};

export default getGameExpireDateSteam;
