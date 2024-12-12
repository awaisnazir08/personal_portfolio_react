import React from 'react';

function Welcome() {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        fontFamily: 'Arial, sans-serif',
        color: '#555',
        backgroundColor: '#f9f9f9'
      }}
    >
      <div style={{
        textAlign: 'center'
      }}>
        <h1>Welcome to Resume Viewer</h1>
        <p>Please select a resume from the left panel to view it here.</p>
      </div>
    </div>
  );
}

export default Welcome;