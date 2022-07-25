import { AuthContextProvider } from "./context/AuthContext/AuthContext"
import { PersonContextProvider } from "./context/PersonContext/PersonContext"
import { MyRoutes } from "./routes"

function App() {

  return (
    <AuthContextProvider>
      <PersonContextProvider>
        <MyRoutes/>
      </PersonContextProvider>  
   </AuthContextProvider>
  )
}

export default App
