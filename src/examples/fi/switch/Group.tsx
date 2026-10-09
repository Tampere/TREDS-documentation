'use client';

import { useState } from 'react';
import { Fieldset, Switch, fieldsetSelectionGroup } from '@tampere/treds';

export default function Group() {
  const [settings, setSettings] = useState({ email: true, sms: false });

  return (
    <Fieldset legend="Ilmoitukset">
      <div className={fieldsetSelectionGroup}>
        <Switch
          label="Sähköposti"
          checked={settings.email}
          onChange={(e) => {
            const email = e.currentTarget.checked;
            setSettings((s) => ({ ...s, email }));
          }}
        />
        <Switch
          label="Tekstiviesti"
          checked={settings.sms}
          onChange={(e) => {
            const sms = e.currentTarget.checked;
            setSettings((s) => ({ ...s, sms }));
          }}
        />
      </div>
    </Fieldset>
  );
}
