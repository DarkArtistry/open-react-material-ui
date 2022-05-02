import React, { useEffect, useState, createRef } from 'react';
import { Button } from '@mui/material';
import { useDrag } from 'react-dnd'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { ComponentTypes } from './cTypes'

const MaterialTypography = (props) => {

    const { _id } = props

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: ComponentTypes.TYPOGRAPHY,
        item: {
            type: ComponentTypes.TYPOGRAPHY,
            id: _id,
            align: 'inherit', // ['center','inherit', 'justify', 'left', 'right']
            children: 'text',
            gutterBottom: false, // [true, false]
            paragraph: false, //[true, false]
            variant: 'body1', // ['body1','body2','button','caption','h1','h2','h3','h4','h5','h6', 'inherit','overline','subtitle1','subtitle2']
            // css
            color: 'primary', // by default
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
        >Typography</Button>) : (
            <Button
            ref={drag}
            style={{
                opacity: 1,
                cursor: 'move',
                justifyContent: 'start',
            }}
            fullWidth
            startIcon={<DragIndicatorIcon />}
        >Typography</Button>)
    )
}

export default MaterialTypography