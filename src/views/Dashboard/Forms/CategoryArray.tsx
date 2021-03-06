import React from 'react'
import { useFieldArray } from 'react-hook-form'
import NestedArray from 'views/Dashboard/Forms/ItemsFieldArray'
import { Control, UseFormRegister } from 'react-hook-form'
import { RequestForm } from 'views/Dashboard/Forms/CreateRequest'

const CagegoryFields = ({
  control,
  register,
}: {
  control: Control<RequestForm>
  register: UseFormRegister<RequestForm>
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'request',
  })

  return (
    <>
      {fields.map((item, index) => {
        return (
          <div key={item.id}>
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-900"
            >
              Category
            </label>
            <div className="flex mt-1 ">
              <input
                type="text"
                {...register(`request.${index}.category`)}
                defaultValue={item.category}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <button
                type="submit"
                onClick={() => remove(index)}
                className="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Delete
              </button>
            </div>

            <NestedArray nestIndex={index} {...{ control, register }} />
          </div>
        )
      })}

      <section>
        <button
          type="button"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => {
            append({ category: '' })
          }}
        >
          Add Category
        </button>
      </section>
    </>
  )
}

export default CagegoryFields
