import React from 'react'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'

const LoadingOverlay = ({ active, type, color, width, height }) =>
    active && (
        <div className="loading-container">
            <div className="loading-spinner" style={{ width: `${width}px`, height: `${height}px` }}>
                <ReactLoading type={type} color={color} delay={0} width={width} height={height} />
            </div>
        </div>
    )

LoadingOverlay.propTypes = {
    active: PropTypes.bool,
    type: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

LoadingOverlay.defaultProps = {
    active: true,
    type: 'spin',
    color: '#000',
    width: 32,
    height: 32
}

export default LoadingOverlay
