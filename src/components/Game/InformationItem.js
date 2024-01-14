function DescriptionItem(props) {
    return (
        // <div className="description-item">
        //   <div className="description-item__title">{title}</div>
        //   <div className="description-item__value">{value}</div>
        // </div>
        <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
                {props.title}
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
                {props.value}
            </dd>
        </div>
    )
}

export default DescriptionItem;