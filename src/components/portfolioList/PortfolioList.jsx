import "./portfolioList.scss";

const portfolioList = ({ id, title, active, setSelected }) => {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"} id={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)} >
            {title}
        </li>
    );
}

export default portfolioList
