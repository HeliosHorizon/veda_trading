'use client';

import React, { useEffect, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import Container from './Container';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon.jsx';
import { useUser } from '@clerk/nextjs';
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { ListOrdered } from 'lucide-react';
//import { getAllCategories, getMyOrders } from '@/sanity/helpers/queries';

const Header = () => {
  const { user } = useUser();
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);

  {/*useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await getAllCategories();
      setCategories(fetchedCategories);

      if (user?.id) {
        const fetchedOrders = await getMyOrders(user.id);
        setOrders(fetchedOrders);
      }
    };

    fetchData();
  }, [user]);*/}

  return (
    <header className="border-b border-b-gray-400 py-5 sticky top-0 z-50 bg-white">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu categories={categories} />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo>Veda-Trading</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />

          <ClerkLoaded>
            <SignedIn>
              <Link href="/orders" className="group relative">
                <ListOrdered className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
                <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                  {orders?.length || 0}
                </span>
              </Link>
              <UserButton />
            </SignedIn>

            {!user && (
              <SignInButton mode="modal">
                <button className="text-sm font-semibold hover:text-darkColor hoverEffect">
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
