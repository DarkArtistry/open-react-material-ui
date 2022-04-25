import LeftDrawer from './LeftDrawer.js'
import RightDrawer from './RightDrawer.js'
import UserApp from '../containers/UserApp.js'

function App() {
  return (
    <main>
      <LeftDrawer/>
      <UserApp/>
      <RightDrawer/>
    </main>
  );
}

export default App;
