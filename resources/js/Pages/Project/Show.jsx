import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from "@/constant/constant";
import TasksTable from "../Task/TasksTable";

const Show = ({ project, tasks, queryParams }) => {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {project.name}
        </h2>
      }
    >
      <Head title="Show" />
      <section>
        {" "}
        <div className="py-12">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
              <div>
                <img
                  src={project.image_path}
                  alt=""
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 text-gray-900 dark:text-gray-100">
                <div className="grid gap-1 grid-cols-2">
                  <div>
                    <div>
                      <label className="text-lg font-bold">Project ID</label>
                      <p className="mt-1">{project.id}</p>
                    </div>
                    <div className="mt-4">
                      <label className="text-lg font-bold">Project Name</label>
                      <p className="mt-1">{project.name}</p>
                    </div>
                    <div className="mt-4">
                      <label className="text-lg font-bold">
                        Project Status
                      </label>
                      <p className="mt-1">
                        <span
                          className={`px-2 py-1 rounded text-white ${
                            PROJECT_STATUS_CLASS_MAP[project.status]
                          }`}
                        >
                          {PROJECT_STATUS_TEXT_MAP[project.status]}
                        </span>
                      </p>
                    </div>
                    <div className="mt-4">
                      <label className="text-lg font-bold">Created By</label>
                      <p className="mt-1 text-sm capitalize">
                        {project.createdBy.name}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="mt-4">
                      <label className="text-lg font-bold">Due Date</label>
                      <p className="mt-1 text-sm">{project.due_date}</p>
                    </div>
                    <div className="mt-4">
                      <label className="text-lg font-bold">Create Date</label>
                      <p className="mt-1 text-sm">{project.created_at}</p>
                    </div>
                    <div className="mt-4">
                      <label className="text-lg font-bold">Updated By</label>
                      <p className="mt-1 text-sm capitalize">
                        {project.updatedBy.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-lg font-bold">
                    Project Description
                  </label>
                  <p className="mt-1 text-sm capitalize">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-6 text-gray-900 dark:text-gray-100">
                <TasksTable tasks={tasks} queryParams={queryParams} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthenticatedLayout>
  );
};

export default Show;
