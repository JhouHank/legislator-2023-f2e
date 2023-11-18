<script setup></script>
<template>
	<div class="container-xxl py-11">
		<div class="d-flex flex-column align-items-center">
			<div class="d-flex justify-content-center mb-12" data-aos="fade-up">
				<p class="mantou tmr primaryGradient">台灣的明天 喵先鋪路</p>
			</div>
			<h3
				class="meow fw-bold px-2 py-9 d-flex align-items-center text-primary"
				data-aos="flip-down"
				data-aos-delay="300"
			>
				<p class="circle fs-2 text-center text-white primaryGradient me-1 fw-bolder">3</p>
				喵立翰 Miao Li-Han
			</h3>
		</div>
	</div>
</template>
<style scoped>
.tmr {
	font-size: 64px;
	line-height: 105%;
	letter-spacing: 2px;
}
.circle {
	display: flex;
	width: 50px;
	height: 50px;
	padding: 7.353px 16.912px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 7.353px;
	border-radius: 367.647px;
	background: var(--Gradient, linear-gradient(90deg, #e5793b 1.54%, #ff4185 97.86%));
}
.meow {
	/* Bold/H1 Heading */
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -0.8px;

	text-align: center;
	border-radius: var(--spacer-16, 16px);
	border: 1px solid var(--default-white, #fff);
	background: rgba(255, 255, 255, 0.9);
	box-shadow: 0px 4px 12px 0px rgba(163, 180, 203, 0.2);
}
</style>
