"use client";

import styles from '../page.module.css'

export default function Home() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/create-room', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            console.log(data);
            window.location = '/?room=' + data.id;
        } catch (error) {
            console.error(error);
            alert('Failed to create room')
        }
    };

    return (
        <main className={styles.main}>
        <div className={styles.description}>
        <form onSubmit={handleSubmit}>
            <button type="submit">Create New Room</button>
        </form>
        </div>
        </main>
    );
}
