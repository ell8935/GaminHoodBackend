import axios from "axios";

const getDataEpicGames = async () => {
  try {
    const { data } = await axios.get(
      "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions?country=US"
    );
    const games = [];
    const elements = data.data.Catalog.searchStore.elements;

    elements.forEach((game) => {
      const time = game.promotions.promotionalOffers[0]?.promotionalOffers[0];

      if (time) {
        console.log("2");
        const link = `https://store.epicgames.com/en-US/p/${game.productSlug}`;
        const name = game.title;
        const imageContainer = game.keyImages;

        const date = new Date(time.endDate).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        let image;
        imageContainer.forEach((photo) => {
          if (photo.type === "DieselStoreFrontWide") {
            image = photo.url;
          }
        });

        games.push({
          name,
          date,
          link,
          image,
          dlc: true,
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
