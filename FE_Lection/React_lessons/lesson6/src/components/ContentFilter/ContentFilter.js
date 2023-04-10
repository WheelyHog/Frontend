function ContentFilter(props) {

    const { deleteById, changeStatus, changePrice, setDefaultPrice } = props

    return (
        <div>
            <button onClick={deleteById}>Delete By ID</button>
            <button onClick={changeStatus}>Change status by ID</button>
            <button onClick={changePrice}>Change price on 25%</button>
            <button onClick={setDefaultPrice}>Change to old price</button>
        </div>
    )
}

export default ContentFilter