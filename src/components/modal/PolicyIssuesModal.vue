<script setup>
import cancel from "../../assets/icons/cancel.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import YoutubeIcon from "../../assets/icons/youtube.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";

import { Modal } from "bootstrap";

defineProps(["number", "set", "issueData"]);
</script>
<template>
	<div>
		<div
			class="modal fade"
			id="policyIssuesModal"
			tabindex="-1"
			aria-labelledby="policyIssuesModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-xl modal-dialog-scrollable">
				<div class="modal-content rounded-4">
					<div class="d-flex justify-content-between align-items-center py-3 px-5">
						<p id="policyIssuesModalLabel" class="fs-2 fw-bold">政策議題</p>
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
											? issueData.IssueMedical.img
											: number === 2
											? issueData.IssueEntertainment.img
											: issueData.IssueEducation.img
									"
									alt="src"
									class="img-fluid rounded-4 mb-2"
								/>
								<p class="mb-1">
									{{
										number === 1
											? issueData.IssueMedical.title
											: number === 2
											? issueData.IssueEntertainment.title
											: issueData.IssueEducation.title
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
											? issueData.IssueMedical.title
											: number === 2
											? issueData.IssueEntertainment.title
											: issueData.IssueEducation.title
									}}
								</p>
								<div class="d-flex flex-column gap-3">
									<div class="d-flex flex-column gap-1">
										<h3 class="fw-bold">
											{{
												number === 1
													? issueData.IssueMedical.title1
													: number === 2
													? issueData.IssueEntertainment.title1
													: issueData.IssueEducation.title1
											}}
										</h3>
										<p>
											{{
												number === 1
													? issueData.IssueMedical.content1
													: number === 2
													? issueData.IssueEntertainment.content1
													: issueData.IssueEducation.content1
											}}
										</p>
									</div>
									<div class="d-flex flex-column gap-1">
										<h3 class="fw-bold">
											{{
												number === 1
													? issueData.IssueMedical.title2
													: number === 2
													? issueData.IssueEntertainment.title2
													: issueData.IssueEducation.title2
											}}
										</h3>
										<p>
											{{
												number === 1
													? issueData.IssueMedical.content2
													: number === 2
													? issueData.IssueEntertainment.content2
													: issueData.IssueEducation.content2
											}}
										</p>
									</div>
									<div class="d-flex flex-column gap-1 mb-7">
										<h3 class="fw-bold">
											{{
												number === 1
													? issueData.IssueMedical.title3
													: number === 2
													? issueData.IssueEntertainment.title3
													: issueData.IssueEducation.title3
											}}
										</h3>
										<p>
											{{
												number === 1
													? issueData.IssueMedical.content3
													: number === 2
													? issueData.IssueEntertainment.content3
													: issueData.IssueEducation.content3
											}}
										</p>
									</div>
								</div>
								<div class="d-flex flex-column gap-2 bg-light rounded-3 p-2">
									<p class="fw-bold">更多政策議題</p>
									<div class="d-flex flex-lg-row flex-column gap-2">
										<div
											class="set7 d-flex flex-column gap-9"
											@click="set(number === 1 ? 2 : number === 2 ? 3 : 1)"
											style="cursor: pointer"
										>
											<img
												:src="
													number === 1
														? issueData.IssueEntertainment.img
														: number === 2
														? issueData.IssueEducation.img
														: issueData.IssueMedical.img
												"
												alt="street"
												class="img-fluid rounded-4"
											/>
											<p>
												{{
													number === 1
														? issueData.IssueEntertainment.title
														: number === 2
														? issueData.IssueEducation.title
														: issueData.IssueMedical.title
												}}
											</p>
										</div>
										<div
											class="set7 d-flex flex-column gap-9"
											@click="set(number === 1 ? 3 : number === 2 ? 1 : 2)"
											style="cursor: pointer"
										>
											<img
												:src="
													number === 1
														? issueData.IssueEducation.img
														: number === 2
														? issueData.IssueMedical.img
														: issueData.IssueEntertainment.img
												"
												alt="event"
												class="img-fluid rounded-4"
											/>
											<p>
												{{
													number === 1
														? issueData.IssueEducation.title
														: number === 2
														? issueData.IssueMedical.title
														: issueData.IssueEntertainment.title
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
