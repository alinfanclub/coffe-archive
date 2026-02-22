import { GroupRole, Visibility } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function canAccessGroup(userId: string, groupId: string) {
  const membership = await prisma.groupMember.findFirst({
    where: {
      groupId,
      userId
    }
  });

  return Boolean(membership);
}

export async function canManageGroup(userId: string, groupId: string) {
  const membership = await prisma.groupMember.findFirst({
    where: {
      groupId,
      userId,
      role: { in: [GroupRole.OWNER, GroupRole.ADMIN] }
    }
  });

  return Boolean(membership);
}

export async function canReadRecord(userId: string, recordId: string) {
  const record = await prisma.coffeeRecord.findUnique({ where: { id: recordId } });
  if (!record) return false;

  if (record.visibility === Visibility.PUBLIC) return true;
  if (record.userId === userId) return true;

  if (record.visibility === Visibility.GROUP && record.groupId) {
    return canAccessGroup(userId, record.groupId);
  }

  return false;
}
