import React from 'react'

export const Item = (props) => {
    return (
        <div>
            {props.name}
            {props.type}
        </div>
    )
}