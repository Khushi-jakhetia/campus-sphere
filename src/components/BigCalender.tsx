"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data,
}: {
  data: { title: string; start: Date; end: Date }[];
}) => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  const EventComponent = ({ event }: any) => (
  <div className="h-full">
    <p className="text-[11px] text-gray-500 font-semibold">
      {moment(event.start).format("hh:mm A")}
    </p>

    <p className="font-semibold text-[13px]">
      {event.title}
    </p>
  </div>
);

  return (
    <Calendar
    

  tooltipAccessor={(event) =>
    `${event.title}
${moment(event.start).format("hh:mm A")} - ${moment(
      event.end
    ).format("hh:mm A")}`
  }
  
  components={{
    event: EventComponent,
  }}

      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "100%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};

export default BigCalendar;