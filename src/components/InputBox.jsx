function InputBox(
    label,
    amount,
    setAmount,
    currency,
    setCurrency,
    currencyList = [],
    amountDisabled = false,
    currencyDisabled = false,

){
    return(
        <>
        <div>
            <div>
                <label htmlFor="">
                    {label}
                </label>
                <input type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount && setAmount(e.target.value)}
                    disabled = {amountDisabled} 
                />
            </div>
            <div>
                <select 
                    value={currency}
                    onChange={(e) => {setCurrency && setCurrency(e.target.value)}}
                    disabled={currencyDisabled}
                >
                    {
                        currencyList.map((currency) => {
                            return <option key={currency} value={currency}>{currency}</option>
                        })
                    }
                </select>
            </div>
        </div>
        </>
    )
}

export default InputBox