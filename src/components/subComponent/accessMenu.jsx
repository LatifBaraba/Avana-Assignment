import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Switch from 'react-switch'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { changeAllowed, changeShowed } from '../../store/menu'

const AccessMenu = () => {
    const menus = useSelector(state => state.menu.data)
    const dispatch = useDispatch()

    const handleShowed = value => {
        dispatch(changeShowed(value))
    }

    const handleAllowed = value => {
        dispatch(changeAllowed(value))
    }

    const accessFunc = () => {
        return menus.map(value => (
            <div className="menu-wrap" key={value.id}>
                <h3>{value.id}</h3>
                <div className="access-action">
                    <div className={`menu-arrow`}>
                        <ChevronRightIcon />
                    </div>
                    <div className="is-showed">
                        <span>{value.isShowed === true ? 'showed' : 'un-showed'}</span>
                        <Switch className="react-switch" checked={value.isShowed} onChange={() => handleShowed(value.id)} />
                    </div>
                    <div className="is-allowed">
                        <span>{value.isAllowed === true ? 'allowed' : 'un-allowed'}</span>
                        <Switch className="react-switch" checked={value.isAllowed} onChange={() => handleAllowed(value.id)} />
                    </div>
                </div>
            </div>
        ))
    }

    return <div className="list-menu">{accessFunc()}</div>
}

export default AccessMenu
