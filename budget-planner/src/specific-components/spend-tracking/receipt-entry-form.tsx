import { TaxCharged, LineItem, Receipt } from "@/data/receipt";
import { remove } from "lodash";
import React, { useContext, useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";

interface FormProps {
    onSubmit: (data: ReceiptFormData) => void
}

type taxDict = {taxName: string, taxAmount: number, taxPercent?: number}
type lineItemDict = {lineName: string, cost: number, taxCode?: string, quantity: number, discount?: number}

export interface ReceiptFormData {
    time: Date
    amount: number
    tax: taxDict[]
    storeName: string
    paymentMethod: string
    lineItems: lineItemDict[]
    itemCount?: number
    address: string
}

let renderCount = 0

export function ReceiptEntryForm() {
    const { control, register, handleSubmit, getValues, watch, reset } = useForm<ReceiptFormData>({
         defaultValues: {
             tax: [{taxName: '', taxAmount: 0, taxPercent: 0}],
             lineItems: [{lineName: '', cost: 0, taxCode: '', quantity: 1, discount: 0}]
            }
        })

    const { fields: taxFields, append: taxAppend, remove: taxRemove, update: taxUpdate } = useFieldArray<ReceiptFormData, 'tax', 'id'>({
        control,
        name: "tax"
    })

    const { fields: itemFields, append: itemAppend, remove: itemRemove, update: itemUpdate } = useFieldArray<ReceiptFormData, 'lineItems', 'id'>({
        control,
        name: 'lineItems'
    })

    const tax = watch('tax')

    const lineItems = watch('lineItems')

    renderCount++

    const onSubmit: SubmitHandler<ReceiptFormData> = (data) => {
        const taxArray = taxFields.map(x =>
            new TaxCharged(x.taxName, x.taxAmount, x.taxPercent)
        )

        const lineArray = itemFields.map(x =>
            new LineItem(x.cost, x.lineName, x.taxCode, x.quantity, x.discount)
        )

        const receipt = new Receipt(
            getValues("time"), 
            getValues("amount"),
            taxArray,
            getValues("storeName"),
            getValues("paymentMethod"),
            lineArray,
            getValues("address")
        )

        console.log(receipt)
    }

    //TODO: Figure out how to update first item in tax and lineItem arrays

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Receipt Data:</h2>
            <label>
                Vendor Name:
                    <input type='string' {...register("storeName", {required: true})} />
            </label>
            <br/>
            <label>
                Vendor Address:
                    <input type='string' {...register("address", {required: true})} />
            </label>
            <br/>
            <label>
                Time Purchased:
                <input type='datetime-local' {...register("time", {required: true})} />
            </label>
            <br/>
            <label>
                Amount Spent:
                <input {...register("amount", {required: true, valueAsNumber: true})} />
            </label>
            <br/>
            <br/>
            <h3>Taxes:</h3>
                    {taxFields.map((field, index) => (
                            <li key={field.id}>
                            <label>
                                Tax Name:
                                <input type='string' {...register(`tax.${index}.taxName` as const, {required: true})} /> 
                            </label>
                            <label>
                                Tax Amount:
                                <input {...register(`tax.${index}.taxAmount` as const, {required: true, valueAsNumber: true})} />
                            </label>
                            <button type='button' onClick={() => taxRemove(index)}>
                                Remove Tax
                            </button>
                            </li>
                    ))}
                <button type='button' onClick={() => taxAppend({taxName: '', taxAmount: 0, taxPercent: 0})}>
                Add Another Tax
                </button>
            <br/><br/>
            <h3>Line Items:</h3>
                {itemFields.map((field, index) => (
                            <li key={field.id}>
                            <label>
                                Item Cost:
                                <input {...register(`lineItems.${index}.cost` as const, {required: true, valueAsNumber: true})} /> 
                            </label>
                            <label>
                                Line Name:
                                <input type='string' {...register(`lineItems.${index}.lineName` as const, {required: true})} />
                            </label>
                            <label>
                                Quantity:
                                <input {...register(`lineItems.${index}.quantity` as const, {valueAsNumber: true})} />
                            </label>
                            <button type='button' onClick={() => itemRemove(index)}>
                                Remove Item
                            </button>
                            </li>
                    ))}
                <button type='button' onClick={() => itemAppend({cost: 0, lineName: '', taxCode: '', quantity: 1, discount: 0})}>
                Add Another Item
                </button>
            <br/>
        
            <button type='submit'>Create Receipt</button>
        </form>
    )    
}


