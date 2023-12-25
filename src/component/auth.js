import React from "react";
import { 
    Input,
    Button,
    Form
 } from 'antd';
import '../assets/style/auth.css';

export default function Auth() {

    const validateMessages = {
        required: '${label} is required!',
    };

    const onFinish = (values) => {
        console.log(values);
    };

  return (<div class="main-auth">
    <div class="centered-content">
        <div className="section-header-auth">
            <div className="sub-content-center">
                <img className="logo" src="https://s3-alpha-sig.figma.com/img/a043/18be/0079fa9f015829f49823845b1251a4d0?Expires=1704067200&Signature=N3~U5komgHQkFTfnT79hZOzjswL4~Hznt0efgchU9ZENC64YRmyUg7IRHysS5EWiUfBDXCPOm1KVttTffE4~HSqESOAXLLqaonfIP7jB8j21FV9NxnyGgrEsbAbKxiF-6ZWxCLotnbvZManG6aXNKY4mNA6l~ricUsgC6nN7X2rFGcVrvXhA5TmoDMTr3CWK7A~bTDxIpGeXvB7KVB8LLcUmU-5xXBeIogQL-cAuyRKurOncB4uAhuogcO9mqyGR7XcThuLD-kT2R5nqEOgM5vAkDYH3RnF-YJIMIqJKV3Lrxe-ETMDTqE1VAv~3RztidFX97KRCQkulVYxgixd2ZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="logo-auth"/>
                <h2 className="title">ARMS</h2>
                <p className="sub-text">Version 1.0</p>
            </div>
        </div>

        <div className="form-input-auth">
            <Form 
                name="nest-messages"
                validateMessages={validateMessages}
                onFinish={onFinish} 
            >
                <Form.Item
                    className="form-controller"
                    name={['user', 'name']}
                    label="Email Address"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                >
                    <Input placeholder="Enter email address" className="input"/>

                </Form.Item>

                <Form.Item
                    className="form-controller"
                    name={['user', 'name']}
                    label="Password"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                >
                    <Input placeholder="Enter password" className="input"/>

                </Form.Item>

                <Button type="primary" htmlType="submit" className="btn-login">Login</Button>
            </Form>
        </div>

        <div className="footer-auth">
            <a href="/#">Forgot Password</a>
        </div>
    </div>
  </div>);
}


