import './sectionTile.scss'

interface SectionTitleProps{
    text: string
}

export function SectionTile({text} : SectionTitleProps){
    return(
        <h1 className="sectionTile">{text}</h1>
    )
}