import { LOCAL_ABI } from '@daohaus/abis';
import { ContractLego,  } from '@daohaus/utils';
import { CONTRACT_KEYCHAINS, Keychain } from '@daohaus/keychain-utils';

import SIMPLE_ONBOARDER from '../abis/onboarderShaman.json'
import WEENUS from '../abis/weenus.json'

export const CUSTOM_CONTRACT_KEYCHAINS: Record<string, Keychain> = {
  SIMPLE_ONBOARDER: {
    '0x64': '0x67615d81b510BC0430eba49cBd8BF9fd5bB5C58b',
  },
  WEENUS: {
    '0x64': '0xE6421E9aF92aca6a81C9fD0BAbacE4a9c5691c60',
  },
}

export const CONTRACT: Record<string, ContractLego> = {
  POSTER: {
    type: 'static',
    contractName: 'Poster',
    abi: LOCAL_ABI.POSTER,
    targetAddress: {
      '0x1': '0x000000000000cd17345801aa8147b8d3950260ff',
      '0x5': '0x000000000000cd17345801aa8147b8d3950260ff',
      '0x64': '0x000000000000cd17345801aa8147b8d3950260ff',
    },
  },
  ERC_20: {
    type: 'static',
    contractName: 'ERC20',
    abi: LOCAL_ABI.ERC20,
    targetAddress: '.tokenAddress',
  },
  ERC_20_FUNDING: {
    type: 'static',
    contractName: 'ERC20',
    abi: LOCAL_ABI.ERC20,
    targetAddress: '.formValues.paymentTokenAddress',
  },
  CURRENT_DAO: {
    type: 'static',
    contractName: 'Current DAO (Baal)',
    abi: LOCAL_ABI.BAAL,
    targetAddress: '.daoId',
  },
  TRIBUTE_MINION: {
    type: 'static',
    contractName: 'Tribute Minion',
    abi: LOCAL_ABI.TRIBUTE_MINION,
    targetAddress: CONTRACT_KEYCHAINS.TRIBUTE_MINION,
  },
  SHARES_ERC20: {
    type: 'static',
    contractName: 'SHARES_ERC20',
    abi: LOCAL_ABI.SHARES,
    targetAddress: '.dao.sharesAddress',
  },
  LOOT_ERC20: {
    type: 'static',
    contractName: 'LOOT_ERC20',
    abi: LOCAL_ABI.LOOT,
    targetAddress: '.dao.sharesAddress',
  },
  SIMPLE_ONBOARDER: {
    type: 'static',
    contractName: 'SIMPLE_ONBOARDER',
    abi: SIMPLE_ONBOARDER,
    targetAddress: CUSTOM_CONTRACT_KEYCHAINS.SIMPLE_ONBOARDER,
  },
  WEENUS: {
    type: 'static',
    contractName: 'WEENUS',
    abi: WEENUS,
    targetAddress: CUSTOM_CONTRACT_KEYCHAINS.WEENUS,
  },
};
