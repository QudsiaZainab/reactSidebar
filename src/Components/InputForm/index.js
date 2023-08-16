import React from 'react'
import { useState } from 'react';

const provinceData = [
    "Punjab",
    "Sindh",
    "Baloachistan",
    "KPK",
    "Gilgit Baltistan",
    "Fata",
    "Kashmir",
    "Islamabad",
];

const categoryData = [
    'Monsoon',
    'Earthquake',
    'Premonsoon',
]

const InputForm = () => {

    const [province, setProvince] = useState("");
    const [districts, setDistricts] = useState("");
    const [md, setMd] = useState("");
    const [fd, setFd] = useState("");
    const [cd, setCd] = useState("");
    const [remarks, setRemarks] = useState("");
    const [selectedstartDate, setSelectedstartDate] = useState("");
    const [selectedendDate, setSelectedendDate] = useState("");
    const [eventcategory, setEventcategory] = useState("");

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Give data for the impacts of any event</h1>
            <form className="px-4 my-12 max-w-4xl mx-auto space-y-4 bg-gray-100 border border-gray-400 py-6 rounded-lg px-10">

                <div className="flex space-x-4 ">
                    <div className='w-1/5 grid row-span-2'>
                        <label className="">Start Date:</label>
                        <input
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            value={selectedstartDate}
                            onChange={(e) => setSelectedstartDate(e.target.value)}
                            type="date"
                        />
                    </div>

                    <div className='w-1/5 grid row-span-2'>
                        <label className="">End Date:</label>
                        <input
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            value={selectedendDate}
                            onChange={(e) => setSelectedendDate(e.target.value)}
                            type="date"
                        />
                    </div>

                    <div className='w-1/5 grid row-span-2 '>
                        <label className="">Select Event Category:</label>
                        <select
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            value={eventcategory}
                            onChange={(e) => setEventcategory(e.target.value)}
                        >
                            <option value="">Select Event Category</option>
                            {categoryData.map((categoryName, index) => (
                                <option key={index} value={categoryName}>
                                    {categoryName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='w-1/5 grid row-span-2'>
                        <label className="">Select Province:</label>
                        <select
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                        >
                            <option value="">Select Province</option>
                            {provinceData.map((provinceName, index) => (
                                <option key={index} value={provinceName}>
                                    {provinceName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="w-1/5 grid row-span-2">
                        <label className="">Select District:</label>
                        <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500" type="text" name="districts" id="districts" onChange={(e) => { setDistricts(e.target.value) }} />
                    </div>
                </div>


                <div>
                    <div className = "flex space-x-4">
                        <h5 className="font-bold mb-0 w-2/6">Enter number of deaths</h5>
                        <h5 className = "w-1/6 "></h5>
                        <h5 className="font-bold mb-0 w-2/6">Enter number of injuries</h5>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/6">
                            <label className=''>For Male:      </label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="MD" id="MD" onChange={(e) => { setMd(e.target.value) }} />
                        </div>

                        <div className="w-1/6">
                            <label className=' '>For Female:     </label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="FD" id="FD" onChange={(e) => { setFd(e.target.value) }} />
                        </div>

                        <div className="w-1/6">
                            <label className="">For children:  </label>
                            <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="CD" id="CD" onChange={(e) => { setCd(e.target.value) }} />
                        </div>
                        <div className="w-1/6">
                            <label className=''>For Male:      </label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="MD" id="MD" onChange={(e) => { setMd(e.target.value) }} />
                        </div>

                        <div className="w-1/6">
                            <label className=' '>For Female:     </label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="FD" id="FD" onChange={(e) => { setFd(e.target.value) }} />
                        </div>

                        <div className="w-1/6">
                            <label className="">For children:  </label>
                            <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="CD" id="CD" onChange={(e) => { setCd(e.target.value) }} />
                        </div>

                    </div>

                </div>

                <div className="">
                    <label>Give Remarks:</label>
                    <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="remarks" id="remarks" onChange={(e) => { setRemarks(e.target.value) }} />
                </div>


                <div className="flex justify-center items-center">
                    <button type="button" className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded m-6" >Submit</button>
                </div>
            </form>

        </div>
    )
}

export default InputForm;
