import './HeroSection.scss';

import {type FC} from 'react';
import {Col, Row} from "antd";

const HeroSection: FC = () => {
    return (
        <div className={'hero-section-wrapper'}>

            <div className={'container'}>
                <Row wrap={false} gutter={24}>
                    <Col
                        span={6}
                        className={'texts-container'}
                    >
                        <h1>{'TESTING'}</h1>
                    </Col>
                    <Col
                        flex={'auto'}
                        className={'image-container'}
                    >
                        <h2>{'TESTING 02'}</h2>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HeroSection;