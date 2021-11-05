import SidebarMenu from './subComponent/sidebarMenu'

const sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-profile">
                <div className="logo">
                    <img className="logo-img" src="https://avana.id/wp-content/themes/avana-id/assets/images/logo.webp" alt="avana" />
                </div>
                <div className="user">
                    <img className="user-img" src="https://i.stack.imgur.com/zjxDZ.png?s=420&g=1" alt="avana" />
                    <div className="user-name">
                        <span>Arief Ramdhani</span>
                    </div>
                </div>
            </div>
            <SidebarMenu />
        </div>
    )
}

export default sidebar
