<script setup>
import cancel from "../../assets/icons/cancel.svg";
import success from "../../assets/images/success.png";

import { Modal } from "bootstrap";
import { ref } from "vue";
const confirm = ref(null);
const mailConfirm = (num) => {
	confirm.value = num;
};
defineProps(["src"]);
</script>
<template>
	<div>
		<div
			class="modal fade"
			id="emailModal"
			tabindex="-1"
			aria-labelledby="emailModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-xl modal-dialog-scrollable">
				<div class="modal-content rounded-4">
					<div class="d-flex justify-content-between py-3 px-5">
						<p id="emailModalLabel" class="fs-2 fw-bold">民眾服務信箱</p>
						<img
							:src="cancel"
							alt="cancel"
							class="cancel"
							data-bs-dismiss="modal"
							aria-label="Close"
							@click="mailConfirm(null)"
						/>
					</div>
					<div class="modal-body pt-1 pb-5 px-5">
						<div class="row">
							<div class="col-xxl-7 service p-6 rounded-5">
								<p class="text-dark fs-1 fw-bold">分享您的想法<br />一同為我們的未來打造更美好！</p>
								<div class="d-flex justify-content-center">
									<!-- <img :src="src" alt="Email Image" class="img-fluid" /> -->
								</div>
							</div>
							<form
								class="col-xxl-5 d-flex flex-column gap-2"
								@submit.prevent
								v-if="confirm === null"
							>
								<ul class="list-unstyled d-flex flex-column gap-3">
									<li>
										<p class="fw-bold fs-5">您的姓名</p>
										<div
											class="d-flex align-items-center align-self-stretch bg-light rounded-2 px-2"
										>
											<input
												class="form-control bg-transparent p-2 border-0"
												type="text"
												placeholder="姓名"
											/>
										</div>
									</li>
									<li>
										<p class="fw-bold fs-5">Email</p>
										<div
											class="d-flex align-items-center align-self-stretch bg-light rounded-2 px-2"
										>
											<input
												class="form-control bg-transparent p-2 border-0"
												type="email"
												placeholder="email"
											/>
										</div>
									</li>
									<li>
										<p class="fw-bold fs-5">手機</p>
										<div
											class="d-flex align-items-center align-self-stretch bg-light rounded-2 px-2"
										>
											<input
												class="form-control bg-transparent p-2 border-0"
												type="phone"
												placeholder="手機號碼	"
											/>
										</div>
									</li>
									<li>
										<p class="fw-bold fs-5">您的建言</p>
										<div
											class="d-flex align-items-center align-self-stretch bg-light rounded-2 px-2"
										>
											<textarea
												class="form-control bg-transparent p-2 border-0"
												placeholder="輸入內容"
											/>
										</div>
									</li>
								</ul>
								<button
									class="btn btn-primary py-3 px-4 rounded-pill text-white fw-bold fs-5"
									@click="mailConfirm(1)"
								>
									送出意見
								</button>
							</form>
							<div
								v-else
								class="col-5 d-flex flex-column justify-content-center align-items-center gap-4"
							>
								<p>感謝您的意見</p>
								<img :src="success" alt="success" />
								<button
									data-bs-dismiss="modal"
									aria-label="Close"
									class="btn btn-light py-2 px-7 rounded-pill"
									@click="mailConfirm(null)"
								>
									關閉
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
img[alt="success"] {
	width: 187px;
	height: 166.608px;
}
.service {
	display: flex;
	width: 731px;
	padding: var(--spacer-64, 64px) 60px;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	flex-shrink: 0;
	align-self: stretch;

	background: url("../../assets/images/service_1x.png") lightgray 50% / cover no-repeat;
	background-size: 731px 480px;
	background-position-y: bottom;
	border-radius: var(--spacer-24, 24px);
	background-color: #e3f8ff;
}

textarea:focus,
input[type="number"]:focus,
input[type="text"]:focus,
input[type="email"]:focus,
input[type="phone"]:focus,
.uneditable-input:focus {
	border: 0;
	border-color: none;
	box-shadow: none;
	outline: 0 none;
}
textarea {
	height: 250px;
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
