import React, { useReducer } from "react"
import { useDispatch, useSelector } from "react-redux"
import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import { setPlus, setMinus } from "../store/modules/counter"
const Counter = () => {
  //console.log(counter)
  const num = useSelector((state) => state.counter.num)
  const dispatch = useDispatch()
  //const [state, dispatch] = useState(0)
  //const [state, dispatch] = useReducer(counter, { num: 0 })
  //const { num } = state
  //{num}
  return (
    <View>
      <Text h1>수짜 {num}</Text>
      <Button
        title="plus"
        onPress={() => {
          console.log(`ㅍㅍ`)
          dispatch(setPlus())
        }}
      />
      <Button
        title="Minus"
        onPress={() => {
          console.log(`ㅁㅁ`)
          dispatch(setMinus())
        }}
      />
    </View>
  )
} 

export default Counter

