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
import Button from '@mui/material/Button';
import { cssForms } from '../utils/components'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import logo from '../logo.svg'

const Appbar = (props) => {
    const { preview, togglePreview, selectComponent } = props
    const handleTogglePreview = () => {
        togglePreview()
        selectComponent({})
    }
    return (
            <AppBar
                color="primary"
                style={{ 
                    marginLeft: preview ? 0 : 250, 
                    width: preview ? window.innerWidth : window.innerWidth - 250 - 350,
                    position: 'inherit',
                    backgroundColor: '#001e3c',
                }}
            >
                <Toolbar
                >
                    <img 
                        className='App-logo'
                        src={logo}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        OPEN-REACT-MATERIAL-UI
                    </Typography>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={preview} onChange={handleTogglePreview} />} label="Preview" />
                    </FormGroup>
                </Toolbar>
            </AppBar>
    );
}

export default Appbar