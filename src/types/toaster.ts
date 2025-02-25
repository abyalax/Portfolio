export type ToasterType = {
    toaster?: {
        variant?: string
        message?: string
    },
    setToaster?: React.Dispatch<React.SetStateAction<object>>
}

export type VariantToaster = {
    [key: string]: {
        icon: React.ReactNode
    }
}