'use client';

import { Accordion, AccordionItem, Typography } from '@tampere/treds';

export default function NoSpacing() {
  return (
    <Accordion spacing="none">
      <AccordionItem value="weekdays" label="Monday to Friday">
        <Typography variant="p1">8 am to 8 pm</Typography>
      </AccordionItem>
      <AccordionItem value="weekend" label="At the weekend">
        <Typography variant="p1">10 am to 4 pm</Typography>
      </AccordionItem>
    </Accordion>
  );
}
