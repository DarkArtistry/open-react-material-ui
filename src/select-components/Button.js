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
            variant: 'contained', // by default
            size: 'medium', // by default
            href: '', // by default
            fullWidth: false, // by default
            endIconType: '', // by default
            startIconType: '', // by default
            disableRipple: false, // by default
            color: 'primary', // by default
            children: '', // by default, the content of the component
            classes: {}, // by default
            disabled:  false, // by default
            'droppable': false,
            'draggable': true,
            'isSelected': false, // this is to show up on the toobox, right drawer and possibly show some css changes
            'isHovered': false, // possibly show some css changes
            'rootParentType': null,
            'isRendered': false
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
            color={'success'}
            fullWidth
            startIcon={<DragIndicatorIcon />}
        >Button</Button>) : (
            <Button
            ref={drag}
            style={{
                opacity: 1,
                cursor: 'move',
                justifyContent: 'start',
            }}
            fullWidth
            startIcon={<DragIndicatorIcon />}
        >Button</Button>)
    )
}

export default MaterialBtn