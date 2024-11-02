export type Bean = {
    beanId: number
    flavorName: string
    dopInfo: string
    isWork: boolean
}
export type Array = {
    items: {
    beanId: number;
    flavorName: string;
    dopInfo: string;
    isWork: boolean;
  }[]
}
export type Ar = {
    beanId: number;
    flavorName: string;
    dopInfo: string;
    isWork: boolean;
}[]
export type TextModal={
    item:{
      name:string,
      info:string
    }
}

export type Props = {
    items: {
    beanId: number;
    flavorName: string;
    dopInfo: string;
    isWork: boolean;
  }[]
}