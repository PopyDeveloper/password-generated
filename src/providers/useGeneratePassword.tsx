import { Dispatch, FC, ReactNode, createContext, useEffect, useState } from "react"
import { LETTERS, NUMBERS, SPECIAL } from "utils/contants"

interface GeneratePasswordData {
  sizePassword: number
  password: string
  hasLetters: boolean
  hasNumbers: boolean
  hasSpecial: boolean
  updateMyList: boolean
  setSizePassword: Dispatch<number>
  setPassword: Dispatch<string>
  generateString: () => void
  updateList: () => void
}


const initial = {
  sizePassword: 8,
  password: '',
  hasLetters: true,
  hasNumbers: true,
  hasSpecial: true,
  updateMyList: false,
  setSizePassword: () => undefined,
  setPassword: () => undefined,
  generateString: () => undefined,
  updateList: () => undefined
}
const GeneratePasswordContext = createContext<GeneratePasswordData>(initial)

export const GeneratePasswordProvider = ({children}: {children: any}) => {
  const [password, setPassword] = useState<string>('')
  const [sizePassword, setSizePassword] = useState<number>(8)
  const [hasLetters, setHasLetters] = useState<boolean>(true)
  const [hasNumbers, setHasNumbers] = useState<boolean>(true)
  const [hasSpecial, setHasSpecial] = useState<boolean>(true)
  const [updateMyList, setUpdateMyList] = useState<boolean>(false)

  const getPossibilitiesString = () => {
    let fullString = ''

    if(hasLetters) fullString = `${fullString}${LETTERS}`
    if(hasNumbers) fullString = `${fullString}${NUMBERS}`
    if(hasSpecial) fullString = `${fullString}${SPECIAL}`

    return fullString.length < 1 ? NUMBERS : fullString
  }

  const generateString = () => {
    const myString = getPossibilitiesString()
    let newPassword = ''
    setPassword('')

    for (let char = 0; char < sizePassword; char++) {
      const index = Math.floor(Math.random() * myString.length)
      newPassword = `${newPassword}${myString[index]}`    
    }
    
    validatePasswordGenerated(newPassword)
  }

  const updateList = () => {
    setUpdateMyList(!updateList)
  }

  const validatePasswordGenerated = (password: string) => {
    const reg = new RegExp(/^[a-zA-Z0-9!@#$%^&*()_+-={}|;:'",.<>?]+$/);

    const res = reg.test(password)
    if(!res) {
      generateString()
    } else {
      setPassword(password)
    }
  }

  return (
    <GeneratePasswordContext.Provider 
      value={{
        password,
        hasLetters,
        hasNumbers, 
        hasSpecial,
        sizePassword,
        updateMyList,
        setSizePassword,
        setPassword,
        generateString,
        updateList
      }}
    >
      {children}
    </GeneratePasswordContext.Provider>
  )
}


export default GeneratePasswordContext