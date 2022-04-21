import React, { useEffect, useState, createRef } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MaterialBtn from '../material-components/Button';

const LeftDrawer = () => {
    const drawerWidth = 250
    return (
            <Drawer
                anchor={'left'}
                open={true}
                variant={'permanent'}
            >
                <Box
                    sx={{ width: drawerWidth }}
                    role="presentation"
                >
                    <Toolbar>Draggable Components</Toolbar>
                    <Divider />
                    <List 
                        style={{padding: 0}}
                    >
                        <ListItem>
                            <MaterialBtn />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
    );
}

export default LeftDrawer