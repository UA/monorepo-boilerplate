/// <reference types="react" />
import User from "../../../models/Users/userModel";
interface IUserListItemProps {
    user: User;
}
declare const UserListItem: ({ user }: IUserListItemProps) => JSX.Element;
export default UserListItem;
