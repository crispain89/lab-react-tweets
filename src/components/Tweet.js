import Timestamp from "./Timestamp";
import Message from "./Message";
import User from "./User";
import Image from "./Image";


function Tweet({ user, timestamp, message }) {
  return (
    <div className="tweet">
      <Image image={user.image}></Image>

      <div className="body">
        <div className="top">
          <User user={user}></User>

          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message}></Message>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
