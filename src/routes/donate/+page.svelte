<script>
	// @ts-nocheck

	export let data;
</script>

<div>
	<h5>
		Our organization does a lot of social work which is not possible without your cooperation, so
		support us by donating, your donation will not go bad. We will use the donation only for the
		education of poor children and for social work, your small donation can be very useful in
		someone’s life, so make sure to donate accordingly.
	</h5>

	<div class="container">
		<div class="row">
			<div class="card w-50 ">
				<img src={data.qr.img} class="card-img-top" alt="..." />
			</div>

			<div class="card w-50 ">
				<h5>Bank Details</h5>

				<span>
					<h6>Bank Name:</h6>
					<p>{data.bank.bankName}</p>
					<h6>Account Number:</h6>
					<p>{data.bank.accountNumber}</p>
					<h6>IFSC Code:</h6>
					<p>{data.bank.ifscCode}</p>
					{#each data.bank.upi as { name, number }}
						<h6>{name}:</h6>
						<p>{number}</p>
					{/each}
				</span>
			</div>
		</div>
	</div>
</div>

<style>
	img {
		width: 100%;
		height: auto;
	}
</style>
