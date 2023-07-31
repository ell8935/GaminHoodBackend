import "dotenv/config";
import axios from "axios";

const getConversionRate = async (priceInEuro) => {
  const res = await axios.get(
    `https://v6.exchangerate-api.com/v6/${process.env.CONVERSTION_API_KEY}/latest/EUR`
  );

  const conversionRate = res.data.conversion_rates.USD;

  const ilsToUsd = (Number(priceInEuro) * Number(conversionRate)).toFixed(2);

  return String(ilsToUsd);
};

export default getConversionRate;
