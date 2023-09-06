import profile from "../../assets/profile.jpg"

const UserList = () => {
    return (
        <>
            <div className="flex items-center gap-5 mb-2">
                <div className="avatar online">
                    <div className="w-10 rounded-full">
                        <img src={profile} />
                    </div>
                </div>
                <h2 className="text-xl font-semibold">Rashed</h2>
            </div>
            <hr/>
        </>
    );
};

export default UserList;