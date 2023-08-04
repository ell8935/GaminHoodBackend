import axios from "axios";
import { load } from "cheerio";

//Have to refetch inside due to only place that u can get the expiry date.

const getGameExpireDateSteam = async (link) => {
  const res = await axios.get(link);
  const $ = load(res.data); // page
  try {
    const date = $(".game_purchase_discount_quantity")
      .text()
      .split("before")[1]
      .split(".")[0]
      .replace("@", ",");
    const formatDate = "Free Now -" + date;

    return formatDate;
  } catch (err) {
    return "Free Now";
  }
};

export default getGameExpireDateSteam;
