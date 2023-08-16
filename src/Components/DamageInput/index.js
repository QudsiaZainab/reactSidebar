
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
var sP = 0;
var sT = 0;
var sL = 0;
var P = 0, F = 0, T = 0;


function DamageInput() {
    const [province, setProvince] = useState("");
    const [districts, setDistricts] = useState("");
    const [fh, setFh] = useState("");
    const [ph, setPh] = useState("");
    const [livestock, setLivestock] = useState("");
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

        td1.innerHTML = province;
        td2.innerHTML = districts;
        td3.innerHTML = ph;
        td4.innerHTML = fh;
        td6.innerHTML = livestock;

        if (isNaN(parseInt(ph))) {
            sP = sP + 0
            P = 0;
        }
        else {
            sP = sP + parseInt(ph);
            P = parseInt(ph)
        }

        if (isNaN(parseInt(fh))) {
            sF = sF + 0
            F = 0;
        }
        else {
            sF = sF + parseInt(fh);
            F = parseInt(fh)
        }

        if (isNaN(parseInt(livestock))) {
            sL = sL + 0
        }
        else {
            sL = sL + parseInt(livestock);
        }


        sT = sF + sP;

        T = F + P;
        td5.innerHTML = T;
        td5.classList.add('text-red-500');
        td5.classList.add('font-bold');



        document.getElementById('damagetablbdy').appendChild(tr);

        document.getElementById('damagetd1').innerHTML = sP;
        document.getElementById('damagetd2').innerHTML = sF;
        document.getElementById('damagetd3').innerHTML = sT;
        document.getElementById('damagetd4').innerHTML = sL;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center ">DAMAGE of INFRASTRUCTURE & PRIVATE PROPERTIES (LAST 24 HOURS)
            </h1>
            <form className="px-4 my-12 max-w-2xl mx-auto space-y-4 bg-gray-100 border border-gray-400 py-6 rounded-lg px-10">
                <h1 className="text-2xl font-semibold mb-5">Give data for houses damaged and livestock perished</h1>

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
                            {categoryData.map((categoryName, index) => (
                                <option key={index} value={categoryName}>
                                    {categoryName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="w-1/2 grid row-span-2">
                        <label className="">Enter district:</label>
                        <input className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500" type="text" name="districts" id="districts" onChange={(e) => { setDistricts(e.target.value) }} />
                    </div>
                </div>

                <div>
                    <h5 className="font-bold mb-0">Enter number of houses damaged</h5>
                    <div className="flex space-x-4  ">
                        <div className="w-1/2 ">
                            <label className=''>Partial:      </label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="Ph" id="Ph" onChange={(e) => { setPh(e.target.value) }} />
                        </div>

                        <div className="w-1/2">
                            <label className=' '>Full:     </label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="Fh" id="Fh" onChange={(e) => { setFh(e.target.value) }} />
                        </div>

                    </div>
                </div>

                <div className="flex space-x-4">
                    <div className=" w-1/2">
                        <label>Number of livestock:</label>
                        <input className="border border-gray-400 w-full block py-2 mt-0 px-4 mr-4 ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="livestock" id="livestock" onChange={(e) => { setLivestock(e.target.value) }} />
                    </div>
                    <div className='w-1/2'>

                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <button type="button" className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded m-6" onClick={sendResponse}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default DamageInput;