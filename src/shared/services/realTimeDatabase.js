import { ref } from "./firebase.js";

export const uploadDataToDB = (data) => {
  try {
    ref.set(data).then(() => {
      console.log("Data written to the database successfully.");
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDataFromDB = async () => {
  try {
    const snapshot = await ref.once("value");
    const data = snapshot.val();
    return data;
  } catch (error) {
    console.error("Error reading data from database:", error);
    return null;
  }
};
