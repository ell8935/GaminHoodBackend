import moment from "moment";

const formatDate = async (date) => {
  const cleanDate = date.replace("@ ", "");
  const formatDate = moment(cleanDate, "DD MMM h:mm a");
  // console.log(formatDate);

  return formatDate;
};

export default formatDate;
