export const formatDate = (ISOdate: string) => {
  const date = new Date(ISOdate);
  const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
  return `${year}년 ${month + 1}월 ${day}일`;
};
