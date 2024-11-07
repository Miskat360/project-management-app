// import { Head } from "@inertiajs/react";
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import {
//   USER_STATUS_CLASS_MAP,
//   USER_STATUS_TEXT_MAP,
// } from "@/constant/constant";
// import TasksTable from "../Task/TasksTable";

// const Show = ({ user, tasks, queryParams }) => {
//   return (
//     <AuthenticatedLayout
//       header={
//         <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
//           {user.name}
//         </h2>
//       }
//     >
//       <Head title="Show" />
//       <section>
//         {" "}
//         <div className="py-12">
//           <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//               <div>
//                 <img
//                   src={user.image_path}
//                   alt=""
//                   className="w-full h-64 object-cover"
//                 />
//               </div>
//               <div className="p-6 text-gray-900 dark:text-gray-100">
//                 <div className="grid gap-1 grid-cols-2">
//                   <div>
//                     <div>
//                       <label className="text-lg font-bold">User ID</label>
//                       <p className="mt-1">{user.id}</p>
//                     </div>
//                     <div className="mt-4">
//                       <label className="text-lg font-bold">User Name</label>
//                       <p className="mt-1">{user.name}</p>
//                     </div>
//                     <div className="mt-4">
//                       <label className="text-lg font-bold">User Status</label>
//                       <p className="mt-1">
//                         <span
//                           className={`px-2 py-1 rounded text-white ${
//                             USER_STATUS_CLASS_MAP[user.status]
//                           }`}
//                         >
//                           {USER_STATUS_TEXT_MAP[user.status]}
//                         </span>
//                       </p>
//                     </div>
//                     <div className="mt-4">
//                       <label className="text-lg font-bold">Created By</label>
//                       <p className="mt-1 text-sm capitalize">
//                         {user.createdBy.name}
//                       </p>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="mt-4">
//                       <label className="text-lg font-bold">Due Date</label>
//                       <p className="mt-1 text-sm">{user.due_date}</p>
//                     </div>
//                     <div className="mt-4">
//                       <label className="text-lg font-bold">Create Date</label>
//                       <p className="mt-1 text-sm">{user.created_at}</p>
//                     </div>
//                     <div className="mt-4">
//                       <label className="text-lg font-bold">Updated By</label>
//                       <p className="mt-1 text-sm capitalize">
//                         {user.updatedBy.name}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <label className="text-lg font-bold">User Description</label>
//                   <p className="mt-1 text-sm capitalize">{user.description}</p>
//                 </div>
//               </div>
//               <div className="p-6 text-gray-900 dark:text-gray-100">
//                 <TasksTable tasks={tasks} queryParams={queryParams} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </AuthenticatedLayout>
//   );
// };

// export default Show;
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Show = ({ user }) => {
  return (
    <AuthenticatedLayout header={`user: ${user.name}`}>
      <Head title="user" />
      <section className="text-white p-8">
        <div>
          <label htmlFor="name">User Name: </label>
          <span>{user.name}</span>
        </div>
        <div>
          <label htmlFor="email">User Email: </label>
          <span>{user.email}</span>
        </div>
      </section>
    </AuthenticatedLayout>
  );
};

export default Show;
