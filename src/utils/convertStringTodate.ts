const dateConvert: (str: Date) => string = str => {
  const createdYear = new Date(str).getFullYear();
  const createdMonth = new Date(str).getMonth() + 1;
  const createdDate = new Date(str).getDate();

  const month = createdMonth < 10 ? '0' + createdMonth : createdMonth;
  const date = createdDate < 10 ? '0' + createdDate : createdDate;

  return `${createdYear}년 ${month}월 ${date}일`;
};

export default dateConvert;
