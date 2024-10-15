import type { CardWithImage, Code,CardTimeLine, ContentPage, CodeList } from './data';

// Card Time Line

export const CardTimeLineList: CardTimeLine[] = [
	{
		title: 'Variavel',
		seen: true,
        rightSide: false,
		contentIndex: 0
	}
];

export const progressBarValue = CardTimeLineList.filter((card) => card.seen).length / CardTimeLineList.length * 100;
// Card With Image

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

export const ContentPageList: ContentPage = 
	{
		title: 'Variavel',
		contentCode: '0',
		contents: [
			{
				type: "text",
				content: ""
			}
		]
	}


