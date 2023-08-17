import { Link } from "react-router-dom";

const ThankYou = () => {
    return (
        <section>
            <h1>Thank you for a contacting, i will get back to as soon as i see it.</h1>
            <Link to="/">
                <button>
                    Back
                </button>
            </Link>
        </section>
    )
}

export default ThankYou;