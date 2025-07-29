import { Modal } from 'antd';
import { useContactModal } from '@/context/ContactModalContext';
import ContactForm from "@/components/contact-form/ContactForm";
import './ModalContactForm.scss'

import bgModalImg from './images/modal-bg.png';
import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
const {Title} = WebsiteTypography

const ModalContactForm = () => {
    const { isOpen, closeModal } = useContactModal();

    return (
        <>
                {/*<WebsiteButton btnType={'secondary'} onClick={showModal} text={'Open Contact Form'}/>*/}
            <Modal
                open={isOpen}
                onCancel={closeModal}
                footer={null}
                centered
                width={800}
            >
                    <div className={"modal-border-wrapper"} >
                        <div className={"modal-inner-content"}>

                            <div className={'modal-bg-wrapper'}>
                                <img src={bgModalImg} alt={"background abstract illustration"}/>
                            </div>

                            <Title level={2} color={'white'} centered style={{paddingTop: 32}}>
                                {'Contact Form'}
                            </Title>
                            <ContactForm mainColNumber={18} labelBeforeColor={'white'} closeModal={closeModal}/>
                        </div>
                    </div>
                </Modal>
        </>
    );
};

export default ModalContactForm;