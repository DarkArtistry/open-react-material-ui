import MaterialBtn from '../render-components/Button'
import MaterialGrid from '../render-components/Grid'
import { ComponentTypes } from '../select-components/cTypes'

// cssForms returns an object representing the form structure for a particular component
export const cssForms = (component) => {
    switch (component.type) {
        case ComponentTypes.GRIDCONTAINER:
            return {
                position: ['relative', 'absolute'],
                height: {
                    height: '',
                    heightUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                maxWidth: {
                    maxWidth: '',
                    maxWidthUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                margin: {
                    margin: '',
                    marginUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                padding: {
                    padding: '',
                    paddingUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                minHeight: {
                    minHeight: '',
                    minHeightUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                background: {
                    backgroundImage: '',
                    backgroundRepeat: ['no-repeat', 'repeat', 'repeat-x', 'repeat-y', 'space', 'round', 'initial'],
                    backgroundPosition: ['left', 'right', 'top', 'bottom', 'center'],
                    backgroundSize: ['auto', 'cover', 'contain', 'initial'],
                    backgroundColor: '',
                },
                columns: [0,1,2,3,4,5,6,7,8,9,10,11,12],
                direction: ['column', 'row-reverse', 'row', 'column-reverse'],
                spacing: [0,1,2,3,4,5,6,7,8,9,10,11,12],
                justifyContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
                alignItems: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
            }
        case ComponentTypes.GRIDITEM:
            return {
                position: ['relative', 'absolute'],
                height: {
                    height: '',
                    heightUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                margin: {
                    margin: '',
                    marginUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                padding: {
                    padding: '',
                    paddingUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                minHeight: {
                    minHeight: '',
                    minHeightUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                background: {
                    backgroundImage: '',
                    backgroundRepeat: ['no-repeat', 'repeat', 'repeat-x', 'repeat-y', 'space', 'round', 'initial'],
                    backgroundPosition: ['left', 'right', 'top', 'bottom', 'center'],
                    backgroundSize: ['auto', 'cover', 'contain', 'initial'],
                    backgroundColor: '',
                },
                xl: ['auto', true, false, 1,2,3,4,5,6,7,8,9,10,11,12],
                lg: ['auto', true, false, 1,2,3,4,5,6,7,8,9,10,11,12],
                md: ['auto', true, false, 1,2,3,4,5,6,7,8,9,10,11,12],
                sm: ['auto', true, false, 1,2,3,4,5,6,7,8,9,10,11,12],
                xs: ['auto', true, false, 1,2,3,4,5,6,7,8,9,10,11,12],
                // justifyContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
                // alignItems: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
            }
        case ComponentTypes.BUTTON:
            return {
                position: ['relative', 'absolute'],
                display: ['block', 'inline', 'inline-block', 'none'],
                float: ['left', 'right', 'none'],
                height: {
                    height: '',
                    heightUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                left: {
                    left: '',
                    leftUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                right: {
                    right: '',
                    rightUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                top: {
                    top: '',
                    topUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                bottom: {
                    bottom: '',
                    bottomUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                margin: {
                    margin: '',
                    marginUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                padding: {
                    padding: '',
                    paddingUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                children: {
                    children: ''
                },
                variant: ['contained', 'outlined', 'text'],
                size: ['small', 'medium', 'large'],
                href: {
                    href: '',
                    hint: 'Use full url (https|http)://www.domain.com, for EXTERNAL links. For INTERNAL links, use only "PATH_PARAMETERS". E.g. https://this_domain.com/{PATH_PARAMETERS}. Please remember to save before applying href to prevent lossing work done. \n Some good href links are: \n whatsapp: https://wa.me/<number> \n where the <number> is a full phone number in international format. E.g. "https://wa.me/15551234567" \n Universal links can also include a pre-filled message that will automatically appear in the text field of a chat. Use https://wa.me/whatsappphonenumber/?text=urlencodedtext where whatsappphonenumber is a full phone number in international format and URL-encodedtext is the URL-encoded pre-filled message. \n telepone: tel:+<number> \n e.g. "tel:+6494461709"'
                },
                fullWidth: [true, false],
                color: ['inherit', 'primary', 'secondary', 'success','error', 'info', 'warning', 'customise'],
                customisedColor: {
                    backgroundColor: '',
                    color: ''
                },
                disabled: [true, false],
            }
        default:
            return {
                // position: ['relative', 'absolute'],
                // display: ['block', 'inline', 'inline-block', 'none'],
                // float: ['left', 'right', 'none'],
                // height: {
                //     height: '',
                //     heightUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                // },
                // minHeight: {
                //     minHeight: '',
                //     minHeightUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                // }
            }
    }
}

// recursiveRender recusively calls itself when required, to render components
export const recursiveRender = (component) => {
    console.log('recursiveRender: component');
    console.log(component);
    switch (component.type) {
        case ComponentTypes.BUTTON:
            // button children is the string content
            // button does not have nested children thus it will end here
            return <MaterialBtn
                // below for react material ui props
                key={component.id}
                _id={component.id}
                type={component.type}
                variant={component.variant}
                size={component.size}
                href={component.href}
                fullWidth={component.fullWidth}
                endIconType={component.endIconType}
                startIconType={component.startIconType}
                disableRipple={component.disableRipple}
                color={component.color}
                children={component.children}
                disabled={component.disabled}
                // below for css
                position={component.position}
                display={component.display}
                float={component.float}
                height={component.height}
                heightUnit={component.heightUnit}
                left={component.left}
                leftUnit={component.leftUnit}
                right={component.right}
                rightUnit={component.rightUnit}
                top={component.top}
                topUnit={component.topUnit}
                bottom={component.bottom}
                bottomUnit={component.bottomUnit}
                margin={component.margin}
                marginUnit={component.marginUnit}
                padding={component.padding}
                paddingUnit={component.paddingUnit}
                customisedColor={component.customisedColor}
                // below for state management
                droppable={component.droppable} // have not used
                draggable={component.draggable} // have not used
                isSelected={component.isSelected} // have not used
                isHovered={component.isHovered} // have not used
                rootParentType={component.rootParentType} // have not used
            />
        case ComponentTypes.GRIDCONTAINER:
            return <MaterialGrid
                // below for react material ui props container
                key={component.id}
                _id={component.id}
                type={component.type}
                children={component.children}
                container={component.container}
                columns={component.columns}
                direction={component.direction}
                spacing={component.spacing}
                justifyContent={component.justifyContent}
                alignItems={component.alignItems}
                item={component.item}
                // below for react material ui props item
                lg={component.lg}
                md={component.md}
                sm={component.sm}
                xl={component.xl}
                xs={component.xs}
                // below for css
                position={component.position}
                minHeight={component.minHeight}
                minHeightUnit={component.minHeightUnit}
                height={component.height}
                heightUnit={component.heightUnit}
                maxWidth={component.maxWidth}
                maxWidthUnit={component.maxWidthUnit}
                margin={component.margin}
                marginUnit={component.marginUnit}
                padding={component.padding}
                paddingUnit={component.paddingUnit}
                backgroundImage={component.backgroundImage}
                backgroundRepeat={component.backgroundRepeat}
                backgroundPosition={component.backgroundPosition}
                backgroundSize={component.backgroundSize}
                backgroundColor={component.backgroundColor}
                // below for state management
                droppable={component.droppable} // have not used
                draggable={component.draggable} // have not used
                isSelected={component.isSelected} // have not used
                isHovered={component.isHovered} // have not used
                rootParentType={component.rootParentType} // have not used
            />
        case ComponentTypes.GRIDITEM:
            return <MaterialGrid
                // below for react material ui props
                key={component.id}
                _id={component.id}
                type={component.type}
                children={component.children}
                container={component.container}
                item={component.item}
                lg={component.lg}
                md={component.md}
                sm={component.sm}
                xl={component.xl}
                xs={component.xs}
                // below for css
                minHeight={component.minHeight}
                minHeightUnit={component.minHeightUnit}
                height={component.height}
                heightUnit={component.heightUnit}
                margin={component.margin}
                marginUnit={component.marginUnit}
                padding={component.padding}
                paddingUnit={component.paddingUnit}
                backgroundImage={component.backgroundImage}
                backgroundRepeat={component.backgroundRepeat}
                backgroundPosition={component.backgroundPosition}
                backgroundSize={component.backgroundSize}
                backgroundColor={component.backgroundColor}
                // below for state management
                droppable={component.droppable} // have not used
                draggable={component.draggable} // have not used
                isSelected={component.isSelected} // have not used
                isHovered={component.isHovered} // have not used
                rootParentType={component.rootParentType} // have not used
            />
        default:
            break;
    }
}