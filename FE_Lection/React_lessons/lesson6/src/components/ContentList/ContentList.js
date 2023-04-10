import ContentItem from "../ContentItem/ContentItem";

function ContentList(props) {

    const { card } = props

    return (
        <div>
            {card.map(elem => <ContentItem
                name={elem.name}
                price={elem.price}
                check={elem.check}
                isSale={elem.isSale}
                key={elem.id} />)}
        </div>
    )
}

export default ContentList