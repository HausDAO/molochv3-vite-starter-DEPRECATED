import { POSTER_TAGS, ValidArgType, NestedArray, TXLegoBase } from '@daohaus/utils';
import { buildMultiCallTX } from '@daohaus/tx-builder';
import { CONTRACT } from './contract';

export enum ProposalTypeIds {
  Signal = 'SIGNAL',
  IssueSharesLoot = 'ISSUE',
  AddShaman = 'ADD_SHAMAN',
  TransferErc20 = 'TRANSFER_ERC20',
  TransferNetworkToken = 'TRANSFER_NETWORK_TOKEN',
  UpdateGovSettings = 'UPDATE_GOV_SETTINGS',
  UpdateTokenSettings = 'TOKEN_SETTINGS',
  TokensForShares = 'TOKENS_FOR_SHARES',
  GuildKick = 'GUILDKICK',
  WalletConnect = 'WALLETCONNECT',
  NewMember = 'NEWMEMBER',
  EditMember = 'EDITMEMBER',
}

const nestInArray = (arg: ValidArgType | ValidArgType[]): NestedArray => {
  return {
    type: 'nestedArray',
    args: Array.isArray(arg) ? arg : [arg],
  };
};

export const TX = {
  POST_SIGNAL: buildMultiCallTX({
    id: 'POST_SIGNAL',
    JSONDetails: {
      type: 'JSONDetails',
      jsonSchema: {
        title: `.formValues.title`,
        description: `.formValues.description`,
        contentURI: `.formValues.link`,
        contentURIType: { type: 'static', value: 'url' },
        proposalType: { type: 'static', value: ProposalTypeIds.Signal },
      },
    },
    actions: [
      {
        contract: CONTRACT.POSTER,
        method: 'post',
        args: [
          {
            type: 'JSONDetails',
            jsonSchema: {
              title: `.formValues.title`,
              description: `.formValues.description`,
              contentURI: `.formValues.link`,
              contentURIType: { type: 'static', value: 'url' },
              proposalType: { type: 'static', value: ProposalTypeIds.Signal },
            },
          },
          { type: 'static', value: POSTER_TAGS.signalProposal },
        ],
      },
    ],
  }),
  NEW_MEMBER: buildMultiCallTX({
    id: 'NEW_MEMBER',
    JSONDetails: {
      type: 'JSONDetails',
      jsonSchema: {
        title: `.formValues.title`,
        description: `.formValues.description`,
        contentURI: `.formValues.link`,
        contentURIType: { type: 'static', value: 'url' },
        proposalType: { type: 'static', value: ProposalTypeIds.NewMember },
      },
    },
    actions: [
      {
        contract: CONTRACT.CURRENT_DAO,
        method: 'mintShares',
        args: [
          nestInArray('.formValues.recipient'),
          nestInArray('.formValues.amount'),
          //{ type: 'static', value: POSTER_TAGS.signalProposal }, //hardcoded
        ],
      },
      {
        contract: CONTRACT.MEMBER_REGISTRY,
        method: 'setNewMember',
        args: [
          '.formValues.recipient',
          '.formValues.activitymodifier',
          '.formValues.startdate',
          //{ type: 'static', value: POSTER_TAGS.signalProposal }, //hardcoded
        ],
      },
    ],
  }),
  EDIT_MEMBER: buildMultiCallTX({
    id: 'EDIT_MEMBER',
    JSONDetails: {
      type: 'JSONDetails',
      jsonSchema: {
        title: `.formValues.title`,
        description: `.formValues.description`,
        contentURI: `.formValues.link`,
        contentURIType: { type: 'static', value: 'url' },
        proposalType: { type: 'static', value: ProposalTypeIds.EditMember },
      },
    },
    actions: [
      {
        contract: CONTRACT.MEMBER_REGISTRY,
        method: 'updateMember',
        args: [
          '.formValues.recipient',
          '.formValues.activitymodifier',
          //{ type: 'static', value: POSTER_TAGS.signalProposal }, //hardcoded
        ],
      },
    ],
  }),
};

export const ACTION_TX: Record<string, TXLegoBase> = {
  UPDATE_SECONDS: {
    id: 'UPDATE_SECONDS',
    contract: CONTRACT.MEMBER_REGISTRY,
    method: 'updateActiveSeconds',
  },
  TRIGGER: {
    id: 'TRIGGER',
    contract: CONTRACT.MEMBER_REGISTRY,
    method: 'trigger',
  },
};
