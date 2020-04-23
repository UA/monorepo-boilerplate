export declare const getUsersRequest: () => {
    type: string;
};
export declare const getUsersSuccess: ({ items }: {
    items?: never[] | undefined;
}) => {
    type: string;
    payload: {
        items: never[];
    };
};
export declare const createUserRequest: (firstName: string, lastName: string) => {
    type: string;
    payload: {
        firstName: string;
        lastName: string;
    };
};
export declare const deleteUserRequest: (userId: number) => {
    type: string;
    payload: {
        userId: number;
    };
};
export declare const usersError: (error: any) => {
    type: string;
    payload: {
        error: any;
    };
};
