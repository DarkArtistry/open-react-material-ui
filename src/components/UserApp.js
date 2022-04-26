import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd'
import { ComponentTypes } from '../select-components/cTypes'
import { nanoid } from '@reduxjs/toolkit'

function UserApp(props) {

  const { setRoot, components, addComponent, _id } = props

  const drawerWidth = 250
  const accept = [ComponentTypes.BUTTON]
  const [type, setType] = useState("root");
  const [name, setName] = useState("root");

  useEffect(()=> {
    setRoot({
      'id': _id,
      'parentId': null,
      'parentName': null,
      'rootParentType': null, // I'll use this to check the required parent type, if there's any
      'type': 'root',
      'children': [],
      'droppable': true,
      'draggable': false,
    })
  },[])
  
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: accept,
    // Props to collect
    collect: (monitor, dropProps) => {
      console.log('UserApp monitor.canDrop(): ', monitor.canDrop())
      console.log('UserApp monitor: ', monitor)
      console.log('UserApp monitor dropProps: ', dropProps)
      return ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })
    },
    drop: (item, monitor) => {
      console.log('drop motion item!!!!!!!!!!!!!!!!:' , item)
      console.log('drop motion monitor getDropResult:' , monitor.getDropResult())
      console.log('ID : ', _id);
      const dataConstruct = {
        parentId: _id, // the id of this component
        parentName: 'root',
        parentType: 'root',
        ...item
      }
      addComponent(dataConstruct)
    },
    canDrop: (item, monitor) => {
      const targetItem = monitor.getItem()
      return accept.indexOf(targetItem.type) > -1
    },
  }))

  return (
    <main 
      style={{ marginLeft: drawerWidth, marginRight: drawerWidth }}
    >
         <div 
            style={{minHeight: '100vh'}}
            ref={drop}
         >
           {JSON.stringify(components)}
           <br/><br/>
           {`${components && Object.keys(components).length}`}
         </div>
    </main>
  );
}

export default UserApp;
