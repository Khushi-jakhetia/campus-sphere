import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendar from "@/components/EventCalendar";
import { auth } from "@clerk/nextjs/server";

const TeacherPage = () => {
  const { userId } = auth();

  return (
    <div className="p-4 flex gap-4 lg:flex-row flex-col">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        
        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
          <div className="bg-white border text-black p-4 rounded-xl shadow-sm">
            <p className="text-sm">Classes</p>
            <h1 className="text-3xl font-bold">24</h1>
          </div>

          <div className="bg-white border text-black p-4 rounded-xl shadow-sm">
            <p className="text-sm">Students</p>
            <h1 className="text-3xl font-bold">180</h1>
          </div>

          <div className="bg-white border text-black p-4 rounded-xl shadow-sm">
            <p className="text-sm">Attendance</p>
            <h1 className="text-3xl font-bold">92%</h1>
          </div>

          <div className="bg-white border text-black p-4 rounded-xl shadow-sm">
            <p className="text-sm">Pending Tasks</p>
            <h1 className="text-3xl font-bold">5</h1>
          </div>
        </div>

        {/* SCHEDULE */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">
            Teaching Schedule
          </h1>

          <p className="text-sm text-gray-500 mb-4">
            Weekly lecture timetable and academic sessions
          </p>

          <div className="h-[500px]">
            <BigCalendarContainer
              type="teacherId"
              id={userId!}
            />
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
          
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h2 className="font-semibold text-lg mb-4">
              Today's Classes
            </h2>

            <div className="space-y-3">
              <div className="border rounded-lg p-3">
                <h3 className="font-medium">Data Structures</h3>
                <p className="text-sm text-gray-500">
                  9:00 AM - 10:00 AM
                </p>
              </div>

              <div className="border rounded-lg p-3">
                <h3 className="font-medium">DBMS</h3>
                <p className="text-sm text-gray-500">
                  11:00 AM - 12:00 PM
                </p>
              </div>

              <div className="border rounded-lg p-3">
                <h3 className="font-medium">Operating Systems</h3>
                <p className="text-sm text-gray-500">
                  2:00 PM - 3:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h2 className="font-semibold text-lg mb-4">
              Pending Tasks
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium">
                  Upload Mid-Sem Marks
                </h3>
                <p className="text-sm text-red-500">
                  Due Today
                </p>
              </div>

              <div>
                <h3 className="font-medium">
                  Attendance Submission
                </h3>
                <p className="text-sm text-orange-500">
                  Due Tomorrow
                </p>
              </div>

              <div>
                <h3 className="font-medium">
                  Assignment Review
                </h3>
                <p className="text-sm text-blue-500">
                  Pending
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

export default TeacherPage;