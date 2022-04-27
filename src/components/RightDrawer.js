import React, { useEffect, useState, createRef } from 'react';
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

import { cssForms } from '../utils/components'

const RightDrawer = (props) => {
    const { selectedComponent } = props
    const drawerWidth = 350
    const [form, setForm] = useState({});

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
                    selectedComponent && selectedComponent.id && Object.keys(selectedComponent).map((eachKey) => {
                        return <div><b>{eachKey}</b>: {selectedComponent[eachKey]}</div>
                    })
                }
                <br/><br/><br/><br/>
                {JSON.stringify(form)}
            </Box>
        </Drawer>
  );
}

export default RightDrawer