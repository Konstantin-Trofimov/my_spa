<template>
	<div>
		<v-app-bar
		color="#c0c0c0"
		dark
		width="100%"
	>
		<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
	</v-app-bar>

		<v-navigation-drawer
		v-model="drawer"
		height="100vh"
		absolute
		temporary
		>
			<v-list
				nav
				dense
			>
				<v-list-item-group
					v-model="group"
					active-class="deep-orange accent-2"
				>
					<v-list-item-avatar
						min-width="140px"
						min-height="140px"
					>
						<v-img 
							src="../../assets/images/avatar.png"
							alt="avatar"
							width="100%"
							height="100%"
							>
						</v-img>
					</v-list-item-avatar>	

					<v-list-item-content>
						<v-list-item-title class="title">
							{{ contactData.fullName }}
						</v-list-item-title>
						<v-list-item-subtitle>
							<a 
								:href="`mailto:${contactData.email}`"
								class="text-decoration-none  text--primary"
							>
								{{ contactData.email }}
							</a>
						</v-list-item-subtitle>
					</v-list-item-content>

					<v-list-item
						@click="toPage('gallery')"
						>
						<v-list-item-icon>
							<v-icon>mdi-home</v-icon>
						</v-list-item-icon>
						<v-list-item-title>
							Галерея
						</v-list-item-title>
					</v-list-item>

					<v-list-item
						@click="toPage('about')"
						>
						<v-list-item-icon>
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
						<v-list-item-title>
							Обо мне
						</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>


<script>
	export default {
		data: () => ({
			drawer: false,
			group: null,
			contactData: {
				fullName: 'Konstantin Trofimov',
				email: 'const.trofimov@gmail.com',
			}
		}),
		methods: {
			toPage(value) {
				 this.$router.push({
                    name: value
                })
			}
		}
	}
</script>

