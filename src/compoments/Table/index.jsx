import React from 'react';
import { db, newEnumUser } from '../../db/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function TableCustom() {
    return (
        <div className='w-[100%] ml-auto mr-auto my-5'>
            {/* Phần bảng */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {/* Các tiêu đề cột của bảng */}
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
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="h-48 overflow-y-auto">
                        {/* Duyệt qua danh sách người dùng và tạo các hàng bảng */}
                        {db.users.map((user) => (
                            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.id}
                                </th>
                                <td className="px-6 py-4">{user.fullName}</td>
                                <td className="px-6 py-4">{user.DateBirth}</td>
                                <td className="px-6 py-4">{user.sex}</td>
                                <td className="px-6 py-4">{user.phone}</td>
                                <td className="px-6 py-4">{user.cccd}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">
                                    {/* Hiển thị tên vị trí dựa trên giá trị enum */}
                                    {Object.keys(newEnumUser.location).find(key => newEnumUser.location[key] === user.location)}
                                </td>
                                <td className="px-6 py-4">
                                    {/* Hiển thị trạng thái dựa trên giá trị enum */}
                                    {Object.keys(newEnumUser.status).find(key => newEnumUser.status[key] === user.status)}
                                </td>
                                <td className="px-6 py-4">
                                    {/* Hiển thị loại hợp đồng dựa trên giá trị enum */}
                                    {Object.keys(newEnumUser.contractTypeL).find(key => newEnumUser.contractTypeL[key] === user.contractTypeL)}
                                </td>
                                <td className="px-6 py-4">{user.startDate}</td>
                                <td className="px-6 py-4">{user.endDate}</td>
                                <td className="px-6 py-12 flex space-x-4 items-center">
                                    {/* Các biểu tượng hành động */}
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className="cursor-pointer text-blue-500 text-xl transform transition-transform duration-200 hover:scale-110"
                                    />
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        className="cursor-pointer text-red-500 text-xl transform transition-transform duration-200 hover:scale-110"
                                    />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Phần phân trang */}
            <nav className='mt-8 absolute ml-auto right-40' aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm">
                    {/* Các liên kết phân trang */}
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TableCustom;
