import React from 'react';
import { Segment, Image, Rail, Header } from 'semantic-ui-react';
import WavyBannerSvg from './WavyBannerSvg.js'

const HeaderStyle = {
    fontFamily: 'ButlerRegular',
    fontSize: 48
}

export default ({ title, imagePath }) => {
    const BannerContentStyled = {
        position: 'relative',
        minHeight: '30rem !important',
        backgroundImage: `url(${imagePath ? imagePath : '/static/images/faqs/banner.png'} ) !important`,
        backgroundRepeat: 'no-repeat !important',
        backgroundSize: 'auto 100% !important',
        backgroundPosition: 'center !important',
        padding: 0,
        borderBottom: 0
    }

    return <Segment style={BannerContentStyled} vertical >
        <Rail size='massive' internal position='left' style={{}}>
            <Segment vertical style={{ padding: 0, borderBottom: 0, position: 'absolute', left: '10vw', bottom: 0, width: 400, zIndex: 2 }}>
                <Image fluid src={'/static/images/faqs/shell.png'} />
                <Rail size='massive' internal position='left' style={{ paddingLeft: 120, top: 60 }}>
                    <Segment basic>
                        <Header style={HeaderStyle}>{title}</Header>
                    </Segment>
                </Rail>
            </Segment>
        </Rail>
        <WavyBannerSvg />
    </Segment>
}
