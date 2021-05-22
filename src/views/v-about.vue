<template >
	<v-card
		class="ma-6 pa-3"
		color="#c0c0c0"
		dark
	>
		<v-card-text class="headline font-weight-bold white--text">
			<div 
				v-for="(phrase, i) in text"
				:key="i"
			>
				<p :class="[i === 0 ? 'deep-orange--text' : '']"
				>{{ phrase }}</p> 
			</div>
			
			<div>
				Bы сможете узнать обо мне больше, посетив 
				<a
					:href="links.portfolio"
					class="about__link deep-orange--text text-decoration-none"
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
					<a :href="links.github"
						@mouseover="isHover= true"
      					@mouseleave="isHover = false"
					>
						<v-github-icon :hover="isHover"></v-github-icon>
					</a>
				</v-row>
			</v-list-item>
		</v-card-actions>
	</v-card>
</template>


<script>
	import vGithubIcon from '../components/tools/v-github-icon'

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
					'Hello World!',
					'Я начинающий web-разработчик. Несколько лет назад я поставил для себя цель освоить новую профессию. Сейчас, изучив технологии, необходимые в разработке, и приобретя нужные знания, я готов открыть себя миру web-индустрии',
					'Возможно, мой опыт еще не велик, но я уверенно компенсирую это постоянным стремлением к новым знаниям и усердием в своей работе. За время моего обучения, я доказал себе, что я могу оставаться максимально настойчивым в достижении поставленных перед собою целей, эффективно решать задачи, которые находятся в моей компетенции',
					'Я мечтаю присоединиться к опытной и профессиональной команде, что бы продолжить свой путь, постоянно развиваясь и совершенствуя свои навыки'
				],
				isHover: false,
				hoverDelay: 30
			}
		}
	}	
</script>

<style>
	.about__link {
		display: inline-block;
		position: relative;
	}

	.about__link::after {
		position: absolute;
		content: '';
		width: 0px;
		height: 2px;
		display: block;
		background: #FF5722;
		transition: .4s;
		bottom: 2px
	}

	.about__link:hover::after {
  		width: 100%;
	}
</style>
