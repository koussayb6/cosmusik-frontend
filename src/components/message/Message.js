import { format } from "timeago.js";

export default function Message({ message, own, scrollRef }) {
  return (
    <div
      className={own ? "message-item outgoing-message" : "message-item "}
      ref={scrollRef}
    >
      {!own ? (
        <div className="message-user ">
          <figure className="avatar">
            <img src="assets/images/user.png" alt="avater" />
          </figure>
          <div>
            <h5>{message.sender.name}</h5>
            {!message.imageMessage ? (
              <div>
                <div className="message-wrap m-2 ">{message.content}</div>
                <div className="time">{format(message.updatedAt)}</div>
              </div>
            ) : (
              <div className="flex-column">
                <img
                  src={`/uploads/${message.imageMessage}`}
                  alt="avater"
                  className="w-25 img-fluid rounded-3"
                />
               
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="message-user ">
          {!message.imageMessage ? (
            <div>
              <div className="message-wrap m-2 ">{message.content}</div>
              <div className="time">{format(message.updatedAt)}</div>
            </div>
          ) : (
            <>
              <img
                src={`/uploads/${message.imageMessage}`}
                alt="avater"
                className=" w-25 img-fluid rounded-3"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
