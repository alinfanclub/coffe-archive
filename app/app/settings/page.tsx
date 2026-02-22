import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default function SettingsPage() {
  return (
    <MobileFrameLayout>
      <h2 className="text-lg font-semibold">설정</h2>
      <ul className="mt-3 space-y-2 text-sm">
        <li className="rounded-lg border p-3">프로필 편집</li>
        <li className="rounded-lg border p-3">비밀번호 변경</li>
      </ul>
    </MobileFrameLayout>
  );
}
