import styles from "../styles/PizzaList.module.css"
import PizzaCart from "./PizzaCart";
const PizzaList = ({ pizzaList }) => {
    return (<div className={styles.container}>
        <h1 className={styles.title}>the best food tunisian</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tenetur?
        </p>
        <div className={styles.wrapper}>
            {pizzaList.map((pizza) => (<PizzaCart key={pizza._id} pizza={pizza} />))}


        </div>
    </div>);
};

export default PizzaList;
