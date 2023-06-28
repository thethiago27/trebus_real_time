export const newUserRegistration = (nickname: string) => localStorage.setItem('nickname', nickname);
export const getNickname = () => localStorage.getItem('nickname');