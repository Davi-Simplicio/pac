import type { CardWithImage, Code,CardTimeLine, ContentPage, CodeList } from './data';

// Card Time Line

export const CardTimeLineList: CardTimeLine[] = [
	{
		title: 'Variavel',
		seen: false,
        rightSide: false,
		contentIndex: 0
	},
	{
		title: 'Variavel',
		seen: false,
        rightSide: true,
		contentIndex: 1
	}
];

export const CardWithImageList: CardWithImage[] = [
	{
		title: 'Health',
		description: 'The tecnology is used to improve the health of the people',
		imageSrc: ''
	}
];

// Code Mockup
export const Codes: CodeList = 
	{
		codes:[
			{
				prefix: '1',
				code: 'int numero = 0;',
				textColor: 'text-warning'
			},
			{
				prefix: '2',
				code: "<div>",
				textColor: 'text-error'
			},
			{
				prefix: '3',
				code: "	<h1>Hello World<h1>",
				textColor: 'text-error'
			},
			{
				prefix: '4',
				code: "<div>",
				textColor: 'text-error'
			},
			{
				prefix: '5',
				code: 'println(Hello World);',
				textColor: 'text-neutral-content'
			},
			{
				prefix: '~',
				code: 'Hello World',
				textColor: 'text-base-200'
			}
		]
	};

export const ContentPageList: ContentPage[] = 
	[
		{
			title: 'Lógica de Programação',
			contentCode: '0',
			contents: [
				{
					type: "text",
					content: "Lógica de programação é a base do desenvolvimento de software e consiste em criar soluções para problemas por meio de instruções claras e sequenciais que um computador possa entender e executar. Ela envolve a compreensão e o uso de estruturas lógicas como sequências, condições e loops para tomar decisões e repetir ações de forma eficiente."
				},
				{
					type: "text",
					content: "A lógica de programação é fundamental para qualquer linguagem de programação, pois permite que o programador organize suas ideias e resolva problemas de forma clara e lógica. Ela pode ser aplicada usando diversas linguagens, como C, Java, Python, entre outras."
				},
			]
		}
	]


