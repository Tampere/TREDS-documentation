'use client';

import { Tabs, TabsList, TabsPanel, TabsTab, Typography } from '@tampere/treds';

export default function Centered() {
  return (
    <Tabs defaultValue="borrowing" align="center">
      <TabsList aria-label="Library services">
        <TabsTab value="borrowing">Borrowing</TabsTab>
        <TabsTab value="events">Events</TabsTab>
        <TabsTab value="rooms">Rooms</TabsTab>
      </TabsList>
      <TabsPanel value="borrowing">
        <Typography variant="p1">Borrow books, magazines and films with a library card.</Typography>
      </TabsPanel>
      <TabsPanel value="events">
        <Typography variant="p1">The library hosts story times and author visits.</Typography>
      </TabsPanel>
      <TabsPanel value="rooms">
        <Typography variant="p1">Group rooms can be booked for meetings and studying.</Typography>
      </TabsPanel>
    </Tabs>
  );
}
