

// 'use client'
// import Pagination from '@/app/ui/invoices/pagination';
// import Search from '@/app/ui/search';
// import Table from '@/app/ui/invoices/table';
// import EventsTable from '@/app/ui/invoices/table';
// import { CreateInvoice } from '@/app/ui/invoices/buttons';
// import { lusitana } from '@/app/ui/fonts';
// import { Suspense } from 'react';
// import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
// import { fetchInvoicesPages } from '@/app/lib/data';
// import { Suspense } from 'react';
// import { fetchSportsEvents } from '@/app/lib/data';
// // import Table from './Table'; // Assuming you have a Table component
// // import Pagination from './Pagination'; // Assuming you have a Pagination component
// // import Search from './Search'; // Assuming you have a Search component
// // import InvoicesTableSkeleton from './InvoicesTableSkeleton'; // Assuming you have a loading skeleton component

// interface SearchParams {
//   query?: string;
//   page?: string;
// }

// interface PageProps {
//   searchParams?: SearchParams;
// }

// export default function Page({ searchParams }: PageProps) {
//   const query = searchParams?.query || '';
//   const currentPage = Number(searchParams?.page) || 1;

//   // Assuming fetchSportsEvents returns the total number of pages, adjust accordingly
//   const totalPages = fetchSportsEvents(query); // This should be handled asynchronously, possibly with useEffect or similar

//   return (
//     <div className="w-full">
//       <div className="flex w-full items-center justify-between">
//         <h1 className="text-2xl">Invoices</h1> {/* Removed the dynamic class name for simplicity */}
//       </div>
//       <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
//         <Search placeholder="Search invoices..." />
//         {/* <CreateInvoice /> */}
//       </div>
//       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
//         <EventsTable query={query} currentPage={currentPage} />
//       </Suspense>
  
//     </div>
//   );
// }
'use client';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
 import InvoicesTable from '@/app/ui/invoices/table';
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense> 
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
