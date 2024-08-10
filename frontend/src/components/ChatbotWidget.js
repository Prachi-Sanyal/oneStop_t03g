import React, { useState, useCallback } from 'react';
import axios from 'axios';
import './ChatbotWidget.css'; // Import your custom styles

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isSending, setIsSending] = useState(false);

    const toggleChat = () => setIsOpen(prevState => !prevState);

    // Improved useCallback to handle message sending
    const handleSend = useCallback(async () => {
        if (input.trim() === '' || isSending) return; // Check for empty input or ongoing send

        const userMessage = { sender: 'user', text: input };
        setMessages(prevMessages => [...prevMessages, userMessage]); // Update messages with user's message

        setIsSending(true); // Indicate sending process

        try {
            const response = await axios.post('http://localhost:5000/chat', { message: input });
            const botMessage = { sender: 'bot', text: response.data.reply };
            setMessages(prevMessages => [...prevMessages, botMessage]); // Add bot's response
        } catch (error) {
            console.error('Error sending message:', error); // Log any errors
        } finally {
            setIsSending(false); // Reset sending flag
            setInput(''); // Clear input field
        }
    }, [input, isSending]);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        handleSend(); // Call handleSend to send message
    };

    return (
        <div className={`chatbot-widget ${isOpen ? 'open' : ''}`}>
            <button className="chatbot-toggle" onClick={toggleChat}>
                {isOpen ? 'Close Chat' : 'Chat'}
            </button>
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chatbot-message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <form className="chatbot-input" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button type="submit" disabled={isSending}>Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatbotWidget;
