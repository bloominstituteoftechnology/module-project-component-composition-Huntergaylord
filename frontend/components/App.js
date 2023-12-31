import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`




function App() {
  const [apod, setApod] = useState()
    useEffect(() => {
      function getPhoto() {
       axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
      }
     // getPhoto()
      setApod({
     "date":"2023-10-11",
     "explanation":"What's happening in the lower arm of this spiral galaxy? A supernova. Last month, supernova SN 2023rve was discovered with UAE's Al-Khatim Observatory and later found to be consistent with the death explosion of a massive star, possibly leaving behind a black hole. Spiral galaxy NGC 1097 is a relatively close 45 million light years away and visible with a small telescope toward the southern constellation of the Furnace (Fornax).  The galaxy is notable not only for its picturesque spiral arms, but also for faint jets consistent with ancient star streams left over from a galactic collision -- possibly with the small galaxy seen between its arms on the lower left. The featured image highlights the new supernova by blinking between two exposures taken several months apart. Finding supernovas in nearby galaxies can be important in determining the scale and expansion rate of our entire universe -- a topic currently of unexpected tension and much debate.    APOD editor to speak: in Houghton, Michigan on Thursday, October 12 at 6 pm",
     "hdurl":"https://apod.nasa.gov/apod/image/2310/Ngc1097wSn_Miller_1008.gif",
     "media_type":"image",
     "service_version":"v1",
     "title":"NGC 1097: Spiral Galaxy with Supernova",
     "url":"https://apod.nasa.gov/apod/image/2310/Ngc1097wSn_Miller_1008.gif"
      })
    },[])
    if (!apod) return 'Fetching Photo of the Day....'
  return (
    <section>
     <Card
       title={apod.title}
       text={apod.explanation}
       imageurl={apod.url}
       date={apod.date}
     />
    </section>
  )
}

export default App
