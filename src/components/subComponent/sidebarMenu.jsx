import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'

const SidebarMenu = () => {
    const menus = useSelector(state => state.menu.data)

    const menuFunc = () => {
        return menus.map(
            value =>
                value.isShowed && (
                    <ul className="parent" key={value.id}>
                        <li>
                            <div className="li-content">
                                <span className="title">
                                    <Link
                                        to={{
                                            pathname: '/page',
                                            data: { menu: value.id, isAllowed: value.isAllowed },
                                        }}
                                    >
                                        {value.id}
                                    </Link>
                                </span>
                                {value?.childs ? (
                                    <div className={`title-arrow`}>
                                        <ChevronRightIcon onClick={() => handleOpen(value.id)} />
                                    </div>
                                ) : null}
                            </div>
                            {value?.childs ? menuLevel(value.id, value.childs) : null}
                        </li>
                    </ul>
                ),
        )
    }

    // Recursive Function
    const menuLevel = (id, childs) => {
        return childs.map(
            value =>
                value.isShowed && (
                    <ul className={`child ${id} unshowed`} key={value.id}>
                        <li>
                            <div className="li-content">
                                <span className="title">
                                    <Link
                                        to={{
                                            pathname: '/page',
                                            data: { menu: value.id, isAllowed: value.isAllowed },
                                        }}
                                    >
                                        {value.id}
                                    </Link>
                                </span>
                                {value?.childs ? (
                                    <div className={`title-arrow`}>
                                        <ChevronRightIcon onClick={() => handleOpen(value.id)} />
                                    </div>
                                ) : null}
                            </div>
                            {value?.childs ? menuLevel(value.id, value.childs) : null}
                        </li>
                    </ul>
                ),
        )
    }

    const handleOpen = id => {
        const childs = document.querySelectorAll(`.${id}`)
        // const arrow = document.getElementsByClassName(`${id} title-arrow`)

        childs.forEach(child => {
            if (child.classList.contains(`${id}`) && child.classList.contains('showed')) {
                child.classList.remove('showed')
                child.classList.add('unshowed')
            } else {
                child.classList.remove('unshowed')
                child.classList.add('showed')
            }
        })
    }

    return <div className="sidebar-menu">{menuFunc()}</div>
}

export default SidebarMenu
