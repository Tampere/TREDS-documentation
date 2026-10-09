'use client';

import { Accordion, AccordionItem, Typography } from '@tampere/treds';

export default function Hero() {
  return (
    <Accordion spacing="default">
      <AccordionItem value="hakeminen" label="Miten haen asukaspysäköintitunnusta?">
        <Typography variant="p1">
          Hae tunnusta sähköisellä lomakkeella. Käsittely kestää noin viikon.
        </Typography>
      </AccordionItem>
      <AccordionItem value="hinta" label="Paljonko tunnus maksaa?">
        <Typography variant="p1">Tunnus maksaa 30 euroa kuukaudessa.</Typography>
      </AccordionItem>
      <AccordionItem value="voimassa" label="Kuinka kauan tunnus on voimassa?">
        <Typography variant="p1">Tunnus on voimassa vuoden kerrallaan.</Typography>
      </AccordionItem>
    </Accordion>
  );
}
