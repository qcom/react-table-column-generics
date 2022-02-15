import React, { useMemo } from 'react'
import { makeColumnBundler } from '../react-table/columns'
import { SalesOrder } from '../types'
import { ReactTable } from '../react-table/generic-tables'

export const SalesOrderTable = ({ orders }: { orders: SalesOrder[] }) => {

	const bundler = makeColumnBundler<SalesOrder>()
	const bundle = bundler(['OrderDate','SalesOrderNo'])
	const data = useMemo(() => orders, [])
	const memoizedColumns = useMemo(() => bundle, [])

	return (
		<ReactTable<SalesOrder>
			data={data}
			columns={memoizedColumns}
		/>
	)
}
