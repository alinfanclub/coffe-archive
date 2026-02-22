import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default async function GroupDetailPage({ params }: { params: Promise<{ groupId: string }> }) {
  const { groupId } = await params;

  return (
    <MobileFrameLayout>
      <h2 className="text-lg font-semibold">그룹 상세</h2>
      <p className="mt-2 text-sm text-stone-600">Group ID: {groupId}</p>
    </MobileFrameLayout>
  );
}
