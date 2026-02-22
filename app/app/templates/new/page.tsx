import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default function NewTemplatePage() {
  return (
    <MobileFrameLayout>
      <h2 className="text-lg font-semibold">템플릿 생성</h2>
      <form className="mt-3 space-y-2">
        <input className="w-full rounded-lg border p-2" placeholder="템플릿 이름" />
        <button className="rounded-lg bg-coffee-500 px-3 py-2 text-sm text-white">저장</button>
      </form>
    </MobileFrameLayout>
  );
}
