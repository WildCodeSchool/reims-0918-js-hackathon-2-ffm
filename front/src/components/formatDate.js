const { DateTime } = require("luxon");

const formatDate = newDate =>
  DateTime.fromMillis(newDate)
    .setLocale("fr")
    .toFormat("f");
export default formatDate;
