import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import Sidebar from "../components/Sidebar";

const VisitsPlanning = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.colorMode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a title for the Visit");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };

    return (
        <>
        <Sidebar />
        <Box sx={{ display: 'flex', width: '100%' }}>
            
            <Box sx={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                <Box
                    flex="1 1 20%"
                    // backgroundColor={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"
                >
                    <Typography variant="h6">Upcoming Visits</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    borderRadius: "2px",
                                    margin: "10px 0",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {event.start.toLocaleDateString()}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box flex="1 1 100%">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right:
                                "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                        }}
                        eventsSet={(events) => {
                            setCurrentEvents(events);
                        }}
                        eventClick={handleEventClick}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventShortHeight={(events) =>
                            setCurrentEvents(events)
                        }
                        initialEvents={[
                            {
                                id: "1234",
                                title: "Site visit 1",
                                date: "2024-10-01",
                            },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
        </>
    );
};

export default VisitsPlanning;
