import prisma from "@/lib/prisma";
import BigCalendar from "./BigCalender";

const BigCalendarContainer = async ({
  type,
  id,
}: {
  type: "teacherId" | "classId";
  id: string | number;
}) => {
  const dataRes = await prisma.lesson.findMany({
    where: {
      ...(type === "teacherId"
        ? { teacherId: id as string }
        : { classId: id as number }),
    },
  });

  const data = dataRes.map((lesson) => {
    const today = new Date();

    const dayMap: Record<string, number> = {
      MONDAY: 1,
      TUESDAY: 2,
      WEDNESDAY: 3,
      THURSDAY: 4,
      FRIDAY: 5,
    };

    const monday = new Date(today);
    monday.setDate(
      today.getDate() - (today.getDay() === 0 ? 6 : today.getDay() - 1)
    );

    const lessonDate = new Date(monday);
    lessonDate.setDate(
      monday.getDate() + (dayMap[lesson.day] - 1)
    );

    lessonDate.setHours(
      lesson.startTime.getHours(),
      lesson.startTime.getMinutes(),
      0,
      0
    );

    const endDate = new Date(lessonDate);
    endDate.setHours(
      lesson.endTime.getHours(),
      lesson.endTime.getMinutes(),
      0,
      0
    );

    return {
      title: lesson.name,
      start: lessonDate,
      end: endDate,
    };
  });

  console.log("CALENDAR DATA =", data);

  return (
    <div className="h-full">
      <BigCalendar data={data} />
    </div>
  );
};

export default BigCalendarContainer;
