'use client'

import React, { useState } from 'react';
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

export default function CalendarSection() {
  let [schedulerData, setSchedulerData] = useState([
    { id: 0, startDate: '2023-08-10T09:45', endDate: '2023-08-10T11:00', title: 'Meeting' }
  ]);
  let commitChanges = ({ added, changed, deleted }: any) => {
    if (added) {
      const newId = schedulerData.length > 0 ? schedulerData[schedulerData.length - 1].id + 1 : 0;
      setSchedulerData([...schedulerData, {id: newId, ...added}]);
    }

    if (changed) {
      setSchedulerData(schedulerData.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
      ));
    }

    if (deleted !== undefined) {
      setSchedulerData(schedulerData.filter((appointment) => appointment.id !== deleted));
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