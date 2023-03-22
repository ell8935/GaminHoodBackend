const getImageEpicGames = (imageContainer) => {
  const image = imageContainer.find((photo) =>
    ["DieselStoreFrontWide", "OfferImageWide"].includes(photo.type)
  )?.url;

  return (
    image ||
    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
  );
};

export default getImageEpicGames;
