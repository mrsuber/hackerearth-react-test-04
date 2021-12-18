
import './Homepage.css'

import {Link} from 'react-router-dom'

const Homepage = ({setPublisherName,newsData}) => {



  return (
    <div className="home__wrapper">
      <div className="display__publisher_as_button_left">
        {
            newsData.map((news, index)=>(
              <Link to={`/${news.PUBLISHER}`} className="link"><button className="publisher__button" onClick={()=>setPublisherName(news.PUBLISHER)}>{news.PUBLISHER}</button></Link>
            ))
          }
      </div>
      <div className="display__content_right"></div>

    </div>
  )
}

export default Homepage
