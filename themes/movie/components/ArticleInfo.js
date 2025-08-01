import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/utils/formatDate'
import SmartLink from '@/components/SmartLink'

export const ArticleInfo = props => {
  const { post } = props
  const { locale } = useGlobal()

  return (
    <section className='w-full mx-auto mb-4'>
      <h2 className='text-5xl font-semibold py-10 dark:text-white text-center'>{post?.title}</h2>

      <div className='flex gap-3 font-semibold text-sm items-center justify-center'>
        <SmartLink
          href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
          passHref
          className='pl-1 mr-2 cursor-pointer'>
          {post?.publishDay}
        </SmartLink>

        {post?.type !== 'Page' && (
          <>
            <SmartLink href={`/category/${post?.category}`} passHref className='cursor-pointer text-md mr-2 text-green-500'>
              {post?.category}
            </SmartLink>
          </>
        )}

        <div className='flex py-1 space-x-3'>
          {post?.tags?.length > 0 && (
            <>
              {locale.COMMON.TAGS} <span>:</span>
            </>
          )}
          {post?.tags?.map(tag => {
            return (
              <SmartLink href={`/tag/${tag}`} key={tag} className='text-yellow-500 mr-2'>
                {tag}
              </SmartLink>
            )
          })}
        </div>
      </div>
    </section>
  )
}
