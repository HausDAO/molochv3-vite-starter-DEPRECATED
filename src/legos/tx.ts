
import { POSTER_TAGS, ValidArgType, NestedArray, TXLegoBase } from '@daohaus/utils';

import { buildMultiCallTX } from '@daohaus/tx-builder';
import { CONTRACT, CUSTOM_CONTRACT_KEYCHAINS } from './contract';

import { ethers } from "ethers";

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
}

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
  ONBOARDER: {
    id: 'ONBOARDER',
    contract: CONTRACT.SIMPLE_ONBOARDER,
    method: 'onboarder',
    args: [
      '.formValues.tokens',
    ],
  },
};

export const ACTION_TX: Record<string, TXLegoBase> = {
  APPROVE: {
    id: 'APPROVE',
    contract: CONTRACT.WEENUS,
    method: 'approve',
    staticArgs: [
      '0x67615d81b510BC0430eba49cBd8BF9fd5bB5C58b',
      ethers.constants.MaxUint256,
    ]
  },

};