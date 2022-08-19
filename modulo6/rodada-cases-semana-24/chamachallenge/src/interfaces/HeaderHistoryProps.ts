export interface HeaderHistoryProps{
    options: string[]
    search: string
    onChange: (event:any) => void
    deleteHistory: () => void
    goBack: () => void
}