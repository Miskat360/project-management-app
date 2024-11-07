import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import MyModal from "@/Components/ui/Modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head, useForm } from "@inertiajs/react";
import React from "react";

const Create = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    description: "",
    status: "",
    due_date: "",
    image_path: null,
  });
  const handleAddProject = (e) => {
    e.preventDefault();
    post(route("project.store"), {
      forceFormData: true,
      preserveScroll: true,
    });
  };
  // post(route('project.store'), {
  //     onSuccess: () => reset(),
  //     onError: (errors) => {
  //         setData({...data, errors });
  //     },
  //     onSuccess: () => {
  //         reset();
  //         alert("Project created successfully");
  //     }
  // })
  return (
    <AuthenticatedLayout
      header={
        <h1 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          New Project
        </h1>
      }
    >
      <Head title="Create" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <form
              onSubmit={handleAddProject}
              className="max-w-[40em] mx-auto my-4 p-4 sm:px-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
              encType="multipart/form-data"
            >
              <div className="mt-4">
                <InputLabel htmlFor="image_path" value={"Image"} />
                <TextInput
                  type="file"
                  name="image_path"
                  accept="image/*"
                  onChange={(e) => setData("image_path", e.target.files[0])}
                  className="mt-1 w-full"
                />
                <InputError message={errors.image_path} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="name" value={"Name"} />
                <TextInput
                  isFocused={true}
                  name="name"
                  value={data.name}
                  onChange={(e) => setData("name", e.target.value)}
                  className="w-full mt-1"
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="description" value={"Description"} />
                <textarea
                  name="description"
                  id="description"
                  value={data.description}
                  onChange={(e) => setData("description", e.target.value)}
                  rows="5"
                  className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 w-full mt-1"
                ></textarea>
                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="status" value={"Status"} />
                <SelectInput
                  name="status"
                  className="mt-1 w-full"
                  onChange={(e) => setData("status", e.target.value)}
                >
                  <option value="">Select status</option>
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </SelectInput>
                <InputError message={errors.status} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="due_date" value={"Due Date"} />
                <TextInput
                  type="date"
                  name="due_date"
                  onChange={(e) => setData("due_date", e.target.value)}
                  className="mt-1 w-full"
                />
                <InputError message={errors.due_date} className="mt-2" />
              </div>
              <div className="mt-4 flex gap-8">
                <Link
                  href={route("project.index")}
                  className={`inline-block w-full justify-center py-3 my-4 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:shadow-outline dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700 dark:focus:bg-indigo-700 dark:focus:shadow-outline text-center`}
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className={`inline-block w-full justify-center py-3 my-4 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:shadow-outline dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700 dark:focus:bg-indigo-700 dark:focus:shadow-outline`}
                  disabled={processing}
                >
                  {processing ? "Creating..." : "Create Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Create;
