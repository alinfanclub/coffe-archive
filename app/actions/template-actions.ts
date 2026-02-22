"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function createTemplate(input: { name: string; data: unknown }) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  return prisma.template.create({
    data: {
      userId: session.user.id,
      ...input
    }
  });
}

export async function listTemplates() {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  return prisma.template.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" }
  });
}

export async function deleteTemplate(templateId: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const template = await prisma.template.findUnique({ where: { id: templateId } });
  if (!template || template.userId !== session.user.id) throw new Error("Forbidden");

  await prisma.template.delete({ where: { id: templateId } });
}
