import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';

function ButtonCustom() {
    // State để quản lý trạng thái mở/đóng của dropdown
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // State để lưu lựa chọn hiện tại
    const [selectedOption, setSelectedOption] = useState('Hãy chọn vị trí');

    // Tham chiếu đến phần tử dropdown để kiểm tra click ngoài
    const dropdownRef = useRef(null);

    // Danh sách các tùy chọn cho dropdown
    const options = ['Testing', 'BA', 'FE', 'BE'];

    // Hàm để toggle trạng thái của dropdown
    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Hàm để xử lý khi người dùng chọn một tùy chọn
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false); // Đóng dropdown sau khi chọn
    };

    // Hàm để đóng dropdown khi người dùng click ra ngoài
    const handleClickOutside = (event) => {
        // Kiểm tra xem click có nằm ngoài phần tử dropdown không
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    // useEffect để thêm hoặc gỡ bỏ sự kiện click ngoài khi trạng thái dropdown thay đổi
    useEffect(() => {
        if (isDropdownOpen) {
            // Đăng ký sự kiện mousedown để kiểm tra click ngoài
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            // Gỡ bỏ sự kiện khi dropdown đóng
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup function để gỡ bỏ sự kiện khi component bị unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div className='w-full ml-5 mr-9 my-5'>
            <div className='items-center space-x-4'>
                {/* <h1 className='font-bold text-3xl'>List Of Resource</h1> */}
                <div className='flex relative'>

                    <div className='w-[30%] flex justify-center '>
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="text-gray-400 text-xl absolute left-2 top-3"
                        />
                        <input
                            className='w-full h-10 px-[40px] border-2 border-gray-400 rounded-md'
                            type="text"
                            placeholder='Search ...'
                        />
                    </div>
                    <div
                        ref={dropdownRef} // Gán ref cho dropdown để kiểm tra click ngoài
                        className='w-[160px] h-10 ml-8 border-2 border-gray-400 rounded-lg flex justify-center items-center cursor-pointer hover:bg-slate-100'
                        onClick={handleDropdownToggle} // Toggle dropdown khi click
                    >
                        <div className='flex justify-around w-full'>
                            {selectedOption}
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="cursor-pointer mt-[3px] text-gray-500 text-xl transform transition-transform duration-200 hover:scale-110"
                            />
                        </div>
                        {isDropdownOpen && (
                            <div className='absolute top-full mt-2 w-[160px] border-2 border-gray-400 bg-white rounded-lg shadow-lg'>
                                {options.map(option => (
                                    <div
                                        key={option}
                                        className='p-2 hover:bg-gray-200 cursor-pointer'
                                        onClick={() => handleOptionSelect(option)} // Xử lý khi chọn tùy chọn
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button className='absolute right-24 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
                        +Create
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ButtonCustom;
