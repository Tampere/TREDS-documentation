'use client';

import { Accordion, AccordionItem, Typography } from '@tampere/treds';

export default function Hero() {
  return (
    <Accordion spacing="default">
      <AccordionItem value="applying" label="How do I apply for a resident parking permit?">
        <Typography variant="p1">
          Apply with the online form. Processing takes about a week.
        </Typography>
      </AccordionItem>
      <AccordionItem value="price" label="How much does the permit cost?">
        <Typography variant="p1">The permit costs 30 euros a month.</Typography>
      </AccordionItem>
      <AccordionItem value="validity" label="How long is the permit valid?">
        <Typography variant="p1">The permit is valid for a year at a time.</Typography>
      </AccordionItem>
    </Accordion>
  );
}
