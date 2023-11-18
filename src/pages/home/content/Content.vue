<script setup>
import advocate from "../../../assets/images/advocate_1x.png";
</script>
<template>
	<div class="bg-warning py-11" id="content">
		<div class="container-xxl">
			<div class="bg bg-info row flex-xl-row flex-column">
				<div
					class="col-12 col-xl-6 d-flex flex-column align-items-center justify-content-center px-10 py-6 gap-4"
				>
					<div
						class="d-flex flex-column justify-content-center align-items-center"
						data-aos="fade-up"
					>
						<p class="advocate bg-secondary text-white fs-5 py-1 px-9">ADVOCATE</p>
						<h2 class="mantou primaryGradient">候選人主張</h2>
					</div>
					<h3 class="fw-bold" data-aos="fade-up" data-aos-delay="300">
						我堅信 ! 藉由推動更完善的<span class="text-primary">貓咪福利</span
						>和相關政策，更是間接地投資於 <span class="text-primary">台灣的未來</span>。
					</h3>
					<p class="fs-5" data-aos="fade-up" data-aos-delay="700">
						畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP
						經濟帶來巨大效益。<br />
						因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
					</p>
				</div>
				<div class="col-12 col-xl-6">
					<img :src="advocate" alt="advocate_1x" class="img-fluid rounded-5 d-block mx-auto" />
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
/* img {
	max-width: 648px;
	align-self: stretch;
} */
h2 {
	font-size: 52px;
}
.bg {
	border-radius: var(--spacer-32, 32px);
}
/* .bg2 {
	max-width: 648px;
	align-self: stretch;
} */
.advocate {
	border-radius: var(--spacer-8, 8px);
}
</style>
