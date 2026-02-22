import Link from "next/link";
import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default function LandingPage() {
  return (
    <MobileFrameLayout>
      <section className="space-y-4">
        <h2 className="text-xl font-bold">브루잉 기록을 달력으로 관리하세요</h2>
        <p className="text-sm text-stone-600">기록 중심 UX와 그룹 공유까지 한 번에 관리하는 Coffee Archive MVP</p>
        <div className="flex gap-2">
          <Link className="rounded-lg bg-coffee-500 px-4 py-2 text-sm font-medium text-white" href="/auth/login">
            로그인
          </Link>
          <Link className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium" href="/auth/signup">
            회원가입
          </Link>
        </div>
      </section>
    </MobileFrameLayout>
  );
}
