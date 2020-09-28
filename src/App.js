import React, { useEffect, useState } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

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
import { auth, handleUserProfile } from './firebase/utils'

const initialState = {
	currentUser: null,
}

const App = () => {
	const [currentUser, setCurrentUser] = useState('')

	useEffect(() => {
		const authListener = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await handleUserProfile(userAuth)
				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					})
				})
			}

			setCurrentUser(userAuth)
		})

		return () => {
			authListener()
		}
	}, [])

	return (
		<>
			<Header currentUser={currentUser} />
			<main>
				<Switch>
					<Route exact path='/' render={() => <Home />} />
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/cart'>
						<Cart />
					</Route>
					<Route path='/checkout'>
						<Checkout />
					</Route>
					<Route
						path='/login'
						render={() =>
							currentUser ? <Redirect to='/' /> : <Login />
						}></Route>
					<Route
						path='/registration'
						render={() => <Registration currentUser={currentUser} />}
					/>
					<Route exact path='/products'>
						<Products />
					</Route>
					<Route path='/products/:id' children={<ProductDetails />}></Route>
					<Route path='*'>
						<Error />
					</Route>
				</Switch>
			</main>
		</>
	)
}

export default App
