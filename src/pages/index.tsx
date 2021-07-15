import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import { apiClient } from 'utils/utils'

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Home({ content }: HomeProps) {
  return (
    <>
      <div className="mb-4 text-3xl font-bold">Home</div>
      <div className="max-w-screen-md text-sm">{content}</div>
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<{ content: string }>> {
  const { data } = await apiClient.get<{ data: string }>('/content')
  return {
    props: {
      content: data.data,
    },
    revalidate: 60,
  }
}
