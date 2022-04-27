import React, { useEffect, useState, createRef } from 'react';
import { connect } from 'react-redux'
import { Button } from '@mui/material';
import { useDrag } from 'react-dnd'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { ComponentTypes } from '../select-components/cTypes'
import { selectComponent } from '../actions'

const MaterialBtn = (props) => {
    console.log('RENDER BUTTON COMPONENT!!!');
    const { 
        _id, type, variant, size, href, fullWidth, endIconType, startIconType,
        disableRipple, color, children, disabled, droppable, draggable, isSelected, 
        isHovered, rootParentType, selectComponent, selectedComponent
    } = props

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: type,
        item: {
            type: type,
            id: _id,
            variant: variant, // by default
            size: size, // by default
            href: href, // by default
            fullWidth: fullWidth, // by default
            endIconType: endIconType, // by default
            startIconType: startIconType, // by default
            disableRipple: disableRipple, // by default
            color: color, // by default
            children: children, // by default, the content of the button component
            disabled:  disabled, // by default
            // notice that those stringified keys are the ones we make use of, while those above are the material-ui props for buttons
            'droppable': droppable,
            'draggable': draggable,
            'isSelected': isSelected, // this is to show up on the toobox, right drawer and possibly show some css changes
            'isHovered': isHovered, // possibly show some css changes
            'rootParentType': rootParentType,
            'isRendered': true
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
                justifyContent: 'start',
            }}
            variant={variant}
            fullWidth={fullWidth}
            size={size}
            href={href}
            // endIcon={endIconType}
            // startIcon={startIconType}
            disableRipple={disableRipple}
            color={color}
            disabled={disabled}
        >Button</Button>) : (
            <Button
            ref={drag}
            style={{
                opacity: 1,
                cursor: 'move',
                justifyContent: 'start',
                boxShadow: (selectedComponent && selectedComponent.id === _id ) ? '0 0 6px 3px #fff, 0 0 10px 6px #f0f, 0 0 14px 9px #0ff': '',
            }}
            variant={variant}
            fullWidth={fullWidth}
            size={size}
            href={href}
            // endIcon={endIconType}
            // startIcon={startIconType}
            disableRipple={disableRipple}
            color={color}
            disabled={disabled}
            onClick={(ev)=> {
                ev.stopPropagation();
                selectComponent({
                    type: type,
                    id: _id,
                    variant: variant,
                    size: size,
                    href: href,
                    fullWidth: fullWidth,
                    endIconType: endIconType,
                    startIconType: startIconType,
                    disableRipple: disableRipple,
                    color: color,
                    children: children,
                    disabled:  disabled,
                })
            }}
        >Button</Button>)
    )
}

const mapStateToProps = state => ({
    selectedComponent: state.components.selectedComponent,
})
  
const mapDispatchToProps = dispatch => ({
    selectComponent: (data) => dispatch(selectComponent(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MaterialBtn)
