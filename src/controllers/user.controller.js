import prismaPackage from "@prisma/client";
import status from 'http-status';

const { PrismaClient } = prismaPackage;
const prisma = new PrismaClient();

const createUser = async (req, res) => {
	const user = await prisma.user.create(req.body);
	res.status(status.OK).send(user);
};

const getAllUser = async (req, res) => {
	const allUsers = await prisma.user.findMany({
		include: {
			posts: true,
			profile: true,
		},
	});
	res.send(allUsers);
};

export default { getAllUser, createUser };
