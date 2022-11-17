import { Card, Avatar} from "antd"

export default function Post({ post }) {
  return(
  <Card
  hoverable 
  color={'hotpink'}
  style={{ width: 300, padding: 10, margin: 2 }}
  cover={
    <img alt={post.description} src={post.photo}/>
  }

  >
    <Card.Meta 
    avatar={<Avatar src="https://randomuser.me/api/portraits/women/12.jpg"/>}
    title={post.username}
    description={post.description}

    />
  </Card>
  

  )
}