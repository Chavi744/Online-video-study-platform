import React, { useState } from 'react';

const PaymentScreen = () => {
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [branchNumber, setBranchNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // כאן להוסיף לוגיקה לשליחת הנתונים לשרת
        console.log('נתוני תשלום נשלחו:', { paymentMethod, cardNumber, expiryDate, cvv, bankName, accountNumber, branchNumber });
    };

    return (
        <div className="payment-screen">
            <h2>מסך תשלום</h2>
            <form onSubmit={handleSubmit}>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            value="credit"
                            checked={paymentMethod === 'credit'}
                            onChange={() => setPaymentMethod('credit')}
                        />
                        כרטיס אשראי
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="transfer"
                            checked={paymentMethod === 'transfer'}
                            onChange={() => setPaymentMethod('transfer')}
                        />
                        העברה בנקאית
                    </label>
                </div>

                {paymentMethod === 'credit' ? (
                    <>
                        <input
                            type="text"
                            placeholder="מספר כרטיס"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="תאריך תפוגה (MM/YY)"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="CVV"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="שם הבנק"
                            value={bankName}
                            onChange={(e) => setBankName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="מספר חשבון"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="מספר סניף"
                            value={branchNumber}
                            onChange={(e) => setBranchNumber(e.target.value)}
                        />
                    </>
                )}

                <button type="submit">שלם</button>
            </form>
        </div>
    );
};

export default PaymentScreen;