<script>
	import "normalize.css/normalize.css";
	import "../main.scss";
	import { base } from '$app/paths';
</script>

<main>
	<header>
		<nav>
			<a href="{base}/">Home</a>
			<a href="{base}/square">Squares</a>
			<a href="{base}/button">Buttons</a>
			<a href="{base}/browser">Browsers</a>
			<a href="{base}/elements">Elements</a>
			<a href="{base}/card">Cards</a>
			<a href="{base}/marquee">Marquee</a>
			<a href="{base}/typography">Typography</a>
		</nav>
	</header>

	<div class="container">
		<slot />
	</div>
</main>
