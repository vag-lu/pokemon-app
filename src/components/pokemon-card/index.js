import React from 'react'
import './index.scss'

function PokemonCard(props) {
    return (
        <div className="pokemon-card">
            <div className="row justify-content-md-center no-gutters">
                <div className="col-2">
                    <img alt={props.item.name} src={props.item.sprites.front_default}></img>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col"><b>{`${props.item.id} - ${props.item.name.toUpperCase()}`}</b></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Type(s): {props.item.types.map((slot, index) => (
                            slot.type.name + (index + 1 === props.item.types.length ? "." : ", ")
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard