// import React, { useState, useEffect } from 'react';
// import EventModal from './eventModal';
// import { formatDateToLocal } from '@/app/lib/utils';
// import { fetchSportsEvents } from '@/app/lib/data';
// import Image from 'next/image'; // Assuming you have an Image component or use Next.js Image

// interface Event {
//  id: string;
//  title: string;
//  description: string;
//  phq_attendance: number;
//  start: string;
// }

// interface EventsTableProps {
//  query: string;
//  currentPage: number;
// }

// const EventsTable: React.FC<EventsTableProps> = ({ query, currentPage }) => {
//  const [events, setEvents] = useState<Event[]>([]);
//  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
//  const [isModalOpen, setModalOpen] = useState(false);
//  const [favorites, setFavorites] = useState<string[]>([]); // New state for favorites
//  useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const fetchedEvents = await fetchSportsEvents(query, currentPage);
//         console.log('Fetched events:', fetchedEvents);
//         setEvents(fetchedEvents);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//  }, [query, currentPage]);

//  const handleEventClick = (event: Event) => {
//     setSelectedEvent(event);
//     setModalOpen(true);
//  };

//  const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedEvent(null);
//  };

//  const handleFavoriteToggle = (eventId: string) => {
//   setFavorites((prevFavorites) => {
//     if (prevFavorites.includes(eventId)) {
//       return prevFavorites.filter(id => id !== eventId);
//     } else {
//       return [...prevFavorites, eventId];
//     }
//   });
// };

//  return (
//     <div className="mt-6 flow-root">
//       <div className="inline-block min-w-full align-middle">
//         <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
//           <div className="md:hidden">
//             {events.map((event) => (
//               <div
//                 key={event.id}
//                 className="mb-2 w-full rounded-md bg-white p-4"
//                 onClick={() => handleEventClick(event)}
//               >
//                 <h3>{event.title}</h3>
//                 <p>Start Date: {formatDateToLocal(event.start)}</p>
//               </div>
//             ))}
//           </div>
//           <table className="hidden min-w-full text-gray-900 md:table">
//             <thead className="rounded-lg text-left text-sm font-normal">
//               <tr>
//                 <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
//                  Event Title
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                  Start Date
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                  Attendance
//                 </th>
//                 <th>Favorites</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               {events.map((event) => (
//                 <tr
//                  key={event.id}
//                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
//                  onClick={() => handleEventClick(event)}
//                 >
//                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                     <p>{event.title}</p>
//                  </td>
//                  <td className="whitespace-nowrap px-3 py-3">
//                     {formatDateToLocal(event.start)}
//                  </td>
//                  <td className="whitespace-nowrap px-3 py-3">
//                     {event.phq_attendance}
//                  </td>
//                  <td className="whitespace-nowrap px-3 py-3">
//                     <div className="flex justify-center gap-3">
//                     <td>
//                 <button
//                   className={`heart-icon ${favorites.includes(event.id) ? 'text-red-500' : 'text-gray-500'}`}
//                   onClick={(e) => {
//                     e.stopPropagation(); // Prevents the row click event
//                     handleFavoriteToggle(event.id);
//                   }}
//                 >
//                   ❤️
//                 </button>
//               </td>
                
//                     </div>
//                  </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {isModalOpen && selectedEvent && (
//         <EventModal event={selectedEvent} onClose={handleCloseModal} />
//       )}
//     </div>
//  );
// };

// export default EventsTable;

// import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';

// export default async function InvoicesTable({
//   query,
//   currentPage,
// }: {
//   query: string;
//   currentPage: number;
// }) {
//   const invoices = await fetchFilteredInvoices(query, currentPage);

//   return (
//     <div className="mt-6 flow-root">
//       <div className="inline-block min-w-full align-middle">
//         <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
//           <div className="md:hidden">
//             {invoices?.map((invoice) => (
//               <div
//                 key={invoice.id}
//                 className="mb-2 w-full rounded-md bg-white p-4"
//               >
//                 <div className="flex items-center justify-between border-b pb-4">
//                   <div>
//                     <div className="mb-2 flex items-center">
//                       <Image
//                         src={invoice.image_url}
//                         className="mr-2 rounded-full"
//                         width={28}
//                         height={28}
//                         alt={`${invoice.name}'s profile picture`}
//                       />
//                       <p>{invoice.name}</p>
//                     </div>
//                     <p className="text-sm text-gray-500">{invoice.email}</p>
//                   </div>
//                   <InvoiceStatus status={invoice.status} />
//                 </div>
//                 <div className="flex w-full items-center justify-between pt-4">
//                   <div>
//                     <p className="text-xl font-medium">
//                       {formatCurrency(invoice.amount)}
//                     </p>
//                     <p>{formatDateToLocal(invoice.date)}</p>
//                   </div>
//                   <div className="flex justify-end gap-2">
//                     <UpdateInvoice id={invoice.id} />
//                     <DeleteInvoice id={invoice.id} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <table className="hidden min-w-full text-gray-900 md:table">
//             <thead className="rounded-lg text-left text-sm font-normal">
//               <tr>
//                 <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
//                   Customer
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Email
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Amount
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Date
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Status
//                 </th>
//                 <th scope="col" className="relative py-3 pl-6 pr-3">
//                   <span className="sr-only">Edit</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               {invoices?.map((invoice) => (
//                 <tr
//                   key={invoice.id}
//                   className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
//                 >
//                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                     <div className="flex items-center gap-3">
//                       <Image
//                         src={invoice.image_url}
//                         className="rounded-full"
//                         width={28}
//                         height={28}
//                         alt={`${invoice.name}'s profile picture`}
//                       />
//                       <p>{invoice.name}</p>
//                     </div>
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {invoice.email}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {formatCurrency(invoice.amount)}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {formatDateToLocal(invoice.date)}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     <InvoiceStatus status={invoice.status} />
//                   </td>
//                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                     <div className="flex justify-end gap-3">
//                       <UpdateInvoice id={invoice.id} />
//                       <DeleteInvoice id={invoice.id} />
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';

function InvoicesTable() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/servers')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('There was an error!', error));
    }, []);

    return (
        <div>
            <p>Message from backend: {message}</p>
        </div>
    );
}

export default InvoicesTable;

