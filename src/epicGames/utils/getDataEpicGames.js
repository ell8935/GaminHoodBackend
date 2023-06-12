import axios from "axios";
import getDateEpicGames from "./getDateEpicGames.js";
import getImageEpicGames from "./getImageEpicGames.js";

const getDataEpicGames = async () => {
  const games = [];

  try {
    const { data } = await axios.get(
      "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?country=US"
    );
    const elements = data.data.Catalog.searchStore.elements;

    elements.forEach((game) => {
      const time = game.promotions?.promotionalOffers[0]?.promotionalOffers[0];
      if (time) {
        const link = `https://store.epicgames.com/en-US/p/${game.productSlug}`;
        const name = game.title;
        const date = getDateEpicGames(time);
        const imageContainer = game.keyImages;
        const image = getImageEpicGames(imageContainer);
        const dlc = game.offerType === "BASE_GAME" ? false : true;
        const price = game.price.totalPrice.fmtPrice.originalPrice;

        games.push({
          name,
          date,
          price,
          link,
          image,
          dlc,
          platform: "epicgames",
        });
      }
    });
    return games;
  } catch (err) {
    console.log(err);
  }
};

export default getDataEpicGames;
