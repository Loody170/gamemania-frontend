import { Link } from "react-router-dom";
function CategoryCard({ slug, title, type }) {
    const image = require(`../../images/${type}/${slug}.jpg`);
    return (
        <div className="group item h-48 cursor-pointer">
            <Link to={`/categories/${type}/${slug}`}>
                <img
                    src={image}
                    alt=""
                    className="w-full object-cover h-full duration-200 md:block group-hover:scale-110"
                />
                <div className="item-gradiant" />
                <h5 className="">{title}</h5>
            </Link>
        </div>
    );
}

export default CategoryCard;