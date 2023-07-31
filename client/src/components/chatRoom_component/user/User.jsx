import "./user.css";

export default function User({ user, online }) {
  console.log("User" ,user);
  console.log("User online", online);
  return (
    <div className="user">
      <img
        className="userImg"
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
        alt=""
      />
      <div className={online ? "userStatus online" : "userStatus"}></div>
      <span className="userName">{user.userName}</span>
    </div>
  );
}
