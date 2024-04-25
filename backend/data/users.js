import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        passwordHash: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Isabel Valkrusman',
        email: 'valkrusman@gmail.com',
        passwordHash: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Hello Hello',
        email: 'hello@gmail.com',
        passwordHash: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];

export default users;
