'use client'

import React, { useState } from 'react'
import { ExternalTransaction } from '@/data/transactions'

const TransactionFileUploader = () => {
    const [transactionFile, setTransactionFile] = useState<File | null>(null)
    const [fileStatus, setFileStatus] = useState< 'initial' | 'uploading' | 'success' | 'fail'>('initial')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFileStatus('initial')
            setTransactionFile(e.target.files[0])
        }
    }

    const handleUpload = async() => {
        if (transactionFile) {
            setFileStatus('uploading')
            const parsedTransactions = JSON.parse(await transactionFile.text())
            const transactionArray = parsedTransactions.map((x: Record<string, any>) => ExternalTransaction.fromJson(x))
            console.log(transactionArray)
            setFileStatus('success')
        }
        else {setFileStatus('fail')}
    }
    
    return (
        <>
            <div>
                <label htmlFor='file' className='sr-only'>
                    Choose a transaction file
                </label>
                <input id='input_json' type='file' onChange={handleFileChange} />
            </div>
            {transactionFile && (
                <section>
                    File Details:
                    <ul>
                        <li>Name: {transactionFile.name}</li>
                        <li>Type: {transactionFile.type}</li>
                        <li>Size: {transactionFile.size}</li>
                    </ul>
                </section>
            )}

            {transactionFile && <button onClick={handleUpload}>
                Upload a Transaction File
                </button>}
            
            <Result status = {fileStatus}/>
        </>
    )
}

const Result = ({ status }: { status: string }) => {
    if (status === "success") {
      return <p>✅ File uploaded successfully!</p>;
    } else if (status === "fail") {
      return <p>❌ File upload failed!</p>;
    } else if (status === "uploading") {
      return <p>⏳ Uploading selected file...</p>;
    } else {
      return null;
    }
}

export default TransactionFileUploader