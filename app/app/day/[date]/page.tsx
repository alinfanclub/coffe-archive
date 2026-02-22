import Link from "next/link";
import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default async function DayPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;

  return (
    <MobileFrameLayout>
      <h2 className="text-lg font-semibold">{date} 기록</h2>
      <ul className="mt-3 space-y-2">
        <li className="rounded-lg border p-3 text-sm">08:30 V60 에티오피아 내추럴</li>
      </ul>
      <Link href="/app/records/new" className="mt-4 inline-block rounded-lg bg-coffee-500 px-4 py-2 text-sm text-white">
        새 기록 추가
      </Link>
    </MobileFrameLayout>
  );
}
