import React, { cloneElement } from 'react'

function List(props) {
    if (props.list ) {
        return (
            <div className="container">
                {props.list.map((item) => {
                    return (
                        cloneElement(props.children, { item: item, key: item.id })
                    )
                })}
            </div>
        )
    } 
}

export default List