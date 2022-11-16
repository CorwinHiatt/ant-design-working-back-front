import UploadModal from "./UploadModal"
import { useState, useEffect } from "react"
import {Button } from 'antd'


export default function Feed() {
  const [photoList, setPhotoList] = useState()
  const [showUpload, setShowUpLoad] = useState(false)

  useEffect(() => {
    fetch('https://express-ts-cjh.web.app/photos')
    .then(results => results.json())
    .then(data => setPhotoList(data))
    .catch(alert)
  },[setPhotoList])
  return(
    
    <section>
    {!photoList
    ?<p>loading....</p>
  :<p>{photoList.length}</p>
  }
  { showUpload ? <UploadModal setPhotoList={setPhotoList} setShowUpload={setShowUpLoad}/> : null}
  <Button onClick={() => setShowUpLoad(true)}
  className="fab" 
  type="primary"
  shape="circle" 
  size="large">+</Button>
    </section>
    

  )
}