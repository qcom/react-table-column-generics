import React, { useMemo } from 'react'
import { makeColumnBundler } from '../columns'
import { ReactTable } from '../react-table'
import { Backorder } from '../types'

export const BackorderTable = ({ orders }: {
	orders: Backorder[],
}) => {

	const bundler = makeColumnBundler<Backorder>()
	const bundle = bundler(['OrderDate','StepName'])
	const data = useMemo(() => orders, [])
	const memoizedColumns = useMemo(() => bundle, [])

	return (
		<ReactTable<Backorder>
			data={orders}
			columns={memoizedColumns}
		/>
	)
}
