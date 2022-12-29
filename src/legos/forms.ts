import { FormLego, ToWeiInput } from '@daohaus/form-builder';
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
  ONBOARDER: {
    id: 'ONBOARDER',
    title: 'Stake Token',
    subtitle: '1 to 1 tokens for shares',
    description: 'Stake',
    requiredFields: { tokens: true},
    log: true,
    tx: TX.ONBOARDER, 
    fields: [
      {type: "toWeiInput", id:"tokens", label:"tokens", expectType:"number"}
    ],
  },
};
