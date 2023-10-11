// import Image from 'next/image'
// import styles from './page.module.css'

import { BasicMenu } from "@/components/select-menu/basic-menu";
// import { CinematicMenu } from "@/components/select-menu/cinematic-menu";

export default function MainMenu() {
    return (
        <BasicMenu title="Budget Planner" options={[
            {text: "Budget Planner", action: "/budget-planning"},
            {text: "Transactions", action: "/transactions"},
            {text: "Recurring Transactions", action: "/recurring-transactions"},
            {text: "Spending Tracker", action: "/spending-tracker"}
        ]}/>
    )
}