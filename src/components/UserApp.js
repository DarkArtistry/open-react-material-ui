import React, { useLayoutEffect, useEffect, useState } from 'react';

function UserApp() {

  const drawerWidth = 250

  const handleDragEnter = (ev) => {
    console.log('handleDragEnter');
    ev.currentTarget.style.border = "dashed";
    ev.stopPropagation();
    ev.preventDefault();
    console.log('ev.dataTransfer : ', ev.dataTransfer);
  }

  const handleDragLeave = (ev) => {
    console.log('handleDragLeave');
    ev.currentTarget.style.border = "none";
    ev.stopPropagation();
    ev.preventDefault();
  }

  const handleDrop = (ev) => {
    console.log('handleDrop');
    ev.preventDefault();
    ev.stopPropagation();
    let text = ev.dataTransfer.getData("text/plain");
    console.log('text : ', text);
    let html = ev.dataTransfer.getData("text/html");
    console.log('html : ', html);
    ev.currentTarget.style.border = "none";
    console.log(ev.currentTarget);
    let element = document.getElementById(text)
    let element_prime = element.cloneNode(true)
    ev.currentTarget.append(element_prime)
  }

  const handleDragOver = (ev) => {
    console.log('handleDragOver');
    ev.preventDefault();
    ev.stopPropagation();
  }

  return (
    <main style={{ marginLeft: drawerWidth, marginRight: drawerWidth }}>
        <div 
          style={{minHeight: '100vh'}}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
              i'm here
            <div 
              style={{minHeight: '50vh', marginTop: '10em'}}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              // dangerouslySetInnerHTML={{ __html: "wooo" }}
            >
              you're here
            </div>
        </div>
    </main>
  );
}

export default UserApp;
