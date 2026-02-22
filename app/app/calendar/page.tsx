import { Calendar } from "@/components/calendar";
import { MobileFrameLayout } from "@/components/mobile-frame-layout";

export default function CalendarPage() {
  return (
    <MobileFrameLayout>
      <Calendar
        currentMonth={new Date()}
        countsByDate={{
          "2026-01-03": 2,
          "2026-01-04": 1,
          "2026-01-08": 3
        }}
      />
    </MobileFrameLayout>
  );
}
