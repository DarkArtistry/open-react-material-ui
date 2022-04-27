import MaterialBtn from '../render-components/Button'
import { ComponentTypes } from '../select-components/cTypes'

// cssForms returns an object representing the form structure for a particular component
export const cssForms = (component) => {
    switch (component.type) {
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
                    hint: 'Use full url (https|http)://www.domain.com, for EXTERNAL links. For INTERNAL links, use only "PATH_PARAMETERS". E.g. https://this_domain.com/{PATH_PARAMETERS}. Please remember to save before applying href to prevent lossing work done.'
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
            console.log('default form !');
            return {
                position: ['relative', 'absolute'],
                display: ['block', 'inline', 'inline-block', 'none'],
                float: ['left', 'right', 'none'],
                height: {
                    height: '',
                    heightUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                },
                minHeight: {
                    minHeight: '',
                    minHeightUnit: ['vh', '%', 'em', 'px', 'vw', 'rem']
                }
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
        default:
            break;
    }
}