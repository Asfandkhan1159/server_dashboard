import React from 'react';

interface Event {
    id: string;
    title: string;
    description: string;
    phq_attendance: number;
    start: string;
}

interface EventModalProps {
    event: Event | null;
    onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-lg w-full">
                <h2 className="text-xl font-bold">{event.title}</h2>
                <p>{event.description}</p>
                <div className="mt-2">
                    <p><strong>Attendance:</strong> {event.phq_attendance}</p>
                    <p><strong>Start Date:</strong> {new Date(event.start).toLocaleString()}</p>
                </div>
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Close</button>
            </div>
        </div>
    );
};

export default EventModal;
