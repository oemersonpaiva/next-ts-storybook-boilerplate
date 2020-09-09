import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'React Avançado' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>main</main>

      <footer>footer</footer>
    </div>
  )
}
