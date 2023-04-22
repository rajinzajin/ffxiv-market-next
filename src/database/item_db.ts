import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getItem(_id: number) {
	const data = await prisma.item.findFirst({
		where: { id: _id },
		select: { id: true, Name: true, Description: true },
	});
	return data;
}
