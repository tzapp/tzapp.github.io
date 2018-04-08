import React from 'react'
import IconButton from 'material-ui/IconButton'
import ShareIcon from 'material-ui-icons/Share'

import Share from './share'

const ShareIconButton = ({ shareData, forceVisible, component, children, ...IconButtonProps }) => {
    return (
        <Share shareData={shareData} forceVisible={forceVisible} component={component}>
            <IconButton aria-label="Share" {...IconButtonProps}>
                {children || <ShareIcon />}
            </IconButton>
        </Share>
    )
}

export default ShareIconButton
