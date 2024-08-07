'use client'
import React from "react";
import { ReceiptFormData, ReceiptEntryForm } from "@/specific-components/spend-tracking/receipt-entry-form";


function FormPage() {
    function handleSubmit(formData: ReceiptFormData) {
      console.log(formData);
    }
  
    return (
      <div>
        <ReceiptEntryForm/>
      </div>
    );
  }
  
  export default FormPage;  