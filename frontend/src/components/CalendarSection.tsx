import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler'
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
  AppointmentForm,
  EditRecurrenceMenu,
  CurrentTimeIndicator
} from '@devexpress/dx-react-scheduler-material-ui';
import { useAuth0 } from '@auth0/auth0-react';
import { CalendarSectionProps } from './types';

export default function CalendarSection(props: CalendarSectionProps) {
  let { user } = useAuth0();
  

  let commitChanges = ({ added, changed, deleted }: any) => {
    if (user === undefined) {
      return;
    }
    if (added) {
      props.addFunction({...added, uid: user.sub});
    }
    if (changed) {
      const modifiedId: number = parseInt(Object.keys(changed)[0])
      props.editFunction(modifiedId, props.events.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      ).filter((appointment) => appointment.id == modifiedId)[0])
    }
    if (deleted !== undefined) {
      props.deleteFunction(deleted)
    }
  }

  return (
    <Paper>
      <Scheduler data={props.events} height="640">
        <ViewState/>
        <EditingState onCommitChanges={commitChanges}/>
        <EditRecurrenceMenu />
        <DayView startDayHour={0} endDayHour={24} cellDuration={60}/>
        <WeekView startDayHour={0} endDayHour={24} cellDuration={60}/>
        <MonthView />

        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        
        <Appointments />
        <AppointmentTooltip showCloseButton showOpenButton showDeleteButton />
        <AppointmentForm />
        <CurrentTimeIndicator
              shadePreviousCells={true}
              shadePreviousAppointments={true}
              updateInterval={10000}
            />
      </Scheduler>
    </Paper>
  )
};