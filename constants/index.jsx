export const host = process.env.NEXT_PUBLIC_URL;
console.log('NEXT_PUBLIC_URL',process.env.NEXT_PUBLIC_URL)
export const root = 'root:';
export const UNAUHTORIZED = 'Unauthorized Access';
export const ACCESS_DENIED = 'Access Denied';
export const agentKey = `${root}agent_key`;

export const COLORS = {
  troBlue: '#01065B',
  troGold: '#7A0D0C',
  backgroundGray: '#e3e3e3',
  cardColor: '#F4F4F4',
  troBrown: '#7D1312',
};

export const agentToken = async () => {
  const token = localStorage.getItem (agentKey);
  return token;
};

export const Naira = '₦';
export const dateFormat = date => {
  const newDate = new Date (date);
  const year = newDate.getFullYear ();
  let month = newDate.getMonth () + 1;
  let day = newDate.getDate ();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  return `${day}-${month}-${year}`;
};

export const returnYearMonthDate = async date => {
  const year = new Date (date).getFullYear ();
  const month = new Date (date).getMonth ();
  const day = new Date (date).getDate ();
  return `${year}-${month}-${day}`;
};

export const timeFunction = data => {
  const date = new Date (data);
  let hours = date.getHours ();
  let minutes = date.getMinutes ();
  let seconds = date.getSeconds ();

  const timeOfDay = hours > 11 ? 'PM' : 'AM';
  if (hours > 12) hours = hours % 12;
  if (hours === 0) hours = 12;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${hours}:${minutes}:${seconds} ${timeOfDay}`;
};

export const convertToThousand = value => {
  value = value.toString ().replace (/\B(?=(\d{3})+(?!\d))/g, ',') || 0;
  return `${Naira}${value}`;
};

export const calculateRevenueTotalObject = collection => {
  let total = 0;
  collection.map (item => {
    return (total += parseInt (item.total || 0));
  });
  return total;
};
export const calculateRevenueAmount = collection => {
  let total = 0;
  collection.map (item => {
    return (total += parseInt (item.amount || 0));
  });
  return total;
};

