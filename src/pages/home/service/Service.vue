<script setup>
import ArrowForward from "../../../assets/icons/arrow-forward.svg";
import Donate from "../../../assets/images/donate.png";
import Mail from "../../../assets/images/mail.png";
import Service from "../../../assets/images/service_1x.png";

import MailModal from "../../../components/modal/MailModal.vue";
import DonateModal from "../../../components/modal/DonateModal.vue";

defineProps({ Donate: String, Service: String });
</script>
<template>
	<div class="container-xxl" id="service">
		<div class="d-flex flex-column flex-lg-row justify-content-center py-11 row gap-2">
			<div class="d-flex flex-column gap-3 p-7 bg-primary rounded-5 fg-1" data-aos="fade-up">
				<div class="d-flex flex-column gap-2">
					<p class="mantou fs-52 text-white">小額支持喵喵</p>
					<p class="text-white fs-5 fw-bold">您的小筆捐款，是每隻毛孩未來的大大動力！</p>
				</div>
				<div class="row justify-content-between align-items-center">
					<div class="col-7 col-lg-6">
						<button
							class="btn btn-light d-flex align-items-center fw-bold rounded-pill px-3 py-2"
							data-bs-toggle="modal"
							data-bs-target="#donateModal"
						>
							小額捐款<img :src="ArrowForward" alt="ArrowForward Icon" />
						</button>
					</div>
					<div class="col-5 col-lg-6">
						<img :src="Donate" alt="Donate" class="img-fluid" />
					</div>
				</div>
			</div>
			<div class="d-flex flex-column gap-3 p-7 bg-secondary rounded-5 fg-1" data-aos="fade-up">
				<div class="d-flex flex-column gap-2">
					<p class="mantou fs-52 text-white">民眾服務信箱</p>
					<p class="text-white fs-5 fw-bold">
						親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
					</p>
				</div>
				<div class="row justify-content-between align-items-center">
					<div class="col-7 col-lg-6">
						<button
							class="btn btn-light d-flex align-items-center fw-bold rounded-pill px-3 py-2"
							data-bs-toggle="modal"
							data-bs-target="#emailModal"
						>
							填寫表單<img :src="ArrowForward" alt="ArrowForward Icon" />
						</button>
					</div>
					<div class="col-5 col-lg-6">
						<img :src="Mail" alt="Mail" class="img-fluid" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<DonateModal :src="Donate" />
	<MailModal :src="Service" />
</template>
<style scoped>
.fg-1 {
	flex: 1 0 0;
}
.fs-52 {
	font-size: 52px;
}
</style>
