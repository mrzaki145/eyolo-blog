import { formatDate } from "@/libs/utils/formatDate";
import { Post } from "@/types/post";
// import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

const PostTwo = ({ post }: Props) => {
  return (
    <article className="post-card post-category-bottom group relative has-line-link">
      <div className="relative">
        <div className="mb-4">
          <span className="text-sm flex gap-2 items-center mb-3 uppercase">
            {/* prettier-ignore */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6663 2.66677H11.333V2.0001C11.333 1.82329 11.2628 1.65372 11.1377 1.5287C11.0127 1.40367 10.8432 1.33344 10.6663 1.33344C10.4895 1.33344 10.32 1.40367 10.1949 1.5287C10.0699 1.65372 9.99967 1.82329 9.99967 2.0001V2.66677H5.99967V2.0001C5.99967 1.82329 5.92944 1.65372 5.80441 1.5287C5.67939 1.40367 5.50982 1.33344 5.33301 1.33344C5.1562 1.33344 4.98663 1.40367 4.8616 1.5287C4.73658 1.65372 4.66634 1.82329 4.66634 2.0001V2.66677H3.33301C2.80257 2.66677 2.29387 2.87748 1.91879 3.25255C1.54372 3.62763 1.33301 4.13633 1.33301 4.66677V12.6668C1.33301 13.1972 1.54372 13.7059 1.91879 14.081C2.29387 14.4561 2.80257 14.6668 3.33301 14.6668H12.6663C13.1968 14.6668 13.7055 14.4561 14.0806 14.081C14.4556 13.7059 14.6663 13.1972 14.6663 12.6668V4.66677C14.6663 4.13633 14.4556 3.62763 14.0806 3.25255C13.7055 2.87748 13.1968 2.66677 12.6663 2.66677ZM13.333 12.6668C13.333 12.8436 13.2628 13.0131 13.1377 13.1382C13.0127 13.2632 12.8432 13.3334 12.6663 13.3334H3.33301C3.1562 13.3334 2.98663 13.2632 2.8616 13.1382C2.73658 13.0131 2.66634 12.8436 2.66634 12.6668V8.0001H13.333V12.6668ZM13.333 6.66677H2.66634V4.66677C2.66634 4.48996 2.73658 4.32039 2.8616 4.19536C2.98663 4.07034 3.1562 4.0001 3.33301 4.0001H4.66634V4.66677C4.66634 4.84358 4.73658 5.01315 4.8616 5.13817C4.98663 5.2632 5.1562 5.33343 5.33301 5.33343C5.50982 5.33343 5.67939 5.2632 5.80441 5.13817C5.92944 5.01315 5.99967 4.84358 5.99967 4.66677V4.0001H9.99967V4.66677C9.99967 4.84358 10.0699 5.01315 10.1949 5.13817C10.32 5.2632 10.4895 5.33343 10.6663 5.33343C10.8432 5.33343 11.0127 5.2632 11.1377 5.13817C11.2628 5.01315 11.333 4.84358 11.333 4.66677V4.0001H12.6663C12.8432 4.0001 13.0127 4.07034 13.1377 4.19536C13.2628 4.32039 13.333 4.48996 13.333 4.66677V6.66677Z" fill="currentColor"/></svg>
            {formatDate(post.publishedAt)}
          </span>

          <h3 className="text-2xl text-dark leading-relaxed mb-4 line-link line-clamp-3">
            <Link
              href={`/${post.slug}`}
              className="link-stretched line-link-el"
              title={post.title}
            >
              {post.title}
            </Link>
          </h3>

          <ul className="inline-flex flex-wrap items-center gap-3 gap-y-1 uppercase text-sm text-[#464536]">
            <li className="flex items-center">
              {/* <Image
                src={authorImage}
                alt={`Author of the post - ${author}`}
                height={24}
                width={24}
                className="h-6 w-6 border border-[#ABABAB] rounded-full mr-2 bg-white/40"
              /> */}
              {post.author?.name}
            </li>
            <li>•</li>
            <li>{post.readTime} MIN TO READ</li>
          </ul>
        </div>

        <span className="post-category bg-light text-dark z-10">
          <Link
            href={`/category/${post.category?.slug}`}
            className="border-border transition duration-300 hover:bg-dark hover:text-white hover:border-dark"
          >
            {post.category?.title}
          </Link>

          <div className="text-light corner left">
            {/* prettier-ignore */}
            <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>
          </div>
          <div className="text-light corner bottom">
            {/* prettier-ignore */}
            <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>
          </div>
        </span>
        <Image
          className="rounded-xl md:rounded-2xl w-full max-h-96 aspect-[9/12] object-cover bg-white/40"
          src={`/media/${post.thumbnail.filename}`}
          height={post.thumbnail.height}
          width={post.thumbnail.width}
          alt={post.title}
        />
      </div>
    </article>
  );
};

export default PostTwo;
