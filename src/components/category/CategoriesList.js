import CategoryCard from "./CategoryCard";
const CategoriesList = (props) => {
    // console.log(props.items);
    return (
            <div className='mt-10 item-container'>
                {props.items.map(item => (
                    <CategoryCard key={item.id} type={props.type} title={item.name} slug={item.slug} />
                ))}
            </div>
    );
};

export default CategoriesList;