import Sidebar from '../components/sidebar'

const Layout = ({ children }) => {
    return (
        <div className="wrap">
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout
