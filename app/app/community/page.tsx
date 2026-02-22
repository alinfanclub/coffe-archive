import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default function CommunityPage() {
  return (
    <MobileFrameLayout>
      <h2 className="text-lg font-semibold">커뮤니티</h2>
      <div className="mt-3 rounded-lg border p-3">
        <h3 className="font-medium">이번 주 산미 좋은 원두 추천</h3>
        <p className="mt-1 text-sm text-stone-600">댓글 12 · 최신순</p>
      </div>
    </MobileFrameLayout>
  );
}
