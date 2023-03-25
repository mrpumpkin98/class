import { ChangeEvent } from "react"

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any
}

export interface IVariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}

export interface IBoardWriteUIProps {
    onClickSubmit: () => void
    onClickUpdate: () => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    isEdit: boolean
    data?: any
}