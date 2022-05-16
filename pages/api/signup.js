import prisma from "lib/prisma"
import hashPassword from "lib/auth"

const signupHandler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body
        const { email, password } = data
        const existingUser = await prisma.users.findUnique({ where: { email } })

        if (existingUser) {
            res.status(400).json({ message: "User already exists" })
            return
        }

        if (!email || !password) {
            res.status(400).json({ message: "Please provide email and password" })
            return
        }

        const hashedPassword = await hashPassword(password)

        const newUser = await prisma.users.create({
            data: {
                email: email,
                password: hashedPassword,
            }
        })

        res.status(201).json({ message: "User created successfully", newUser })
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}

export default signupHandler