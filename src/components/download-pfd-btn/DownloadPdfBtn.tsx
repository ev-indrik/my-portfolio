import type {FC} from 'react';
import {SvgIcon} from "@/components/icon/SvgIcon";
import WebsiteButton from "@/components/website-button/WebsiteButton";
import type {ButtonProps} from "antd";

type DownloadPdfBtnType = 'primary' | 'ghost-white'
type Size = 'small' | 'middle' | 'large'

type Props = {
    btnType: DownloadPdfBtnType;
    size?: Size;
};

export const onPdfClick = ()=>{
    const link = document.createElement('a');
    link.href = '/ev-indrik-resume.pdf';
    link.download = 'cv-yevheniia.pdf'; // naming on save
    link.click();
}

const DownloadPdfBtn: FC<Props & ButtonProps> = ({btnType, size='large'}) => {
    const mappedBtnType = btnType === 'ghost-white' ? 'white-ghost' : 'primary';

    return (
        <WebsiteButton
            btnType={mappedBtnType}
            icon={<SvgIcon type={'pdf'} color={'orange'}/>}
            text={'Download PDF Resume'}
            size={size}
            onClick={onPdfClick}
            block
        />
    );
};

export default DownloadPdfBtn;