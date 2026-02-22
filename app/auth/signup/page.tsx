import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default function SignupPage() {
  return (
    <MobileFrameLayout>
      <form className="space-y-3">
        <h2 className="text-lg font-semibold">회원가입</h2>
        <input className="w-full rounded-lg border p-2" placeholder="닉네임" />
        <input className="w-full rounded-lg border p-2" placeholder="이메일" type="email" />
        <input className="w-full rounded-lg border p-2" placeholder="비밀번호" type="password" />
        <button className="w-full rounded-lg bg-coffee-500 p-2 text-white" type="submit">
          계정 만들기
        </button>
      </form>
    </MobileFrameLayout>
  );
}
