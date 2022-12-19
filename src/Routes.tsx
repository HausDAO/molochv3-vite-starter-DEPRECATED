import { DHLayout } from '@daohaus/connect';
import { Routes as Router, Route, useLocation } from 'react-router-dom';
import { NewMember } from './pages/NewMember';
import { Home } from './pages/Home';
import { EditMember } from './pages/EditMember';

export const Routes = () => {
  const { pathname } = useLocation();
  return (
    <DHLayout
      pathname={pathname}
      navLinks={[
        { label: 'Home', href: '/' },
        { label: 'New Member/s', href: '/newmember' },
        { label: 'Edit Member/s', href: '/editmember' },
      ]}
    >
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/newmember" element={<NewMember />} />
        <Route path="/editmember" element={<EditMember />} />
      </Router>
    </DHLayout>
  );
};
