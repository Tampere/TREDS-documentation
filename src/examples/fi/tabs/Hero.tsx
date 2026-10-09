'use client';

import { Tabs, TabsList, TabsPanel, TabsTab, Typography } from '@tampere/treds';

export default function Hero() {
  return (
    <Tabs defaultValue="lainaus">
      <TabsList aria-label="Kirjaston palvelut">
        <TabsTab value="lainaus">Lainaus</TabsTab>
        <TabsTab value="tapahtumat">Tapahtumat</TabsTab>
        <TabsTab value="tilat">Tilat</TabsTab>
      </TabsList>
      <TabsPanel value="lainaus">
        <Typography variant="p1">Lainaa kirjoja, lehtiä ja elokuvia kirjastokortilla.</Typography>
      </TabsPanel>
      <TabsPanel value="tapahtumat">
        <Typography variant="p1">Kirjastossa on satutunteja ja kirjailijavierailuja.</Typography>
      </TabsPanel>
      <TabsPanel value="tilat">
        <Typography variant="p1">Ryhmätiloja voi varata kokouksiin ja opiskeluun.</Typography>
      </TabsPanel>
    </Tabs>
  );
}
