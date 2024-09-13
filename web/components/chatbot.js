// components/Chatbot.js
import { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/chat', { message });
            setResponse(res.data.message);
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-semibold">Chatbot</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border p-2 w-full"
                    rows="4"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
                    Send
                </button>
            </form>
            {response && <p className="mt-2">Response: {response}</p>}
        </div>
    );
};

export default Chatbot;
