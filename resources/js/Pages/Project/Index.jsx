import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from "@/constant/constant";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { ChevronsUpDown } from "lucide-react";
import React from "react";

const Index = ({ projects, queryParams = null, success }) => {
  // const { delete: destroy } = useForm();
  const deleteProject = (project) => {
    // e.preventDefault();
    router.delete(route("project.destroy", project.id));
    // destroy(route("project.destroy", { id }));
  };
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("project.index"), queryParams);
  };
  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route("project.index", queryParams));
  };
  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };
  return (
    <AuthenticatedLayout
      header={
        <div className="flex items-center justify-between">
          Projects
          <Link
            href={route("project.create")}
            className="bg-blue-700 text-white px-3 py-2 rounded-md"
          >
            Create
          </Link>
        </div>
      }
    >
      <Head title="projects" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
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
                      <th
                        onClick={() => sortChanged("id")}
                        className="px-3 py-2 cursor-pointer"
                      >
                        <div className="flex items-center">
                          ID
                          <ChevronsUpDown className="size-4" />
                        </div>
                      </th>
                      <th className="px-3 py-2">Image</th>
                      <th
                        onClick={() => sortChanged("name")}
                        className="px-3 py-2 cursor-pointer"
                      >
                        <div className="flex items-center">
                          Name
                          <ChevronsUpDown className="size-4" />
                        </div>
                      </th>
                      <th
                        onClick={() => sortChanged("status")}
                        className="px-3 py-2 cursor-pointer"
                      >
                        <div className="flex items-center">
                          Status
                          <ChevronsUpDown className="size-4" />
                        </div>
                      </th>
                      <th
                        onClick={() => sortChanged("created_at")}
                        className="px-3 py-2 cursor-pointer"
                      >
                        <div className="flex items-center">
                          Create Date
                          <ChevronsUpDown className="size-4" />
                        </div>
                      </th>
                      <th
                        onClick={() => sortChanged("due_date")}
                        className="px-3 py-2 cursor-pointer"
                      >
                        <div className="flex items-center">
                          Due Date
                          <ChevronsUpDown className="size-4" />
                        </div>
                      </th>
                      <th className="px-3 py-2">Created By</th>
                      <th className="px-3 py-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2">
                        <TextInput
                          defaultValue={queryParams.name}
                          className="w-full"
                          placeholder="Project Name"
                          onBlur={(e) =>
                            searchFieldChanged("name", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("name", e)}
                        />
                      </th>
                      <th className="px-3 py-2">
                        <SelectInput
                          defaultValue={queryParams.status}
                          className="w-full"
                          onChange={(e) =>
                            searchFieldChanged("status", e.target.value)
                          }
                        >
                          <option value="">Select Status</option>
                          <option value="pending">pending</option>
                          <option value="in progress">in progress</option>
                          <option value="completed">completed</option>
                        </SelectInput>
                      </th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.data.map((project) => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-3 py-3">{project.id}</td>
                        <td className="px-3 py-3">
                          <img
                            src={project.image_path}
                            alt=""
                            className="max-w-[6em]"
                          />
                        </td>
                        <td className="px-3 py-3 text-white hover:underline">
                          <Link href={route("project.show", project.id)}>
                            {project.name}
                          </Link>
                        </td>
                        <td className="px-3 py-3">
                          <span
                            className={`px-2 py-1 rounded text-white ${
                              PROJECT_STATUS_CLASS_MAP[project.status]
                            }`}
                          >
                            {PROJECT_STATUS_TEXT_MAP[project.status]}
                          </span>
                        </td>
                        <td className="px-3 py-3">{project.created_at}</td>
                        <td className="px-3 py-3">{project.due_date}</td>
                        <td className="px-3 py-3">{project.createdBy.name}</td>
                        <td className="px-3 py-2">
                          <Link
                            href={route("project.edit", project.id)}
                            className="text-blue-600 hover:underline mx-1"
                          >
                            Edit
                          </Link>
                          {/* <form onSubmit={() => deleteProject(project.id)}> */}
                          <button
                            onClick={(e) => deleteProject(project)}
                            className="text-red-600 hover:underline mx-1"
                          >
                            Delete
                          </button>
                          {/* </form> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={projects.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
