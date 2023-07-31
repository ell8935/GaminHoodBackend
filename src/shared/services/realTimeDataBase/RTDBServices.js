import { ref, set, get, child, onValue } from "firebase/database";
import { realTimeDatabase } from "../../../shared/services/firebase.js";

export const uploadDataToDB = (data) => {
  try {
    set(ref(realTimeDatabase), {
      games: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDataFromDB = async () => {
  let data = [];
  onValue(ref(realTimeDatabase), (snapshot) => {
    data = snapshot.val();
  });
  return data.games;
};
