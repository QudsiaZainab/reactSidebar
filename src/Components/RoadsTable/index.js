import React from 'react';

function RoadsTable() {

    return (
        <div className='overflow-x-auto m-10'>
            <h2 className="text-2xl font-bold mt-12 mb-5">Roads, Bridges and Other Infrastructure Damaged in Last 24 hours</h2>
            <div className='overflow-x-auto m-10'>
                <table className="border-gray-400 table-auto w-full ">
                    <tr className="bg-gray-100">
                        <th className="text-center ">Province/Region</th>
                        <th className="text-center ">Districts</th>
                        <th className="text-center " colSpan="3">Roads/Tracks</th>
                        <th className="text-center " colSpan = "5">Bridge</th>
                    </tr>
                    <tr className="bg-gray-100">
                        <th className="text-center"></th>
                        <th></th>
                        <th >Length of road damage</th>
                        <th>Nature/ extent of damage (fully/ partially washed away/ water over flow)</th>
                        <th>Traffic situation (Alternate route/ diversion available)</th>
                        <th>Number of Bridges</th>
                        <th>Type of bridge</th>
                        <th>Length of bridge</th>
                        <th>Nature/ Extent of Damage (fully/ partially washed away/ water over flow)</th>
                        <th>Traffic situation (Alternate route/ diversion available)</th>
                    </tr>
                    <tbody id="roadstablbdy">

                    </tbody>
                    <tfoot  className="bg-gray-100">
                        <tr id="tr2">
                            <td colSpan="2" className='text-red-500 font-bold'>
                                Total
                            </td>
                            <td id = "roadstd1" className='font-bold text-red-500'>

                            </td>
                            <td  className='font-bold text-red-500'>

                            </td>
                            <td  className='font-bold text-red-500'>

                            </td>
                            <td id="roadstd2"className='font-bold text-red-500'>

                            </td>
                            <td>

                            </td>
                            <td id = "roadstd3">

                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    );
}

export default RoadsTable;