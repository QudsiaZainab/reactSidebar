

import React from 'react';

function DamageTable() {

    return (
        <div className='overflow-x-auto m-10'>
            <h2 className="text-2xl font-bold mt-12 mb-5">Houses Damaged and Livestock Perished</h2>
            <div className='overflow-x-auto m-10'>
                <table className="border-gray-400 table-auto w-full ">
                    <tr className="bg-gray-100">
                        <th className="text-center ">Province/Region</th>
                        <th className="text-center ">Districts</th>
                        <th className="text-center " colSpan="3">House Damage</th>
                        <th className="text-center ">Livestock</th>
                    </tr>
                    <tr className="bg-gray-100">
                        <th className="text-center"></th>
                        <th></th>
                        <th >Partial</th>
                        <th>Full</th>
                        <th>Total</th>
                        <th>Livestock</th>
                    </tr>
                    <tbody id="damagetablbdy">

                    </tbody>
                    <tfoot className="bg-gray-100">
                        <tr >
                            <td colSpan="2" className='text-red-500 font-bold'>
                                Total
                            </td>
                            <td id="damagetd1" className='font-bold text-red-500'>

                            </td>
                            <td id="damagetd2" className='font-bold text-red-500'>

                            </td>
                            <td id="damagetd3" className='font-bold text-red-500'>

                            </td>
                            <td id="damagetd4" className='font-bold text-red-500'>

                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    );
}

export default DamageTable;