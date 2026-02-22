import Link from "next/link";
import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default function TemplatesPage() {
  return (
    <MobileFrameLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">템플릿</h2>
        <Link href="/app/templates/new" className="rounded-lg bg-coffee-500 px-3 py-2 text-sm text-white">새 템플릿</Link>
      </div>
    </MobileFrameLayout>
  );
}
