import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import {
  TASK_STATUS_CLASS_MAP,
  TASK_STATUS_TEXT_MAP,
} from "@/constant/constant";
import { Link, router } from "@inertiajs/react";
import { ChevronsUpDown } from "lucide-react";

const TasksTable = ({
  tasks,
  queryParams = null,
  showProjectColumn = false,
}) => {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("task.index"), queryParams);
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
    router.get(route("task.index", queryParams));
  };
  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };
  return (
    <div>
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
              {showProjectColumn && (
                <th className="px-3 py-2 cursor-pointer">
                  <div className="flex items-center">
                    Project Name
                    <ChevronsUpDown className="size-4" />
                  </div>
                </th>
              )}
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
                  placeholder="Task Name"
                  onBlur={(e) => searchFieldChanged("name", e.target.value)}
                  onKeyPress={(e) => onKeyPress("name", e)}
                />
              </th>
              {showProjectColumn && <th className="px-3 py-2"></th>}
              <th className="px-3 py-2">
                <SelectInput
                  defaultValue={queryParams.status}
                  className="w-full"
                  onChange={(e) => searchFieldChanged("status", e.target.value)}
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
            {tasks.data.map((task) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-3 py-3">{task.id}</td>
                <td className="px-3 py-3">
                  <img src={task.image_path} alt="" className="max-w-[6em]" />
                </td>
                <td className="px-3 py-3">{task.name}</td>
                {showProjectColumn && (
                  <td className="px-3 py-3">{task.project.name}</td>
                )}
                <td className="px-3 py-3">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      TASK_STATUS_CLASS_MAP[task.status]
                    }`}
                  >
                    {TASK_STATUS_TEXT_MAP[task.status]}
                  </span>
                </td>
                <td className="px-3 py-3">{task.created_at}</td>
                <td className="px-3 py-3">{task.due_date}</td>
                <td className="px-3 py-3">{task.createdBy.name}</td>
                <td className="px-3 py-2">
                  <Link
                    href={route("task.edit", task.id)}
                    className="text-blue-600 hover:underline mx-1"
                  >
                    Edit
                  </Link>
                  <Link
                    href={route("task.destroy", task.id)}
                    className="text-red-600 hover:underline mx-1"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination links={tasks.meta.links} />
    </div>
  );
};

export default TasksTable;
