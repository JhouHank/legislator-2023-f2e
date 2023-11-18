<script setup>
import LogoIcon from "../assets/images/logo.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
</script>
<template>
	<header class="position-sticky fixed-top px-3 py-2">
		<nav class="d-flex justify-content-between align-items-center px-3 py-9">
			<div>
				<a href="#" class="d-flex align-items-center text-dark">
					<img :src="LogoIcon" alt="Logo Icon" />
					<h1 class="ps-1 fs-4 text-primary fw-bold">喵立翰 Miao Li-Han</h1>
				</a>
			</div>
			<ul class="d-none d-xl-flex list-unstyled gap-2">
				<li class="p-1"><a href="#content">候選人主張</a></li>
				<li class="p-1"><a href="#latestEvents">最新活動</a></li>
				<li class="p-1"><a href="#policyIssues">政策議題</a></li>
				<li class="p-1"><a href="#service">小額捐款</a></li>
				<li class="p-1"><a href="#service">民眾服務信箱</a></li>
			</ul>
			<div class="d-flex gap-2">
				<a href="#"><img :src="FacebookIcon" alt="Facebook Icon" /></a>
				<a href="#"><img :src="InstagramIcon" alt="Instagram Icon" /></a>
				<a href="#"><img :src="YoutubeIcon" alt="Youtube Icon" /></a>
			</div>
		</nav>
	</header>
</template>
<style scoped>
nav {
	border-radius: var(--spacer-16, 16px);
	border: 1px solid var(--default-white, #fff);
	background-color: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(12px);
}
</style>
