// import Pagination from "@/Components/Pagination";
// import SelectInput from "@/Components/SelectInput";
// import TextInput from "@/Components/TextInput";
// import {
//   USER_STATUS_CLASS_MAP,
//   USER_STATUS_TEXT_MAP,
// } from "@/constant/constant";
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head, Link, router, useForm } from "@inertiajs/react";
// import { ChevronsUpDown } from "lucide-react";
// import React from "react";
// //************************************************************************************************
// //* ID, NAME, EMAIL, CRETED DATE, ACTION,
// const Index = ({ users, queryParams = null, success }) => {
//   // const { delete: destroy } = useForm();
//   const deleteUser = (user) => {
//     // e.preventDefault();
//     router.delete(route("user.destroy", user.id));
//     // destroy(route("user.destroy", { id }));
//   };
//   queryParams = queryParams || {};
//   const searchFieldChanged = (name, value) => {
//     if (value) {
//       queryParams[name] = value;
//     } else {
//       delete queryParams[name];
//     }
//     router.get(route("user.index"), queryParams);
//   };
//   const sortChanged = (name) => {
//     if (name === queryParams.sort_field) {
//       if (queryParams.sort_direction === "asc") {
//         queryParams.sort_direction = "desc";
//       } else {
//         queryParams.sort_direction = "asc";
//       }
//     } else {
//       queryParams.sort_field = name;
//       queryParams.sort_direction = "asc";
//     }
//     router.get(route("user.index", queryParams));
//   };
//   const onKeyPress = (name, e) => {
//     if (e.key !== "Enter") return;
//     searchFieldChanged(name, e.target.value);
//   };
//   return (
//     <AuthenticatedLayout
//       header={
//         <div className="flex items-center justify-between">
//           <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
//             Users
//           </h2>
//           <Link
//             href={route("user.create")}
//             className="bg-blue-700 text-white px-3 py-2 rounded-md"
//           >
//             Create
//           </Link>
//         </div>
//       }
//     >
//       <Head title="users" />
//       <div className="py-12">
//         <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//           {success && (
//             <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
//               {success}
//             </div>
//           )}
//           <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//             <div className="p-6 text-gray-900 dark:text-gray-100">
//               {/* <pre>{JSON.stringify(users, undefined, 2)}</pre> */}
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                   <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
//                     <tr className="text-nowrap">
//                       <th
//                         onClick={() => sortChanged("id")}
//                         className="px-3 py-2 cursor-pointer"
//                       >
//                         <div className="flex items-center">
//                           ID
//                           <ChevronsUpDown className="size-4" />
//                         </div>
//                       </th>
//                       <th className="px-3 py-2">Image</th>
//                       <th
//                         onClick={() => sortChanged("name")}
//                         className="px-3 py-2 cursor-pointer"
//                       >
//                         <div className="flex items-center">
//                           Name
//                           <ChevronsUpDown className="size-4" />
//                         </div>
//                       </th>
//                       <th
//                         onClick={() => sortChanged("status")}
//                         className="px-3 py-2 cursor-pointer"
//                       >
//                         <div className="flex items-center">
//                           Status
//                           <ChevronsUpDown className="size-4" />
//                         </div>
//                       </th>
//                       <th
//                         onClick={() => sortChanged("created_at")}
//                         className="px-3 py-2 cursor-pointer"
//                       >
//                         <div className="flex items-center">
//                           Create Date
//                           <ChevronsUpDown className="size-4" />
//                         </div>
//                       </th>
//                       <th
//                         onClick={() => sortChanged("due_date")}
//                         className="px-3 py-2 cursor-pointer"
//                       >
//                         <div className="flex items-center">
//                           Due Date
//                           <ChevronsUpDown className="size-4" />
//                         </div>
//                       </th>
//                       <th className="px-3 py-2">Created By</th>
//                       <th className="px-3 py-2 text-right">Actions</th>
//                     </tr>
//                   </thead>
//                   <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
//                     <tr className="text-nowrap">
//                       <th className="px-3 py-2"></th>
//                       <th className="px-3 py-2"></th>
//                       <th className="px-3 py-2">
//                         <TextInput
//                           defaultValue={queryParams.name}
//                           className="w-full"
//                           placeholder="User Name"
//                           onBlur={(e) =>
//                             searchFieldChanged("name", e.target.value)
//                           }
//                           onKeyPress={(e) => onKeyPress("name", e)}
//                         />
//                       </th>
//                       <th className="px-3 py-2">
//                         <SelectInput
//                           defaultValue={queryParams.status}
//                           className="w-full"
//                           onChange={(e) =>
//                             searchFieldChanged("status", e.target.value)
//                           }
//                         >
//                           <option value="">Select Status</option>
//                           <option value="pending">pending</option>
//                           <option value="in progress">in progress</option>
//                           <option value="completed">completed</option>
//                         </SelectInput>
//                       </th>
//                       <th className="px-3 py-2"></th>
//                       <th className="px-3 py-2"></th>
//                       <th className="px-3 py-2"></th>
//                       <th className="px-3 py-2"></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {users.data.map((user) => (
//                       <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                         <td className="px-3 py-3">{user.id}</td>
//                         <td className="px-3 py-3">
//                           <img
//                             src={user.image_path}
//                             alt=""
//                             className="max-w-[6em]"
//                           />
//                         </td>
//                         <td className="px-3 py-3 text-white hover:underline">
//                           <Link href={route("user.show", user.id)}>
//                             {user.name}
//                           </Link>
//                         </td>
//                         <td className="px-3 py-3">
//                           <span
//                             className={`px-2 py-1 rounded text-white ${
//                               USER_STATUS_CLASS_MAP[user.status]
//                             }`}
//                           >
//                             {USER_STATUS_TEXT_MAP[user.status]}
//                           </span>
//                         </td>
//                         <td className="px-3 py-3">{user.created_at}</td>
//                         <td className="px-3 py-3">{user.due_date}</td>
//                         <td className="px-3 py-3">{user.createdBy.name}</td>
//                         <td className="px-3 py-2">
//                           <Link
//                             href={route("user.edit", user.id)}
//                             className="text-blue-600 hover:underline mx-1"
//                           >
//                             Edit
//                           </Link>
//                           {/* <form onSubmit={() => deleteUser(user.id)}> */}
//                           <button
//                             onClick={(e) => deleteUser(user)}
//                             className="text-red-600 hover:underline mx-1"
//                           >
//                             Delete
//                           </button>
//                           {/* </form> */}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <Pagination links={users.meta.links} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </AuthenticatedLayout>
//   );
// };

