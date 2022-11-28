import moment from "moment";

const dateRelevant = async (date) => {
  if (moment().isBefore(date)) {
    return true;
  } else return false;
};

export default dateRelevant;
