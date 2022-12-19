import { FormLego } from '@daohaus/form-builder';
import { FIELD } from './fields';
import { TX } from './tx';

export const FORM: Record<string, FormLego> = {
  SIGNAL: {
    id: 'SIGNAL',
    title: 'Signal Form',
    subtitle: 'Signal Proposal',
    description: 'Ratify on-chain using a DAO proposal.',
    requiredFields: { title: true, description: true },
    log: true,
    tx: TX.POST_SIGNAL,
    fields: [
      FIELD.TITLE,
      FIELD.DESCRIPTION,
      FIELD.LINK,
      // ...PROPOSAL_SETTINGS_FIELDS,
    ],
  },
  NEWMEMBER: {
    id: 'NEWMEMBER',
    title: 'New Member Form',
    subtitle: 'New Member Proposal',
    description: 'Register a new member.',
    requiredFields: { title: true, description: true, recipient: true, amount: true, startdate: true, activitymodifier: true },
    log: true,
    tx: TX.NEW_MEMBER,
    fields: [
      FIELD.TITLE,
      FIELD.DESCRIPTION,
      FIELD.LINK,
      {... FIELD.RECIPIENT, label: 'Member'},
      {...FIELD.TO_WEI, id:'amount', label: 'Amount'},
      FIELD.STARTDATE,
      FIELD.ACTIVITYMODIFIER,
      // ...PROPOSAL_SETTINGS_FIELDS,
    ],
  },
  EDITMEMBER: {
    id: 'EDITMEMBER',
    title: 'Edit Member Form',
    subtitle: 'Edit Member Proposal',
    description: 'Edit a current member.',
    requiredFields: { title: true, description: true, recipient: true, activitymodifier: true },
    log: true,
    tx: TX.EDIT_MEMBER,
    fields: [
      FIELD.TITLE,
      FIELD.DESCRIPTION,
      FIELD.LINK,
      {... FIELD.RECIPIENT, label: 'Member'},
      FIELD.ACTIVITYMODIFIER,
      // ...PROPOSAL_SETTINGS_FIELDS,
    ],
  },
};
