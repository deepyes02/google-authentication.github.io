'use client'
import { useEffect } from 'react'
import styles from './page.module.css'


declare global {
	interface Window {
		afterLoginCallback : (response : {credentials : string, clientId : string, client_id:string, select_by:string}) => void
	}
}

export default function Dashboard() {

	useEffect(() => {
		window.afterLoginCallback = (response) => {
			console.log('Encoded JWT ID token ,', response)
		}
	})


	return (
		<>
			<div className={styles.dashboard}>
				<h2>Dashboard</h2>

			</div>
			<div id="g_id_onload"
				data-client_id="467111421322-rk3b6lq2e7fsr2en8cotui9ofjurk8j9.apps.googleusercontent.com"
				data-context="signin"
				data-ux_mode="popup"
				data-callback="afterLoginCallback"
				data-auto_prompt="false">
			</div>

			<div className="g_id_signin"
				data-type="standard"
				data-shape="rectangular"
				data-theme="outline"
				data-text="signin_with"
				data-size="large"
				data-logo_alignment="left">
			</div>


		</>


	)
}