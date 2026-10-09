'use client';

import { Accordion, AccordionItem, Typography } from '@tampere/treds';

export default function OpenCloseLabels() {
  return (
    <Accordion spacing="default">
      <AccordionItem
        value="tiedot"
        label="Hakemuksen tiedot"
        openLabel="Näytä"
        closeLabel="Piilota"
      >
        <Typography variant="p1">Hakemus lähetetty 3.10.2026.</Typography>
      </AccordionItem>
    </Accordion>
  );
}
