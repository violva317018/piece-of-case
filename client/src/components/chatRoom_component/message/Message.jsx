import "./message.css";

export default function Message({ message, own }) {
  return (
    <div className={own ? "messageMain own" : "messageMain"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
          alt=""
        />
        <p className="messageText">{message.message}</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
