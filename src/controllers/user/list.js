const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async (req, res) => {
    const users = await prisma.user.findMany()

    res.status(200).json(users)
}