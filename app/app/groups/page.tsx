import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default function GroupsPage() {
  return (
    <MobileFrameLayout>
      <h2 className="text-lg font-semibold">그룹</h2>
      <button className="mt-3 rounded-lg bg-coffee-500 px-3 py-2 text-sm text-white">그룹 생성</button>
    </MobileFrameLayout>
  );
}
