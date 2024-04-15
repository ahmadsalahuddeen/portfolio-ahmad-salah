'use client';
import { Github, GithubIcon, Instagram, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';
import Image from 'next/image';
import { Suspense } from 'react';

const socials = [
  {
    icon: <Twitter size={20} />,
    href: 'https://twitter.com/salahuddeen6017',
    label: 'Twitter',
    handle: '@salahuddeen6017',
  },
  {
    icon: <Mail size={20} />,
    href: 'mailto:dev@ahmadsalahuddeen6017@gmail.com',
    label: 'Email',
    handle: 'ahmadsalahuddeen6017@gmail.com',
  },
  {
    icon: <Github size={20} />,
    href: 'https://github.com/ahmadsalahuddeen',
    label: 'Github',
    handle: 'chronark',
  },
];
function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}
function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name }: { img: any; link: any; name: any }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}>
              {/* <Subs name={name} /> */}
            </Suspense>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function Example() {
  return (
    <div
     className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0"
     >
      <Navigation />

      <div
       className="container md:flex items-center justify-center min-h-screen  px-4 mx-auto"
       >
        <section className=" mt-32">
          <h1 className="prose prose-neutral dark:prose-invert mb-8 text-2xl  font-medium tracking-tighter">
            hey, I'm salah 👋
          </h1>
          <p className="prose prose-neutral dark:prose-invert">
            {`I'm a full-stack developer, optimist, and community ethusiast. I currently `} <Link href="/projects">building</Link>

<span className='not-prose'>

              <Badge href="https://github.com/ahmadsalahuddeen/scope-agency-builder">
              <img
                alt="Scope logo"
                src="/images/scope-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
                />
              Scope  
              </Badge>
                </span>
            {`, a multi-vendor B2B2B Agency builder with `}
            <span className='not-prose'>

            <Badge href="https://nextjs.org">
              <img
                alt="Next.js logomark"
                src="/images/next-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
                />
              Next.js
            </Badge>
                </span>
                .
            {` Other than that, I'm into traveling, desk setups, and van life!`}
            
            
          </p>
          <div className="my-8 columns-2 gap-4 sm:columns-3">
            <div className="relative mb-4 h-40">
              <Image
                alt="getting ready for wine party at DebConf'23"
                src={'/images/debocnfmeet.jpeg'}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative mb-4 h-80 sm:mb-0">
              <Image
                alt="getting ready for wine party at DebConf'23"
                src={'/images/googlemeet.jpg'}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-[-16px] sm:object-center"
              />
            </div>
            <div className="relative h-40 sm:mb-4 sm:h-80">
              <Image
                alt="Desksetup at home "
                src={'/images/desksetup.jpeg'}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover object-top sm:object-center"
              />
            </div>
            <div className="relative mb-4 h-40 sm:mb-0">
              <Image
                alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
                src={'/images/personalphoto.jpg'}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative mb-4 h-40">
              <Image
                alt="me and other debians discussing some serious matters :)"
                src={'/images/devconf.JPG'}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-80">
              <Image
                alt="desk setup"
                src={'/images/desksetup2.jpg'}
                fill
                sizes="(min-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          {/* <div className="prose prose-neutral dark:prose-invert">
            <p>
              I create educational content for developers, teaching them about
              web development, JavaScript and TypeScript, React and Next.js, and
              more. This comes in all forms: blog posts, videos, tweets,
              conference talks, and workshops. You can watch some of my
              favorites below.
            </p>
          </div>
          <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">

            <ChannelLink
    img={avatar}
    name="@leerob"
    link="https://www.youtube.com/@leerob"
    />
    <ChannelLink
    img={vercel}
    name="@vercel"
    link="https://www.youtube.com/@vercelhq"
  />
          </div> */}
          <div className="prose prose-neutral dark:prose-invert">
            <p>
              Over the past years, I've created content on my socials and
              instagram. I try to keep things simple. You'll find writing/videos about
              technologies I'm interested in at the time, or how I'm learning
              and growing in my career, sharing knowledge along the way.
            </p>
          </div>
          {/* <div className="my-8 flex w-full flex-col space-y-4">

            <BlogLink
    name="What Makes A Great Developer Experience?"
    slug="developer-experience"
    />
    <BlogLink name="What is Developer Relations?" slug="devrel" />
  <BlogLink name="The Story of Heroku" slug="heroku" />
          </div>
          <div className="prose prose-neutral dark:prose-invert">
            <p>
              I invest small angel checks into early stage startups building
              tools for developers.
            </p>
          </div> */}
          <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
          <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
              <a className='text-white' href="https://twitter.com/salahuddeen6017">
                <Twitter size={20} />

              </a>
            </div>
            <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
              <a className='text-white' href="https://www.youtube.com/channel/UCOyK9QcS9N_Fn_2OVbuH7qQ">
          <Youtube size={20} />
              </a>
            </div>
            <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
              <a className='text-white' href="https://www.instagram.com/swalahkenb/">
              <Instagram size={20} />
          
              </a>
            </div>
            <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
              <a className='text-white' href="https://www.linkedin.com/in/ahmad-salahuddeen-55357b158/">
                <Linkedin size={20} />
          
              </a>
            </div>
            <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
              <a className='text-white' href="https://github.com/ahmadsalahuddeen">
              <GithubIcon size={20} />
          
              </a>
            </div>
          </div>
          {/* <div className="prose prose-neutral dark:prose-invert">
            <p>
              I've worked with and advised companies on{' '}
              <Link href="/blog/developer-marketing">developer marketing</Link>,{' '}
              <Link href="/blog/devrel">developer relations</Link>, building
              open-source communities, product-led growth, and more.
            </p>
          </div> */}
          <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/salahuddeen6017"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">follow me</p>
              </a>
            </li>
            {/* <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://leerob.substack.com"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">get email updates</p>
              </a>
            </li> */}
          </ul>
        </section>
      </div>
    </div>
  );
}
