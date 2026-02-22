import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default async function RecordDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <MobileFrameLayout>
      <h2 className="text-lg font-semibold">기록 상세</h2>
      <p className="mt-2 text-sm text-stone-600">Record ID: {id}</p>
    </MobileFrameLayout>
  );
}
