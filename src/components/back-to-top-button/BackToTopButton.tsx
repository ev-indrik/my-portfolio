import { useEffect, useState } from 'react'
import type {FC} from 'react'
import './BackToTopButton.scss'
import WebsiteButton from "@/components/website-button/WebsiteButton";
import {SvgIcon} from "@/components/icon/SvgIcon";

const BackToTopButton: FC = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 1200){
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = ()=>{
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth',
            },
        )
    }

    return (
        <>
            <WebsiteButton
                btnType={'icon'}
                className={`back-to-top-button ${backToTopButton ? 'visible' : ''}`}
                onClick={scrollUp}>
                <SvgIcon type={'black-whale'}/>
            </WebsiteButton>
        </>
    );
}

export default BackToTopButton