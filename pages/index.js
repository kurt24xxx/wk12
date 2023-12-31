import Link from 'next/link';
import Layout from '../components/layout';
import{ getSortedList } from '../lib/data';
import Head from 'next/head';

export async function getStaticProps(){
  const allData = getSortedList();
  return { 
    props: {allData}
    
  }
}



export default function Home( { allData }) {
  return (
    <Layout home>
    <h1>Hello</h1>
    <div className="list-group">
      { allData.map(
      ({id, name}) => (
        <Link key={id} href={`/${id}`}>
          < a className="list-group-item list-group-item-action">
          {name}</a>
        </Link>
          
      )
      )
        
      }
    </div>
    </Layout>
  );
}




     
