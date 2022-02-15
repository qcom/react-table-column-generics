import React, { useMemo } from 'react'
import { makeColumnBundler } from '../columns'
import { ReactTable } from '../react-table'
import { SalesOrder } from '../types'

export const SalesOrderTable = ({ orders }: { orders: SalesOrder[] }) => {

	const bundler = makeColumnBundler<SalesOrder>()
	const bundle = bundler(['OrderDate','SalesOrderNo'])
	const data = useMemo(() => orders, [])
	const memoizedColumns = useMemo(() => bundle, [])

	return (
		<ReactTable<SalesOrder> data={data} columns={memoizedColumns} />
	)
}
