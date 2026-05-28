<template>
	<div class="min-h-screen bg-gray-50 py-12 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="flex items-center justify-between mb-6">
				<h2 class="text-2xl font-semibold text-gray-800">Live Sessions</h2>
				<button class="px-3 py-1 bg-green-600 text-white rounded-md">Schedule</button>
			</div>

			<ul class="space-y-4">
				<li v-for="session in sessions" :key="session.id" class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
					<div>
						<div class="font-medium text-gray-800">{{ session.title }}</div>
						<div class="text-sm text-gray-500">{{ session.time }} · {{ session.presenter }}</div>
					</div>
					<div class="flex items-center gap-3">
						<span class="text-sm text-gray-600">{{ session.attendees }} attending</span>
						<button class="px-3 py-1 bg-blue-600 text-white rounded-md">Join</button>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LiveView',
	data() {
		return {
			sessions: [
				{ id: 1, title: 'Ask Me Anything: Vue Tips', time: 'Today, 5:00 PM', presenter: 'Alex', attendees: 42 },
				{ id: 2, title: 'Deploying to Vercel', time: 'Tomorrow, 3:00 PM', presenter: 'Sam', attendees: 28 },
			],
		};
	},
};
</script>

