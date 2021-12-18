import {News, Homepage,Publisherpage,Rootpage} from './pages'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'

const App=()=> {
const[publisherName,setPublisherName]=useState("")
const [newsData, setNewsData] = useState([])


 useEffect(()=>{
   const fetchNewsData = async()=>{
     const res = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json")
     setNewsData(res.data)
   }

   fetchNewsData()
 },[])

 // console.log(newsData[0])

  return (
    <Router>

        <Switch>
            <Route exact path="/Publisher" component={Publisherpage} />
            <Route exact path="/news" component={News} />
            <Route exact path="/home"><Homepage setPublisherName={setPublisherName} newsData={newsData}/></Route>
            <Route  path="/"><Rootpage publisherName={publisherName} newsData={newsData} /></Route>

        </Switch>

    </Router>
  );
}

export default App;
