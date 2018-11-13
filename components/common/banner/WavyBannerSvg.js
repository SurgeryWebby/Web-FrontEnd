const BannerWaveStyled = {
    position: 'absolute',
    overflow: 'hidden',
    bottom: 0,
    width: '100%',
    height: '50%'
}


const WavyBannerSvg = () => (
    <div style={BannerWaveStyled}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-26.60,146.53 C192.05,36.02 283.16,217.59 541.91,116.94 L516.39,170.22 L0.00,150.00 Z" style={{ stroke: 'none', fill: 'white' }}></path>
        </svg>
    </div>
)

export default WavyBannerSvg
