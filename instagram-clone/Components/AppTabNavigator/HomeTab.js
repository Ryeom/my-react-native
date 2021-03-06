import React, { useEffect } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { useDispatch, useSelector, useReducer } from "react-redux"
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from "native-base"
import CardComponent from "../CardComponent" // 카드 컴포넌트 추가
import { connect } from "react-redux"
import { getFeeds, getFollowings } from "../../store/modules/home"
//import { bindActionCreators } from "redux"

const HomeTab =  () => {
  //{ feeds, followings }
  const { feeds, followings } = useSelector((state) => state.home) //hooks
  //const [ state, dispatch ] =useReducer()
  const  dispatch = useDispatch()
  console.log(getFeeds())
  console.log("asdfdsaf")
  dispatch(getFeeds())
  // useEffect(() => {
  //   // //여기서 로드 될때 값 가져오기
  //   const fn =  () => {
  //     try {
 
  //        dispatch(getFeeds())
  //       console.log("test");
  //        dispatch(getFollowings())
  //     } catch (e) {
  //       console.log("?????")
  //     }
  //   }
  //   fn()
  // }, [getFeeds, getFollowings])

  return (
    
    <Container style={style.container}>
      <Header>
        <Left>
          <Icon name="ios-camera" style={{ paddingLeft: 10 }} />
        </Left>
        <Body>
          <Text>Instagram</Text>
        </Body>
        <Right>
          <Icon name="ios-send" style={{ paddingRight: 10 }} />
        </Right>
      </Header>
      <Content>
        {/* 여기부터 스토리 헤더 시작 */}
        <View style={{ height: 100 }}>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 7 }}>
            <Text style={{ fontWeight: "bold" }}>Stories</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="md-play" style={{ fontSize: 14 }}></Icon>
              <Text style={{ fontWeight: "bold" }}> Watch All</Text>
            </View>
          </View>

          <View style={{ flex: 3 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingStart: 5,
                paddingEnd: 5,
              }}
            >
              {followings.map((following) => (
                <Thumbnail style={{ marginHorizontal: 5, borderColor: "pink", borderWidth: 2 }} source={{ uri: `https://steemitimages.com/u/${following}/avatar` }} />
              ))}
            
            </ScrollView>
          </View>
        </View>
        {/* 여기까지 스토리 헤더 끝 */}

        {feeds.map((feed) => (
          <CardComponent data={feed} key={feed.url} />
        ))}
      </Content>
    </Container>
  )
}
HomeTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{ color: tintColor }} />,
  
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
})

export default HomeTab

// export default connect(
//   (state) => ({
//     feeds: state.home.feeds,
//     followings: state.home.followings,
//   }),
//   { getFeeds, getFollowings },
// )(HomeTab)
