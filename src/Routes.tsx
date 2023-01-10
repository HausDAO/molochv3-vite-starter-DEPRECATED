import { DHLayout, useDHConnect } from "@daohaus/connect";
import { Routes as Router, Route, useLocation } from "react-router-dom";
import { NewMember } from "./pages/NewMember";
import { Home } from "./pages/Home";
import { EditMember } from "./pages/EditMember";
import { Claim } from "./pages/Claim";
import { Dao } from "./pages/Dao";
import { MolochV3DaoProvider } from "@daohaus/moloch-v3-context";

const targetDao = {
  daoId: "0x7839755b77aadcd6a8cdb76248b3dddfa9b7f5f1",
  daoChain: "0x5",
};

const graphApiKeys = { "0x1": process.env["NX_GRAPH_API_KEY_MAINNET"] };

export const Routes = () => {
  const { pathname } = useLocation();
  const { address } = useDHConnect();
  return (
    <MolochV3DaoProvider
      address={address}
      daoid={targetDao.daoId}
      daochain={targetDao.daoChain}
      graphApiKeys={graphApiKeys}
    >
      <DHLayout
        pathname={pathname}
        navLinks={[
          { label: "Home", href: "/" },
          { label: "New Member/s", href: "/newmember" },
          { label: "Edit Member/s", href: "/editmember" },
          { label: "Claim", href: "/claim" },
          { label: "DAO", href: "/dao" },
        ]}
      >
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/newmember" element={<NewMember />} />
          <Route path="/editmember" element={<EditMember />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/dao" element={<Dao />} />
        </Router>
      </DHLayout>
    </MolochV3DaoProvider>
  );
};
