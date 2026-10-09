'use client';

import { Tabs, TabsList, TabsPanel, TabsTab, Typography } from '@tampere/treds';

export default function Scrollable() {
  return (
    <div style={{ minWidth: 0, width: '100%' }}>
      <Tabs
        defaultValue="hervanta"
        scrollable
        scrollLeftLabel="Scroll left"
        scrollRightLabel="Scroll right"
      >
        <TabsList aria-label="Libraries">
          <TabsTab value="hervanta">Hervanta</TabsTab>
          <TabsTab value="keskusta">Keskusta</TabsTab>
          <TabsTab value="lielahti">Lielahti</TabsTab>
          <TabsTab value="linnainmaa">Linnainmaa</TabsTab>
          <TabsTab value="tesoma">Tesoma</TabsTab>
          <TabsTab value="vuores">Vuores</TabsTab>
        </TabsList>
        <TabsPanel value="hervanta">
          <Typography variant="p1">Hervanta: services and opening hours.</Typography>
        </TabsPanel>
        <TabsPanel value="keskusta">
          <Typography variant="p1">Keskusta: services and opening hours.</Typography>
        </TabsPanel>
        <TabsPanel value="lielahti">
          <Typography variant="p1">Lielahti: services and opening hours.</Typography>
        </TabsPanel>
        <TabsPanel value="linnainmaa">
          <Typography variant="p1">Linnainmaa: services and opening hours.</Typography>
        </TabsPanel>
        <TabsPanel value="tesoma">
          <Typography variant="p1">Tesoma: services and opening hours.</Typography>
        </TabsPanel>
        <TabsPanel value="vuores">
          <Typography variant="p1">Vuores: services and opening hours.</Typography>
        </TabsPanel>
      </Tabs>
    </div>
  );
}
