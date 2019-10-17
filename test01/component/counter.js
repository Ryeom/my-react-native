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
}//요기는 뷰단이야
//test01이라는 프로젝트는 그냥 테스트용인데 실행이되거든?
//이거 실행하면 그냥 버튼 3개뜨는데 r걍플마하는 간단한거야
//근데 이게 

export default Counter


//여부 여기에 설명하께
