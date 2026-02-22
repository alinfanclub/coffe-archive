"use server";

import { Visibility } from "@prisma/client";
import { auth } from "@/lib/auth";
import { canAccessGroup, canReadRecord } from "@/lib/permissions";
import { prisma } from "@/lib/prisma";

export async function createRecord(input: {
  date: Date;
  groupId?: string;
  visibility: Visibility;
  dripper?: string;
  filter?: string;
  grinder?: string;
  grindSize?: string;
  beanOrigin?: string;
  beanAltitude?: string;
  beanVariety?: string;
  beanNotes?: string;
  recipe: unknown;
  rating?: unknown;
  memo?: string;
}) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  if (input.groupId) {
    const allowed = await canAccessGroup(session.user.id, input.groupId);
    if (!allowed) throw new Error("Forbidden: group access denied");
  }

  return prisma.coffeeRecord.create({
    data: {
      ...input,
      userId: session.user.id
    }
  });
}

export async function updateRecord(recordId: string, input: Partial<Parameters<typeof createRecord>[0]>) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const existing = await prisma.coffeeRecord.findUnique({ where: { id: recordId } });
  if (!existing || existing.userId !== session.user.id) throw new Error("Forbidden");

  if (input.groupId) {
    const allowed = await canAccessGroup(session.user.id, input.groupId);
    if (!allowed) throw new Error("Forbidden: group access denied");
  }

  return prisma.coffeeRecord.update({ where: { id: recordId }, data: input });
}

export async function getRecord(recordId: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const allowed = await canReadRecord(session.user.id, recordId);
  if (!allowed) throw new Error("Forbidden");

  return prisma.coffeeRecord.findUnique({ where: { id: recordId } });
}

export async function deleteRecord(recordId: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const existing = await prisma.coffeeRecord.findUnique({ where: { id: recordId } });
  if (!existing || existing.userId !== session.user.id) throw new Error("Forbidden");

  await prisma.coffeeRecord.delete({ where: { id: recordId } });
}
