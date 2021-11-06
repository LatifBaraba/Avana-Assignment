import { toast, ToastContainer } from 'react-toastify'
import Toast from '../utilities/helpers/toast'
import 'react-toastify/dist/ReactToastify.css'

const Page = props => {
    const data = props.location.data

    data?.isAllowed === false ? Toast('warning', 'not have access for this page', 'bottom-center') : toast.dismiss()

    return (
        <div className="content">
            <ToastContainer />
            <h1>{data ? `Menu you access is ${data.menu}` : 'This is Dynamic Page'}</h1>
            {data ? (
                data?.isAllowed === true ? (
                    <span className="content-access allowed">You have access for this page</span>
                ) : (
                    <span className="content-access not-allowed">You not have access for this page !!</span>
                )
            ) : <span className="content-access">Try access sidebar menu</span>}
        </div>
    )
}

export default Page
