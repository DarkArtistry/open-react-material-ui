import React, { useEffect, useState, createRef } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MaterialBtn from '../select-components/Button';
import MaterialGrid from '../select-components/Grid';
import MaterialTypography from '../select-components/Typography';
import { nanoid } from '@reduxjs/toolkit'

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
                            <MaterialBtn _id={nanoid()} />
                        </ListItem>
                        <ListItem>
                            <MaterialGrid _id={nanoid()} container={true} item={false}/>
                        </ListItem>
                        <ListItem>
                            <MaterialGrid _id={nanoid()} container={false} item={true}/>
                        </ListItem>
                        <ListItem>
                            <MaterialTypography _id={nanoid()}/>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
    );
}

export default LeftDrawer