import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home}) {
  return (

    <div><Head><title>getting better</title></Head>

      
      <header>
      <nav>
      <a href="https://www.google.com">A world of sometimes true info</a>
      </nav>
      </header>

      <main> {children} </main>

      {!home && ( 
      <Link href="/" className= "btn btn-primary mt-3"> Back to home
      </Link>
                
                )
      }
      
    <footer><p>bottom</p></footer>
    
    </div>
  );
}