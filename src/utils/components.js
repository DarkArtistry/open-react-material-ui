import MaterialBtn from '../render-components/Button'
import { ComponentTypes } from '../select-components/cTypes'

// cssForms returns an object representing the form structure for a particular component
export const cssForms = (component) => {
    switch (component.type) {
        case ComponentTypes.BUTTON:
            console.log('buttom form !');
            return {
                position: ['relative', 'absolute'],
                display: ['block', 'inline', 'inline-block', 'none'],
                float: ['left', 'right', 'none'],
                height: {
                    height: '',
                    heightUnit: ['vh', '%', 'em', 'px']
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
                    heightUnit: ['vh', '%', 'em', 'px']
                },
                minHeight: {
                    minHeight: '',
                    minHeightUnit: ['vh', '%', 'em', 'px']
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
                droppable={component.droppable}
                draggable={component.draggable}
                isSelected={component.isSelected}
                isHovered={component.isHovered}
                rootParentType={component.rootParentType}
            />
        default:
            break;
    }
}