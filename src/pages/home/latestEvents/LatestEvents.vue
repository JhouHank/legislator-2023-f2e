<script setup>
import { ref } from "vue";

import ArrowForward from "../../../assets/icons/arrow-forward.svg";
import LatestEventsModal from "../../../components/modal/LatestEventsModal.vue";
import { eventData } from "../../../Model/eventData";

const eventDataRef = ref(eventData);
const number = ref(null);

const set = (block) => {
	number.value = block;
};
</script>
<template>
	<div class="bg-white">
		<div class="container-xxl py-11" id="latestEvents">
			<div
				class="d-flex flex-column justify-content-center align-items-center mb-6"
				data-aos="fade-up"
			>
				<p class="bg-secondary text-white fs-5 py-1 px-9 fw-bold rounded-3">LATEST EVENTS</p>
				<p class="fs-64 mantou primaryGradient">最新活動</p>
			</div>
			<div class="row">
				<div
					class="col-lg-6"
					data-bs-toggle="modal"
					data-bs-target="#latestEventsModal"
					@click="set(1)"
					style="cursor: pointer"
					data-aos="fade-up"
					data-aos-delay="300"
				>
					<div>
						<img :src="eventData.EventCatFirst.img" alt="EventCatFirst_desktop" class="img-fluid" />
					</div>
					<div class="d-flex flex-column gap-1 mt-2">
						<p class="text-success">{{ eventData.EventCatFirst.time }}</p>
						<p>{{ eventData.EventCatFirst.title }}</p>
						<p>
							{{ eventData.EventCatFirst.content }}
						</p>
					</div>
				</div>
				<div class="d-flex flex-column align-items-lg-start align-items-center col-lg-6 gap-12">
					<div
						class="d-flex jusfify-content-center gap-2"
						data-bs-toggle="modal"
						data-bs-target="#latestEventsModal"
						@click="set(2)"
						style="cursor: pointer"
						data-aos="fade-up"
						data-aos-delay="700"
					>
						<div class="w-img">
							<img :src="eventData.EventStreet.img" alt="EventStreet_desktop" class="img-fluid" />
						</div>
						<div class="d-flex flex-column gap-1 fg1">
							<p class="text-success">{{ eventData.EventStreet.time }}</p>
							<p>{{ eventData.EventStreet.title }}</p>
							<p>
								{{ eventData.EventStreet.content }}
							</p>
						</div>
					</div>
					<div
						class="d-flex jusfify-content-center gap-2"
						data-bs-toggle="modal"
						data-bs-target="#latestEventsModal"
						@click="set(3)"
						style="cursor: pointer"
						data-aos="fade-up"
						data-aos-delay="900"
					>
						<div class="w-img">
							<img :src="eventData.EventModel.img" alt="EventModel_desktop" class="img-fluid" />
						</div>
						<div class="d-flex flex-column gap-1 fg1">
							<p class="text-success">{{ eventData.EventModel.time }}</p>
							<p>{{ eventData.EventModel.title }}</p>
							<p>
								{{ eventData.EventModel.content }}
							</p>
						</div>
					</div>
					<div
						class="d-flex jusfify-content-center gap-2"
						data-bs-toggle="modal"
						data-bs-target="#latestEventsModal"
						@click="set(1)"
						style="cursor: pointer"
						data-aos="fade-up"
						data-aos-delay="1100"
					>
						<div class="w-img">
							<img
								:src="eventData.EventCatFirst.img"
								alt="EventCatFirst_desktop"
								class="img-fluid"
							/>
						</div>
						<div class="d-flex flex-column gap-1 fg1">
							<p class="text-success">{{ eventData.EventCatFirst.time }}</p>
							<p>{{ eventData.EventCatFirst.title }}</p>
							<p>
								{{ eventData.EventCatFirst.content }}
							</p>
						</div>
					</div>
					<button
						class="btn py-2 px-3 fw-bold w-xl-25 w-50"
						data-aos="fade-left"
						data-aos-delay="1100"
					>
						查看更多
						<img :src="ArrowForward" alt="ArrowForward Icon" />
					</button>
				</div>
			</div>
		</div>
	</div>

	<LatestEventsModal :number="number" :set="set" :eventData="eventDataRef" />
</template>
<style scoped>
img {
	border-radius: var(--spacer-8, 8px);
}
.fg1 {
	flex: 1 0 0;
}
.w-img {
	width: 200px;
}
.fs-64 {
	font-size: 64px;
}
button {
	border-radius: 500px;
	border: 1px solid var(--default-white, #fff);
	background: var(--gray-100, #f1f5f9);
}
</style>
