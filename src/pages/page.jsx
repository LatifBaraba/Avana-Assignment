const Page = props => {
    const data = props.location.data

    return (
        <div className="content">
            <h1>{data ? `Menu you access is ${data.menu}` : 'This is Dynamic Page'}</h1>
            <span>{data ? `You have access for this page ` : 'Try to access menu on sidebar'}</span>
        </div>
    )
}

export default Page
