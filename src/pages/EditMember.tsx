import { useDHConnect } from '@daohaus/connect';
import { FormBuilder } from '@daohaus/form-builder';
import { TXBuilder } from '@daohaus/tx-builder';

import { FORM } from '../legos/forms';

export const EditMember = () => {
  const { provider } = useDHConnect();

  return (
    <TXBuilder
      provider={provider}
      chainId="0x5"
      daoId="0x7839755b77aadcd6a8cdb76248b3dddfa9b7f5f1"
      safeId="0xaccd85e73639b5213a001630eb2512dbd6292e32"
      appState={{}}
    >
      <FormBuilder form={FORM.EDITMEMBER} targetNetwork="0x5" />
    </TXBuilder>
  );
};
