import { prisma } from "./config.js";
const user = await prisma.user.create({
    data: {
        email: "marandoryan@gmail.com",
        name: "Ryan Marando",
        password: "password",
    },
});
console.log(user);
