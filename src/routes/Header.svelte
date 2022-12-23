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
<nav class="navbar  navbar-expand-lg navbar-light bg-white">
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
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/users">Users</a>
				</li>
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="/"
						id="navbarScrollingDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Gallery
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
						<li><a class="dropdown-item" href="/gallery/photos">Photos</a></li>
						<li><a class="dropdown-item" href="/gallery/videos">Videos</a></li>
						<li><a class="dropdown-item" href="/gallery/in-news">In News</a></li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/about">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/contact-us">Contact us</a>
				</li>
				<li class="nav-item">
					<button type="button" class="btn btn-info btn-sm"
						><a class="nav-link" href="/donate">Donate</a></button
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
	.social {
		padding: 1rem;
	}
	i {
		cursor: pointer;
	}
	.fa-twitter {
		color: #55acee;
	}
	.fa-youtube {
		color: red;
	}
	.fa-instagram {
		color: #c13584;
	}
	.fa-facebook {
		color: #3b5998;
	}
</style>
