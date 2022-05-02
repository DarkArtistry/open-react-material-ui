import React, { useEffect, useState, createRef } from 'react';
import { connect } from 'react-redux'
import { Typography } from '@mui/material';
import { useDrag } from 'react-dnd'
import { grey } from '@mui/material/colors';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { ComponentTypes } from '../select-components/cTypes'
import { selectComponent } from '../actions'

const MaterialTypography = (props) => {
    const { 
        _id, type, align, children, gutterBottom, paragraph, variant, color,
        droppable, draggable, isSelected, isHovered, rootParentType, parentId,
        position, display, float, height, heightUnit, left, leftUnit, 
        right, rightUnit, top, topUnit, bottom, bottomUnit, margin, marginUnit,
        customisedColor, letterSpacing, letterSpacingUnit, fontFamily, width,
        widthUnit,
        selectComponent, selectedComponent,
        preview
    } = props

    const [{ isDragging }, drag] = useDrag(() => ({
        type: type,
        canDrag: preview ? false : true,
        item: {
            // material typography props
            type: type,
            id: _id,
            align: align,
            children: children, // by default, the content of the text component
            gutterBottom: gutterBottom,
            paragraph: paragraph,
            variant: variant, // by default
            // css props
            color: color,
            position: position,
            display: display,
            float: float,
            height: height,
            heightUnit: heightUnit,
            width: width,
            widthUnit: widthUnit,
            left: left,
            leftUnit: leftUnit,
            right: right,
            rightUnit: rightUnit,
            top: top,
            topUnit: topUnit,
            bottom: bottom,
            bottomUnit: bottomUnit,
            margin: margin,
            marginUnit: marginUnit,
            letterSpacing: letterSpacing,
            letterSpacingUnit: letterSpacingUnit,
            fontFamily: fontFamily,
            customisedColor: customisedColor,
            // notice that those stringified keys are the ones we make use of, while those above are the material-ui props for typography
            'droppable': droppable,
            'draggable': draggable,
            'isSelected': isSelected, // this is to show up on the toobox, right drawer and possibly show some css changes
            'isHovered': isHovered, // possibly show some css changes
            'rootParentType': rootParentType,
            'isRendered': true,
            'parentId': parentId,
        },
        collect: monitor => {
            console.log('typography monitor: ', monitor);
            return ({
                isDragging: !!monitor.isDragging(),
            })
        },
        end: (item, monitor) => {
            console.log('!!!!!!!!!!!! drag end item: ', item);
            console.log('drag end monitor.didDrop(): ', monitor.didDrop());
            console.log('drag end monitorDropResult: ', monitor.getDropResult());
        }
      }),[props])

    return (
        isDragging ? (
        null) : (
            <Typography
            ref={drag}
            style={{
                opacity: 1,
                border: preview ? '' : `dashed ${grey[300]}`,
                cursor: 'move',
                justifyContent: 'start',
                position: position,
                display: display,
                float: float,
                height: `${height + heightUnit}`,
                width: `${width + widthUnit}`,
                left: `${left + leftUnit}`,
                right: `${right + rightUnit}`,
                top: `${top + topUnit}`,
                bottom: `${bottom + bottomUnit}`,
                margin: `${margin + marginUnit}`,
                backgroundColor: `${color === 'customise' ? ((customisedColor && customisedColor.backgroundColor) || "") : ""}`,
                color: `${color === 'customise' ? ((customisedColor && customisedColor.color) || "") : ""}`,
                boxShadow: (selectedComponent && selectedComponent.id === _id ) ? '0 0 6px 3px #fff, 0 0 10px 6px #f0f, 0 0 14px 9px #0ff': '',
                letterSpacing: `${letterSpacing + letterSpacingUnit}`,
                fontFamily: fontFamily
            }}
            variant={variant}
            color={color === 'customise' ? 'primary' : color}
            onClick={(ev)=> {
                ev.stopPropagation();
                if (preview) return
                selectComponent({
                    type: type,
                    id: _id,
                    align: align,
                    children: children,
                    gutterBottom: gutterBottom,
                    paragraph: paragraph,
                    variant: variant,
                    color: color,
                    // css props
                    position: position,
                    display: display,
                    float: float,
                    height: height,
                    heightUnit: heightUnit,
                    width: width,
                    widthUnit: widthUnit,
                    left: left,
                    leftUnit: leftUnit,
                    right: right,
                    rightUnit: rightUnit,
                    top: top,
                    topUnit: topUnit,
                    bottom: bottom,
                    bottomUnit: bottomUnit,
                    margin: margin,
                    marginUnit: marginUnit,
                    customisedColor: customisedColor,
                    letterSpacing: letterSpacing,
                    letterSpacingUnit: letterSpacingUnit,
                    fontFamily: fontFamily,
                    // notice that those stringified keys are the ones we make use of, while those above are the material-ui props for typography
                    'droppable': droppable,
                    'draggable': draggable,
                    'isSelected': isSelected, // this is to show up on the toobox, right drawer and possibly show some css changes
                    'isHovered': isHovered, // possibly show some css changes
                    'rootParentType': rootParentType,
                    'isRendered': true,
                    'parentId': parentId
                })
            }}
        >{children || "Text"}</Typography>)
    )
}

const mapStateToProps = state => ({
    selectedComponent: state.components.selectedComponent,
    preview: state.app.preview,
})
  
const mapDispatchToProps = dispatch => ({
    selectComponent: (data) => dispatch(selectComponent(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MaterialTypography)
