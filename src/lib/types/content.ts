import type { CardWithImage, Code, CardTimeLine, ContentPage, CodeList } from './data';

// Card Time Line

export const CardTimeLineList: CardTimeLine[] = [
	{
		title: 'Lógica de Programação',
		seen: false,
		rightSide: false,
		contentIndex: 0,
		srcVideo: "https://www.youtube.com/embed/_bHFwRSbHw8"
	},
	{
		title: 'Exemplos de Uso de Bibliotecas em C',
		seen: false,
		rightSide: true,
		contentIndex: 1,
		srcVideo: "https://www.youtube.com/embed/2GRXxen1-p4"
	},
	{
		title: 'Declaração de variáveis',
		seen: false,
		rightSide: false,
		contentIndex: 2,
		srcVideo: "https://www.youtube.com/embed/QrFjyty_HK0"
	},
	{
		title: 'Comandos de Entrada e Saída',
		seen: false,
		rightSide: true,
		contentIndex: 3,
		srcVideo: "https://www.youtube.com/embed/YLSP0ALS0jo"
	},
	{
		title: 'Condicional',
		seen: false,
		rightSide: false,
		contentIndex: 4,
		srcVideo: "https://www.youtube.com/embed/MGUpDTEc3SM"
	},
	{
		title: 'Laços de Repetição',
		seen: false,
		rightSide: true,
		contentIndex: 5,
		srcVideo: "https://www.youtube.com/embed/FhM-rXPALL8"
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
					type: "iframe",
					content: "https://www.youtube.com/embed/2GRXxen1-p4"
				}
			]
		},
		{
			title: "Declaração de Variáveis em C",
			contentCode: "2",
			contents: [
				{
					type: "text",
					content: "Em C, variáveis são usadas para armazenar dados que podem ser manipulados pelo programa. Cada variável deve ser declarada com um tipo específico, que determina o tamanho e o formato dos dados armazenados."
				},
				{
					type: "text",
					content: "Aqui estão alguns exemplos de diferentes tipos de variáveis e como declará-las:"
				},
				{
					type: "code",
					content: [
						{
							prefix: "1",
							code: "int numero = 0;",
							textColor: "text-warning"
						},
						{
							prefix: "2",
							code: "float temperatura = 36.5;",
							textColor: "text-warning"
						},
						{
							prefix: "3",
							code: "char letra = 'A';",
							textColor: "text-warning"
						},
						{
							prefix: "4",
							code: "double pi = 3.14159;",
							textColor: "text-warning"
						},
						{
							prefix: "5",
							code: "char nome[50] = \"João\";",
							textColor: "text-warning"
						},
						{
							prefix: "6",
							code: "long populacao = 7800000000;",
							textColor: "text-warning"
						},
						{
							prefix: "7",
							code: "unsigned int idade = 30;",
							textColor: "text-warning"
						},
						{
							prefix: "8",
							code: "short temperaturaMinima = -10;",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "text",
					content: "Tipos de Variáveis: - int: Usado para armazenar números inteiros. Exemplo: int numero = 10; - float: Usado para armazenar números de ponto flutuante (decimais). Exemplo: float temperatura = 36.5; - char: Usado para armazenar um único caractere. Exemplo: char letra = 'A'; - double: Usado para armazenar números de ponto flutuante de precisão dupla. Exemplo: double pi = 3.14159; - char[]: Usado para armazenar strings (sequência de caracteres). Exemplo: char nome[50] = \"Maria\"; - long: Usado para armazenar números inteiros maiores que o tipo int. Exemplo: long populacao = 7800000000; - unsigned int: Usado para armazenar números inteiros não negativos. Exemplo: unsigned int idade = 30; - short: Usado para armazenar números inteiros menores que o tipo int. Exemplo: short temperaturaMinima = -10;"
				},
				{
					type: "text",
					content: "É importante escolher o tipo de variável adequado para o tipo de dado que você deseja armazenar, pois isso pode afetar o desempenho e o uso da memória do seu programa."
				},
				{
					type: "title",
					content: "Videos"
				},
				{
					type: "iframe",
					content: "https://www.youtube.com/embed/QrFjyty_HK0"
				},
				{
					type: "iframe",
					content: "https://www.youtube.com/embed/n68tJh2mIx4"
				}
			]
		},
		{
			title: "Comandos de Entrada e Saída em C",
			contentCode: "3",
			contents: [
				{
					type: "text",
					content: "Em C, comandos de entrada e saída (I/O) são funções que permitem interagir com o usuário e manipular dados. Elas são fundamentais para receber informações do usuário (entrada) e exibir resultados (saída)."
				},
				{
					type: "title",
					content: "Entrada"
				},
				{
					type: "text",
					content: "A entrada de dados é geralmente feita por meio da função scanf(), que lê dados da entrada padrão (normalmente o teclado)."
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
							code: "    int numero;",
							textColor: "text-warning"
						},
						{
							prefix: "4",
							code: "    printf(\"Digite um número: \");",
							textColor: "text-warning"
						},
						{
							prefix: "5",
							code: "    scanf(\"%d\", &numero);",
							textColor: "text-warning"
						},
						{
							prefix: "6",
							code: "    printf(\"Você digitou: %d\\n\", numero);",
							textColor: "text-warning"
						},
						{
							prefix: "7",
							code: "    return 0;",
							textColor: "text-warning"
						},
						{
							prefix: "8",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "title",
					content: "Saída"
				},
				{
					type: "text",
					content: "A saída de dados é feita com a função printf(), que exibe informações na saída padrão (geralmente a tela)."
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
							code: "    printf(\"Olá, mundo!\\n\");",
							textColor: "text-warning"
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
					content: "Video"
				},
				{
					type: "iframe",
					content: "https://www.youtube.com/embed/YLSP0ALS0jo"
				},
				{
					type: "title",
					content: "Exercícios de Fixação"
				},
				{
					type: "text",
					content: "Exercício 1: Leitura de Dados - Escreva um programa que solicite ao usuário que digite seu nome e idade. O programa deve então exibir uma mensagem formatada que diga \"Olá, [nome]! Você tem [idade] anos.\""
				},
				{
					type: "text",
					content: "Exercício 2: Cálculo de Média - Crie um programa que peça ao usuário para inserir três notas de um aluno. Em seguida, calcule e exiba a média das notas com uma mensagem que diga \"A média das notas é: [média].\""
				},
				{
					type: "text",
					content: "Exercício 3: Conversão de Temperatura - Desenvolva um programa que solicite ao usuário que digite uma temperatura em graus Celsius e converta essa temperatura para Fahrenheit. A fórmula para conversão é: F = C × 9/5 + 32. Exiba o resultado com a mensagem \"A temperatura em Fahrenheit é: [temperatura em Fahrenheit].\""
				}
			]
		},
		{
			title: "Condicionais em C",
			contentCode: "4",
			contents: [
				{
					type: "title",
					content: "O que são Condicionais?"
				},
				{
					type: "text",
					content: "Condicionais são estruturas de controle que permitem que o programa tome decisões. Em C, as principais estruturas condicionais são if, else if, e else."
				},
				{
					type: "title",
					content: "Exemplo de Condicional Simples"
				},
				{
					type: "text",
					content: "A estrutura básica de um if é:"
				},
				{
					type: "code",
					content: [
						{
							prefix: "1",
							code: "if (condição) {",
							textColor: "text-warning"
						},
						{
							prefix: "2",
							code: "    // bloco de código a ser executado se a condição for verdadeira",
							textColor: "text-warning"
						},
						{
							prefix: "3",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "text",
					content: "Exemplo:"
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
							code: "    int numero;",
							textColor: "text-warning"
						},
						{
							prefix: "4",
							code: "    printf(\"Digite um número: \");",
							textColor: "text-warning"
						},
						{
							prefix: "5",
							code: "    scanf(\"%d\", &numero);",
							textColor: "text-warning"
						},
						{
							prefix: "6",
							code: "    if (numero > 0) {",
							textColor: "text-warning"
						},
						{
							prefix: "7",
							code: "        printf(\"O número é positivo.\\n\");",
							textColor: "text-warning"
						},
						{
							prefix: "8",
							code: "    }",
							textColor: "text-warning"
						},
						{
							prefix: "9",
							code: "    return 0;",
							textColor: "text-warning"
						},
						{
							prefix: "10",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "title",
					content: "Exemplo de Condicional com else"
				},
				{
					type: "text",
					content: "Podemos adicionar um bloco else para lidar com a condição em que o if é falso:"
				},
				{
					type: "code",
					content: [
						{
							prefix: "1",
							code: "else {",
							textColor: "text-warning"
						},
						{
							prefix: "2",
							code: "    // bloco de código a ser executado se a condição for falsa",
							textColor: "text-warning"
						},
						{
							prefix: "3",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "text",
					content: "Exemplo:"
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
							code: "    int numero;",
							textColor: "text-warning"
						},
						{
							prefix: "4",
							code: "    printf(\"Digite um número: \");",
							textColor: "text-warning"
						},
						{
							prefix: "5",
							code: "    scanf(\"%d\", &numero);",
							textColor: "text-warning"
						},
						{
							prefix: "6",
							code: "    if (numero > 0) {",
							textColor: "text-warning"
						},
						{
							prefix: "7",
							code: "        printf(\"O número é positivo.\\n\");",
							textColor: "text-warning"
						},
						{
							prefix: "8",
							code: "    } else {",
							textColor: "text-warning"
						},
						{
							prefix: "9",
							code: "        printf(\"O número não é positivo.\\n\");",
							textColor: "text-warning"
						},
						{
							prefix: "10",
							code: "    }",
							textColor: "text-warning"
						},
						{
							prefix: "11",
							code: "    return 0;",
							textColor: "text-warning"
						},
						{
							prefix: "12",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "title",
					content: "Estrutura else if"
				},
				{
					type: "text",
					content: "Para verificar várias condições, podemos usar else if:"
				},
				{
					type: "code",
					content: [
						{
							prefix: "1",
							code: "else if (outra condição) {",
							textColor: "text-warning"
						},
						{
							prefix: "2",
							code: "    // bloco de código a ser executado se a outra condição for verdadeira",
							textColor: "text-warning"
						},
						{
							prefix: "3",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "text",
					content: "Exemplo:"
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
							code: "    int numero;",
							textColor: "text-warning"
						},
						{
							prefix: "4",
							code: "    printf(\"Digite um número: \");",
							textColor: "text-warning"
						},
						{
							prefix: "5",
							code: "    scanf(\"%d\", &numero);",
							textColor: "text-warning"
						},
						{
							prefix: "6",
							code: "    if (numero > 0) {",
							textColor: "text-warning"
						},
						{
							prefix: "7",
							code: "        printf(\"O número é positivo.\\n\");",
							textColor: "text-warning"
						},
						{
							prefix: "8",
							code: "    } else if (numero < 0) {",
							textColor: "text-warning"
						},
						{
							prefix: "9",
							code: "        printf(\"O número é negativo.\\n\");",
							textColor: "text-warning"
						},
						{
							prefix: "10",
							code: "    } else {",
							textColor: "text-warning"
						},
						{
							prefix: "11",
							code: "        printf(\"O número é zero.\\n\");",
							textColor: "text-warning"
						},
						{
							prefix: "12",
							code: "    }",
							textColor: "text-warning"
						},
						{
							prefix: "13",
							code: "    return 0;",
							textColor: "text-warning"
						},
						{
							prefix: "14",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "title",
					content: "Exercícios sobre Condicionais"
				},
				{
					type: "text",
					content: "Exercício 1: Par ou Ímpar - Escreva um programa que peça ao usuário para digitar um número e verifique se ele é par ou ímpar. Exiba a mensagem \"O número é par.\" ou \"O número é ímpar.\"."
				},
				{
					type: "text",
					content: "Exercício 2: Classificação de Idade - Crie um programa que peça ao usuário para digitar sua idade. Com base na idade, classifique a pessoa como \"Criança\" (0-12 anos), \"Adolescente\" (13-17 anos), \"Adulto\" (18-64 anos) ou \"Idoso\" (65 anos ou mais)."
				},
				{
					type: "text",
					content: "Exercício 3: Notas de Estudantes - Desenvolva um programa que solicite ao usuário que insira uma nota de 0 a 100. O programa deve exibir \"Aprovado\" se a nota for maior ou igual a 60, \"Reprovado\" se for menor que 60 e \"Nota inválida\" se a nota estiver fora do intervalo permitido."
				},
				{
					type: "title",
					content: "Vídeo explicativo"
				},
				{
					type: "iframe",
					content: "https://www.youtube.com/embed/MGUpDTEc3SM"
				}
		

			]
		},
		{
			title: "Laços de Repetição em C",
			contentCode: "4",
			contents: [
				{
					type: "title",
					content: "O que são Laços de Repetição?"
				},
				{
					type: "text",
					content: "Laços de repetição, ou loops, são estruturas que permitem repetir um conjunto de instruções enquanto uma condição for verdadeira. As principais estruturas de repetição em C são for, while e do while."
				},
				{
					type: "title",
					content: "Laço for"
				},
				{
					type: "text",
					content: "O laço for é utilizado quando se sabe o número de iterações a serem realizadas. Sua estrutura básica é:"
				},
				{
					type: "code",
					content: [
						{
							prefix: "1",
							code: "for (inicialização; condição; incremento) {",
							textColor: "text-warning"
						},
						{
							prefix: "2",
							code: "    // bloco de código a ser executado",
							textColor: "text-warning"
						},
						{
							prefix: "3",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "text",
					content: "Exemplo:"
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
							code: "    for (int i = 1; i <= 5; i++) {",
							textColor: "text-warning"
						},
						{
							prefix: "4",
							code: "        printf(\"Número: %d\\n\", i);",
							textColor: "text-warning"
						},
						{
							prefix: "5",
							code: "    }",
							textColor: "text-warning"
						},
						{
							prefix: "6",
							code: "    return 0;",
							textColor: "text-warning"
						},
						{
							prefix: "7",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "title",
					content: "Laço while"
				},
				{
					type: "text",
					content: "O laço while executa um bloco de código enquanto a condição for verdadeira. A condição é verificada antes de cada iteração."
				},
				{
					type: "text",
					content: "Exemplo:"
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
							code: "    int i = 1;",
							textColor: "text-warning"
						},
						{
							prefix: "4",
							code: "    while (i <= 5) {",
							textColor: "text-warning"
						},
						{
							prefix: "5",
							code: "        printf(\"Número: %d\\n\", i);",
							textColor: "text-warning"
						},
						{
							prefix: "6",
							code: "        i++;",
							textColor: "text-warning"
						},
						{
							prefix: "7",
							code: "    }",
							textColor: "text-warning"
						},
						{
							prefix: "8",
							code: "    return 0;",
							textColor: "text-warning"
						},
						{
							prefix: "9",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "title",
					content: "Laço do while"
				},
				{
					type: "text",
					content: "O laço do while é semelhante ao while, mas a condição é verificada após a execução do bloco de código. Isso garante que o bloco seja executado pelo menos uma vez."
				},
				{
					type: "text",
					content: "Exemplo:"
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
							code: "    int i = 1;",
							textColor: "text-warning"
						},
						{
							prefix: "4",
							code: "    do {",
							textColor: "text-warning"
						},
						{
							prefix: "5",
							code: "        printf(\"Número: %d\\n\", i);",
							textColor: "text-warning"
						},
						{
							prefix: "6",
							code: "        i++;",
							textColor: "text-warning"
						},
						{
							prefix: "7",
							code: "    } while (i <= 5);",
							textColor: "text-warning"
						},
						{
							prefix: "8",
							code: "    return 0;",
							textColor: "text-warning"
						},
						{
							prefix: "9",
							code: "}",
							textColor: "text-warning"
						}
					]
				},
				{
					type: "title",
					content: "Exercícios sobre Laços de Repetição"
				},
				{
					type: "text",
					content: "Exercício 1: Contagem Regressiva - Escreva um programa que solicite ao usuário um número inteiro e, em seguida, imprima uma contagem regressiva a partir desse número até zero."
				},
				{
					type: "text",
					content: "Exercício 2: Tabuada - Crie um programa que peça ao usuário para digitar um número e, em seguida, exiba a tabuada desse número de 1 a 10."
				},
				{
					type: "text",
					content: "Exercício 3: Soma de Números - Desenvolva um programa que peça ao usuário para digitar números inteiros até que ele digite zero. O programa deve então exibir a soma de todos os números digitados (exceto o zero)."
				},
				{
					type: "title",
					content: "Vídeo explicativo"
				},
				{
					type: "iframe",
					content: "https://www.youtube.com/embed/FhM-rXPALL8"
				}
			]
		}
		
	]

