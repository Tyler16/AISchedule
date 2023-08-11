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
    { startDate: '2023-08-10T09:45', endDate: '2023-08-10T11:00', title: 'Meeting' }
  ]);
  let commitChanges = ({ added, changed, deleted }: any) => {
    console.log(added);
    console.log(changed);
    console.log(deleted);
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