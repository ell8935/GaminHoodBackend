import sendEmailHandler from "../modals/sendEmailHandler.js";

const sendEmail = async (req, res, next) => {
  try {
    const data = req.body;
    sendEmailHandler(data.email, data.body);

    return res.status(200).json("its sent:" + { data });
  } catch (err) {
    return next(err);
  }
};

export default sendEmail;
