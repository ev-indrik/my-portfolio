import './ContactFormSection.scss'

import {useEffect, useRef} from 'react';
import type {FC} from 'react';
import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import Lottie from 'lottie-react';
import type {LottieRefCurrentProps} from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import catSignature from '../../../../assets/lottie-animation/cat-signature.json';
import ContactForm from "@/components/contact-form/ContactForm";

const {Title, Paragraph} = WebsiteTypography

const ContactFormSection: FC = () => {

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

    const handleAnimationClick = () => {
        animationRef.current?.stop();
        animationRef.current?.play();
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

                <div ref={ref} className="signature-wrapper" onClick={handleAnimationClick} style={{ cursor: 'pointer' }}>
                    <Lottie
                        lottieRef={animationRef}
                        animationData={catSignature}
                        loop={false}
                        autoplay={false}
                    />
                </div>

                <ContactForm handleAnimationClick={handleAnimationClick} />

            </div>
        </div>
    );
};

export default ContactFormSection;