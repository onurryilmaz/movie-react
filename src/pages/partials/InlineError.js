import React from 'react'

export const InlineError = props => {
    return (
        <div className= {`${props.class}`} style = {{display: 'block'}}>
            { props.message }
        </div>
    )
}

export default InlineError;