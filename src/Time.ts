// @ts-ignore

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const now = new Date();
export const TimeCurrent = now.getDate() + ' ' + months[now.getMonth() - 1];

export const DateNumber = [now.getDate(), now.getMonth()];

