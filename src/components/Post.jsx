import { Card, Avatar, Space } from "antd"
import { HeartTwoTone } from '@ant-design/icons';



export default function Post({ post, setPhotoList }) {
  const likeButton = () => {
    fetch('http://localhost:5002/photos/' + post.photoId, {
      method: 'PATCH'
    })
    .then(results => results.json())
    .then(newListOfPhotos => {
      setPhotoList(newListOfPhotos)})
    .catch(alert)
    //send a patch request /photos/photoId
    //and then update photoList 
  }
  return (
    <Card
      hoverable
      actions={[<Space style={{ marginLeft: 37 }}>
        <button onClick={likeButton}> <HeartTwoTone twoToneColor="#eb2f96" /></button>
      </Space>
      ]}
      color={'hotpink'}
      style={{ width: 300, padding: 10, margin: 2 }}
      cover={
        <img alt={post.description} src={post.photo} />
      }

    >

      <Card.Meta
        avatar={<Avatar src="https://randomuser.me/api/portraits/women/12.jpg" />}
        title={post.username}
        description={post.description}

      />
    </Card>


  )
}