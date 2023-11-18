<script setup>
import { ref } from "vue";
import PolicyIssuessModal from "../../../components/modal/PolicyIssuesModal.vue";
import { issueData } from "../../../Model/issueData";

const issueDataRef = ref(issueData);
const number = ref(null);

const set = (block) => {
	number.value = block;
};
</script>
<template>
	<div class="my-11" id="policyIssues">
		<div class="container-xxl">
			<div class="row flex-column">
				<div class="col d-flex flex-column justify-content-center align-items-center mb-6">
					<p class="bg-secondary text-white fs-5 py-1 px-9 fw-bold rounded-3">POLICY ISSUES</p>
					<p class="fs-64 mantou primaryGradient">政策議題</p>
				</div>
				<div class="col">
					<div class="row">
						<div
							class="col-md-4 col-12"
							data-bs-toggle="modal"
							data-bs-target="#policyIssuesModal"
							@click="set(1)"
							style="cursor: pointer"
							data-aos="zoom-in-right"
						>
							<p class="fs-3 fw-bold pb-2 px-2">{{ issueData.IssueMedical.title }}</p>
							<img
								:src="issueData.IssueMedical.img"
								alt="IssueMedical"
								class="img-fluid rounded-5"
							/>
						</div>
						<div
							class="col-md-4 col-12"
							data-bs-toggle="modal"
							data-bs-target="#policyIssuesModal"
							@click="set(2)"
							style="cursor: pointer"
							data-aos="zoom-in-up"
						>
							<p class="fs-3 fw-bold pb-2 px-2">{{ issueData.IssueEntertainment.title }}</p>
							<img
								:src="issueData.IssueEntertainment.img"
								alt="IssueEntertainment"
								class="img-fluid rounded-5"
							/>
						</div>
						<div
							class="col-md-4 col-12"
							data-bs-toggle="modal"
							data-bs-target="#policyIssuesModal"
							@click="set(3)"
							style="cursor: pointer"
							data-aos="zoom-in-left"
						>
							<p class="fs-3 fw-bold pb-2 px-2">{{ issueData.IssueEducation.title }}</p>
							<img
								:src="issueData.IssueEducation.img"
								alt="IssueEducation"
								class="img-fluid rounded-5"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<PolicyIssuessModal :number="number" :set="set" :issueData="issueDataRef" />
	<!-- <PolicyIssuessModal
		:number="number"
		:IssueMedical="IssueMedical"
		:IssueEntertainment="IssueEntertainment"
		:IssueEducation="IssueEducation"
	/> -->
</template>
<style scoped>
.fs-64 {
	font-size: 64px;
}
</style>
