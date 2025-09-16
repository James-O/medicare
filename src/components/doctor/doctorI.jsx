import { Search } from "lucide-react";

export default function Doctorl() {
    return (
        <div className=" mt-14 justify-center flex flex-col shadow-gray-300 items-center ">
            <div className="bg-blue-50 gap-5 mb-1 space-y-4 p-2 border border-blue-100 flex rounded-lg shadow-md w-full max-w-5xl items-center">
                <div className="flex flex-col flex-1 min-w-[200px]">
                    <label className="text-sm font-semibold text-gray-800 mb-1">Search Doctors</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Type a name or keyword"
                            className="w-full pl-10 pr-3 py-2 mb-1 border border-gray-400 rounded-md bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>

                {/* Department */}
                <div className="flex flex-col min-w-[200px]">
                    <label className="text-sm font-semibold text-gray-800 mb-1">Department</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none">
                        <option>All Departments</option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Pediatrics</option>
                    </select>
                </div>

                {/* Location */}
                <div className="flex flex-col min-w-[200px]">
                    <label className="text-sm font-semibold text-gray-800 mb-1">Location</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none">
                        <option>All Locations</option>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                    </select>
                </div>

                {/* Button */}
                <div className="flex items-end">
                    <button className="bg-teal-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-teal-400 transition">
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
}
