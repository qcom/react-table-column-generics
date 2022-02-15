import React from 'react'
import moment from 'moment'
import { Column } from 'react-table'

export const OrderDate: Column<{ OrderDate: string }> = {
	Header: 'Order Date',
	accessor: 'OrderDate',
	Cell: ({ value }) => moment(value).format('M/D/YYYY'),
}

export const SalesOrderNo: Column<{ SalesOrderNo: string }> = {
	Header: 'Order',
	accessor: 'SalesOrderNo',
	Cell: ({ value }) => <a href={`/order/${value}`}>{value}</a>,
}

export const StepName: Column<{ StepName: string }> = {
	Header: 'Step',
	accessor: 'StepName',
	width: 250,
}

const allColumns = { OrderDate, SalesOrderNo, StepName }

export function makeColumnBundler<T extends object>() {
	return function<U extends (keyof typeof allColumns) & keyof T>(
		columnKeys: U[],
	) {
		const columns = columnKeys.map(k => allColumns[k])
		return columns as unknown as Column<T>[] // TODO: avoid type assertions
	}
}