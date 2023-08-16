
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

var sLR = 0;
var sNUB = 0;
var sLB = 0;
var sT = 0;


function RoadsInput(props) {
    const [province, setProvince] = useState("");
    const [districts, setDistricts] = useState("");
    const [lr, setLr] = useState("");
    const [nr, setNr] = useState("");
    const [tyr, setTyr] = useState("");
    const [nub, setNub] = useState("");
    const [tb, setTb] = useState("");
    const [lb, setLb] = useState("");
    const [nb, setNb] = useState("");
    const [tyb, setTyb] = useState("");
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
        var td8 = tr.appendChild(document.createElement('td'));
        var td9 = tr.appendChild(document.createElement('td'));
        var td10 = tr.appendChild(document.createElement('td'));

        td1.innerHTML = province;
        td2.innerHTML = districts;
        td3.innerHTML = lr;
        td4.innerHTML = nr;
        td5.innerHTML = tyr;
        td6.innerHTML = nub;
        td7.innerHTML = tyb;
        td8.innerHTML = lb;
        td9.innerHTML = nb;
        td10.innerHTML = tb;

        if (isNaN(parseInt(lr))) {
            sLR = sLR + 0;
        }
        else {
            sLR = sLR + parseInt(lr);
        }

        if (isNaN(parseInt(nub))) {
            sNUB = sNUB + 0;
        }
        else {
            sNUB = sNUB + parseInt(nub);
        }

        if (isNaN(parseInt(lb))) {
            sLB = sLB + 0;
        }
        else {
            sLB = sLB + parseInt(lb);
        }

        sT = sLR + sNUB + sLB;
        



        document.getElementById('roadstablbdy').appendChild(tr);

        document.getElementById('roadstd1').innerHTML = sLR;
        document.getElementById('roadstd2').innerHTML = sNUB;
        document.getElementById('roadstd3').innerHTML = sLB;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center ">ROADS, BRIDGES AND OTHER INFRASTRUCTURE DAMAGED IN LAST 24 HOURS</h1>
            <form className="px-4 my-12 max-w-2xl mx-auto space-y-4 bg-gray-100 border border-gray-400 py-6 rounded-lg px-10">
                <h1 className="text-2xl font-semibold mb-5">Give your data</h1>

                <div className="flex space-x-4 ">
                        <div className='w-1/3 grid row-span-2'>
                            <label className="">Start Date:</label>
                            <input
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                value={selectedstartDate}
                                onChange={(e) => setSelectedstartDate(e.target.value)}
                                type = "date"
                            />
                        </div>

                        <div className='w-1/3 grid row-span-2'>
                            <label className="">End Date:</label>
                            <input
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                value={selectedendDate}
                                onChange={(e) => setSelectedendDate(e.target.value)}
                                type = "date"
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
                    <h5 className="font-bold mb-0">Data for roads/tracks</h5>
                    <div className="flex space-x-4  ">
                        <div className="w-1/3 ">
                            <label className=''>Length of road damage</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="LR" id="LR" onChange={(e) => { setLr(e.target.value) }} />
                        </div>

                        <div className="w-1/3 ">
                            <label className=' '>Nature/ extent of damage </label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="NR" id="NR" onChange={(e) => { setNr(e.target.value) }} />
                        </div>

                        <div className="w-1/3 ">
                            <label className="">Traffic situation </label>
                            <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="TYR" id="TYR" onChange={(e) => { setTyr(e.target.value) }} />
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className="font-bold mb-0">Data for bridge</h5>
                    <div className="flex space-x-4  ">
                        <div className="w-1/3 ">
                            <label className=''>Number of bridge</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="NUB" id="NUB" onChange={(e) => { setNub(e.target.value) }} />
                        </div>

                        <div className="w-1/3">
                            <label className=' '>Type of bridge</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { setTyb(e.target.value) }} />
                        </div>

                        <div className="w-1/3">
                            <label className="">Length of bridge</label>
                            <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="LB" id="LB" onChange={(e) => { setLb(e.target.value) }} />
                        </div>
                    </div>
                    <div className="flex space-x-4  ">
                        <div className="w-1/2">
                            <label className=''>Nature/ Extent of Damage </label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="NB" id="NB" onChange={(e) => { setNb(e.target.value) }} />
                        </div>

                        <div className="w-1/2">
                            <label className=' '>Traffic situation </label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TB" id="TB" onChange={(e) => { setTb(e.target.value) }} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <button type="button" className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded m-6" onClick={sendResponse}>Submit</button>
                </div>
            </form>

        </div>
    );
}

export default RoadsInput;                                                                                                                                           