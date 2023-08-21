import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Toolbar,
  DateNavigator,
  TodayButton,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  AppointmentForm
} from '@devexpress/dx-react-scheduler-material-ui';

interface Event {
  eventid: number;
  title: string;
  startDate: Date;
  endDate: Date;
  allDay: boolean;
  rRule?: string;
  notes?: string;
};

export default function CalendarSection() {
  let [schedulerData, setSchedulerData] = useState<Event[]>([]);
  let commitChanges = ({ added, changed, deleted }: any) => {
    if (added) {
      const newId = schedulerData.length > 0 ? schedulerData[schedulerData.length - 1].eventid + 1 : 0;
      setSchedulerData([...schedulerData, {id: newId, ...added}]);
    }

    if (changed) {
      setSchedulerData(schedulerData.map((appointment) =>
          changed[appointment.eventid]
            ? { ...appointment, ...changed[appointment.eventid] }
            : appointment
      ));
    }

    if (deleted !== undefined) {
      setSchedulerData(schedulerData.filter((appointment) => appointment.eventid !== deleted));
    }
  }

  return (
    <Paper>
      <Scheduler data={schedulerData} height="638">
        <ViewState/>
        <EditingState onCommitChanges={commitChanges}/>
        <IntegratedEditing />
        <DayView startDayHour={0} endDayHour={24}/>
        <WeekView startDayHour={0} endDayHour={24} />
        <MonthView />

        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        
        <Appointments />
        <AppointmentTooltip showCloseButton showOpenButton showDeleteButton />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  )
};