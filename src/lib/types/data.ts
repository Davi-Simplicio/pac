export interface Code {
    prefix: string;
    code: string;
    textColor: string;
}

export interface CodeList {
    codes: Code[];
}

export interface CardWithImage {
    title: string;
    description: string;
    imageSrc: string;
}

export interface CardTimeLine {
    title: string;
    seen: boolean;
    rightSide: boolean;
    contentIndex:number;
}

export interface ContentPage {
    title: string;
    contentCode: string;
    contents: Content[];
}

export interface infoGraphicContent {
    title: string;
    description: string;
}

export interface textContent {
    title: string;
    content: string;
}

export interface Content {
    type: string;
    content: any;
}
