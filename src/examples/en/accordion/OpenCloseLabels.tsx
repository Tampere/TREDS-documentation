'use client';

import { Accordion, AccordionItem, Typography } from '@tampere/treds';

export default function OpenCloseLabels() {
  return (
    <Accordion spacing="default">
      <AccordionItem value="details" label="Application details" openLabel="Show" closeLabel="Hide">
        <Typography variant="p1">Application submitted on 3 October 2026.</Typography>
      </AccordionItem>
    </Accordion>
  );
}
