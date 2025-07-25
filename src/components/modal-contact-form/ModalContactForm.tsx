import { Modal } from 'antd';
import { useContactModal } from '@/context/ContactModalContext';
import ContactForm from "@/components/contact-form/ContactForm";


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
                width={600}
            >
                    <div className={"modal-border-wrapper"}>
                        <div className={"modal-inner-content"}>
                            <ContactForm />
                        </div>
                    </div>
                </Modal>
        </>
    );
};

export default ModalContactForm;