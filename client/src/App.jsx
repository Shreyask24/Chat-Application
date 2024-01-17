import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm"
import Logout from "./components/Logout";

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <>
            <ChatEngine
                height="100vh"
                projectID="63edd6f1-48df-4af7-bed1-30f6d9ee2976"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />

            <Logout />
        </>
    )
}

export default App