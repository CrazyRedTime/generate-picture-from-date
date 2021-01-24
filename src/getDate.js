const getDate = () => {
  const today = new Date();
  let day = today.getDate().toString();
  if (day.length === 1) {
    day = '0' + day;
  }
  let month = (today.getMonth() + 1).toString();
  if (month.length === 1) {
    month = '0' + month;
  }
  const year = today.getFullYear().toString();
  const formatDate = `${year}-${month}-${day}`;
  return formatDate;
}

export default getDate;