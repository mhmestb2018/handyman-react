import React, { useEffect, useState } from 'react'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

import About from './pages/About/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Error from './pages/Error/Error'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'

import Header from './components/Header/Header'
import { auth } from './firebase/utils'

const initialState = {
	currentUser: null,
}

const App = (props) => {
	const [currentUser, setCurrentUser] = useState(initialState)

	useEffect(() => {
		let authListener = null
		authListener = auth.onAuthStateChanged(async (userAuth) => {
			if (!userAuth) {
				setCurrentUser({ currentUser: null })
			}
			// const userRef = await handleUserProfile(userAuth)
			// userRef.onSnapshot((snapshot) => {
			// 	setCurrentUser({
			// 		currentUser: {
			// 			id: snapshot.id,
			// 			...snapshot.data(),
			// 		},
			// 	})
			// })

			setCurrentUser({ currentUser: userAuth })
		})

		return () => {
			authListener()
		}
	}, [])

	return (
		<Router>
			<Header currentUser={currentUser} />
			<main>
				<Switch>
					<Route exact path='/'>
						<Home currentUser={currentUser} />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/cart'>
						<Cart />
					</Route>
					<Route path='/checkout'>
						<Checkout />
					</Route>
					<Route path='/login'>
						<Login currentUser={currentUser} />
					</Route>
					{/* <Route
						path='/login'
						render={() =>
							currentUser ? (
								<Redirect to='/' />
							) : (
								<Login currentUser={currentUser} />
							)
						}></Route> */}
					<Route path='/registration'>
						<Registration currentUser={currentUser} />
					</Route>
					<Route exact path='/products'>
						<Products />
					</Route>
					<Route path='/products/:id' children={<ProductDetails />}></Route>
					<Route path='*'>
						<Error />
					</Route>
				</Switch>
			</main>
		</Router>
	)
}

export default App
