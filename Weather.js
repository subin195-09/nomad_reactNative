import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const weatherOptions = {
	Thunderstorm: {
		iconName:"thunderstorm-outline",
		color: ["#00C6FB", "#005BEA"],
		title: "Thunderstorm in the house",
    	subtitle: "Actually, outside of the house"
	},
	Rain: {
		iconName:"rainy-outline",
		color: ["#8360c3", "#2ebf91"],
		title: "Raining like a MF",
    	subtitle: "For more info look outside"
	},
	Snow: {
		iconName:"snow",
		color: ["#4CA1AF", "#C4E0E5", ],
		title: "Cold as balls",
    	subtitle: "Do you want to build a snowman? Fuck no."
	},
	Clear: {
		iconName: "md-sunny-outline",
		color: ["#C9FFBF", "#FFAFBD"],
		title: "Sunny as fuck",
    	subtitle: "Go get your ass burnt"
	},
	Clouds: {
		iconName: "cloude",
		color: ["#F8CDDA", "#1D2B64"],
		title: "Clouds",
    	subtitle: "I know, fucking boring"
	},
	Haze: {
		iconName: "md-partly-sunny-outline",
		color: ["#b7bec9", "#c9d6df"],
		title: "Haze",
    	subtitle: "Just don't go outside."
	}
};

export default function Weather({temp, condition}) {
	return (
		<LinearGradient
			colors={weatherOptions[condition].color}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<Ionicons name={weatherOptions[condition].iconName} size={96} color="white" />
				<Text style={styles.temp}>{temp}°</Text>
			</View>
			<View style={{ ...styles.halfContainer, ...styles.textContainer }}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Thunderstorm",
		"Rain",
		"Snow",
		"Clear",
		"Clouds",
		"Haze"
	]).isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	temp: {
		fontSize: 42,
		color: "white"
	},
	halfContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		fontSize: 44,
		fontWeight: "300",
		marginBottom: 10,
		color: "white"
	},
	subtitle: {
		fontWeight: "600",
		fontSize: 24,
		color: "white"
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: "flex-start"
	}
})
