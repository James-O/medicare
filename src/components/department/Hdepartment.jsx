import React from 'react'

function Hdepartment() {
  return (
   <div className="w-full h-full mt-44">
  {/* <!-- Title Secti */}
  <div className="text-center py-16">
    <h1 className="text-5xl text-gray-800">Departments</h1>
    <p className="mt-4 max-w-3xl mx-auto text-gray-600">
      Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
      consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione
      sint. Sit quaerat ipsum dolorem.
    </p>
  </div>

  {/* <!-- Breadcrumb Section --> */}
  <div className="bg-gray-200  px-3 py-5 rounded max-w-full mx-auto flex  ">
    <nav className="text-sm text-gray-600 ml-[12%] ">
      <ol className="flex items-center space-x-2">
        <li>
          <a href="#" className="text-teal-500 hover:text-teal-600">Home</a>
        </li>
        <li>
          <span>/</span>
        </li>
        <li className="text-gray-800">Departments</li>
      </ol>
    </nav>
  </div>
</div>

  )
}

export default Hdepartment