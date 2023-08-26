import { useState, useEffect } from 'react';
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
import { useAuth0 } from '@auth0/auth0-react';

interface Event {
  id:number;
  title: string;
  startDate: Date;
  endDate: Date;
  allDay: boolean;
  rRule?: string;
  notes?: string;
};

export default function CalendarSection() {
  let [schedulerData, setSchedulerData] = useState<Event[]>([]);
  let { user } = useAuth0();
  
  useEffect(() => {
    fetch(`http://localhost:8000/event/${user.sub}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSchedulerData(data.Event)
      })
      .catch((err) => console.log(err.message));
  }, []);

  const addEvent = async (body:any) => {
    await fetch('http://localhost:8000/event/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setSchedulerData([...schedulerData, data])
    }).catch((err) => {
      console.log(err.message);
    });
    
  };

  const deleteEvent = async (id:number) => {
    await fetch(`http://localhost:8000/event/mod/${id}`, {
      method: 'DELETE',
    })
    .then((response => {
      if (response.status === 204) {
        setSchedulerData(
          schedulerData.filter((event) =>
            event.id !== id
          )
        )
      }
    }))
  }

  const editEvent = async (id:number, body:any) => {
    await fetch(`http://localhost:8000/event/mod/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => setSchedulerData((
      schedulerData.map((event) =>
        data.id === event.id
          ? data
          : event
      )
    )))
    .catch((err) => {
      console.log(err.message);
    });
  }

  let commitChanges = ({ added, changed, deleted }: any) => {
    console.log(added);
    console.log(changed);
    console.log(deleted);
    const exDateError = changed != undefined && Object.keys(changed[Object.keys(changed)[0]])[0] == 'exDate';
    if (added) {
      addEvent({...added, uid: user.sub});
    }
    if (changed && !exDateError) {
      const modifiedId: number = parseInt(Object.keys(changed)[0])
      editEvent(modifiedId, schedulerData.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      ).filter((appointment) => appointment.id == modifiedId)[0])
    }
    if (deleted !== undefined || exDateError) {
      deleteEvent(exDateError ? Object.keys(changed)[0] : deleted)
    }
  }

  return (
    <Paper>
      <Scheduler data={schedulerData} height="638">
        <ViewState/>
        <EditingState onCommitChanges={commitChanges}/>
        <IntegratedEditing />
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
      </Scheduler>
    </Paper>
  )
};