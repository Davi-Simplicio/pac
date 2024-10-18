import type { CardWithImage, Code, CardTimeLine, ContentPage, CodeList } from './data';

// Card Time Line

export const CardTimeLineList: CardTimeLine[] = [
	{
		title: 'Lógica de Programação',
		seen: false,
		rightSide: false,
		contentIndex: 0,
		srcVideo:"https://www.youtube.com/embed/_bHFwRSbHw8"
	},
	{
		title: 'Exemplos de Uso de Bibliotecas em C',
		seen: false,
		rightSide: true,
		contentIndex: 1,
		srcVideo:"https://www.youtube.com/embed/2GRXxen1-p4"
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
	codes: [
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
					type: 'title',
					content: 'A Importância da Lógica de Programação'
				},
				{
					type: "text",
					content: "Lógica de programação é a base do desenvolvimento de software e consiste em criar soluções para problemas por meio de instruções claras e sequenciais que um computador possa entender e executar. Ela envolve a compreensão e o uso de estruturas lógicas como sequências, condições e loops para tomar decisões e repetir ações de forma eficiente."
				},
				{
					type: "text",
					content: "A lógica de programação é fundamental para qualquer linguagem de programação, pois permite que o programador organize suas ideias e resolva problemas de forma clara e lógica. Ela pode ser aplicada usando diversas linguagens, como C, Java, Python, entre outras."
				},
				{
					type: 'title',
					content: 'Lógica de Programação e Algoritmos'
				},
				{
					type: "text",
					content: "A lógica de programação está intrinsecamente ligada à criação de algoritmos. Um algoritmo é uma sequência finita de ações que, quando seguidas, resolvem um problema ou realizam uma tarefa específica. A lógica é usada para projetar e otimizar algoritmos, garantindo que eles sejam eficazes e eficientes."
				},
				{
					type: "text",
					content: "Ao praticar a lógica de programação, você aprende a criar algoritmos sólidos. Isso envolve a identificação de variáveis, estruturas de controle (como loops e condicionais) e o uso de estruturas de dados apropriadas. Um programador habilidoso pode criar algoritmos elegantes que economizam tempo e recursos."
				},
				{
					type: 'title',
					content: 'Fluxogramas'
				},
				{
					type: 'text',
					content: 'A Fluxograma é a representação gráfica ou pictórica de um algoritmo com a ajuda de diferentes símbolos, formas e setas para demonstrar um processo ou programa. Com algoritmos, podemos entender facilmente um programa. O objetivo principal de usar um fluxograma é analisar diferentes métodos. Vários símbolos padrão são aplicados em um fluxograma:'
				},
				{
					type: 'image',
					content: '../src/lib/images/image.png'
				},
				{
					type: 'text',
					content: 'Entrada de dados: a maioria dos algoritmos começa com a entrada de dados, que são as informações necessárias para realizar a tarefa. Por exemplo, para um algoritmo de ordenação, a entrada seria um conjunto de números ou strings.'
				},
				{
					type: 'text',
					content: 'Processamento: uma vez que os dados são inseridos, o algoritmo processa esses dados seguindo uma série de instruções específicas. Esse processo pode envolver operações matemáticas, comparações lógicas ou manipulações de dados, dependendo do objetivo do algoritmo.'
				},
				{
					type: 'text',
					content: 'Saída: após o processamento, o algoritmo produz uma saída, que é o resultado da execução das instruções com os dados de entrada. A saída pode ser uma resposta a uma pergunta, uma ação específica que o computador deve executar ou um novo conjunto de dados transformados de alguma forma.'
				},
				{
					type: 'title',
					content: 'Exemplos de Algoritmos em Fluxogramas'
				},
				{
					type: 'text',
					content: 'Vamos mostrar agora como ficaria um fluxograma para ilustrar um dia de domingo de uma certa pessoa, que conterá passos que serão realizados durante o dia e uma condição que dependendo do caso dará uma resposta diferente.'
				}, 
				{
					type: 'image',
					content: '../src/lib/images/DiagramasChapinFluxogramas4.jpg'
				}, 
				{
					type: 'title',
					content: 'Exercícios de Lógica' 
				}, 
				{
					type: 'text',
					content: 'Exercícios de Lógica no Racha Cuca' 
				}, 
				{
					type: 'iframe',
					content: 'https://www.geniol.com.br/logica/problemas/teste-de-einstein/' 
				}, 
			]
		},
		{
			title: "Exemplos de Uso de Bibliotecas em C",
			contentCode: "1",
			contents: [
				{
					type: "title",
					content: "Exemplo de Uso da Biblioteca stdio.h"
				},
				{
					type: "text",
					content: "A biblioteca stdio.h fornece funções para entrada e saída de dados. No exemplo abaixo, usamos a função printf para exibir uma mensagem na tela."
				},
				{
					type: "code",
					content: [
						{
							prefix: "1",
							code: "#include <stdio.h>",
							textColor: "text-warning"
						},
						{
							prefix: "2",
							code: "int main() {",
							textColor: "text-warning"
						},
						{
							prefix: "3",
							code: "    printf(\"Exemplo com stdio.h\\n\");",
							textColor: "text-info"
						},
						{
							prefix: "4",
							code: "    return 0;",
							textColor: "text-warning"
						},
						{
							prefix: "5",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "title",
					content: "Exemplo de Uso da Biblioteca stdlib.h"
				},
				{
					type: "text",
					content: "A biblioteca stdlib.h oferece funções para alocação de memória, controle de processos e conversões numéricas. No exemplo abaixo, usamos a função malloc para alocar memória dinamicamente."
				},
				{
					type: "code",
					content: [
						{
							prefix: "1",
							code: "#include <stdio.h>",
							textColor: "text-warning"
						},
						{
							prefix: "2",
							code: "#include <stdlib.h>",
							textColor: "text-warning"
						},
						{
							prefix: "3",
							code: "int main() {",
							textColor: "text-warning"
						},
						{
							prefix: "4",
							code: "    int *ptr = (int *)malloc(sizeof(int));",
							textColor: "text-info"
						},
						{
							prefix: "5",
							code: "    if (ptr == NULL) {",
							textColor: "text-warning"
						},
						{
							prefix: "6",
							code: "        printf(\"Erro na alocação de memória\\n\");",
							textColor: "text-info"
						},
						{
							prefix: "7",
							code: "        return 1;",
							textColor: "text-warning"
						},
						{
							prefix: "8",
							code: "    }",
							textColor: "text-warning"
						},
						{
							prefix: "9",
							code: "    *ptr = 10;",
							textColor: "text-info"
						},
						{
							prefix: "10",
							code: "    printf(\"Valor alocado: %d\\n\", *ptr);",
							textColor: "text-info"
						},
						{
							prefix: "11",
							code: "    free(ptr);",
							textColor: "text-warning"
						},
						{
							prefix: "12",
							code: "    return 0;",
							textColor: "text-warning"
						},
						{
							prefix: "13",
							code: "}",
							textColor: "text-warning"
						}
					],

				},
				{
					type: "title",
					content: "Video"
				},
				{
					type: "video",
					content: "https://www.youtube.com/watch?v=2GRXxen1-p4"
				}
			]
		}
		
	]


