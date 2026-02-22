import { eachDayOfInterval, endOfMonth, endOfWeek, format, isSameMonth, startOfMonth, startOfWeek } from "date-fns";

type CalendarProps = {
  currentMonth: Date;
  countsByDate: Record<string, number>;
};

export function Calendar({ currentMonth, countsByDate }: CalendarProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({
    start: startOfWeek(monthStart, { weekStartsOn: 0 }),
    end: endOfWeek(monthEnd, { weekStartsOn: 0 })
  });

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-3">
      <h2 className="mb-4 text-center text-base font-semibold">{format(currentMonth, "yyyy년 M월")}</h2>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-stone-500">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1">
        {days.map((day) => {
          const key = format(day, "yyyy-MM-dd");
          const count = countsByDate[key] ?? 0;
          const inMonth = isSameMonth(day, currentMonth);

          return (
            <a
              key={key}
              href={`/app/day/${key}`}
              className={`flex min-h-14 flex-col rounded-lg p-1 text-xs ${
                inMonth ? "bg-coffee-50 text-stone-900" : "bg-stone-100 text-stone-400"
              }`}
            >
              <span>{format(day, "d")}</span>
              {count > 0 ? (
                <span className="mt-auto w-fit rounded-full bg-coffee-500 px-2 py-0.5 text-[10px] text-white">{count}잔</span>
              ) : null}
            </a>
          );
        })}
      </div>
    </div>
  );
}
