
import { useState } from 'react';

import React from 'react';

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

var sF = 0;
var sM = 0;
var sC = 0;
var sT = 0;
var M = 0, F = 0, C = 0, T = 0;


function Input(props) {
    const [province, setProvince] = useState("");
    const [districts, setDistricts] = useState("");
    const [md, setMd] = useState("");
    const [fd, setFd] = useState("");
    const [cd, setCd] = useState("");
    const [remarks, setRemarks] = useState("");
    const [selectedstartDate, setSelectedstartDate] = useState("");
    const [selectedendDate, setSelectedendDate] = useState("");
    const [eventcategory, setEventcategory] = useState("");

    function sendResponse() {

        var tr = document.createElement('tr');
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        var td5 = tr.appendChild(document.createElement('td'));
        var td6 = tr.appendChild(document.createElement('td'));
        var td7 = tr.appendChild(document.createElement('td'));

        td1.innerHTML = province;
        td2.innerHTML = districts;
        td3.innerHTML = md;
        td4.innerHTML = fd;
        td5.innerHTML = cd;
        td7.innerHTML = remarks;

        if (isNaN(parseInt(md))) {
            sF = sF + 0
            M = 0;
        }
        else {
            sF = sF + parseInt(md);
            M = parseInt(md)
        }

        if (isNaN(parseInt(fd))) {
            sM = sM + 0
            F = 0;
        }
        else {
            sM = sM + parseInt(fd);
            F = parseInt(fd)
        }

        if (isNaN(parseInt(cd))) {
            sC = sC + 0
            C = 0
        }
        else {
            sC = sC + parseInt(cd);
            C = parseInt(cd);
        }

        sT = sM + sF + sC;

        T = M + F + C;
        td6.innerHTML = T;
        td6.classList.add('text-red-500');
        td6.classList.add('font-bold');



        document.getElementById(props.tablbdy).appendChild(tr);

        document.getElementById(props.td1).innerHTML = sF;
        document.getElementById(props.td2).innerHTML = sM;
        document.getElementById(props.td3).innerHTML = sC;
        document.getElementById(props.td4).innerHTML = sT;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">CASUALITIES AND INJURIES LAST 24 HOURS</h1>
            <form className="px-4 my-12 max-w-2xl mx-auto space-y-4 bg-gray-100 border border-gray-400 py-6 rounded-lg px-10">
                <h1 className="text-2xl font-semibold mb-5">Give data for {props.category}</h1>

                <div className="flex space-x-4 ">
                    <div className='w-1/3 grid row-span-2'>
                        <label className="">Start Date:</label>
                        <input
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            value={selectedstartDate}
                            onChange={(e) => setSelectedstartDate(e.target.value)}
                            type="date"
                        />
                    </div>

                    <div className='w-1/3 grid row-span-2'>
                        <label className="">End Date:</label>
                        <input
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            value={selectedendDate}
                            onChange={(e) => setSelectedendDate(e.target.value)}
                            type="date"
                        />
                    </div>

                    <div className='w-1/3 grid row-span-2'>
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
                </div>

                <div className="flex space-x-4 ">
                    <div className='w-1/2 grid row-span-2'>
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

                    <div className="w-1/2 grid row-span-2">
                        <label className="">Enter District:</label>
                        <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500" type="text" name="districts" id="districts" onChange={(e) => { setDistricts(e.target.value) }} />
                    </div>
                </div>

                <div>
                    <h5 className="font-bold mb-0">Enter number of {props.category}</h5>
                    <div className="flex space-x-4  ">
                        <div className="w-1/3 ">
                            <label className=''>For Male:      </label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="MD" id="MD" onChange={(e) => { setMd(e.target.value) }} />
                        </div>

                        <div className="w-1/3">
                            <label className=' '>For Female:     </label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="FD" id="FD" onChange={(e) => { setFd(e.target.value) }} />
                        </div>

                        <div className="w-1/3">
                            <label className="">For Children:  </label>
                            <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="CD" id="CD" onChange={(e) => { setCd(e.target.value) }} />
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid row-span-2">
                    <label>Give Remarks:</label>
                    <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="remarks" id="remarks" onChange={(e) => { setRemarks(e.target.value) }} />
                </div>

                <div className="flex justify-center items-center">
                    <button type="button" className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded m-6" onClick={sendResponse}>Submit</button>
                </div>
            </form>

        </div>
    );
}

export default Input;



//https://github.com/idrsdev/react-sidebar-tailwind-darkmode