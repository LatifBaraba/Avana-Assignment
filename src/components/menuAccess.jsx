import React from 'react'
import Switch from 'react-switch'
import { ChevronRightIcon } from '@heroicons/react/outline'

const menuAccess = () => {
    return (
        <div className="menu-access">
            <span>Change or toggle some menu</span>
            <div className="list-menu">
                <div className="menu-wrap">
                    <h3>$ menu name</h3>
                    <div className="access-action">
                        <div className={`menu-arrow`}>
                            <ChevronRightIcon/>
                        </div>
                        <div className="is-showed">
                            <span>is-showed</span>
                            <Switch className="react-switch" />
                        </div>
                        <div className="is-allowed">
                            <span>is-allowed</span>
                            <Switch className="react-switch" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default menuAccess
