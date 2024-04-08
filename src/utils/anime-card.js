import dayjs from "dayjs";

const DateFormat = {
  DATE_SHORT: 'MMMM YYYY',
  DATE_FULL: 'MMMM DD, YYYY',
};

export const getRefineDate = (date) => date && dayjs(date).format(DateFormat.DATE_FULL);
