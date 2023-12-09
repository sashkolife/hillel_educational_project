import {UserLevel} from "../enums/enums.ts";

export interface UserModelShort {
    id: number;
    fullName: string;
}

export interface UserModel {
    id: number;
    fullName: string;
    level: UserLevel;
    photo: string;
    rating: number;
    currentModule: number;
    time: string;
    course: CourseModel;
}

export interface CourseModel {
    courseImage: string;
    courseTitle: string;
    maxModules: number;
}