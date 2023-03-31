import axios from "axios";

const getConversionRate = async (priceInIls) => {
  const res = await axios.get(
    "https://v6.exchangerate-api.com/v6/479f4ff243bc1b4fb919998e/latest/ILS"
  );

  const conversionRate = res.data.conversion_rates.USD;

  const ilsToUsd = (Number(priceInIls) * Number(conversionRate)).toFixed(2);

  return String(ilsToUsd);
};

export default getConversionRate;
