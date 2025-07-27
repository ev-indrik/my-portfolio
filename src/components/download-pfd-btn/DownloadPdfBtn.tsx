import type {FC} from 'react';
import {SvgIcon} from "@/components/icon/SvgIcon";
import WebsiteButton from "@/components/website-button/WebsiteButton";

type DownloadPdfBtnType = 'primary' | 'ghost-white'

type Props = {
    btnType: DownloadPdfBtnType;
};

export const onPdfClick = ()=>{
    const link = document.createElement('a');
    link.href = '/2025_cv_ev-indrik.pdf';
    link.download = 'cv-yevheniia.pdf'; // naming on save
    link.click();
}

const DownloadPdfBtn: FC<Props> = ({btnType}) => {
    const mappedBtnType = btnType === 'ghost-white' ? 'white-ghost' : 'primary';

    return (
        <WebsiteButton
            btnType={mappedBtnType}
            icon={<SvgIcon type={'pdf'}/>}
            text={'Download PDF Resume'}
            size={'large'}
            onClick={onPdfClick}
            block
        />
    );
};

export default DownloadPdfBtn;