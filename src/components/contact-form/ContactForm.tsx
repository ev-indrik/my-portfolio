import './ContactForm.scss';

import type {FC} from 'react';
import type {FormProps} from 'antd';
import {Col, Form, Input, Row} from "antd";
import TextArea from "antd/es/input/TextArea";
import WebsiteButton from "@/components/website-button/WebsiteButton";
import {SvgIcon} from "@/components/icon/SvgIcon";
import {useMessageApi} from "@/context/MessageContext";

type FieldType = {
    name: string;
    email: string;
    message?: string;
};

type labelBeforeColorType = 'white'

type Props = {
    handleAnimationClick?: ()=>void;
    mainColNumber?: number;
    labelBeforeColor?: labelBeforeColorType
}

const ContactForm: FC<Props> = ({handleAnimationClick, mainColNumber=14, labelBeforeColor}) => {

    const [form] = Form.useForm();
    const messageApi = useMessageApi();

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            await fetch("https://formspree.io/f/mqalqzer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            messageApi.success({
                content: "Thank you! Your message just landed in my inbox, I’ll be in touch soon",
                duration: 8,
            });
            form.resetFields();
            {handleAnimationClick && handleAnimationClick()}
        } catch (error) {
            messageApi.error("Something went wrong. Please try again.");
        }
    };

    return (
        <Row justify={'center'} style={{paddingTop: 40}}>
            <Col span={mainColNumber}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete={"off"}
                    className={`contact-form-wrapper ${labelBeforeColor === 'white' ? 'white' : ''}`}
                >
                    <Form.Item<FieldType>
                        label="Name"
                        name="name"
                        rules={[{required: true, message: 'Please input your Name'}]}
                    >
                        <Input placeholder={'Enter your Name'}/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[
                            {required: true, message: "Don't forget to put your email"},
                            {type: 'email', message: 'Please enter a valid email address'}
                        ]}
                    >
                        <Input placeholder={'Enter your email'}/>
                    </Form.Item>

                    <Form.Item label="Message" name="message">
                        <TextArea rows={4} placeholder={'Enter your message'}/>
                    </Form.Item>

                    <Row justify={'center'} style={{paddingTop: 24}}>
                        <Col span={12}>
                            <Row justify={'center'}>
                                <WebsiteButton size={'large'} icon={<SvgIcon type={'black-plane'}/>} block
                                               btnType={'secondary'} htmlType={"submit"} text={'Send Message'}/>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
};

export default ContactForm;