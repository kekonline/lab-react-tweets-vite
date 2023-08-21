import User from  "./User";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Actions from "./Actions";
import TimeStamp from "./TimeStamp";

function Tweet(props) {
// const {} = props.tweet.user
const {timestamp,message,user:{name, handle,image}} = props.tweet

  return (
    <div className="tweet">

      <ProfileImage image={image}/>
     

      <div className="body">
        <div className="top">
        
           <User name={name} handle={handle}/>
        

<TimeStamp  time={timestamp}/>

       
        </div>

      <Message  message={message}/>

      
          {/* Font Awesome icons */}
        
          <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
