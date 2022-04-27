import React, { useEffect, useState, createRef } from 'react';
import { HexColorPicker } from "react-colorful";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { Drawer } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';


import { cssForms } from '../utils/components'


const RightDrawer = (props) => {
    const { selectedComponent, updateSelectedComponent } = props
    const drawerWidth = 350
    const [form, setForm] = useState({});
    const [formDisplay, setFormDisplay] = useState([]);

    const handleFormCollapse = (formKey) => {
        let tempFormDisplay = JSON.parse(JSON.stringify(formDisplay))
        if (tempFormDisplay.includes(formKey)) {
            // remove from display array
            const index = tempFormDisplay.indexOf(formKey);
            tempFormDisplay.splice(index, 1);
        } else {
            tempFormDisplay.push(formKey)
        }
        setFormDisplay(tempFormDisplay)
    }

    const handleFormChange = (field, value) => {
        let currentSelectedComponent = JSON.parse(JSON.stringify(selectedComponent))
        currentSelectedComponent[field] = value
        updateSelectedComponent(currentSelectedComponent)
    }

    const capitalizeFirstLetter = (stringValue) => {
        return stringValue.charAt(0).toUpperCase() + stringValue.slice(1);
    }

    useEffect(()=> {
        if (selectedComponent) {
            let componentForm = cssForms(selectedComponent)
            setForm(componentForm)
        }
      },[(selectedComponent && selectedComponent.id) || ""])
  return (
        <Drawer
            anchor={'right'}
            open={true}
            variant={'permanent'}
        >
            <Box
                sx={{ width: drawerWidth, textOverflow: 'ellipsis' }}
                role="presentation"
            >
                <Toolbar>Toolbox</Toolbar>
                <Divider />
                {
                    form && Object.keys(form).map((eachKey)=> {
                        console.log('eachKey : ', eachKey);
                        console.log('selectedComponent : ', selectedComponent);
                        if (eachKey === 'customisedColor') {
                            if (selectedComponent && selectedComponent.color !== 'customise') {
                                return ''
                            }
                        }
                        if (eachKey === 'children') {
                            if (typeof form[eachKey].children !== 'string') {
                                return ''
                            }
                        }
                        return <div key={eachKey}>
                            <ListItem button onClick={() => { handleFormCollapse(eachKey) }}>
                                <ListItemText >
                                    <Typography>{capitalizeFirstLetter(eachKey)}</Typography>
                                </ListItemText>
                                {formDisplay && (formDisplay.includes(eachKey) ? <ExpandMoreIcon /> : <ExpandLessIcon />)}
                            </ListItem>
                            <Collapse 
                                in={formDisplay.includes(eachKey)} 
                                timeout="auto" 
                                unmountOnExit
                                sx={{
                                    padding: '10px'
                                }}
                            >
                                <Grid container>
                                    <Grid item md={12} xs={12} sm={12}>
                                        {/* VARIOUS FORM FIELDS BELOW */}
                                        {
                                            (
                                                eachKey === 'position' || 
                                                eachKey === 'display' || 
                                                eachKey === 'float' || 
                                                eachKey === 'variant' ||
                                                eachKey === 'size' ||
                                                eachKey === 'fullWidth' ||
                                                eachKey === 'color' ||
                                                eachKey === 'fullWidth' ||
                                                eachKey === 'disabled'
                                            ) && (
                                            <FormControl fullWidth>
                                                <Select
                                                    value={(selectedComponent && selectedComponent[eachKey]) || ""}
                                                    onChange={(ev) => {
                                                        handleFormChange(eachKey, ev.target.value)
                                                    }}
                                                >
                                                    {
                                                        form && form[eachKey] && form[eachKey].map((eachOption) => {
                                                            return <MenuItem key={eachOption} value={eachOption}>{`${eachOption}`}</MenuItem>
                                                        })
                                                    }
                                                </Select>
                                            </FormControl>)
                                        }
                                        {/* HEIGHT AND WIDTH */}
                                        {
                                            (
                                                eachKey === 'height' || 
                                                eachKey === 'minHeight' || 
                                                eachKey === 'width' || 
                                                eachKey === 'minWidth' ||
                                                eachKey === 'left' ||
                                                eachKey === 'right' ||
                                                eachKey === 'top' ||
                                                eachKey === 'bottom' ||
                                                eachKey === 'margin' ||
                                                eachKey === 'padding'
                                            ) && (
                                            <FormControl fullWidth>
                                                {
                                                    form && form[eachKey] && Object.keys(form[eachKey]).map((eachOption, index) => {
                                                        if (
                                                            eachOption === 'height' || 
                                                            eachOption === 'width' ||
                                                            eachOption === 'left' ||
                                                            eachOption === 'right' ||
                                                            eachOption === 'top' ||
                                                            eachOption === 'bottom' ||
                                                            eachOption === 'margin' ||
                                                            eachOption === 'padding'
                                                        ) {
                                                            return <TextField
                                                                key={eachOption}
                                                                onChange={(ev) => {
                                                                    handleFormChange(eachOption, ev.target.value)
                                                                }}
                                                                value={(selectedComponent && selectedComponent[eachOption]) || ""}
                                                                sx={{marginBottom: '10px'}} 
                                                                id={`${eachOption + index}`} 
                                                                label={eachOption}
                                                            />
                                                        } else {
                                                            return <Select
                                                                key={eachOption}
                                                                value={(selectedComponent && selectedComponent[eachOption]) || ""} 
                                                                onChange={(ev) => {
                                                                    handleFormChange(eachOption, ev.target.value)
                                                                }}
                                                            >
                                                                {
                                                                    ['vh', '%', 'em', 'px'].map((eachOption) => {
                                                                        return <MenuItem key={eachOption} value={eachOption}>{eachOption}</MenuItem>
                                                                    })
                                                                }
                                                            </Select>
                                                        }
                                                    })
                                                }
                                            </FormControl>)
                                        }
                                        {/* HREF */}
                                        {
                                            (
                                                eachKey === 'href' ||
                                                eachKey === 'children'
                                            ) && (
                                            <FormControl fullWidth>
                                                {
                                                    form && form[eachKey] && Object.keys(form[eachKey]).map((eachOption, index) => {
                                                        if (eachOption === 'href' || eachOption === 'children') {
                                                            return <TextField 
                                                                key={eachOption}
                                                                value={(selectedComponent && selectedComponent[eachOption]) || ""}
                                                                onChange={(ev) => {
                                                                    handleFormChange(eachOption, ev.target.value)
                                                                }}
                                                                sx={{marginBottom: '10px'}} 
                                                                label={eachOption}
                                                            />
                                                        }
                                                    })
                                                }
                                                {eachKey === 'children' && <Box sx={{fontSize: '13px', }}>{`Component's inner text`}</Box>}
                                                {eachKey === 'href' && <Box sx={{fontSize: '13px', }}>{`${(form && form.href && form.href.hint)}`}</Box>}
                                            </FormControl>)
                                        }
                                        {/* CUSTOMIZED COLOR */}
                                        {
                                            (
                                                eachKey === 'customisedColor'
                                            ) &&  (
                                            <FormControl fullWidth>
                                                {
                                                    form && form[eachKey] && Object.keys(form[eachKey]).map((eachOption, index) => {
                                                        return <div key={eachOption}>
                                                            <TextField 
                                                                fullWidth
                                                                sx={{marginBottom: '10px'}}
                                                                label={eachOption}
                                                                value={(selectedComponent && selectedComponent.customisedColor && selectedComponent.customisedColor[eachOption]) || ""}
                                                                onChange={(ev) => {
                                                                    let customisedColor = (selectedComponent && selectedComponent.customisedColor && JSON.parse(JSON.stringify(selectedComponent.customisedColor))) || { backgroundColor: '', color: '' }
                                                                    customisedColor[eachOption] = ev.target.value
                                                                    handleFormChange(eachKey, customisedColor)
                                                                }}
                                                            />
                                                            <HexColorPicker
                                                                style={{
                                                                    marginBottom: '10px',
                                                                    width: '100%'
                                                                }}
                                                                color={(selectedComponent && selectedComponent.customisedColor && selectedComponent.customisedColor[eachOption]) || ""}
                                                                onChange={(colorSelected) => {
                                                                    let customisedColor = (selectedComponent && selectedComponent.customisedColor && JSON.parse(JSON.stringify(selectedComponent.customisedColor))) || { backgroundColor: '', color: '' }
                                                                    customisedColor[eachOption] = colorSelected
                                                                    handleFormChange(eachKey, customisedColor)
                                                                }}
                                                            />
                                                        </div>
                                                    })
                                                }
                                            </FormControl>)
                                        }
                                    </Grid>
                                </Grid>
                            </Collapse>
                            <Divider />
                        </div>
                    })
                }
            </Box>
        </Drawer>
  );
}

export default RightDrawer