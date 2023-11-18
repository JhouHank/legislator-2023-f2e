<script setup>
import cancel from "../../assets/icons/cancel.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import YoutubeIcon from "../../assets/icons/youtube.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";

import { Modal } from "bootstrap";

defineProps(["number", "set", "eventData"]);
</script>
<template>
	<div>
		<div
			class="modal fade"
			id="latestEventsModal"
			tabindex="-1"
			aria-labelledby="latestEventsModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-xl modal-dialog-scrollable">
				<div class="modal-content rounded-4">
					<div class="d-flex justify-content-between align-items-center py-3 px-5">
						<p id="latestEventsModalLabel" class="fs-2 fw-bold">最新活動</p>
						<img
							:src="cancel"
							alt="cancel"
							class="cancel"
							data-bs-dismiss="modal"
							aria-label="Close"
						/>
					</div>
					<div class="modal-body pt-1 pb-5 px-5">
						<div class="row">
							<div class="col-12 col-lg-5 d-flex flex-column">
								<img
									:src="
										number === 1
											? eventData.EventCatFirst.img
											: number === 2
											? eventData.EventStreet.img
											: eventData.EventModel.img
									"
									alt="src"
									class="img-fluid mb-2"
								/>
								<p class="mb-1">
									{{
										number === 1
											? eventData.EventCatFirst.title
											: number === 2
											? eventData.EventStreet.title
											: eventData.EventModel.title
									}}
								</p>
								<ul class="d-flex align-items-center gap-1 list-unstyled">
									<li>
										<span>分享</span>
									</li>
									<li>
										<img :src="FacebookIcon" alt="FacebookIcon" />
									</li>
									<li>
										<img :src="InstagramIcon" alt="InstagramIcon" />
									</li>
									<li>
										<img :src="YoutubeIcon" alt="YoutubeIcon" />
									</li>
									<li>
										<img :src="TwitterIcon" alt="TwitterIcon" />
									</li>
								</ul>
							</div>
							<div class="col-12 col-lg-7 d-flex flex-column gap-1">
								<p class="text-primary fw-bold fs-3">
									{{
										number === 1
											? eventData.EventCatFirst.title
											: number === 2
											? eventData.EventStreet.title
											: eventData.EventModel.title
									}}
								</p>
								<p class="text-success fs-7">
									{{
										number === 1
											? eventData.EventCatFirst.time
											: number === 2
											? eventData.EventStreet.time
											: eventData.EventModel.time
									}}
								</p>
								<p class="pb-7">
									{{
										number === 1
											? eventData.EventCatFirst.content
											: number === 2
											? eventData.EventStreet.content
											: eventData.EventModel.content
									}}
								</p>
								<div class="d-flex flex-column gap-2 bg-light rounded-3 p-2">
									<p class="fw-bold">更多活動</p>
									<div class="d-flex flex-lg-row flex-column gap-2">
										<div
											class="d-flex flex-column gap-9 fg1"
											@click="set(number === 1 ? 2 : number === 2 ? 3 : 1)"
											style="cursor: pointer"
										>
											<img
												:src="
													number === 1
														? eventData.EventStreet.img
														: number === 2
														? eventData.EventModel.img
														: eventData.EventCatFirst.img
												"
												alt="street"
												class="img-fluid rounded-4"
											/>
											<p>
												{{
													number === 1
														? eventData.EventStreet.title
														: number === 2
														? eventData.EventModel.title
														: eventData.EventCatFirst.title
												}}
											</p>
										</div>
										<div
											class="d-flex flex-column gap-9 fg1"
											@click="set(number === 1 ? 3 : number === 2 ? 1 : 2)"
											style="cursor: pointer"
										>
											<img
												:src="
													number === 1
														? eventData.EventModel.img
														: number === 2
														? eventData.EventCatFirst.img
														: eventData.EventStreet.img
												"
												alt="event"
												class="img-fluid rounded-4"
											/>
											<p>
												{{
													number === 1
														? eventData.EventModel.title
														: number === 2
														? eventData.EventCatFirst.title
														: eventData.EventStreet.title
												}}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.fg1 {
	flex: 1 0 0;
}
li {
	cursor: pointer;
}
textarea:focus,
input[type="number"]:focus,
.uneditable-input:focus {
	border: 0;
	border-color: none;
	box-shadow: none;
	outline: 0 none;
}
.option {
	border-radius: var(--spacer-16, 16px);
	border: 2px solid var(--gray-200, #e2e8f0);
	background: var(--default-white, #fff);
}
.donate {
	width: 140px;
}

input {
	border-radius: var(--spacer-8, 8px);
	background: var(--gray-100, #f1f5f9);
}
</style>
