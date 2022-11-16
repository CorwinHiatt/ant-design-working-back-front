import { Modal, Form, Input, Button, Upload } from "antd"

export default function UploadModal({setShowUpLoad, setPhotoList}) {
  const handleNewPhoto = (values) => {
    console.log(values)
    //send a post request to api
    //get back new list of photos
    //see PhotoList
    // setPhotoList(value)
    // setShowUpload(false)
  }
  const closeModal = () => setShowUpLoad(false)
  return(
    <Modal title="upload photo" open={true} footer={null} onCancel={closeModal}>
      <Form labelCol={{span: 8}} wrapperCol={{span: 16}} onFinish={handleNewPhoto}>
        <Form.Item name="User Name" label="User Name" >
          <Input required/>
        </Form.Item>
        <Form.Item name="Profile Picture URL" label="PublicPic" >
          <Input required/>
        </Form.Item>
        <Form.Item name="Photo" label="Photo" >
          <Upload listType="picture-card">
            +
            </Upload>
        </Form.Item>
        <Form.Item name="Description" label="Description" >
          <Input.TextArea rows={4} required/>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8, span: 16}} >
          <Button type="primary" htmlType="submit">Save Photo</Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}