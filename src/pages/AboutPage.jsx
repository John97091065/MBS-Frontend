import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



export default function AboutPage() {
    const StyleSheet = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        },
        headings: {
            fontSize: '4rem',
            marginBottom: '20px',
            color: '#333',
        },
        text: {
            fontSize: '1.2rem',
            color: '#666',
        },
    }

    return (
        <div style={StyleSheet.container}>
            <h1 style={StyleSheet.headings}>About Us</h1>
            <p style={StyleSheet.text}>Made with ❤️ by Shandy</p>
        </div>
    );
}