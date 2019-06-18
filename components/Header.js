import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done(); 
Router.routeChangeError = (err) => console.error(err) || NProgress.done();

export default () => (
    <header>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/hire"><a>Hire Me</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
        </ul>
        <style jsx>{`
            ul {
                display: flex;
                justify-content: center;
                margin: 0;
                padding: 1rem 0;
                background-color: purple;
                color: white;
            }
            
            li {
                padding: 1rem 2rem;
            }

            a {
                font-weight: bold;
                text-transform: uppercase;
            }

            a:hover {
                color: yellow;
            }
        `}</style>
    </header>
)