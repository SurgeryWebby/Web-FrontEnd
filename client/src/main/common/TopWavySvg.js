import React from 'react';

const TopWavySvgStyle = {
    position: 'absolute',
    overflow: 'hidden',
    top: '-1px',
    padding: '0 !important',
    transform: 'rotate(180deg) !important',
    width: '100% !important',
    height: '30% !important',
};

const TopWavySvg = () => (
    <div style={TopWavySvgStyle}>
        <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: '100%', width: '100%' }}
        >
            <path
                d="M-103.86,123.84 C212.46,-145.55 323.25,337.00 590.00,-10.36 L592.20,230.42 L-12.02,187.00 Z"
                style={{ stroke: 'none', fill: '#FFF' }}
            />
        </svg>
    </div>
);

export default TopWavySvg;
