import "dotenv/config";
import axios from "axios";

//Converstion from Euro to USD

const getConversionRate = async (priceInEuro) => {
  const res = await axios.get(
    `https://v6.exchangerate-api.com/v6/${process.env.CONVERSTION_API_KEY}/latest/EUR`
  );

  const conversionRate = res.data.conversion_rates.USD;

  const euroToUsd = (Number(priceInEuro) * Number(conversionRate)).toFixed(2); // price in Euro due to the host server is in europe

  return String(euroToUsd);
};

export default getConversionRate;
