import Link from "next/link";
import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default function LoginPage() {
  return (
    <MobileFrameLayout>
      <form className="space-y-3">
        <h2 className="text-lg font-semibold">로그인</h2>
        <input className="w-full rounded-lg border p-2" placeholder="이메일" type="email" />
        <input className="w-full rounded-lg border p-2" placeholder="비밀번호" type="password" />
        <button className="w-full rounded-lg bg-coffee-500 p-2 text-white" type="submit">
          로그인
        </button>
      </form>
      <p className="mt-3 text-xs text-stone-500">
        아직 계정이 없다면 <Link className="underline" href="/auth/signup">회원가입</Link>
      </p>
    </MobileFrameLayout>
  );
}
