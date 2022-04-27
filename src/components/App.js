import { nanoid } from '@reduxjs/toolkit'
import LeftDrawer from './LeftDrawer.js'
import RightDrawer from '../containers/RightDrawer.js'
import UserApp from '../containers/UserApp.js'

function App() {
  return (
    <main>
      <LeftDrawer/>
      <UserApp _id={'root'}/>
      <RightDrawer/>
    </main>
  );
}

export default App;
