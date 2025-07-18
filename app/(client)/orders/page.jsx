'use client';

import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import OrdersComponent from '@/components/OrdersComponent';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
//import { getMyOrders } from '@/sanity/helpers/queries';
import { auth } from '@clerk/nextjs';
import { FileX } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  {/*useEffect(() => {
    const fetchOrders = async () => {
      const { userId } = await auth();

      if (!userId) {
        router.push('/');
        return;
      }

      const fetchedOrders = await getMyOrders(userId);
      setOrders(fetchedOrders);
    };

    fetchOrders();
  }, []);*/}

  return (
    <Container className="py-10">
      {orders?.length ? (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Order List</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-auto">Order Number</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Email</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden sm:table-cell">Invoice Number</TableHead>
                  </TableRow>
                </TableHeader>
                <OrdersComponent orders={orders} />
                <ScrollBar orientation="horizontal" />
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center py-5 md:py-10 px-4">
          <FileX className="h-24 w-24 text-gray-400 mb-4" />
          <Title>No orders found</Title>
          <p className="mt-2 text-sm text-gray-600 text-center max-w-md">
            It looks like you haven&apos;t placed any orders yet. Start shopping
            to see your orders here!
          </p>
          <Button asChild className="mt-6">
            <Link href="/">Browse Products</Link>
          </Button>
        </div>
      )}
    </Container>
  );
};

export default OrdersPage;
