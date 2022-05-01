import React, { useEffect, useState, createRef } from 'react';
import { Button } from '@mui/material';
import { useDrag } from 'react-dnd'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { ComponentTypes } from './cTypes'

const MaterialGrid = (props) => {

    const { _id, container, item } = props

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: container ? ComponentTypes.GRIDCONTAINER : ComponentTypes.GRIDITEM,
        item: {
            type: container ? ComponentTypes.GRIDCONTAINER : ComponentTypes.GRIDITEM,
            id: _id,
            // container values
            children: [],
            container: container, // from props true/false
            columns: 12, // by default
            direction: 'row', // by default ['column', 'row-reverse', 'row', 'column-reverse']
            spacing: 0, // default 0
            justifyContent: 'flex-start', // ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']
            alignItems: 'stretch', // ['flex-start', 'center', 'flex-end', 'stretch', 'baseline']
            // item values
            item: item, // from props true/false
            lg: container ? false : 3, // If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the lg breakpoint and wider screens if not overridden.
            md: container ? false : 3, // If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the md breakpoint and wider screens if not overridden.
            sm: container ? false : 3, // If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the sm breakpoint and wider screens if not overridden.
            xl: container ? false : 3, // If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the xl breakpoint and wider screens if not overridden.
            xs: container ? false : 3, // If a number, it sets the number of columns the grid item uses. It can't be greater than the total number of columns of the container (12 by default). If 'auto', the grid item's width matches its content. If false, the prop is ignored. If true, the grid item's width grows to use the space available in the grid container. The value is applied for the xs breakpoint and wider screens if not overridden.
            'droppable': true,
            'draggable': true,
            'isSelected': false, // this is to show up on the toobox, right drawer and possibly show some css changes
            'isHovered': false, // possibly show some css changes
            'rootParentType': null,
            'isRendered': false,
            'minHeight': 100, // default
            'minHeightUnit': 'px', // default
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
        >{container ? 'Grid Container' : 'Grid Item'}</Button>) : (
            <Button
            ref={drag}
            style={{
                opacity: 1,
                cursor: 'move',
                justifyContent: 'start',
            }}
            fullWidth
            startIcon={<DragIndicatorIcon />}
        >{container ? 'Grid Container' : 'Grid Item'}</Button>)
    )
}

export default MaterialGrid