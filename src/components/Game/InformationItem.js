function DescriptionItem(props) {
    return (
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