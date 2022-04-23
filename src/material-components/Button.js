import React, { useEffect, useState, createRef } from 'react';
import { nanoid } from '@reduxjs/toolkit'
import { Button } from '@mui/material';

const MaterialBtn = () => {
    // button properties
    const [content, setContent] = useState("button");
    const [color, setColor] = useState("primary");
    const [fullWidth, setFullWidth] = useState(false);
    const [size, setSize] = useState("medium");
    const [variant, setVariant] = useState("contained");
    const [href, setHref] = useState("");

    const handleDragStart = (ev) => {
        console.log('ev.target.id : ', ev.target.id, ' ', typeof ev.target.id);
        ev.dataTransfer.setData("text/plain", ev.target.id);
        ev.dataTransfer.effectAllowed = 'copy';
        ev.dataTransfer.setData('text/html', ev.currentTarget.innerHTML);
    }

    return (
            <span
                id={nanoid()}
                draggable={"true"} 
                onDragStart={handleDragStart}
            >
                {/* <Button
                    id={nanoid()}
                    href={href}
                    color={color}
                    fullWidth={fullWidth}
                    size={size}
                    variant={variant}
                    onClick={()=> console.log('hello')}
                >
                    {content}
                </Button> */}
            </span>
    );
}

export default MaterialBtn