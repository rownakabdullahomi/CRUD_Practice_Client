/* eslint-disable react/prop-types */


const UserCard = ({user, users, setUsers}) => {
    console.log(user);
    return (
        <div className="border-2 border-blue-200 rounded-lg p-6 text-start">
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
        </div>
    );
};

export default UserCard;