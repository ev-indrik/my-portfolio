import './WebsiteTypography.scss'

import {type FC} from 'react';
import {Typography as Wrapped} from "antd";
import { type ParagraphProps } from 'antd/es/typography/Paragraph'
import { type TextProps } from 'antd/es/typography/Text'
import { type TitleProps } from 'antd/es/typography/Title'
import classnames from 'classnames'

type LineHeight = 'lh-md' | 'lh-lg'
type Size = 'sm' | 'md' | 'lg'

type WebsiteTypographyProps = {
    centered: boolean
    color: 'black' | 'white' | 'primary'
    lh: LineHeight
    weight: 'w300' | 'w400' | 'w500' | 'w600' | 'w700'
}

type WebsiteTitleProps = TitleProps & WebsiteTypographyProps
type WebsiteParagraphProps = ParagraphProps & WebsiteTypographyProps & { font: 'regular' | 'primary'; size: Size }
type WebsiteTextProps = TextProps & WebsiteTypographyProps & { font: 'regular' | 'primary'; size: Size }

const Title: FC<Partial<WebsiteTitleProps>> = ({
                                                    className,
                                                    centered = false,
                                                    lh = 'lh-md',
                                                    weight,
                                                    color = 'black',
                                                    ...baseProps
                                                }) =>
    <Wrapped.Title className={classnames(className, weight, color, lh, { centered: centered })} {...baseProps} />

const Paragraph: FC<Partial<WebsiteParagraphProps>> = ({
                                                      className,
                                                      lh = 'lh-md',
                                                      centered = false,
                                                      size = 'md',
                                                      weight,
                                                      color = 'black',
                                                      font = 'primary',
                                                      ...baseProps
                                                  }) => (
    <Wrapped.Paragraph
        className={classnames(className, weight, color, size, lh, {
            'centered': centered,
        })}
        {...baseProps}
    />
)

const Text: FC<Partial<WebsiteTextProps>> = ({
                                                 className,
                                                 centered = false,
                                                 lh = 'lh-md',
                                                 size = 'md',
                                                 weight,
                                                 color = 'black',
                                                 font = 'primary',
                                                 ...baseProps
                                             }) => (
    <Wrapped.Text
        className={classnames(className, weight, color, size, lh, {
            'centered': centered,
        })}
        {...baseProps}
    />
)


const WebsiteTypography = { Title, Paragraph, Text }
export default WebsiteTypography;