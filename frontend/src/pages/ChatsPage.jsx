import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('b7778b35-1a77-4d9b-ba31-f67d5caa4da9',
     props.user.username, 
     props.user.secret);
    return <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps }/>
        <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    </div>
}

export default ChatsPage