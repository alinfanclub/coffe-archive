"use server";

import { Visibility } from "@prisma/client";
import { auth } from "@/lib/auth";
import { canAccessGroup } from "@/lib/permissions";
import { prisma } from "@/lib/prisma";

export async function createPost(input: {
  groupId?: string;
  recordId?: string;
  title: string;
  content: string;
  visibility: Visibility;
  imageUrl?: string;
}) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  if (input.groupId) {
    const allowed = await canAccessGroup(session.user.id, input.groupId);
    if (!allowed) throw new Error("Forbidden: group access denied");
  }

  return prisma.post.create({
    data: {
      authorId: session.user.id,
      ...input
    }
  });
}

export async function listPosts(sort: "latest" | "popular" = "latest") {
  const orderBy = sort === "popular" ? [{ comments: { _count: "desc" as const } }, { createdAt: "desc" as const }] : [{ createdAt: "desc" as const }];

  return prisma.post.findMany({
    orderBy,
    include: {
      _count: { select: { comments: true } }
    }
  });
}

export async function createComment(input: { postId: string; parentId?: string; content: string }) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  return prisma.comment.create({
    data: {
      postId: input.postId,
      parentId: input.parentId,
      content: input.content,
      authorId: session.user.id
    }
  });
}
