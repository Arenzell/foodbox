import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import BackgroundCard from '../../components/BackgroundCard'

const StoreCard = ({ name, headline, closed, image }) => {
    const storeCardListItemClass = classNames({ 'store-card-list-item': true, 'closed': closed })
    return (
        <BackgroundCard image={image} className={storeCardListItemClass}>
            <div className="store-card-container">
                {closed && (
                    <div className="store-closed">Closed</div>
                )}
                <div className="store-info">
                    <div className="store-name">{name}</div>
                    <div className="store-headline">{headline}</div>
                </div>
            </div>
        </BackgroundCard>
    )
}

StoreCard.propTypes = {
    name: PropTypes.string.isRequired,
    headline: PropTypes.string,
    closed: PropTypes.bool,
    image: PropTypes.string
}

StoreCard.defaultProps = {
    closed: false
}

export default StoreCard
