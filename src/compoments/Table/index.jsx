import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function TableCustom() {
    return (
        <div className='w-full ml-5 mr-9 my-5'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Full Name</th>
                            <th scope="col" className="px-6 py-3">Date Birth</th>
                            <th scope="col" className="px-6 py-3">Sex</th>
                            <th scope="col" className="px-6 py-3">Phone</th>
                            <th scope="col" className="px-6 py-3">CCCD</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Position</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Contract Type</th>
                            <th scope="col" className="px-6 py-3">Start Date</th>
                            <th scope="col" className="px-6 py-3">End Date</th>
                            <th scope="col" className="px-6 py-3">Actions</th> {/* Cột cho hành động */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="px-6 py-4">Nguyen Van A</td>
                            <td className="px-6 py-4">10/01/2001</td>
                            <td className="px-6 py-4">Nam</td>
                            <td className="px-6 py-4">1234567890</td>
                            <td className="px-6 py-4">123456789012</td>
                            <td className="px-6 py-4">ANV@fpt.com</td>
                            <td className="px-6 py-4">FE</td>
                            <td className="px-6 py-4">Active</td>
                            <td className="px-6 py-4">Intern</td>
                            <td className="px-6 py-4">10/01/2022</td>
                            <td className="px-6 py-4">10/01/2023</td>
                            <td className="px-6 py-4 flex space-x-4"> {/* Cột chứa biểu tượng */}
                                <FontAwesomeIcon icon={faEdit} className="cursor-pointer text-blue-500" />
                                <FontAwesomeIcon icon={faTrash} className="cursor-pointer text-red-500" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableCustom;
