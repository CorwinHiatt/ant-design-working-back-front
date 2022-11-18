import {Button, Checkbox, Form, Input} from 'antd'
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCJbEIKuTmFw5sr_1JeVUU0klOR7vXlyY0",
  authDomain: "upload-storage-cjh.firebaseapp.com",
  projectId: "upload-storage-cjh",
  storageBucket: "upload-storage-cjh.appspot.com",
  messagingSenderId: "656073901842",
  appId: "1:656073901842:web:203739d9681c1cd1de95cb"
};


export default function Login({ setUser }) {
  const handleGoogleLogin = async () => {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const response = await signInWithPopup(auth, provider)
    .catch(alert)
    setUser(response.user)
  }
  return(
    
    <Button onClick={handleGoogleLogin}>
      Sign in!!!
    </Button>
    
  )



}














// export default function Login() {

  // const onFinish = (values) => {
  //   console.log('Success:', values)
  // }
  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo)
  // }
 // return(

    // <Form name='basic' 
    // labelCol={{span: 8,}}
    // wrapperCol={{  span: 16, }}
    // initialValues={{remember: true,}}
    // // onFinish={onFinish}
    // // onFinishFailed={onFinishFailed}
    // >

    //   <Form.Item
    //     label="Username"
    //     name="username"
    //     rules={[{
    //       required: true,
    //       message: 'Please input your username!'

    //      }]}>
    //       <Input/>
    //   </Form.Item  >

    //     <Form.Item
    //       label="Password"
    //       name="password"
    //      rules={[{
    //       required: true,
    //       message: 'Please input your password correctly!'

    //      }]}>
    //      <Input.Password/>
    //      </Form.Item>

    //      <Form.Item
    //      label="remember"
    //      validateFirst="checked"
    //      wrapperCol={{
    //       offset: 8,
    //       span: 16,
    //      }}>
    //       <Checkbox>Remember Me?</Checkbox>
    //       </Form.Item>

    //       <Button type="primary" htmlType="submit">Login</Button>

    // </Form>
    
//   )
// }