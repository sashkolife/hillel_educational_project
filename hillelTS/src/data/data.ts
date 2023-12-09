import {UserModel} from "../models/models.ts";
import {UserLevel} from "../enums/enums.ts";

export const students: UserModel[] = [
    {
        id: 1,
        fullName: "John Doe",
        course: {
            courseImage: "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
            courseTitle: "Introduction Basic Programming HTML & CSS",
            maxModules: 10
        },
        level: UserLevel.BEGINNER,
        currentModule: 5,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        rating: 4.5,
        time: "1h 30m"
    },
    {
        id: 2,
        fullName: "Piter Pen",
        course: {
            courseImage: "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
            courseTitle: "Introduction Basic Programming HTML & CSS",
            maxModules: 10
        },
        level: UserLevel.MASTER,
        currentModule: 10,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        rating: 4.5,
        time: "1h 30m"
    },
    {
        id: 3,
        fullName: "Harry Potter",
        course: {
            courseImage: "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
            courseTitle: "Introduction Basic Programming HTML & CSS",
            maxModules: 20
        },
        level: UserLevel.PROFESSIONAL,
        currentModule: 15,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        rating: 4.5,
        time: "1h 30m"
    }
];