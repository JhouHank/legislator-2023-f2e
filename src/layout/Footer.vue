<script setup>
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
</script>
<template>
	<footer class="bgColorTheme2 d-flex justify-content-center py-6">
		<div class="container-xxl row">
			<div class="col-6">
				<div class="d-flex mb-2">
					<p class="circle fs-5 text-center text-white me-1 fw-bolder">3</p>
					<h3 class="text-primary text-center fw-bold">喵立翰 Miao Li-Han</h3>
				</div>
				<div class="d-flex align-items-center gap-1 mb-2">
					<a href="#"><img :src="FacebookIcon" alt="Facebook Icon" /></a>
					<a href="#"><img :src="InstagramIcon" alt="Instagram Icon" /></a>
					<a href="#"><img :src="YoutubeIcon" alt="Youtube Icon" /></a>
				</div>
				<div>
					<p>© 2023 喵立翰 Miao Li-Han 版權所有</p>
				</div>
			</div>
			<div class="col-6">
				<h4 class="mb-2 fw-bolder">競選總部</h4>
				<p>
					辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓<br />
					電話：(02) 888-5678<br />
					電子郵件地址：meowoffice@linmeow.tw
				</p>
			</div>
		</div>
	</footer>
</template>
<style scoped>
a {
	display: flex;
	width: 48px;
	height: 48px;
	padding: 14px 10px;
	justify-content: center;
	align-items: center;

	border-radius: 500px;
	background: var(--default-white, #fff);
}
.circle {
	display: flex;
	width: var(--spacer-32, 32px);
	height: var(--spacer-32, 32px);
	padding: 4.706px 10.824px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4.706px;
	border-radius: 235.294px;
	background: var(--Gradient, linear-gradient(90deg, #e5793b 1.54%, #ff4185 97.86%));
}
</style>
