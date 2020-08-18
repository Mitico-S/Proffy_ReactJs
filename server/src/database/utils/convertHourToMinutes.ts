export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number);
  const TimeInMinutes = hour * 60 + minutes;
  return TimeInMinutes;
}
