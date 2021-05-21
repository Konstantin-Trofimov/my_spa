<template >
	<v-card
		class="ma-4 pa-3"
		color="#c0c0c0"
		dark
	>
		<v-card-text class="headline font-weight-bold white--text">
			<div 
				v-for="(phrase, i) in text"
				:key="i"
			>
				<p>{{ phrase }}</p> 
			</div>
			
			<div>
				Bы сможете узнать обо мне больше, посетив 
				<a
					:href="links.portfolio"
					class="text-decoration-none red--text text--darken-43 "
				>
					мой сайт
				</a>
			</div>
		</v-card-text>

		<v-card-actions>
			<v-list-item class="grow">
				<v-row
					align="center"
					justify="end"
				>	
					<a :href="links.github">
						<v-github-icon></v-github-icon>
					</a>
				</v-row>
			</v-list-item>
		</v-card-actions>
	</v-card>
</template>


<script>
	import vGithubIcon from '../components/v-github-icon'

	export default {
		name: 'vAbout',
  		components: { 
			vGithubIcon 
		},
		data() {
			return {
				links: {
					portfolio: 'https://consttro.ru',
					github: 'https://github.com/Konstantin-Trofimov'
				},
				text: [
					'Hello World! Я начинающий web-разработчик. Несколько лет назад я поставил для себя цель освоить новую профессию. Сейчас, изучив технологии, необходимые в разработке, и приобретя нужные знания, я готов открыть себя миру web-индустрии',
					'Возможно, мой опыт еще не велик, но я уверенно компенсирую это постоянным стремлением к новым знаниям и усердием в своей работе. За время моего обучения, я доказал себе, что я могу оставаться максимально настойчивым в достижении поставленных перед собою целей, эффективно решать задачи, которые находятся в моей компетенции',
					'Я мечтаю присоединиться к опытной и профессиональной команде, что бы продолжить свой путь, постоянно развиваясь и совершенствуя свои навыки'
				]
			}
		}
	}
</script>