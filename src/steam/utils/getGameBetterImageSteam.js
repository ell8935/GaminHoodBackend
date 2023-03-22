import axios from "axios";
import { load } from "cheerio";

const getGameBetterImageSteam = async (link) => {
  const res = await axios.get(link);
  const $ = load(res.data); // page
  try {
    const image = $(".game_header_image_full").attr("src");
    return image;
  } catch (err) {
    console.log(err);
    return;
  }
};

export default getGameBetterImageSteam;
