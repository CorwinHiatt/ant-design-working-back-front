import{ useState, useEffect } from 'react'
import Post from "./Post"

export default function Pholo() {
  const [photoList, setPhotoList] = useState()
  const [showUpload, setShowUpLoad] = useState(false)

  useEffect(() => {
    fetch('https://express-ts-cjh.web.app/photos')
    .then(results => results.json())
    .then(data => setPhotoList(data))
    .catch(alert)
  },[setPhotoList])

  return(<>
    <section className="photo-feed">
    {!photoList
    ?<p>loading....</p>
  : photoList.map(post => (
    <Post post={post} setPhotoList={setPhotoList} key={post.photoId} />
   ))
  }
    </section>
    </>

  )
}
