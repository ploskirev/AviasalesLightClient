const cities = {
  KUL: 'Kuala Lumpur',
  BKK: 'Bangkok',
  DXB: 'Dubai',
  IST: 'Istanbul',
  SIN: 'Singapore',
};

export default function (citi) {
  if (cities[citi]) return cities[citi];
  return citi;
}
