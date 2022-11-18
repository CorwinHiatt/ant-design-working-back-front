import {initializeApp} from "firebase/app"
import { getStorage, ref, uploadBytes } from "firebase/storage"
import { Modal, Form, Input, Button, Upload } from "antd"
import Login from "./Login"

const firebaseConfig = {
  apiKey: "AIzaSyCJbEIKuTmFw5sr_1JeVUU0klOR7vXlyY0",
  authDomain: "upload-storage-cjh.firebaseapp.com",
  projectId: "upload-storage-cjh",
  storageBucket: "upload-storage-cjh.appspot.com",
  messagingSenderId: "656073901842",
  appId: "1:656073901842:web:203739d9681c1cd1de95cb"
}

export default function UploadModal({setShowUpLoad, setPhotoList}) {
  const handleNewPhoto = (values) => {
    console.log(values)
    // 0. connect storage bucket⬆️
    const app = initializeApp(firebaseConfig)
    const storage = getStorage(app)
    // 1. upload new photo to storage bucket
    const filename = values.photo.file.name
    const imageRef = ref(storage, `photos/${filename}`)
    uploadBytes(imageRef, values.photo.file.originFileObj)
    .then(() => console.log('upload successful'))
    .catch(err => console.error(err))
    // 2. put URL in new photo object
    const photoUrl = `https://firebasestorage.googleapis.com/v0/b/upload-storage-cjh.appspot.com/o/photos%2F${filename}?alt=media` //hack token system ⬆️
    let newPhotoObject = values
    newPhotoObject.photo = photoUrl 
    console.log(newPhotoObject)
    // 3. send a post request to api
    fetch (`https://express-ts-cjh.web.app/photos`, {
    // fetch (`https://express-ts-cjh.web.app/photos`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPhotoObject)
    })
    .then(result => result.json())
    .then(newListOfPhotos => {
      setPhotoList(newListOfPhotos)
      // 4. get back new list of photos
      closeModal()
    })
    .catch(alert)
    // 5. see PhotoList
 
  }
  const closeModal = () => setShowUpLoad(false)
  return(<>
    
    <Modal title="upload photo" open={true} footer={null} onCancel={closeModal}>
      <Form labelCol={{span: 8}} wrapperCol={{span: 16}} onFinish={handleNewPhoto}>
        <Form.Item name="username" label="User Name" >
          <Input required/>
        </Form.Item>
        <Form.Item name="profilePic" label="profilePic" >
          <Input required/>
        </Form.Item>
        <Form.Item name="photo" label="Photo" >
          <Upload listType="picture-card">
            +
            </Upload>
        </Form.Item>
        <Form.Item name="description" label="Description" >
          <Input.TextArea rows={4} required/>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8, span: 16}} >
          <Button type="primary" htmlType="submit">Save Photo</Button>
        </Form.Item>
      </Form>
    </Modal>
    </>
  )
}