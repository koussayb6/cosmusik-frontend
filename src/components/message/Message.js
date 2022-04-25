import { format } from "timeago.js";

export default function Message({ message, own, scrollRef }) {
  return (
    <div
      className={own ? "message-item outgoing-message" : "message-item "}
      ref={scrollRef}
    >
      <div className="message-user">
        <figure className="avatar">
          <img src="assets/images/user.png" alt="avater" />
        </figure>
        <div>
          <h5>{message.sender.name}</h5>
          <div className="time">{format(message.updatedAt)}</div>
        </div>
      </div>
      <div className="message-wrap">{message.content}</div>
    </div>
  );
}
