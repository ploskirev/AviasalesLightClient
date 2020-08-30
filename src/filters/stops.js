const stops = {
  0: 'ПРЯМОЙ',
  1: '1 ПЕРЕСАДКА',
  2: '2 ПЕРЕСАДКИ',
  3: '3 ПЕРЕСАДКИ',
};

export default function (stopsLength) {
  return stops[stopsLength];
}
