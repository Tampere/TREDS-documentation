'use client';

import { Accordion, AccordionItem, Typography } from '@tampere/treds';

export default function NoSpacing() {
  return (
    <Accordion spacing="none">
      <AccordionItem value="ma-pe" label="Maanantaista perjantaihin">
        <Typography variant="p1">Kello 8–20</Typography>
      </AccordionItem>
      <AccordionItem value="la-su" label="Viikonloppuna">
        <Typography variant="p1">Kello 10–16</Typography>
      </AccordionItem>
    </Accordion>
  );
}
