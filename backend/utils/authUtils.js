import bcrypt from 'bcryptjs';
import users from './users';

export const loginUser = (email, password) => {
    const user = users.find(user => user.email === email);
    if (user && bcrypt.compareSync(password, user.passwordHash)) {
        // Kasutaja autentimine õnnestus
        return user;
    } else {
        // Autentimine ebaõnnestus
        return null;
    }
};
