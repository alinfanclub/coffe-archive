import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default function NewRecordPage() {
  return (
    <MobileFrameLayout>
      <h2 className="text-lg font-semibold">새 커피 기록</h2>
      <button className="mt-3 rounded-lg border px-3 py-2 text-sm">템플릿 불러오기</button>
      <form className="mt-3 space-y-3">
        <details open className="rounded-lg border p-3">
          <summary className="cursor-pointer font-medium">기본 정보</summary>
          <input className="mt-2 w-full rounded-lg border p-2" placeholder="드리퍼" />
          <input className="mt-2 w-full rounded-lg border p-2" placeholder="그라인더" />
        </details>
        <details className="rounded-lg border p-3">
          <summary className="cursor-pointer font-medium">레시피</summary>
          <input className="mt-2 w-full rounded-lg border p-2" placeholder="원두량(g)" />
          <input className="mt-2 w-full rounded-lg border p-2" placeholder="물량(ml)" />
        </details>
      </form>
    </MobileFrameLayout>
  );
}
