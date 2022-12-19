import { FieldLego } from '@daohaus/form-builder';

export const FIELD: Record<string, FieldLego> = {
  TITLE: {
    id: 'title',
    type: 'input',
    label: 'Proposal Title',
    placeholder: 'Enter title',
  },
  DESCRIPTION: {
    id: 'description',
    type: 'textarea',
    label: 'Description',
    placeholder: 'Enter description',
  },
  LINK: {
    id: 'link',
    type: 'input',
    label: 'Link',
    placeholder: 'http://',
    expectType: 'url',
  },
  RECIPIENT: {
    id: 'recipient',
    type: 'input',
    label: 'Recipient',
    placeholder: '0x...',
    expectType: 'ethAddress',
  },
  TO_WEI: {
    id: 'shouldOverwrite',
    type: 'toWeiInput',
    label: 'Should Overwrite',
  },
  STARTDATE: {
    id: 'startdate',
    type: 'timePicker',
    label: 'Start Date (Unix Epoch in seconds)',
  },
  ACTIVITYMODIFIER: {
    id: 'activitymodifier',
    type: 'input',
    label: 'Activity Modifier',
    placeholder: '(1: fulltime, .5: halftime, 0: notime)',
  },
};
