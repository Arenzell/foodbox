import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import genericFood from '../../resources/images/generic_food_bg.jpg'

const BackgroundCard = ({ image, children, className }) => {
    const style = { backgroundImage: `url(${image})` }
    const containerClass = classNames('bg-card-container', className)
    return (
        <div className={containerClass} style={style}>{children}</div>
    )
}

BackgroundCard.propTypes = {
    image: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string
}

// TODO, I think that this component should not reference externar resouces
BackgroundCard.defaultProps = {
    image: genericFood
}

export default BackgroundCard
