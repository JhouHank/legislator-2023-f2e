<script setup>
import cancel from "../../assets/icons/cancel.svg";
import success from "../../assets/images/success.png";
import { ref } from "vue";
import { Modal } from "bootstrap";

const confirm = ref(null);
const donateConfirm = (num) => {
	confirm.value = num;
};
defineProps(["src"]);
</script>
<template>
	<div>
		<div
			class="modal fade"
			id="donateModal"
			tabindex="-1"
			aria-labelledby="donateModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-xl modal-dialog-scrollable">
				<div class="modal-content rounded-4">
					<div class="d-flex justify-content-between py-3 px-5">
						<p id="donateModalLabel" class="fs-2 fw-bold">小額捐款</p>
						<img
							:src="cancel"
							alt="cancel"
							class="cancel"
							data-bs-dismiss="modal"
							aria-label="Close"
							@click="donateConfirm(null)"
						/>
					</div>
					<div class="modal-body pt-1 pb-5 px-5">
						<div class="row">
							<div class="col-7 p-6 bg-warning rounded-5">
								<p class="text-primary fs-1 fw-bold">
									您的小筆捐款<br />是每隻毛孩未來的大大動力！
								</p>
								<p class="pt-2">目前小額贊助總金額</p>
								<p class="fs-1 fw-bold">987,655,873</p>
								<div class="d-flex justify-content-center">
									<img :src="src" alt="Donate Image" class="img-fluid" />
								</div>
							</div>
							<form class="col-5 d-flex flex-column gap-2" @submit.prevent v-if="confirm === null">
								<p class="fw-bold fs-5">捐款方案</p>
								<div class="option btn py-3 px-2 d-flex align-items-center">
									<p class="text-primary fw-bold fs-5">喵星人之友</p>
									<div class="d-flex align-items-center ms-auto fs-5 gap-1">
										<p>NT$</p>
										<p class="fw-bold fs-4">600</p>
									</div>
									<p class="donate d-flex justify-content-end fs-7 text-success py-1">
										已有 9,957 人贊助
									</p>
								</div>
								<div class="option btn py-3 px-2 d-flex align-items-center">
									<p class="text-primary fw-bold fs-5">喵星人大使</p>
									<div class="d-flex align-items-center ms-auto fs-5 gap-1">
										<p>NT$</p>
										<p class="fw-bold fs-4">6000</p>
									</div>
									<p class="donate d-flex justify-content-end fs-7 text-success py-1">
										已有 2,000 人贊助
									</p>
								</div>
								<div class="option btn py-3 px-2 d-flex align-items-center">
									<p class="text-primary fw-bold fs-5">喵星人傳奇</p>
									<div class="d-flex align-items-center ms-auto fs-5 gap-1">
										<p>NT$</p>
										<p class="fw-bold fs-4">60000</p>
									</div>
									<p class="donate d-flex justify-content-end fs-7 text-success py-1">
										已有 999 人贊助
									</p>
								</div>
								<div class="option btn py-3 px-2 d-flex flex-column align-items-start gap-1">
									<p class="text-primary fw-bold fs-5">自訂贊助金額</p>
									<div class="d-flex align-items-center align-self-stretch bg-light rounded-2 px-2">
										NT$
										<input
											class="form-control bg-transparent p-2 border-0"
											type="number"
											min="0"
											placeholder="輸入金額"
										/>
									</div>
								</div>
								<button
									class="btn btn-primary py-3 px-4 rounded-pill text-white fw-bold fs-5"
									@click="donateConfirm(1)"
								>
									前往捐款
								</button>
							</form>
							<div
								v-else
								class="col-5 d-flex flex-column justify-content-center align-items-center gap-4"
							>
								<p>感謝您的捐款</p>
								<img :src="success" alt="success" />
								<button
									data-bs-dismiss="modal"
									aria-label="Close"
									class="btn btn-light py-2 px-7 rounded-pill"
									@click="donateConfirm(null)"
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
textarea:focus,
input[type="number"]:focus,
.uneditable-input:focus {
	border: 0;
	border-color: none;
	box-shadow: none;
	outline: 0 none;
}
img[alt="Donate Image"] {
	width: 336px;
	height: 348px;
}
img[alt="success"] {
	width: 187px;
	height: 166.608px;
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
