const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getItem = async function(_id) {
	const data = await prisma.item.findFirst({
		where: { id: _id },
		select: { id: true, Name: true, Description: true },
	});
	return data;
}

exports.getItemBulk = async function () {
	const data = await prisma.item.findMany({
		select: { id: true, Name: true, Description: true, ClassJobCategory: true },
	});
	return data;
};
