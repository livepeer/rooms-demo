"use client";

import {useState} from 'react';

import styles from './page.module.css'

export default function Home() {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name === '') {
            alert('Please enter a name')
            return
        }
        try {
            const response = await fetch('/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    roomID: (new URL(window.location)).searchParams.get('room')
                }),
            });

            const data = await response.json();

            console.log(data);
            window.location = data.joinUrl;
        } catch (error) {
            console.error(error);
            alert('Failed to join room')
        }
    };

    return (
        <main className={styles.main}>
        <div className={styles.description}>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Join</button>
        </form>
        </div>
        </main>
    );
}
