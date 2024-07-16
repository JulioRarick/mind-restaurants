import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { OrderTableFilters } from '@/pages/app/orders/order-table-filters'
import { OrderTableRow } from '@/pages/app/orders/order-table-row'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tighter">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16"></TableHead>
                  <TableHead className="w-36">Identificador</TableHead>
                  <TableHead className="w-44">Realizado há</TableHead>
                  <TableHead className="w-36">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-44">Total do pedido</TableHead>
                  <TableHead className="w-44"></TableHead>
                  <TableHead className="w-36"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, index) => {
                  return <OrderTableRow key={index} />
                })}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
