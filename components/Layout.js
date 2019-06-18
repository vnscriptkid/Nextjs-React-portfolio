import Header from './Header';
import Footer from './Footer';

export default (props) => (
    <div>
        <Header />
        <div className="mainContent container wrapper">
            {props.children}
        </div>
        <Footer />
        <style jsx global>{`
            * {
                margin: 0;
                padding: 0;
                border-box: box-sizing;
            }

            .container {
                width: 80%;
                margin: 0 auto;
            }

            .wrapper {
                border: 2px solid #333;
                margin-top: 1rem;
                margin-bottom: 1rem;
                padding: 1rem;
            }
        
            ul {
                list-style-type: none;
            }

            a {
                text-decoration: none;
                color: inherit;
            }
        `}</style>
    </div>
)