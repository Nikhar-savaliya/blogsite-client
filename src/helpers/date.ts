let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export const getDay = (timestamp: string) => {
  let date = new Date(timestamp);

  return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
};

export const getDate = (timestamp: string) => {
  let date = new Date(timestamp);

  return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
};
