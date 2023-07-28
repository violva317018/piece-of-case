import "./ChatBar.css";

const ChatBar = (props) => {

    // 取得被點擊人的info
    const userSelect = (e) => {
        const selectedUserDetails = props.allUser.find(
            (user) => user.userName === e.target.innerText
        );
        props.setSelectedUser(selectedUserDetails);
        props.setSelected(true);
    };

    return (
        <div className="chat__sidebar">
            <h4 className="chat__header">聊天用戶</h4>
            {props.allUser.map((user) => (
                <div className="chatbarUsers" onClick={userSelect}>
                    {/* 可以拿聊天用戶的頭貼來用 */}
                    <img
                        className="chatbarImg"
                        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                        alt=""
                    />
                    <span className="chatbarName">{user.userName}</span>
                </div>
            ))}
        </div>
    );
};

export default ChatBar;
