import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {BarChart, Grid, AreaChart,LineChart,PieChart} from 'react-native-svg-charts';
import WrapperContainer from '../../Component/WrapperContainer';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import * as shape from 'd3-shape';
import StatusBar from '../../Component/StatusBar';
import { connect } from 'react-redux';
import commonStyles from '../../styles/commonStyles';
import styles from './styles'
 class Charts extends Component {
constructor(props){
    super(props);
}


  render() {
      const {themeColor}=this.props
    const fill = colors.textBlue;
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
     
      85,
      
      0,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
 
    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return (
      <View style={{flex:1}}>
          <StatusBar />
        
          <View style={styles.navSignup}>
          <Text style={{
    ...commonStyles.mediumFont20,color:themeColor}}>Charts</Text>
        </View>

       <ScrollView >
       <Text style={styles.title}>BAR GRAPH</Text>
        <BarChart
          style={styles.bargraph}
          data={data}
          svg={{fill}}
          contentInset={{top: 30, bottom: 30}}>
          <Grid />
        </BarChart>
        <Text style={styles.title}>AREA CHART</Text>
        <AreaChart
          style={styles.bargraph}
          data={data}
          contentInset={{top: 30, bottom: 30}}
          curve={shape.curveNatural}
          svg={{fill}}>
          <Grid />
        </AreaChart>
        <Text style={styles.title}>LINE CHART</Text>
        <LineChart
                style={styles.bargraph}
                data={data}
                svg={{ stroke: colors.textBlue }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </LineChart>
            <Text style={styles.title}>PIE CHART</Text>
            <PieChart style={styles.bargraph} data={pieData} />
       </ScrollView>
     
      </View>
    );
  }
}



  
const mapStateToProps = state => {
  return {
    themeColor: state.themeReducer.themeColor,
  };
};
export default connect(mapStateToProps)(Charts);