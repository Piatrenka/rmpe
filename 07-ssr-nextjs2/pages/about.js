import Link from 'next/link'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <p>
        Just about page
      </p>
      <Link href="/">
        <a>Return to Home page</a>
      </Link>
    </Layout>
  )
}