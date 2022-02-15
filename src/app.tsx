import ReactDOM from 'react-dom'
import React from 'react'
import { SalesOrderTable } from './tables/SalesOrderTable'
import { BackorderTable } from './tables/BackorderTable'

const App = () => {
	const orders = [
		{ OrderDate: new Date(), SalesOrderNo: '1' },
		{ OrderDate: new Date(), SalesOrderNo: '2' },
		{ OrderDate: new Date(), SalesOrderNo: '3' },
	]
	const backorders = [
		{ OrderDate: new Date(), StepName: 'Step A)' },
		{ OrderDate: new Date(), StepName: 'Step B)' },
	]

	return (
		<>
			<h1>App</h1>

			<SalesOrderTable orders={orders} />
			<BackorderTable orders={backorders} />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))