// export default Index;
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";

const Index = ({ users, success }) => {
  const deleteUser = (user) => {
    router.delete(route("user.destroy", user));
  };
  return (
    <AuthenticatedLayout
      header={
        <div className="flex items-center justify-between">
          users
          <Link
            href={route("user.create")}
            className="bg-blue-700 text-base font-normal px-4 py-2 rounded"
          >
            Create user
          </Link>
        </div>
      }
    >
      <Head title="Users" />
      <section className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {success && (
          <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
            {success}
          </div>
        )}
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
          <div className="p-6 text-gray-900 dark:text-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-2 cursor-pointer">ID</th>
                    <th className="px-3 py-2 cursor-pointer">Name</th>
                    <th className="px-3 py-2 cursor-pointer">Email</th>
                    <th className="px-3 py-2 cursor-pointer">Created Date</th>
                    <th className="px-3 py-2 cursor-pointer">Action</th>
                  </tr>
                </thead>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-2"></th>
                    <th className="px-3 py-2">
                      <TextInput className="w-full" placeholder="User name" />
                    </th>
                    <th>
                      <TextInput
                        className="w-full"
                        placeholder="email address"
                      />
                    </th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.data.map((user) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-3 py-2">{user.id}</td>
                      <td className="px-3 py-2">
                        <Link href={route("user.show", user.id)}>
                          {user.name}
                        </Link>
                      </td>
                      <td className="px-3 py-2">{user.email}</td>
                      <td className="px-3 py-2">{user.created_at}</td>
                      <td className="px-3 py-2">
                        <Link
                          href={route("user.edit", user.id)}
                          className="text-blue-600 hover:underline mx-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteUser(user)}
                          className="text-red-600 hover:underline mx-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination links={users.meta.links} />
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  );
};

export default Index;
