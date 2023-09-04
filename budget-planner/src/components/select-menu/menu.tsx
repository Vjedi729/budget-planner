import React from 'react'

export interface MenuOption {
    text: string,
    action: string | (() => void) | Array<MenuOption>
} 
export interface MenuProps {
    title?: string,
    options: Array<MenuOption>
}

export class Menu<State = undefined> extends React.Component<MenuProps, State> {}