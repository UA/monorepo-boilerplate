import { Component } from "react";
import User from "../../models/Users/userModel";
interface IUsersProps {
    getUsersRequest: Function;
    createUserRequest: Function;
    deleteUserRequest: Function;
    usersError: Function;
    users: any;
}
declare class Users extends Component<IUsersProps> {
    constructor(props: IUsersProps);
    handleCreateUserSubmit: ({ firstName, lastName }: User) => void;
    handleDeleteUserClick: (userId: number) => void;
    handleCloseAlert: () => void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Users, Pick<IUsersProps, never>>;
export default _default;
