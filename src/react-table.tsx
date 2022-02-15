import React from 'react'
import {
	useTable,
	TableInstance, Row, Column, Cell,
} from 'react-table'

export const ReactTable = <T extends object>({ data, columns }: {
	data: T[],
	columns: Column<T>[],
}) => {

	const table = useTable<T>({ columns, data })
	const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = table

	return (
		<>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => {
								return (
									<th {...column.getHeaderProps()}>
										<div>
											{column.render('Header')}
										</div>
									</th>
								)
							})}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map(cell => {
									return (
										<td {...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}
