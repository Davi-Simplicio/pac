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
    textList: textContent[];
    videoLinkList: string[];
    imageSrcList: string[];
    infoGraphicContent: infoGraphicContent;
    contentCode: string;
    contentCodeList: CodeList[];
}

export interface infoGraphicContent {
    title: string;
    description: string;
}

export interface textContent {
    title: string;
    content: string;
}
