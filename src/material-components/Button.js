import React, { useEffect, useState, createRef } from 'react';
import { Button } from '@mui/material';
import { useDrag } from 'react-dnd'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { ComponentTypes } from './cTypes'

const MaterialBtn = (props) => {
    
    const { _id } = props

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: ComponentTypes.BUTTON,
        item: {
            type: ComponentTypes.BUTTON,
            id: _id,
        },
        collect: monitor => {
            console.log('button monitor: ', monitor);
            return ({
                isDragging: !!monitor.isDragging(),
            })
        },
        end: (item, monitor) => {
            console.log('drag end item: ', item);
            console.log('drag end monitor.didDrop(): ', monitor.didDrop());
            console.log('drag end monitorDropResult: ', monitor.getDropResult());
        }
      }))

    return (
        isDragging ? (
        <Button
            ref={dragPreview}
            style={{
                opacity: 0.5,
                cursor: 'move',
                justifyContent: 'start'
            }}
            fullWidth
            startIcon={<DragIndicatorIcon />}
        >Button</Button>) : (
            <Button
            ref={drag}
            style={{
                opacity: 1,
                cursor: 'move',
                justifyContent: 'start'
            }}
            fullWidth
            startIcon={<DragIndicatorIcon />}
        >Button</Button>)
    )

    // ARCHIEVED CODES BELOW

    // button properties
    // const [content, setContent] = useState("button");
    // const [color, setColor] = useState("primary");
    // const [fullWidth, setFullWidth] = useState(false);
    // const [size, setSize] = useState("medium");
    // const [variant, setVariant] = useState("contained");
    // const [href, setHref] = useState("");

    // const handleDragStart = (ev) => {
    //     console.log('ev.target.id : ', ev.target.id, ' ', typeof ev.target.id);
    //     ev.dataTransfer.setData("text/plain", ev.target.id);
    //     ev.dataTransfer.effectAllowed = 'copy';
    //     ev.dataTransfer.setData('text/html', ev.currentTarget.innerHTML);
    // }

    // return (
    //         <span
    //             id={nanoid()}
    //             draggable={"true"} 
    //             onDragStart={handleDragStart}
    //         >
    //             <Button
    //                 id={nanoid()}
    //                 href={href}
    //                 color={color}
    //                 fullWidth={fullWidth}
    //                 size={size}
    //                 variant={variant}
    //                 onClick={()=> console.log('hello')}
    //             >
    //                 {content}
    //             </Button>
    //         </span>
    // );
}

export default MaterialBtn