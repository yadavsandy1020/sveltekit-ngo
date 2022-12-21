<script>
	// @ts-nocheck

	export let data;
</script>

<div class="accordion" id="accordionPanelsStayOpen">
	{#each data.about as accordion}
		<div class="accordion-item">
			<h2 class="accordion-header" id="{accordion.mainHeadingId}}">
				<button
					class={`accordion-button`}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#${accordion.mainHeadingId}`}
					aria-expanded="true"
					aria-controls={accordion.mainHeadingId}
				>
					{accordion.mainHeading}
				</button>
			</h2>
			<div
				id={accordion.mainHeadingId}
				class="accordion-collapse collapse show"
				aria-labelledby={accordion.mainHeadingId}
			>
				<div class="accordion-body">
					<strong>This is the first item's accordion body.</strong> It is shown by default, until
					the collapse plugin adds the appropriate classes that we use to style each element. These
					classes control the overall appearance, as well as the showing and hiding via CSS
					transitions. You can modify any of this with custom CSS or overriding our default
					variables. It's also worth noting that just about any HTML can go within the
					<code>.accordion-body</code>, though the transition does limit overflow.
				</div>
			</div>
		</div>
	{/each}
</div>
