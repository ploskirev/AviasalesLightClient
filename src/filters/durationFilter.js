export default function (duration) {
  let hours = `${Math.floor(duration / 3600000)}`;
  let minutes = `${(duration % 3600000) / 60000}`;
  hours = hours.length === 1 ? 0 + hours : hours;
  minutes = minutes.length === 1 ? 0 + minutes : minutes;
  return `${hours}ч ${minutes}м`;
}
