export const setToken = (token) => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7); // Set token expiry to 7 days
    localStorage.setItem('token', token);
    localStorage.setItem('expiry', expiry.toISOString());
};

export const getToken = () => {
    const token = localStorage.getItem('token');
    const expiry = localStorage.getItem('expiry');

    if (!token || !expiry) return null;

    if (new Date(expiry) < new Date()) {
        clearToken();
        return null;
    }

    return token;
};

export const clearToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiry');
};
