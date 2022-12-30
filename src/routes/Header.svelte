<!-- <div class="container-fluid social bg-white">
	<div class="row">
		<div class="col-lg-6" />
		<div class="col-lg-6 d-flex justify-content-around align-items-center">
			<i class="fa-brands fa-twitter  fa-2x" />
			<i class="fa-brands fa-facebook fa-2x " />
			<i class="fa-brands fa-instagram  fa-2x" />
			<i class="fa-brands fa-youtube  fa-2x" />
		</div>
	</div>
</div> -->
<!-- <hr class="dropdown-divider m-0" /> -->
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white">
	<div class="container">
		<a href="/" class="navbar-brand"
			><img
				width="275"
				height="140"
				src="logo.png"
				alt="logo"
				style="max-width: 100%; height: auto;"
			/></a
		>

		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarText"
			aria-controls="navbarText"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item px-2">
					<a class="nav-link active text-decoration-none" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item px-2">
					<a class="nav-link text-decoration-none" href="/users">Users</a>
				</li>
				<li class="nav-item px-2 dropdown">
					<a
						class="nav-link dropdown-toggle text-decoration-none"
						href="/"
						id="navbarScrollingDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Gallery
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
						<li><a class="dropdown-item text-decoration-none" href="/gallery/photos">Photos</a></li>
						<li><a class="dropdown-item text-decoration-none" href="/gallery/videos">Videos</a></li>
						<li>
							<a class="dropdown-item text-decoration-none" href="/gallery/in-news">In News</a>
						</li>
					</ul>
				</li>
				<li class="nav-item px-2">
					<a class="nav-link text-decoration-none" href="/about">About</a>
				</li>
				<li class="nav-item px-2">
					<a class="nav-link text-decoration-none" href="/contact-us">Contact us</a>
				</li>
				<li class="nav-item px-2">
					<button type="button" class="btn btn-info btn-sm btn-round"
						><a class="nav-link text-decoration-none" href="/donate">Donate</a></button
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	a {
		text-transform: uppercase;
	}
	.navbar-collapse {
		flex-grow: 0 !important;
	}
	.btn-info {
		background-color: #84366d;
	}
	.btn-info > a {
		color: white !important;
	}
	a {
		font-family: Montserrat;
		font-size: 16px;
		text-transform: uppercase;
		font-weight: 700;
	}
</style>
