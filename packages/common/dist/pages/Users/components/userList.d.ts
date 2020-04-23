/// <reference types="react" />
import User from "../../../models/Users/userModel";
interface IUserListProps {
    users: User[];
}
declare const UserList: ({ users }: IUserListProps) => JSX.Element;
export default UserList;
