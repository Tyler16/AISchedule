'use client'

import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
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
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2023-08-07T09:45', endDate: '2023-08-07T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

export default () => (
  <Paper>
    <Scheduler data={schedulerData}>
      <ViewState/>
      <DayView startDayHour={0} endDayHour={23}/>
      <WeekView startDayHour={0} endDayHour={24} />
      <MonthView />

      <Toolbar />
      <DateNavigator />
      <TodayButton />
      <ViewSwitcher />
      <Appointments />
    </Scheduler>
  </Paper>
);