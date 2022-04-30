import { MenuToggleProvider } from './Components/contexts/MenuToggleContext';
import { Dashboard } from './Components/Dashboard';

import './styles/global.scss'

function App() {
  return (
    <MenuToggleProvider>
      <Dashboard />
    </MenuToggleProvider>
  );
}

export default App;
