<script>
	// @ts-nocheck

	export let data;
</script>

<div class="">
	<div class="row">
		<div class="col-lg-6 col-sm-12">
			<h4>Contact us</h4>
			<span class="d-inline-block">
				<h5>Address:</h5>
				<p>{data.address}</p>
			</span>
			<span class="d-inline-block">
				<h5>Phone:</h5>
				<p>{data.phoneNumber}</p>
			</span>

			<span class="d-inline-block">
				<h5>Email:</h5>
				<p>{data.email}</p>
			</span>
		</div>
	</div>
</div>
