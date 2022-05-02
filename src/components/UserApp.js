import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd'
import { ComponentTypes } from '../select-components/cTypes'
import { nanoid } from '@reduxjs/toolkit'
import { recursiveRender } from '../utils/components'

function UserApp(props) {

  const { setRoot, components, addComponent, updateComponent, _id, 
    selectComponent, selectedComponent, preview 
  } = props

  const drawerWidth = 250
  const accept = [ComponentTypes.BUTTON, ComponentTypes.GRIDCONTAINER, ComponentTypes.PAPER, ComponentTypes.TYPOGRAPHY]
  const [type, setType] = useState("root");
  const [name, setName] = useState("root");
  
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: accept,
    // Props to collect
    collect: (monitor, dropProps) => {
      console.log('UserApp monitor.canDrop(): ', monitor.canDrop())
      console.log('UserApp monitor: ', monitor)
      console.log('UserApp monitor dropProps: ', dropProps)
      return ({
        isOver: !!monitor.isOver({ shallow: true }),
        canDrop: !!monitor.canDrop(),
      })
    },
    drop: (item, monitor) => {
      // console.log('drop motion item!!!!!!!!!!!!!!!!:' , item)
      // console.log('drop motion monitor getDropResult:' , monitor.getDropResult())
      // console.log('ID : ', _id);
      const dragIsOverThis = monitor.isOver({ shallow: true })
      if (dragIsOverThis && !item.isRendered) {
        const dataConstruct = {
          parentId: _id, // the id of this component
          parentName: 'root',
          parentType: 'root',
          ...item
        }
        addComponent(dataConstruct)
      } else if (dragIsOverThis && item.isRendered) {
        console.log('item <<<<<<<< >>>>>>>>>>', item);
        // update component
        const dataConstruct = {
            ...item,
            parentId: _id, // the id of this component
            parentName: 'root',
            parentType: 'root',
        }
        updateComponent(dataConstruct)
    }
    },
    canDrop: (item, monitor) => {
      const targetItem = monitor.getItem()
      return accept.indexOf(targetItem.type) > -1
    },
  }))

  useEffect(()=> {
    setRoot({
      'id': 'root',
      'parentId': null,
      'parentName': null,
      'rootParentType': null, // I'll use this to check the required parent type, if there's any
      'type': 'root',
      'children': [],
      'droppable': true,
      'draggable': false,
      'position': 'relative',
      'height': '100',
      'heightUnit': 'vh',
      'minHeight': '100',
      'minHeightUnit': 'vh',
    })
  },[])

  return (
    <main 
      style={{ 
        marginLeft: preview ? 0 : drawerWidth, 
        width: preview ? window.innerWidth : window.innerWidth - drawerWidth - 350,
      }} // 350 is width of right drawer
    >
         <div
            style={{
              minHeight: (components && components.root && components.root.minHeight + components.root.minHeightUnit) || '100vh',
              border: isOver ? 'dashed' : '',
              position: (components && components.root && components.root.position) || ''
            }}
            onClick={()=> {
              selectComponent({})
            }}
            ref={drop}
         >
           {components && components.root && components.root.children && components.root.children.map((singleComponentId) => {
              // render component recursively
              return recursiveRender(components[singleComponentId])
           })}
           <br/><br/>
         </div>
    </main>
  );
}

export default UserApp;
