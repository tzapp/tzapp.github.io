import React from 'react'


/**
 * Share link component
 * 
 * @param {object} { shareData = {}, component: Component = "div", ...props } 
 * @returns
 */
const Share = ({ shareData = {}, forceVisible = false, component: Component = "div", ...props }) => {
    return (navigator.share || forceVisible) && (
        <Component
            {...props}
            onClick={() => navigator.share && navigator.share(shareData)}
        />
    )
}

export default Share
