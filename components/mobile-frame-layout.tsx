export function MobileFrameLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,#f4ebe3_0%,#ece4db_30%,#e4ddd5_60%,#ddd7d0_100%)] lg:flex lg:items-center lg:justify-center lg:p-8">
      <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col bg-white lg:min-h-[90vh] lg:max-h-[90vh] lg:overflow-hidden lg:rounded-[28px] lg:shadow-frame">
        <header className="border-b border-stone-200 px-4 py-3">
          <h1 className="text-lg font-semibold text-coffee-900">Coffee Archive</h1>
        </header>
        <main className="flex-1 overflow-y-auto px-4 py-4">{children}</main>
      </div>
    </div>
  );
}
