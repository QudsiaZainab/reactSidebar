import './Style.css';

import React from 'react';

function Table(props) {

    return (
        <div className='overflow-x-auto m-10'>
            <h2 className="text-2xl font-bold mt-12 mb-5">{props.category}</h2>
            <div className='overflow-x-auto m-10'>
                <table className="border-gray-400 table-auto w-full ">
                    <tr className="bg-gray-100">
                        <th className="text-center ">Province/Region</th>
                        <th className="text-center ">Districts</th>
                        <th className="text-center " colSpan="4">Deaths</th>
                        <th className="text-center ">Remarks</th>
                    </tr>
                    <tr className="bg-gray-100">
                        <th className="text-center"></th>
                        <th></th>
                        <th >M</th>
                        <th>F</th>
                        <th>C</th>
                        <th>T</th>
                        <th></th>
                    </tr>
                    <tbody id={props.tablbdy}>

                    </tbody>
                    <tfoot id="tf" className="bg-gray-100">
                        <tr id="tr2">
                            <td colSpan="2" className='text-red-500 font-bold'>
                                Total
                            </td>
                            <td id={props.td1} className='font-bold text-red-500'>

                            </td>
                            <td id={props.td2} className='font-bold text-red-500'>

                            </td>
                            <td id={props.td3} className='font-bold text-red-500'>

                            </td>
                            <td id={props.td4} className='font-bold text-red-500'>

                            </td>
                            <td>

                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    );
}

export default Table;