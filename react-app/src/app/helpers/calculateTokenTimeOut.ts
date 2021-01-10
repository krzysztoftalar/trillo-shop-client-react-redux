export const calcTokenTimeout = (token: string): number => {
    const jwtToken = JSON.parse(atob(token.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    return expires.getTime() - Date.now() - 60 * 1000;
};
