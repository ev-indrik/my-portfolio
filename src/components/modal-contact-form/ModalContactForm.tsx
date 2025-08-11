import { Modal } from 'antd';
import { useContactModal } from '@/context/ContactModalContext';
import ContactForm from "@/components/contact-form/ContactForm";
import './ModalContactForm.scss'

import bgModalImg from './images/modal-bg.png';
import WebsiteTypography from "@/components/website-typography/WebsiteTypography";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
const {Title} = WebsiteTypography

const ModalContactForm = () => {
    const { isOpen, closeModal } = useContactModal();
    const {xxl, xl, lg, md} = useBreakpoint()

    return (
        <>
                {/*<WebsiteButton btnType={'secondary'} onClick={showModal} text={'Open Contact Form'}/>*/}
            <Modal
                open={isOpen}
                onCancel={closeModal}
                footer={null}
                centered
                // width={800}
            >
                    <div className={"modal-border-wrapper"} >
                        <div className={"modal-inner-content"}>

                            <div className={'modal-bg-wrapper'}>
                                <img src={bgModalImg} alt={"background abstract illustration"}/>
                            </div>

                            <Title level={(xxl||xl||lg||md) ? 2 : 3} color={'white'} centered style={{paddingTop: 32}}>
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