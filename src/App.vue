<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
	duration: 1500,
	once: true,
});
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
import Banner from "./pages/home/banner/Banner.vue";
import Marquee from "./pages/home/marquee/Marquee.vue";
import Content from "./pages/home/content/Content.vue";
import LatestEvents from "./pages/home/latestEvents/LatestEvents.vue";
import PolicyIssues from "./pages/home/policyIssues/PolicyIssues.vue";
import Service from "./pages/home/service/Service.vue";
import BottomBanner from "./pages/home/bottomBanner/BottomBanner.vue";
import "@lottiefiles/lottie-player";

import loading from "./assets/loading.json";
import { ref } from "vue";

const isLoading = ref(true);
// 模擬載入時間
setTimeout(() => {
	isLoading.value = false;
}, 2000);
</script>
<template>
	<div v-if="isLoading">
		<lottie-player autoplay loop mode="normal" :src="loading" style="width: 200px"></lottie-player>
	</div>
	<div v-else>
		<Header />
		<Banner />
		<Marquee />
		<Content />
		<LatestEvents />
		<PolicyIssues />
		<Service />
		<BottomBanner />
		<Footer />
	</div>
</template>
<style scoped>
lottie-player {
	position: absolute;
	top: 50vh;
	left: 50vw;
	transform: translate(-50%, -50%);
}
</style>
