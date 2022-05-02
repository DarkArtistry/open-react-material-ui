import { nanoid } from '@reduxjs/toolkit'
import LeftDrawer from './LeftDrawer.js'
import RightDrawer from '../containers/RightDrawer.js'
import UserApp from '../containers/UserApp.js'
import Appbar from '../containers/Appbar.js'

function App(props) {
  const { preview } = props
  return (
    <main>
      <Appbar/>
      <div>
        {!preview && <LeftDrawer/>}
        <UserApp _id={'root'}/>
        {!preview && <RightDrawer/>}
      </div>
    </main>
  );
}

export default App;
