import {getAllUsers} from "@/services/api.service";
import {UserComponent} from "@/components/user/UserComponent";

export const UsersComponent = async () => {
    const users = await getAllUsers();



    return (
        <div>
            {
                users.map(user => <UserComponent  key={user.id} user={user} />)
            }
        </div>
    );
};