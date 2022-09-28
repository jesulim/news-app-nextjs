import PageLayout from '../components/PageLayout.jsx'
import styles from '../styles/Home.module.css'
import Image from 'next/image.js'

export default function Home({ articles }) {
  return (
    <PageLayout title={'NewsApp - Home'}>
      <div className={styles.container}>
        {articles.length === 0 && <p>No tenemos articulos</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index}>
            <Image
              alt={`Image for the article ${article.title}`}
              src={article.urlToImage}
              width={450}
              height={300}
              layout='responsive'
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

// export async function getServerSideProps() {
//   const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ccbe20950df2428d95ba27ecfaa660a1')
//   const { articles } = await response.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }

export async function getStaticProps() {
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ccbe20950df2428d95ba27ecfaa660a1')
  const { articles } = await response.json()
  return {
    props: {
      articles
    }
  }
}