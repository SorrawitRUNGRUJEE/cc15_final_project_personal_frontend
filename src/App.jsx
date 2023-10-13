import Loading from "./component/loading"
import { useAuth } from "./hook/use_auth"
import Router from "./router/router"
import {ToastContainer} from "react-toastify"
function App() {
  const {loading} = useAuth()
  if(loading){
    console.log("loading")
    return <Loading />
  }
  
  return( 
<>
    <Router/>
    <ToastContainer />
</>
  ) 
}

export default App
