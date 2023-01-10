import { FormLego } from '@daohaus/form-builder';
import { customFields, FIELD } from './fields';
import { TX } from './tx';
import { FormLegoBase } from '@daohaus/utils';


export type CustomFormLego = FormLegoBase<typeof customFields>;

export const FORM: Record<string, CustomFormLego> = {
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
    title: 'New Member/s Form',
    subtitle: 'Creates a proposal to register new member/s',
    description: 'Enter the Member addresses, activity modifiers and startdates',
    requiredFields: { title: true, description: true, members: true, activitymods: true, startdates: true },
    log: true,
    tx: TX.NEW_MEMBER,
    fields: [
      FIELD.TITLE,
      FIELD.DESCRIPTION,
      FIELD.LINK,
      {... FIELD.CSTEXTAREA, id:'members', label: 'Members'},
      {... FIELD.CSTEXTAREA, id:'activitymods', label: 'Activity Modifier'},
      {... FIELD.CSTEXTAREA, id:'startdates', label: 'Start Dates'},
      FIELD.MEMBERLISTENER,
    ],
  },
  EDITMEMBER: {
    id: 'EDITMEMBER',
    title: 'Edit Member/s Form',
    subtitle: 'Creates a proposal to edit member/s in the regisrty',
    description: 'Enter the Member addresses and new activity modifiers',
    requiredFields: { title: true, description: true, members: true, activitymods: true },
    log: true,
    tx: TX.EDIT_MEMBER,
    fields: [
      FIELD.TITLE,
      FIELD.DESCRIPTION,
      FIELD.LINK,
      {... FIELD.CSTEXTAREA, id:'members', label: 'Members'},
      {... FIELD.CSTEXTAREA, id:'activitymods', label: 'Activity Modifier'},
      // ...PROPOSAL_SETTINGS_FIELDS,
    ],
  },
};
