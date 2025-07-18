'use client';
import { headerData } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HeaderMenu = ({ categories }) => {
  const pathname = usePathname();

  return (
    
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">

      {/*<Link
        href="/"
        className={`hover:text-darkColor hoverEffect relative group ${
          pathname === '/' ? 'text-darkColor' : ''
        }`}
      >
        Home
        <span
          className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${
            pathname === '/' ? 'w-1/2' : ''
          }`}
        />
        <span
          className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${
            pathname === '/' ? 'w-1/2' : ''
          }`}
        />
      </Link>*/}
      {
        headerData?.map((item)=>(
          <Link key={item?.title} href={item?.href}>{item?.title}</Link>
        ))
      }

      {categories?.map((category) => {
        const isActive = pathname === `/category/${category?.slug?.current}`;
        return (
          <Link
            key={category?._id}
            href={`/category/${category?.slug?.current}`}
            className={`hover:text-darkColor hoverEffect relative group ${
              isActive ? 'text-darkColor' : ''
            }`}
          >
            {category?.title}
            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${
                isActive ? 'w-1/2' : ''
              }`}
            />
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${
                isActive ? 'w-1/2' : ''
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
