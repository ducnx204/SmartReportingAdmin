// Đối tượng chứa dữ liệu người dùng
export const db = {
    users: [
        {
            id: 1, // ID người dùng
            fullName: 'NGUYEN VAN A', // Họ tên người dùng
            DateBirth: "03/04/2002", // Ngày sinh người dùng
            sex: "Nam", // Giới tính người dùng
            phone: "0935017200", // Số điện thoại người dùng
            cccd: "1974393801", // Số CCCD người dùng
            email: "nguyenvana@gmail.com", // Email người dùng
            location: 0, // Vị trí (sử dụng giá trị enum)
            status: 0, // Trạng thái (sử dụng giá trị enum)
            contractTypeL: 0, // Loại hợp đồng (sử dụng giá trị enum)
            startDate: "08/09/2024", // Ngày bắt đầu hợp đồng
            endDate: "08/09/2024", // Ngày kết thúc hợp đồng
        },
        {
            id: 2, // ID người dùng
            fullName: 'NGUYEN VAN B', // Họ tên người dùng
            DateBirth: "03/04/2002", // Ngày sinh người dùng
            sex: "Nam", // Giới tính người dùng
            phone: "0935017200", // Số điện thoại người dùng
            cccd: "1974393801", // Số CCCD người dùng
            email: "nguyenvana@gmail.com", // Email người dùng
            location: 0, // Vị trí (sử dụng giá trị enum)
            status: 0, // Trạng thái (sử dụng giá trị enum)
            contractTypeL: 0, // Loại hợp đồng (sử dụng giá trị enum)
            startDate: "08/09/2024", // Ngày bắt đầu hợp đồng
            endDate: "08/09/2024", // Ngày kết thúc hợp đồng
        },
    ],
}

// Đối tượng chứa các giá trị enum cho người dùng
export const newEnumUser = {
    location: {
        testing: 0, // Vị trí Testing
        FE: 1, // Vị trí Front-End (FE)
        BE: 2  // Vị trí Back-End (BE)
    },
    status: {
        active: 0, // Trạng thái hoạt động
        inactive: 1 // Trạng thái không hoạt động
    },
    contractTypeL: {
        fullTime: 0, // Loại hợp đồng toàn thời gian
        partTime: 1  // Loại hợp đồng bán thời gian
    },
    contractTypeL: {
        intern: 0, // Loại hợp đồng thực tập
        Trial: 1,  // Loại hợp đồng thử việc
        Official: 2 // Loại hợp đồng chính thức
    }
}
