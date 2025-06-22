import {useState} from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import InputBox from "./components/InputBox"


function App() {
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState()
  const [fromCurrency, setFromcurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")

  const currencyinfo = useCurrencyInfo(fromCurrency)
  let currencyList = Object.keys(currencyinfo)

  function calculateToCurrency(){
    setTo(from * currencyinfo[fromCurrency])
  }
  return (
    <>
      <div>
        <div>
          <form onSubmit={(e) =>{
            e.preventDefault()
            calculateToCurrency()
          }}>

            <div>
              <InputBox
              label = "From"
              amount = {from}
              setAmount = {(amount) => {setFrom(amount)}}
              currency = {fromCurrency}
              setCurrency = {(currency) => {setFromcurrency(currency)}}
              currencyList = {currencyList}
              amountDisabled
              currencyDisabled
              ></InputBox>
            </div>

            <div>
            <InputBox
              label = "To"
              amount = {to}
              setAmount = {(amount) => {setTo(amount)}}
              currency = {toCurrency}
              setCurrency = {(currency) => {setToCurrency(currency)}}
              currencyList = {currencyList}
              amountDisabled = {false}
              currencyDisabled = {false}
              ></InputBox>
            </div>

            <div>
              <button type="submit">Convert</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
