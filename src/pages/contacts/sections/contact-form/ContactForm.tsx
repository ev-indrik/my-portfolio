import './ContactForm.scss'

import {useEffect, useRef} from 'react';
import type {FC} from 'react';
import {Form, Input, Row, Col} from 'antd'
import type {FormProps} from 'antd';
import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import TextArea from "antd/es/input/TextArea";
import WebsiteButton from "@/components/website-button/WebsiteButton";
import {SvgIcon} from "@/components/icon/SvgIcon";
import { useMessageApi } from '@/context/MessageContext';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Lottie from 'lottie-react';
import type {LottieRefCurrentProps} from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import catSignature from '../../../../assets/lottie-animation/cat-signature.json';

const {Title, Paragraph} = WebsiteTypography

type FieldType = {
    name: string;
    email: string;
    message?: string;
};

const ContactForm: FC = () => {

    const [form] = Form.useForm();
    const messageApi = useMessageApi();

    const hasBeenInViewRef = useRef(false);
    const animationRef = useRef<LottieRefCurrentProps>(null);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.6, //===>> an element is considered a "viewport" if x0% is visible
    });

    ////===>> animation starting
    useEffect(() => {
        if (inView && !hasBeenInViewRef.current) {
            hasBeenInViewRef.current = true;
            animationRef.current?.play();
        }
    }, [inView]);

    const handleClick = () => {

        animationRef.current?.stop();
        animationRef.current?.play();
    };

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            await fetch("https://formspree.io/f/mqalqzer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            messageApi.success("Thank you! Your message just landed in my inbox — I’ll be in touch soon");
            form.resetFields();
            handleClick();
        } catch (error) {
            messageApi.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className={'contact-form-section-wrapper'}>
            <div className={'container'}>

                <Title level={2} color={'primary'} centered>
                    {'Send Me a Message'}
                </Title>

                <Paragraph centered color={'black'} style={{paddingTop: 24}}>
                    {'As one option, you can use the contact form below.\nI’ll get back to you as soon as possible. Looking forward to hearing from you!'}
                </Paragraph>

                <Row justify={'center'} style={{paddingTop: 64}}>
                    <Col span={14}>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            autoComplete={"off"}
                            className={'contact-form-wrapper'}
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
                                    { required: true, message: "Don't forget to put your email" },
                                    { type: 'email', message: 'Please enter a valid email address' }
                                ]}
                            >
                                <Input placeholder={'Enter your email'}/>
                            </Form.Item>

                            <Form.Item label="Message" name="message">
                                <TextArea rows={4} placeholder={'Enter your message'}/>
                            </Form.Item>

                           <Row justify={'center'} style={{paddingTop: 24}}>
                               <Col span={10}>
                                   <WebsiteButton size={'large'} icon={<SvgIcon type={'black-plane'}/>} block
                                                  btnType={'secondary'} htmlType={"submit"} text={'Send Message'}/>
                               </Col>
                           </Row>
                        </Form>
                    </Col>
                </Row>

                <div ref={ref} className="signature-wrapper" onClick={handleClick} style={{ cursor: 'pointer' }}>
                    <Lottie
                        lottieRef={animationRef}
                        animationData={catSignature}
                        loop={false}
                        autoplay={false}
                    />
                </div>

            </div>
        </div>
    );
};

export default ContactForm;