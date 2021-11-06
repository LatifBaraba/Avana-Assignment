import { Link } from 'react-router-dom'
import SidebarMenu from './subComponent/sidebarMenu'
import { CogIcon } from '@heroicons/react/outline'

const sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-profile">
                <div className="logo">
                    <Link to="/">
                        <img className="logo-img" src="https://avana.id/wp-content/themes/avana-id/assets/images/logo.webp" alt="avana" />
                    </Link>
                </div>
                <div className="user">
                    <img className="user-img" src="https://i.stack.imgur.com/zjxDZ.png?s=420&g=1" alt="avana" />
                    <div className="user-name">
                        <span>Nabil Baraba</span>
                    </div>
                    <div className="menu-setting">
                        <div className="setting-icon">
                            <CogIcon />
                        </div>
                        <Link to="/menu-setting">Menu accsess setting</Link>
                    </div>
                </div>
            </div>
            <SidebarMenu />
        </div>
    )
}

export default sidebar
