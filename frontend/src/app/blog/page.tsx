import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import { getStrapiURL } from '../utils/api-helpers'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
}

async function getData() {
  const res = await fetch(getStrapiURL() + '/api/articles?populate=*', {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Blog() {
  const { data } = await getData()
  // console.log('data: ', data)
  console.log(data[0].attributes.cover.data.attributes.formats.medium.url)

  return (
    <>
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
          Stay up-to-date with the latest industry news as our marketing teams
          finds new ways to re-purpose old CSS tricks articles.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {data.map((article: any) => (
            <FadeIn key={article.id}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={`/post/${article.attributes.slug}`}>
                          {article.attributes.title}
                        </Link>
                      </h2>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={article.attributes.createdAt}>
                            {dayjs(article.attributes.createdAt).format(
                              'MM/DD/YYYY',
                            )}
                          </time>
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                              alt="Chelsea Hagon"
                              src={imageChelseaHagon}
                              className="h-12 w-12 object-cover grayscale"
                            />
                          </div>
                          <div className="text-sm text-neutral-950">
                            <div className="font-semibold">
                              {/* {article.author.name} */}
                              Chelsea Hagon
                            </div>
                            {/* <div>{article.author.role}</div> */}
                            <div>Senior Developer</div>
                          </div>
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.attributes.description}
                      </p>
                      <Button
                        href={`/post/${article.attributes.slug}`}
                        aria-label={`Read more: ${article.attributes.title}`}
                        className="mt-8"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
