export const calculateTimeLeft = (endDate) => {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days: days < 10 && days > 0 ? `0${days}` : days,
      hours: hours < 10 && hours > 0 ? `0${hours}` : hours,
      minutes: minutes < 10 && minutes > 0 ? `0${minutes}` : minutes,
      seconds: seconds < 10 && seconds > 0 ? `0${seconds}` : seconds,
    };
  } else {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }
};
