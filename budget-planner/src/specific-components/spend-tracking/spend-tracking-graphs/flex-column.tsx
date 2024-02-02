export const FlexColumn: React.FC<{title?: string, grow?: number, children?: React.ReactElement | React.ReactElement[]}> = ({title, grow = 1, children}) => {
    return <div style={{flexGrow: grow, alignContent:'center'}}>
        {title != undefined ? <h2 style={{width:'100%', textAlign:'center', marginTop:'1em', marginBottom:'1em'}}>{title}</h2> : <></>}
        {children}
    </div>
}