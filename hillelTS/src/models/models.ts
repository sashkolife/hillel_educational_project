export interface IFetch {
    isLoading: boolean;
    error: string|null;
    data: any[]|null;
    refetch: any;
}

export interface UserModel {
    id: number;
    name: string;
    email: string;
}

export interface PostModel {
    id: number;
    title: string;
    body: string;
}

export interface PhotoModel {
    id: number;
    title: string;
    thumbnailUrl: string;
}
