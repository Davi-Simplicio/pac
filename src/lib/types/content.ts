import type { CardWithImage, Code,CardTimeLine, ContentPage, CodeList } from './data';

// Card Time Line

export const CardTimeLineList: CardTimeLine[] = [
	{
		title: 'Variavel',
		seen: true,
        rightSide: false,
		contentIndex: 0
	},
	{
		title: 'Tipos de Variavel',
		seen: false,
        rightSide: true,
		contentIndex: 1
	},
	{
		title: 'Variavel',
		seen: false,
        rightSide: false,
		contentIndex: 2
	},
	{
		title: 'Tipos de Variavel',
		seen: false,
        rightSide: true,
		contentIndex: 3
	},
	{
		title: 'Variavel',
		seen: false,
        rightSide: false,
		contentIndex: 2
	},
	{
		title: 'Tipos de Variavel',
		seen: false,
        rightSide: true,
		contentIndex: 3
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

export const ContentPageList: ContentPage[] = [

	{
		title: 'Variavel',
		textList: [
			{
				title: "",
				content:"Variavel é um espaço na memória do computador que armazena um valor."
			},
			{
				title: "Para que são usadas as Variaveis?",
				content:"Variavel é usada para aramazenar um valor"
			},
		],
		videoLinkList: ['https://www.youtube.com/embed/QrFjyty_HK0'],
		imageSrcList: [''],
		infoGraphicContent: {
			title: 'Variavel',
			description: 'Variavel é um espaço na memória do computador que armazena um valor.'
		},
		contentCode: "0",
		contentCodeList: [Codes]
	},
	{
		title: 'Tipo de Variavel',
		textList: [
			{
				title: "",
				content:"Existem varios tipos de variaveis, como inteiro, real, texto, booleano."
			},
			{
				title: "Para que são usadas as Variaveis?",
				content:"Variavel é usada para aramazenar um valor"
			},
		],
		videoLinkList: ['https://www.youtube.com/embed/2ckX4M3ocdQ'],
		imageSrcList: [''],
		infoGraphicContent: {
			title: 'Variavel',
			description: 'Variavel é um espaço na memória do computador que armazena um valor.'
		},
		contentCode: "1",
		contentCodeList: [Codes]
	},
	{
		title: 'Tipo de Variavel',
		textList: [
			{
				title: "",
				content:"Existem varios tipos de variaveis, como inteiro, real, texto, booleano."
			},
			{
				title: "Para que são usadas as Variaveis?",
				content:"Variavel é usada para aramazenar um valor"
			},
		],
		videoLinkList: ['https://www.youtube.com/embed/2ckX4M3ocdQ'],
		imageSrcList: [''],
		infoGraphicContent: {
			title: 'Variavel',
			description: 'Variavel é um espaço na memória do computador que armazena um valor.'
		},
		contentCode: "2",
		contentCodeList: [Codes]
	},
	{
		title: 'Tipo de Variavel',
		textList: [
			{
				title: "",
				content:"Existem varios tipos de variaveis, como inteiro, real, texto, booleano."
			},
			{
				title: "Para que são usadas as Variaveis?",
				content:"Variavel é usada para aramazenar um valor"
			},
		],
		videoLinkList: ['https://www.youtube.com/embed/2ckX4M3ocdQ'],
		imageSrcList: [''],
		infoGraphicContent: {
			title: 'Variavel',
			description: 'Variavel é um espaço na memória do computador que armazena um valor.'
		},
		contentCode: "3",
		contentCodeList: [Codes]
	},
	{
		title: 'Tipo de Variavel',
		textList: [
			{
				title: "",
				content:"Existem varios tipos de variaveis, como inteiro, real, texto, booleano."
			},
			{
				title: "Para que são usadas as Variaveis?",
				content:"Variavel é usada para aramazenar um valor"
			},
		],
		videoLinkList: ['https://www.youtube.com/embed/2ckX4M3ocdQ'],
		imageSrcList: [''],
		infoGraphicContent: {
			title: 'Variavel',
			description: 'Variavel é um espaço na memória do computador que armazena um valor.'
		},
		contentCode: "4",
		contentCodeList: [Codes]
	},
	{
		title: 'Tipo de Variavel',
		textList: [
			{
				title: "",
				content:"Existem varios tipos de variaveis, como inteiro, real, texto, booleano."
			},
			{
				title: "Para que são usadas as Variaveis?",
				content:"Variavel é usada para aramazenar um valor"
			},
		],
		videoLinkList: ['https://www.youtube.com/embed/2ckX4M3ocdQ'],
		imageSrcList: [''],
		infoGraphicContent: {
			title: 'Variavel',
			description: 'Variavel é um espaço na memória do computador que armazena um valor.'
		},
		contentCode: "5",
		contentCodeList: [Codes]
	},
	{
		title: 'Semen',
		textList: [
			{
				title: "",
				content:"Existem varios tipos de variaveis, como inteiro, real, texto, booleano."
			},
			{
				title: "Para que são usadas as Variaveis?",
				content:"Variavel é usada para aramazenar um valor"
			},
		],
		videoLinkList: ['https://www.youtube.com/embed/2ckX4M3ocdQ'],
		imageSrcList: [''],
		infoGraphicContent: {
			title: 'Variavel',
			description: 'Variavel é um espaço na memória do computador que armazena um valor.'
		},
		contentCode: "6",
		contentCodeList: [Codes]
	}

]
