import React from "react";
import { MatchMessage, MyMessage, Chat} from "./style";

const Messages = (props) => {
  
    let renderMessage

    if (props.message.name.toUpperCase().trim() === "EU") {
    
        renderMessage = <MyMessage>
          <Chat>
            <p>{props.message.text}</p>
          </Chat>
        </MyMessage>

    } else {
        renderMessage = <MatchMessage>
          <p>
            <span>{props.message.name}</span>
            {props.message.text}</p>
        </MatchMessage>
    }


    return (
      <div>
        {renderMessage}
      </div>

    )
  
}

export default Messages