const options = {
  hour: '2-digit',
  minute: '2-digit',
};

// console.log(new Intl.DateTimeFormat('ru-RU', options).format(date));

export default function (time) {
  // const str = `${digits}`;
  // return str.length < 2 ? `0${str}` : str;
  return new Intl.DateTimeFormat('ru-RU', options).format(time);
}
