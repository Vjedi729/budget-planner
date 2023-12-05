import Link from 'next/link'
import {Menu, MenuFunction, MenuOption, MenuProps} from './menu'

const CinematicMenuOption: React.FunctionComponent<MenuOption> = (props: MenuOption) => {
    const buttonStyle: React.CSSProperties = {fontSize: "1.5vh", padding: "2vh", paddingLeft:"0", background:"green"}
    if(typeof(props.action) == 'string') return <div style={buttonStyle}><Link href={props.action}>{props.text}</Link></div>
    return <p style={buttonStyle}>{props.text}</p> 
}

// TODO: Trying to make the options float about 2/3 of the way down the screen. Mouseover effects would able be good.
export const CinematicMenu: MenuFunction = (props:MenuProps) => (
    <div style={{padding:"3vh", height:"100vh", background:"red"}}>
        <h1 style={{padding: "2vh", paddingLeft:"0", fontSize: "5vh", background: "orange"}}>{props.title || ""}</h1>
        <div style={{ height:"90%", display: "flex-container", alignItems: "center", background: "yellow"}}>
            <div>
                {props.options.map((option: MenuOption, i: number) => <CinematicMenuOption key={i} text={option.text} action={option.action} />)}
            </div>
        </div>
    </div>
)