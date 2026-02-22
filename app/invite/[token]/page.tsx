import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default async function InvitePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  return (
    <MobileFrameLayout>
      <h2 className="text-lg font-semibold">그룹 초대</h2>
      <p className="mt-2 text-sm text-stone-600">초대 토큰: {token}</p>
      <button className="mt-4 rounded-lg bg-coffee-500 px-4 py-2 text-sm text-white">그룹 참여하기</button>
    </MobileFrameLayout>
  );
}
