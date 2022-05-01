import React, { useEffect, useState, createRef } from 'react';
import { connect } from 'react-redux'
import { Grid } from '@mui/material';
import { useDrag, useDrop } from 'react-dnd'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { grey, green, lightBlue } from '@mui/material/colors';
import { selectComponent, addComponent } from '../actions'
import { ComponentTypes } from '../select-components/cTypes'
import { recursiveRender } from '../utils/components'

const MaterialGrid = (props) => {

    const { 
        _id, type, container, columns, direction, spacing, justifyContent, alignItems,
        item, lg, md, sm, xl, xs, children,
        droppable, draggable, isSelected, isHovered, rootParentType, parentId,
        height, heightUnit, minHeight, minHeightUnit, position,
        margin, marginUnit, padding, paddingUnit, maxWidth, maxWidthUnit,
        backgroundColor, backgroundImage, backgroundRepeat, backgroundPosition, backgroundSize,
        selectComponent, selectedComponent, addComponent, stateOfComponents
    } = props

    const accept = [ComponentTypes.BUTTON, ComponentTypes.GRIDCONTAINER, ComponentTypes.GRIDITEM, ComponentTypes.PAPER, ComponentTypes.TYPOGRAPHY]

    // DRAG
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: type,
        item: {
            // material button props
            type: type,
            id: _id,
            container: container,
            children: children,
            columns: columns,
            direction: direction,
            spacing: spacing,
            item: item,
            lg: lg,
            md: md,
            sm: sm,
            xl: xl,
            xs: xs,
            // css props
            position: position,
            justifyContent: justifyContent,
            alignItems: alignItems,
            backgroundColor: backgroundColor,
            backgroundImage: backgroundImage,
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            backgroundSize: backgroundSize,
            minHeight: minHeight,
            minHeightUnit: minHeightUnit,
            height: height,
            heightUnit: heightUnit,
            margin: margin,
            marginUnit: marginUnit,
            padding: padding,
            paddingUnit: paddingUnit,
            maxWidth: maxWidth,
            maxWidthUnit: maxWidthUnit,
            // notice that those stringified keys are the ones we make use of, while those above are the material-ui props for buttons
            'droppable': droppable,
            'draggable': draggable,
            'isSelected': isSelected, // this is to show up on the toobox, right drawer and possibly show some css changes
            'isHovered': isHovered, // possibly show some css changes
            'rootParentType': rootParentType,
            'isRendered': true,
            'parentId': parentId
        },
        collect: monitor => {
            console.log('button monitor: ', monitor);
            return ({
                isDragging: !!monitor.isDragging(),
            })
        },
        end: (item, monitor) => {
            console.log('!!!!!!!!!!!! drag end item: ', item);
            console.log('drag end monitor.didDrop(): ', monitor.didDrop());
            console.log('drag end monitorDropResult: ', monitor.getDropResult());
        }
      }))

    // DROP
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: accept,
        // Props to collect
        collect: (monitor, dropProps) => {
          console.log('GRID monitor !!!!!!!.canDrop(): ', monitor.canDrop())
          console.log('GRID monitor !!!!!!!: ', monitor)
          console.log('GRID monitor !!!!!!! dropProps: ', dropProps)
          return ({
            isOver: !!monitor.isOver({ shallow: true }),
            canDrop: !!monitor.canDrop(),
          })
        },
        drop: (item, monitor) => {
            console.log('drop motion item!!!!!!!!!!!!!!!!:' , item)
            console.log('drop motion monitor getDropResult:' , monitor.getDropResult())
            console.log('ID : ', _id);
            // This is suppose to help drag and shift positions, tbc
            // if (!item.isRendered) {
            const dragIsOverThis = monitor.isOver({ shallow: true })
            if (dragIsOverThis) {
                const dataConstruct = {
                    parentId: _id, // the id of this component
                    parentName: container ? 'gridContainer' : 'gridItem',
                    parentType: container ? 'gridContainer' : 'gridItem',
                    ...item
                }
                addComponent(dataConstruct)
            }
            //  }
        },
        canDrop: (item, monitor) => {
          const targetItem = monitor.getItem()
          return accept.indexOf(targetItem.type) > -1
        },
      }))

    return (
        isDragging ? (
        <Grid
            ref={dragPreview}
            style={{
                opacity: 0.5,
                cursor: 'move',
                justifyContent: 'start',
                maxWidth: `${maxWidth + maxWidthUnit}`,
                minHeight: `${minHeight + minHeightUnit}`,
                height: `${height + heightUnit}`,
                margin: `${margin + marginUnit}`,
                padding: `${padding + paddingUnit}`,
                position: position,
            }}
            // endIcon={endIconType}
            // startIcon={startIconType}
        >
            {/* {children && children.map((child) => child)} */}
        </Grid>) : (<Grid
            ref={(node) => drag(drop(node))}
            style={{
                opacity: 1,
                border: `dashed ${grey[300]}`,
                cursor: 'move',
                minHeight: `${minHeight + minHeightUnit}`,
                height: `${height + heightUnit}`,
                maxWidth: `${maxWidth + maxWidthUnit}`,
                margin: `${margin + marginUnit}`,
                padding: `${padding + paddingUnit}`,
                borderColor: isOver ? `${lightBlue['A400']}` : (selectedComponent && selectedComponent.id === _id ) ? `${green['A400']}`: `${grey[300]}`,
                backgroundColor: backgroundColor,
                backgroundImage: backgroundImage ? `url("${backgroundImage}")` : '',
                backgroundRepeat: backgroundRepeat,
                backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize,
            }}
            justifyContent={justifyContent}
            alignItems={alignItems}
            columns={columns}
            direction={direction}
            spacing={spacing}
            container={container}
            item={item}
            lg={lg}
            md={md}
            sm={sm}
            xl={xl}
            xs={xs}
            onClick={(ev)=> {
                ev.stopPropagation();
                selectComponent({
                    type: type,
                    id: _id,
                    // css props
                    height: height,
                    heightUnit: heightUnit,
                    maxWidth: maxWidth,
                    maxWidthUnit: maxWidthUnit,
                    margin: margin,
                    marginUnit: marginUnit,
                    padding: padding,
                    paddingUnit: paddingUnit,
                    backgroundColor: backgroundColor,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    // component props
                    justifyContent: justifyContent,
                    alignItems: alignItems,
                    columns: columns,
                    direction: direction,
                    spacing: spacing,
                    container: container,
                    item: item,
                    lg: lg,
                    md: md,
                    sm: sm,
                    xl: xl,
                    xs: xs,
                    children: children,
                    // notice that those stringified keys are the ones we make use of, while those above are the material-ui props for buttons
                    'droppable': droppable,
                    'draggable': draggable,
                    'isSelected': isSelected, // this is to show up on the toobox, right drawer and possibly show some css changes
                    'isHovered': isHovered, // possibly show some css changes
                    'rootParentType': rootParentType,
                    'isRendered': true
                })
            }}
        >
            {children && children.length > 0 && children.map((child) => {
                console.log('child ----> ', child);
                return recursiveRender(stateOfComponents[child])
            })}
        </Grid>)
    )
}

const mapStateToProps = state => ({
    selectedComponent: state.components.selectedComponent,
    stateOfComponents: state.components.components
})
  
const mapDispatchToProps = dispatch => ({
    selectComponent: (data) => dispatch(selectComponent(data)),
    addComponent: (data) => dispatch(addComponent(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MaterialGrid)
