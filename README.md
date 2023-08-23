# AutoSchedule
AutoSchedule is a school scheduling application that will allow for automatic scheduling of assignments each day. It combines a calendar and a todolist, allowing for ease of scheduling.

# How to use
## Calendar
The calendar component allows for the creation, editing and deletion of events. A new event can be created by double clicking on the calendar and modifying the form. Events can be edited and deleted through the tooltip for editing.

## To do list
The todo list component is simple

# Technical Details
## Frontend
The frontend is programmed using React.js and uses Tailwind for CSS. The calendar component was created by DevExtreme and currently uses MaterialUI for individual components

## Backend
The backend is a REST API developed using Django that is currently connected to a sqllite database. Currently it acts as a CRUD app and eventually automatic scheduling will be implemented through a combination of a custom algorithm and K-means clustering. Authentication is handled by the Auth0 API
