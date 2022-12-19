import { useDHConnect } from '@daohaus/connect';
import { FormBuilder } from '@daohaus/form-builder';
import { TXBuilder } from '@daohaus/tx-builder';

import { FORM } from '../legos/forms';

export const EditMember = () => {
  const { provider } = useDHConnect();

  return (
    <TXBuilder
      provider={provider}
      chainId="0x64"
      daoId="0x8dcc8cdbfb97200bd08e05f580c236b3ac655fd8"
      safeId="0xe014057ebe435dbcf0139a9a05b7ee0a05b74ec8"
      appState={{}}
    >
      <FormBuilder form={FORM.EDITMEMBER} targetNetwork="0x64" />
    </TXBuilder>
  );
};
