import Image from "next/image";
import styles from "../styles/PizzaCart.module.css";
import Link from "next/link";

const PizzaCart = ({ pizza }) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${pizza._id}`} passHref>
                <Image src="/img/pizza.png" alt="" width="500" height="500" />
            </Link>
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>{pizza.prices[0]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
        </div>
    );
};

export default PizzaCart;