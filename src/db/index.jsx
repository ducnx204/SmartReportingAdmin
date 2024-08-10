export const db = {
    users: [
        {
            id: 1,
            fullName: ' NGUYEN VAN A',
            DateBirth: "03/04/2002",
            sex: "Nam",
            phone: "0935017200 ",
            cccd: "1974393801",
            email: "nguyenvana@gmail.com",
            location: 0,
            status: 0,
            contractTypeL: 0,
            startDate: "08/09/2024",
            endDate: "08/09/2024",
        },
        {
            id: 2,
            fullName: 'NGUYEN VAN B',
            DateBirth: "03/04/2002",
            sex: "Nam",
            phone: "0935017200 ",
            cccd: "1974393801",
            email: "nguyenvana@gmail.com",
            location: 0,
            status: 0,
            contractTypeL: 0,
            startDate: "08/09/2024",
            endDate: "08/09/2024",
        },
    ],
}

export const newEnumUser = {
    location: {
        testing: 0,
        FE: 1,
        BE: 2
    },
    status: {
        active: 0,
        inactive: 1
    },
    contractTypeL: {
        fullTime: 0,
        partTime: 1
    },
    contractTypeL: {
        intern: 0,
        Trial: 1,
        Official: 2
    }
}