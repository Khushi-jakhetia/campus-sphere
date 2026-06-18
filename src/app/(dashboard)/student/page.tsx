import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendar from "@/components/EventCalendar";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const StudentPage = async () => {
  const { userId } = auth();

  const student = await prisma.student.findFirst({
    where: {
      id: "student1",
    },
  });

  const classItem = await prisma.class.findUnique({
    where: {
      id: student!.classId,
    },
  });

  return (
  <div className="p-4 flex gap-4 lg:flex-row flex-col">
    {/* LEFT */}
    <div className="w-full lg:w-2/3">
      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        <div className="bg-blue-500 text-white p-4 rounded-xl shadow-sm">
          <p className="text-sm">Attendance</p>
          <h1 className="text-3xl font-bold">92%</h1>
        </div>

        <div className="bg-green-500 text-white p-4 rounded-xl shadow-sm">
          <p className="text-sm">CGPA</p>
          <h1 className="text-3xl font-bold">8.74</h1>
        </div>

        <div className="bg-purple-500 text-white p-4 rounded-xl shadow-sm">
          <p className="text-sm">Credits Earned</p>
          <h1 className="text-3xl font-bold">132</h1>
        </div>

        <div className="bg-orange-500 text-white p-4 rounded-xl shadow-sm">
          <p className="text-sm">Upcoming Exams</p>
          <h1 className="text-3xl font-bold">3</h1>
        </div>
      </div>

      {/* TIMETABLE */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">
          Semester Timetable
        </h1>

        <p className="text-sm text-gray-500 mb-4">
          Weekly class schedule and academic sessions
        </p>

        <div className="h-[500px]">
          <BigCalendarContainer
            type="classId"
            id={classItem!.id}
          />
        </div>
      </div>

      {/* BOTTOM CARDS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
        {/* Upcoming Classes */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">
            Upcoming Classes
          </h2>

          <div className="space-y-3">
            <div className="border rounded-lg p-3">
              <h3 className="font-medium">Operating Systems</h3>
              <p className="text-sm text-gray-500">
                Today • 2:00 PM - 3:00 PM
              </p>
            </div>

            <div className="border rounded-lg p-3">
              <h3 className="font-medium">DBMS Lab</h3>
              <p className="text-sm text-gray-500">
                Today • 3:00 PM - 5:00 PM
              </p>
            </div>

            <div className="border rounded-lg p-3">
              <h3 className="font-medium">Computer Networks</h3>
              <p className="text-sm text-gray-500">
                Tomorrow • 10:00 AM - 11:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">
            Upcoming Deadlines
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">
                Operating Systems Assignment
              </h3>
              <p className="text-sm text-red-500">
                Due: 20 June 2026
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                DBMS Lab File Submission
              </h3>
              <p className="text-sm text-orange-500">
                Due: 22 June 2026
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Mini Project Report
              </h3>
              <p className="text-sm text-blue-500">
                Due: 25 June 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT */}
    <div className="w-full lg:w-1/3 flex flex-col gap-4">
      <EventCalendar />
      <Announcements />
    </div>
  </div>
);
};

export default StudentPage;