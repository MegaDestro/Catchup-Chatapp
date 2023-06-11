// This file defines the page that displays the multiple chat rooms

import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = ( props ) => {
    const chatProps = useMultiChatLogic( 
        'a19f93f2-35fb-4f50-b47e-8dba87543388',
        props.user.username,
        props.user.secret 
    );
    console.log('chatProps', chatProps);
    return  <div style={{ height : '100vh'  }}>
        <MultiChatSocket   { ...chatProps }  />
        <MultiChatWindow   { ...chatProps }   style = {{ height : '100%' }}/>
    </div>
};

export default ChatsPage;