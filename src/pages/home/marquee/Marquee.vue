<script setup></script>
<template>
	<div class="marquee-container primaryTheme gap-3 py-1">
		<p class="mantou marquee-content">為喵星人，護台灣！從喵的眼中，看見台灣 喵的未來，人的希望</p>
		<p class="mantou marquee-content">為喵星人，護台灣！從喵的眼中，看見台灣 喵的未來，人的希望</p>
		<p class="mantou marquee-content">為喵星人，護台灣！從喵的眼中，看見台灣 喵的未來，人的希望</p>
	</div>
</template>
<style scoped>
p {
	color: var(--default-white, #fff);
	font-feature-settings: "clig" off, "liga" off;
	font-family: Mantou Sans;
	font-size: 64px;
	font-style: normal;
	font-weight: 400;
	line-height: 105%; /* 67.2px */
	letter-spacing: 2px;
}
.marquee-container {
	width: 100%;
	overflow: hidden;
	display: flex;
}

.marquee-content {
	display: inline-block;
	white-space: nowrap;
	animation: marquee 20s linear infinite;
}

@keyframes marquee {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
}
</style>
