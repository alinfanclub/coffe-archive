import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default async function PostDetailPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;

  return (
    <MobileFrameLayout>
      <h2 className="text-lg font-semibold">게시글 상세</h2>
      <p className="mt-2 text-sm text-stone-600">Post ID: {postId}</p>
    </MobileFrameLayout>
  );
}
