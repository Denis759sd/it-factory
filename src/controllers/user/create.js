const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async (req, res) => {
    const user = await prisma.user.create({data: req.body.user})

    res.status(200).json({status: 'success', user})
}