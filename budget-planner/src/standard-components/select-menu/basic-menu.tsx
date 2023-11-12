import Link from 'next/link'
import {Menu, MenuFunction, MenuOption, MenuProps} from './menu'

const BasicMenuOption: React.FunctionComponent<MenuOption> = (props: MenuOption) => {
    const buttonStyle: React.CSSProperties = {fontSize: "2.5vh", margin: "1vh", marginLeft:"0", padding: "1vh", backgroundColor: "#181818"}
    if(typeof(props.action) == 'string') return <div style={buttonStyle}><Link href={props.action}>{props.text}</Link></div>
    return <p style={buttonStyle}>{props.text}</p> 
}

export const BasicMenu: MenuFunction = (props:MenuProps) => (
    <div style={{padding:"3vh", height:"100vh"}}>
        <h1 style={{padding: "2vh", paddingLeft:"0", fontSize: "5vh"}}>{props.title || ""}</h1>
        <div style={{ height:"90%", display: "flex-container", alignItems: "center"}}>
            <div style={{width:"fit-content"}}>
                {props.options.map((option: MenuOption, i: number) => <BasicMenuOption key={i} text={option.text} action={option.action} />)}
            </div>
        </div>
    </div>
)