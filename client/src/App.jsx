import { ChatEngine } from "react-chat-engine"

import ChatFeed from "./components/ChatFeed"

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="
            63edd6f1-48df-4af7-bed1-30f6d9ee2976"
            userName="Shreyask"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App